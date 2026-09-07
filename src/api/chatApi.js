// Client HTTP du chatbot — appelle uniquement POST /chatbot. Toute la logique
// (langue, mémoire conversationnelle, retrieval, choix du provider LLM) vit
// côté backend : ce fichier ne fait que transmettre la question et un
// historique court, jamais de logique métier.

// Fallback = URL de production actuelle, au cas où VITE_CHATBOT_API_URL n'est
// pas définie. Distincte de CHATBOT_API_URL (utilisée uniquement par
// scripts/sync-chatbot.js, jamais dans le navigateur — voir .env.example).
const DEFAULT_API_URL = "https://chatbot-portfolio-4oi5.onrender.com";
const API_URL = (import.meta.env.VITE_CHATBOT_API_URL || DEFAULT_API_URL).replace(/\/+$/, "");

// Aligné sur la fenêtre mémoire du backend (app/rag/memory.py::MAX_TURNS,
// 3 tours = 6 messages max) : envoyer plus serait inutile.
const MAX_HISTORY_MESSAGES = 6;

/**
 * Convertit l'historique local ({ sender: "user"|"assistant", text }) au
 * format attendu par le backend ({ role: "user"|"assistant", content }),
 * en ne gardant que les derniers échanges pertinents.
 */
export function toBackendConversation(messages) {
  return messages.slice(-MAX_HISTORY_MESSAGES).map((m) => ({
    role: m.sender === "user" ? "user" : "assistant",
    content: m.text,
  }));
}

/**
 * Envoie une question au chatbot. `conversation` doit être construit avec
 * toBackendConversation() à partir de l'historique AVANT le nouveau message
 * utilisateur. Ne traduit jamais la question, ne force jamais la langue de
 * réponse : le backend détecte lui-même la langue de `message`.
 */
export async function sendMessageToAPI(message, conversation = []) {
  const response = await fetch(`${API_URL}/chatbot`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: message, conversation }),
  });

  if (!response.ok) {
    // Ne jamais transmettre le detail technique du backend : l'appelant
    // affiche un message générique déjà localisé.
    throw new Error(`chatbot_api_error_${response.status}`);
  }

  const data = await response.json();
  return data.response;
}
