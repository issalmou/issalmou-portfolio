import { describe, it, expect, vi, afterEach } from "vitest";
import { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatWindow from "./ChatWindow";
import { sendMessageToAPI } from "../api/chatApi";

// La logique métier (RAG, mémoire, scope, langue...) vit exclusivement côté
// backend (voir src/api/chatApi.js) : ces tests vérifient uniquement le
// comportement de l'INTERFACE (affichage, état de chargement, erreurs,
// liens, isolation entre instances), jamais une logique que le frontend ne
// doit justement pas recréer.
vi.mock("../api/chatApi", () => ({
  sendMessageToAPI: vi.fn(),
  toBackendConversation: (messages) =>
    messages.slice(-6).map((m) => ({ role: m.sender === "user" ? "user" : "assistant", content: m.text })),
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

// Enveloppe avec un vrai état React local, comme App.jsx le fait réellement
// (chatMessages/setChatMessages), et un vrai Router (ChatWindow utilise
// useNavigate/<Link> pour les liens internes, voir src/utils/chatMarkdown.jsx).
function StatefulChatWindow({ language = "en", initialMessages = [], initialEntries = ["/"] }) {
  const [messages, setMessages] = useState(initialMessages);
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <ChatWindow onClose={() => {}} language={language} messages={messages} setMessages={setMessages} />
    </MemoryRouter>
  );
}

const sendButton = () => screen.getByRole("button", { name: "Send message" });

describe("ChatWindow — rendering", () => {
  it("renders the input, send button, and existing messages", () => {
    render(<StatefulChatWindow initialMessages={[{ sender: "assistant", text: "Hi there" }]} />);
    expect(screen.getByText("Hi there")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Type your message...")).toBeInTheDocument();
    expect(sendButton()).toBeInTheDocument();
  });

  it("exposes an accessible close button", () => {
    render(<StatefulChatWindow />);
    expect(screen.getByRole("button", { name: "Close chat" })).toBeInTheDocument();
  });

  it("exposes the message list as an accessible live region", () => {
    render(<StatefulChatWindow initialMessages={[{ sender: "assistant", text: "Hi there" }]} />);
    const log = screen.getByRole("log");
    expect(log).toHaveAttribute("aria-live", "polite");
  });
});

describe("ChatWindow — sending a question", () => {
  it("displays the backend's response after sending a question", async () => {
    sendMessageToAPI.mockResolvedValueOnce("The five projects are...");
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    const input = screen.getByPlaceholderText("Type your message...");
    await user.type(input, "What are all his projects?");
    await user.click(sendButton());

    expect(screen.getByText("What are all his projects?")).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText("The five projects are...")).toBeInTheDocument());
  });

  it("displays the backend response verbatim, including out-of-scope/fallback replies", async () => {
    // Le frontend ne doit JAMAIS remplacer ou reformuler la réponse backend.
    sendMessageToAPI.mockResolvedValueOnce(
      "I'm here to help with information about Issalmou Adaaiche's portfolio — I can't help with that topic."
    );
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    await user.type(screen.getByPlaceholderText("Type your message..."), "What's the weather today?");
    await user.click(sendButton());

    await waitFor(() =>
      expect(
        screen.getByText("I'm here to help with information about Issalmou Adaaiche's portfolio — I can't help with that topic.")
      ).toBeInTheDocument()
    );
  });

  it("refocuses the input after a response arrives, so the user can keep typing", async () => {
    sendMessageToAPI.mockResolvedValueOnce("ok");
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    const input = screen.getByPlaceholderText("Type your message...");
    await user.type(input, "Hello");
    await user.click(sendButton());

    await waitFor(() => expect(input).toHaveFocus());
  });
});

describe("ChatWindow — loading state", () => {
  it("shows a localized loading indicator while waiting, and hides it once resolved", async () => {
    let resolvePromise;
    sendMessageToAPI.mockReturnValueOnce(new Promise((resolve) => { resolvePromise = resolve; }));
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    await user.type(screen.getByPlaceholderText("Type your message..."), "Hello");
    await user.click(sendButton());

    expect(screen.getByText("Assistant is thinking...")).toBeInTheDocument();
    resolvePromise("Done");
    await waitFor(() => expect(screen.queryByText("Assistant is thinking...")).not.toBeInTheDocument());
  });

  it("prevents double submission while a request is in flight", async () => {
    let resolvePromise;
    sendMessageToAPI.mockReturnValueOnce(new Promise((resolve) => { resolvePromise = resolve; }));
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    await user.type(screen.getByPlaceholderText("Type your message..."), "Hello");
    const button = sendButton();
    await user.click(button);
    expect(button).toBeDisabled();

    await user.click(button); // bouton désactivé : ne doit rien déclencher de plus
    expect(sendMessageToAPI).toHaveBeenCalledTimes(1);
    resolvePromise("done");
  });
});

describe("ChatWindow — error handling", () => {
  it("shows a clean localized error on failure, never the internal error detail", async () => {
    sendMessageToAPI.mockRejectedValueOnce(new Error("chatbot_api_error_503"));
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    await user.type(screen.getByPlaceholderText("Type your message..."), "Hello");
    await user.click(sendButton());

    await waitFor(() => expect(screen.getByText("Server connection error.")).toBeInTheDocument());
    expect(screen.queryByText(/503/)).not.toBeInTheDocument();
    expect(screen.queryByText(/chatbot_api_error/)).not.toBeInTheDocument();
  });
});

describe("ChatWindow — multi-turn conversation (memory)", () => {
  it("sends the accumulated conversation on the follow-up question", async () => {
    sendMessageToAPI.mockResolvedValueOnce("AGEP uses Laravel and MySQL.");
    sendMessageToAPI.mockResolvedValueOnce("The technologies are Laravel and MySQL.");
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    const input = screen.getByPlaceholderText("Type your message...");
    await user.type(input, "Tell me about AGEP.");
    await user.click(sendButton());
    await waitFor(() => expect(screen.getByText("AGEP uses Laravel and MySQL.")).toBeInTheDocument());

    await user.type(input, "What technologies does it use?");
    await user.click(sendButton());
    await waitFor(() => expect(screen.getByText("The technologies are Laravel and MySQL.")).toBeInTheDocument());

    const secondCallConversation = sendMessageToAPI.mock.calls[1][1];
    expect(secondCallConversation).toEqual([
      { role: "user", content: "Tell me about AGEP." },
      { role: "assistant", content: "AGEP uses Laravel and MySQL." },
    ]);
  });
});

describe("ChatWindow — language and RTL", () => {
  it("renders Arabic text correctly with dir=auto on the message container", () => {
    render(<StatefulChatWindow language="ar" initialMessages={[{ sender: "assistant", text: "مرحباً، كيف يمكنني مساعدتك؟" }]} />);
    const message = screen.getByText("مرحباً، كيف يمكنني مساعدتك؟");
    expect(message.closest('[dir="auto"]')).not.toBeNull();
  });

  it("does not translate or rewrite the question before sending it", async () => {
    sendMessageToAPI.mockResolvedValueOnce("Voici tous ses projets...");
    const user = userEvent.setup();
    // Interface en anglais, question posée en français : le frontend ne
    // doit rien traduire ni forcer une langue de réponse.
    render(<StatefulChatWindow language="en" />);

    await user.type(screen.getByPlaceholderText("Type your message..."), "Quels sont ses projets ?");
    await user.click(sendButton());

    expect(sendMessageToAPI.mock.calls[0][0]).toBe("Quels sont ses projets ?");
    await waitFor(() => expect(screen.getByText("Voici tous ses projets...")).toBeInTheDocument());
  });
});

describe("ChatWindow — Enter / Shift+Enter", () => {
  it("submits on Enter and inserts a newline on Shift+Enter", async () => {
    sendMessageToAPI.mockResolvedValueOnce("ok");
    render(<StatefulChatWindow />);
    const input = screen.getByPlaceholderText("Type your message...");

    await userEvent.type(input, "Hello{Shift>}{Enter}{/Shift}world");
    expect(input.value).toBe("Hello\nworld");
    expect(sendMessageToAPI).not.toHaveBeenCalled();

    await userEvent.type(input, "{Enter}");
    await waitFor(() => expect(sendMessageToAPI).toHaveBeenCalledTimes(1));
  });
});

describe("ChatWindow — links in responses", () => {
  it("renders an external URL as a link that opens safely in a new tab", async () => {
    sendMessageToAPI.mockResolvedValueOnce("Live demo: https://wiredwave.netlify.app/");
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    await user.type(screen.getByPlaceholderText("Type your message..."), "Show me WiredWave");
    await user.click(sendButton());

    const link = await screen.findByRole("link", { name: "https://wiredwave.netlify.app/" });
    expect(link).toHaveAttribute("href", "https://wiredwave.netlify.app/");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    expect(link).toHaveAttribute("rel", expect.stringContaining("noreferrer"));
  });

  it("renders a known real internal route as a navigable link with a localized label", async () => {
    sendMessageToAPI.mockResolvedValueOnce("You can find more details in the /projects section.");
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    await user.type(screen.getByPlaceholderText("Type your message..."), "What else has he built?");
    await user.click(sendButton());

    const link = await screen.findByRole("link", { name: "Projects" });
    expect(link).toHaveAttribute("href", "/projects");
  });

  it("normalizes a French singular/plural variant of a known route into a working link", async () => {
    // Le backend doit toujours renvoyer "/projects" exact, mais cette
    // normalisation est une défense en profondeur si le LLM dérape malgré
    // l'instruction (ex. "/projet" au singulier français).
    sendMessageToAPI.mockResolvedValueOnce("Le lien de la page projets est : /projet.");
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    await user.type(screen.getByPlaceholderText("Type your message..."), "Quel est le lien des projets ?");
    await user.click(sendButton());

    const link = await screen.findByRole("link", { name: "Projects" });
    expect(link).toHaveAttribute("href", "/projects");
  });

  it("renders a specific project detail route as a navigable link", async () => {
    sendMessageToAPI.mockResolvedValueOnce("You can find it at /project/agep.");
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    await user.type(screen.getByPlaceholderText("Type your message..."), "Link to the AGEP project page?");
    await user.click(sendButton());

    const link = await screen.findByRole("link");
    expect(link).toHaveAttribute("href", "/project/agep");
  });

  it("renders a markdown-style link using its label", async () => {
    sendMessageToAPI.mockResolvedValueOnce("Check the [live demo](https://issalmou.github.io/EstiCar/) here.");
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    await user.type(screen.getByPlaceholderText("Type your message..."), "Tell me about EstiCar");
    await user.click(sendButton());

    const link = await screen.findByRole("link", { name: "live demo" });
    expect(link).toHaveAttribute("href", "https://issalmou.github.io/EstiCar/");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("never turns an arbitrary, non-whitelisted path into a clickable link", async () => {
    // "/certifications" n'est PAS une route réelle du portfolio : même si un
    // texte de réponse la mentionnait, elle ne doit jamais devenir un lien.
    sendMessageToAPI.mockResolvedValueOnce("There is no /certifications section in this portfolio.");
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    await user.type(screen.getByPlaceholderText("Type your message..."), "Does he have certifications?");
    await user.click(sendButton());

    await waitFor(() => expect(screen.getByText(/There is no/)).toBeInTheDocument());
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("does not linkify ordinary text containing a slash (e.g. a date)", async () => {
    sendMessageToAPI.mockResolvedValueOnce("AGEP was completed in 07/2024.");
    const user = userEvent.setup();
    render(<StatefulChatWindow />);

    await user.type(screen.getByPlaceholderText("Type your message..."), "When was AGEP completed?");
    await user.click(sendButton());

    await waitFor(() => expect(screen.getByText(/07\/2024/)).toBeInTheDocument());
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});

describe("Chat state isolation between independent instances", () => {
  it("never shares conversation state between two separately-rendered chat widgets", async () => {
    sendMessageToAPI.mockResolvedValueOnce("Answer for A about AGEP.");
    const user = userEvent.setup();

    const { unmount } = render(<StatefulChatWindow />);
    await user.type(screen.getByPlaceholderText("Type your message..."), "Tell me about AGEP.");
    await user.click(sendButton());
    await waitFor(() => expect(screen.getByText("Answer for A about AGEP.")).toBeInTheDocument());
    unmount();

    // Une nouvelle instance ("un autre utilisateur"/un autre onglet) ne doit
    // voir AUCUNE trace de la conversation précédente : l'état est local à
    // React (props messages/setMessages), jamais une variable module-level
    // ou globale partagée entre instances.
    render(<StatefulChatWindow />);
    expect(screen.queryByText("Tell me about AGEP.")).not.toBeInTheDocument();
    expect(screen.queryByText("Answer for A about AGEP.")).not.toBeInTheDocument();
  });
});
