#!/usr/bin/env node
/**
 * Synchronise src/data/translations.js (source de vérité unique du contenu
 * du chatbot RAG) avec le backend, via POST /upload-content.
 *
 * Ne jamais faire ceci depuis le navigateur d'un visiteur : cette
 * synchronisation doit toujours être déclenchée depuis un poste de
 * développement ou un build/CI, jamais par le code client public.
 *
 * Variables d'environnement :
 *   CHATBOT_API_URL       URL du backend (défaut: http://localhost:8000)
 *   CONTENT_UPLOAD_TOKEN  Token d'upload (voir CONTENT_UPLOAD_TOKEN côté
 *                         backend). Jamais préfixé VITE_ : ne doit jamais
 *                         atterrir dans le bundle client.
 *
 * Usage : npm run sync-chatbot
 */

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

const TRANSLATIONS_PATH = path.resolve(process.cwd(), "src/data/translations.js");
const API_URL = (process.env.CHATBOT_API_URL || "http://localhost:8000").replace(/\/+$/, "");
const TOKEN = process.env.CONTENT_UPLOAD_TOKEN || "";

async function main() {
  console.log("Uploading translations.js...");

  let fileBuffer;
  try {
    fileBuffer = await readFile(TRANSLATIONS_PATH);
  } catch (err) {
    console.error(`Sync failed: cannot read ${TRANSLATIONS_PATH} (${err.message})`);
    process.exitCode = 1;
    return;
  }

  const hash = createHash("sha256").update(fileBuffer).digest("hex");
  console.log(`SHA-256: ${hash}`);

  const form = new FormData();
  form.append("file", new Blob([fileBuffer], { type: "application/javascript" }), "translations.js");

  const headers = {};
  if (TOKEN) {
    headers.Authorization = `Bearer ${TOKEN}`;
  } else {
    console.warn("Warning: CONTENT_UPLOAD_TOKEN is not set (ok only if the backend has none configured either).");
  }

  let response;
  try {
    response = await fetch(`${API_URL}/upload-content`, { method: "POST", body: form, headers });
  } catch (err) {
    console.error(`Sync failed: cannot reach ${API_URL} (${err.message})`);
    process.exitCode = 1;
    return;
  }

  let body = null;
  try {
    body = await response.json();
  } catch {
    // réponse non-JSON, gérée ci-dessous via response.ok
  }

  if (!response.ok) {
    const detail = body && body.detail ? body.detail : response.statusText;
    console.error(`Sync failed: HTTP ${response.status} - ${detail}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Status: ${body.status}`);
  if (body.status === "updated") {
    console.log(
      `Chunks: ${body.chunk_count} (new=${body.new_chunks}, updated=${body.updated_chunks}, ` +
        `unchanged=${body.unchanged_chunks}, deleted=${body.deleted_chunks})`
    );
  } else {
    console.log(`Chunks: ${body.chunk_count} (aucun changement)`);
  }
}

main();
