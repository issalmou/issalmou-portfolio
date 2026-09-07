import { describe, it, expect, vi, afterEach } from "vitest";

// Ne teste QUE la couche de transport (URL, payload, gestion d'erreur) —
// aucune logique métier (RAG, mémoire, scope...) n'existe côté frontend,
// c'est précisément ce que ces tests vérifient : le frontend transmet et
// affiche, il ne recalcule jamais rien.

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("toBackendConversation", () => {
  it("maps { sender, text } to { role, content }", async () => {
    const { toBackendConversation } = await import("./chatApi");
    const messages = [
      { sender: "user", text: "hi" },
      { sender: "assistant", text: "hello" },
    ];
    expect(toBackendConversation(messages)).toEqual([
      { role: "user", content: "hi" },
      { role: "assistant", content: "hello" },
    ]);
  });

  it("keeps only the last 6 messages (aligned with the backend memory window)", async () => {
    const { toBackendConversation } = await import("./chatApi");
    const messages = Array.from({ length: 10 }, (_, i) => ({ sender: "user", text: `msg${i}` }));
    const result = toBackendConversation(messages);
    expect(result).toHaveLength(6);
    expect(result[0].content).toBe("msg4");
    expect(result[5].content).toBe("msg9");
  });

  it("returns an empty array for an empty history", async () => {
    const { toBackendConversation } = await import("./chatApi");
    expect(toBackendConversation([])).toEqual([]);
  });
});

describe("sendMessageToAPI", () => {
  it("POSTs { query, conversation } to /chatbot and returns response.response", async () => {
    const { sendMessageToAPI } = await import("./chatApi");
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ response: "Hello back", lang: "en", metrics: {} }),
    });
    vi.stubGlobal("fetch", mockFetch);

    const conversation = [{ role: "user", content: "hi" }];
    const result = await sendMessageToAPI("Tell me more", conversation);

    expect(result).toBe("Hello back");
    expect(mockFetch).toHaveBeenCalledTimes(1);
    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toMatch(/\/chatbot$/);
    expect(JSON.parse(options.body)).toEqual({ query: "Tell me more", conversation });
  });

  it("defaults conversation to an empty array when omitted", async () => {
    const { sendMessageToAPI } = await import("./chatApi");
    const mockFetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ response: "ok" }) });
    vi.stubGlobal("fetch", mockFetch);

    await sendMessageToAPI("hi");
    expect(JSON.parse(mockFetch.mock.calls[0][1].body).conversation).toEqual([]);
  });

  it("never forwards the query untranslated but also never rewrites it", async () => {
    const { sendMessageToAPI } = await import("./chatApi");
    const mockFetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ response: "ok" }) });
    vi.stubGlobal("fetch", mockFetch);

    await sendMessageToAPI("Quels sont ses projets ?", []);
    expect(JSON.parse(mockFetch.mock.calls[0][1].body).query).toBe("Quels sont ses projets ?");
  });

  it("throws on a non-OK response without leaking the backend's internal detail", async () => {
    const { sendMessageToAPI } = await import("./chatApi");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 503,
        json: async () => ({ detail: "Tous les providers LLM sont indisponibles: internal trace xyz" }),
      })
    );

    let caught = null;
    try {
      await sendMessageToAPI("hello", []);
    } catch (err) {
      caught = err;
    }
    expect(caught).not.toBeNull();
    expect(caught.message).not.toMatch(/secret/i);
    expect(caught.message).not.toMatch(/providers LLM/i);
    expect(caught.message).not.toMatch(/trace/i);
  });

  it("propagates a network failure as a rejected promise (no crash, no silent swallow)", async () => {
    const { sendMessageToAPI } = await import("./chatApi");
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new TypeError("Failed to fetch")));
    await expect(sendMessageToAPI("hello", [])).rejects.toThrow();
  });
});

describe("VITE_CHATBOT_API_URL configuration", () => {
  it("falls back to the current production URL when unset", async () => {
    vi.resetModules();
    vi.stubEnv("VITE_CHATBOT_API_URL", "");
    const mockFetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ response: "ok" }) });
    vi.stubGlobal("fetch", mockFetch);

    const { sendMessageToAPI } = await import("./chatApi");
    await sendMessageToAPI("hi");
    expect(mockFetch.mock.calls[0][0]).toBe("https://chatbot-portfolio-4oi5.onrender.com/chatbot");
  });

  it("uses VITE_CHATBOT_API_URL when configured, trimming a trailing slash", async () => {
    vi.resetModules();
    vi.stubEnv("VITE_CHATBOT_API_URL", "https://new-backend.example.com/");
    const mockFetch = vi.fn().mockResolvedValue({ ok: true, json: async () => ({ response: "ok" }) });
    vi.stubGlobal("fetch", mockFetch);

    const { sendMessageToAPI } = await import("./chatApi");
    await sendMessageToAPI("hi");
    expect(mockFetch.mock.calls[0][0]).toBe("https://new-backend.example.com/chatbot");
  });

  it("never contains CONTENT_UPLOAD_TOKEN or any secret-looking value", async () => {
    const mod = await import("./chatApi");
    const source = mod.toBackendConversation.toString() + mod.sendMessageToAPI.toString();
    expect(source).not.toMatch(/CONTENT_UPLOAD_TOKEN/i);
    expect(source).not.toMatch(/Authorization/i);
  });
});
