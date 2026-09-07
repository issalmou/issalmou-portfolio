import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import translations from "../data/translations";
import { IoClose } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { sendMessageToAPI, toBackendConversation } from "../api/chatApi";
import { formatMarkdown } from "../utils/chatMarkdown";

const ChatWindow = ({ onClose, language, messages, setMessages }) => {
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatRef = useRef(null);
    const inputRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = window.innerWidth < 768;
    const texts = translations[language];
    const navigate = useNavigate();
    // Contexte partagé transmis au rendu Markdown : libellés de routes
    // localisés + navigation SPA pour les liens internes (voir
    // src/utils/chatMarkdown.jsx).
    const markdownCtx = { texts, navigate };

    useEffect(() => {
        if (language === "ar") {
            document.body.classList.add("rtl");
            document.body.dir = "rtl";
        } else {
            document.body.classList.remove("rtl");
            document.body.dir = "ltr";
        }
    }, [language]);

    // Redirection mobile
    useEffect(() => {
        if (isMobile) {
            window.location.href = "/chat";
        }
        else {
            setIsVisible(true)
        }
    }, []);

    // Scroll automatique
    useEffect(() => {
        chatRef.current?.scrollTo({
            top: chatRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages, isTyping]);

    useEffect(() => {
        if (isVisible && messages.length > 0) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [isVisible]);


    // Gestion hauteur dynamique textarea
    const handleInputChange = (e) => {
        setInput(e.target.value);
        const textarea = inputRef.current;
        textarea.style.height = "auto";
        textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";
    };

    const sendMessage = async () => {
        if (!input.trim() || isTyping) return;

        const userMessage = input;
        // Construit l'historique AVANT d'ajouter le nouveau message (le
        // backend attend la conversation précédente, pas la question en cours).
        const conversation = toBackendConversation(messages);
        setMessages(prev => [...prev, { sender: "user", text: userMessage }]);
        setInput("");
        inputRef.current.style.height = "auto";
        setIsTyping(true);

        try {
            const res = await sendMessageToAPI(userMessage, conversation);
            const assistantReply = res || texts.chatbot.assistantError;
            setMessages((prev) => [...prev, { sender: "assistant", text: assistantReply }]);
        } catch {
            setMessages((prev) => [...prev, { sender: "assistant", text: texts.chatbot.assistantConnectionError }]);
        }

        setIsTyping(false);
        // Rend la main au clavier immédiatement : l'utilisateur peut
        // enchaîner sans re-cliquer dans le champ de saisie.
        inputRef.current?.focus();
    };

    return (
        <div dir="ltr" style={{
            ...styles.container,
            display: isVisible ? "flex" : "none"
        }}>
            {/* HEADER */}
            <div style={styles.header}>
                <div style={styles.headerLeft}>
                    <FaRobot size={22} color="var(--accent-color)" />
                    <div>
                        <div style={styles.title}>{texts.chatbot.title}</div>
                        <div style={styles.slogan}>{texts.chatbot.slogan}</div>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label={texts.chatbot.closeLabel}
                    style={styles.closeButton}
                >
                    <IoClose size={26} style={styles.close} />
                </button>
            </div>

            {/* SERVER SLEEP NOTICE */}
            <div style={styles.noticeBar} dir="auto">
                {texts.chatbot.sleepNotice}
            </div>

            {/* MESSAGES */}
            <div
                style={styles.messages}
                className="chat-message-list"
                ref={chatRef}
                role="log"
                aria-live="polite"
                aria-label={texts.chatbot.title}
            >
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        dir="auto"
                        style={{
                            ...styles.message,
                            ...(msg.sender === "user" ? styles.userMessage : styles.assistantMessage)
                        }}
                    >
                        {formatMarkdown(msg.text, markdownCtx)}
                    </div>
                ))}

                {/* TYPING INDICATOR */}
                {isTyping && (
                    <div style={styles.typingContainer} dir="auto" aria-live="polite">
                        <span style={styles.typingText}>{texts.chatbot.assistantThinking}</span>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                )}
            </div>

            {/* AI DISCLAIMER */}
            <div style={styles.disclaimer} dir="auto">
                {texts.chatbot.aiDisclaimer}
            </div>

            {/* INPUT */}
            <div style={styles.inputContainer}>
                <textarea
                    ref={inputRef}
                    dir="auto"
                    style={styles.input}
                    placeholder={texts.chatbot.placeholder}
                    aria-label={texts.chatbot.placeholder}
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            sendMessage();
                        }
                    }}
                />
                <button
                    type="button"
                    aria-label={texts.chatbot.sendLabel}
                    style={{
                        ...styles.sendButton,
                        opacity: isTyping ? 0.3 : 1,
                        cursor: isTyping ? "not-allowed" : "pointer"
                    }}
                    onClick={sendMessage}
                    disabled={isTyping}
                >
                    <IoSend size={20} color="white" />
                </button>
            </div>

        </div>
    );
}

export default ChatWindow;

let styles = {
    container: {
        position: "fixed",
        bottom: "119px",
        right: "25px",
        width: "min(380px, calc(100vw - 32px))",
        maxWidth: "calc(100vw - 32px)",
        height: "min(70vh, 560px)",
        maxHeight: "calc(100vh - 140px)",
        background: "var(--surface-color)",
        borderRadius: "18px",
        flexDirection: "column",
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        zIndex: 9999,
    },
    header: {
        padding: "14px",
        background: "rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerLeft: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        minWidth: 0,
    },
    title: {
        fontSize: "17px",
        fontWeight: 700,
        color: "var(--default-color)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    slogan: {
        fontSize: "12px",
        color: "var(--default-color)",
        opacity: 0.7,
        marginTop: "2px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    closeButton: {
        background: "transparent",
        border: "none",
        padding: "4px",
        display: "flex",
        cursor: "pointer",
        flexShrink: 0,
        borderRadius: "8px",
    },
    close: {
        cursor: "pointer",
        color: "var(--default-color)",
    },
    noticeBar: {
        fontSize: "11.5px",
        lineHeight: 1.4,
        color: "var(--default-color)",
        opacity: 0.75,
        textAlign: "center",
        padding: "6px 16px",
        background: "rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
    },
    disclaimer: {
        fontSize: "11px",
        lineHeight: 1.4,
        color: "var(--default-color)",
        opacity: 0.55,
        textAlign: "center",
        padding: "6px 16px 0",
    },
    messages: {
        flex: 1,
        overflowY: "auto",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
    },
    message: {
        maxWidth: "85%",
        padding: "10px 14px",
        borderRadius: "12px",
        fontSize: "15px",
        lineHeight: 1.5,
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        overflowWrap: "anywhere",
    },
    userMessage: {
        alignSelf: "flex-end",
        background: "var(--accent-color)",
        color: "var(--contrast-color)",
    },
    assistantMessage: {
        alignSelf: "flex-start",
        background: "rgba(255,255,255,0.06)",
        color: "var(--default-color)",
        border: "1px solid rgba(255,255,255,0.07)",
    },
    typingContainer: {
        display: "flex",
        alignItems: "center",
        gap: "6px",
        paddingInlineStart: "12px",
    },
    typingText: {
        fontSize: "12px",
        color: "var(--default-color)",
        opacity: 0.6,
    },
    inputContainer: {
        padding: "10px",
        display: "flex",
        gap: "8px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        alignItems: "flex-end",
    },
    input: {
        flex: 1,
        padding: "10px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "var(--default-color)",
        borderRadius: "10px",
        resize: "none",
        overflowY: "auto",
        fontFamily: "var(--default-font)",
        maxHeight: "120px",
        lineHeight: "1.4em",
    },
    sendButton: {
        padding: "10px 12px",
        marginBottom: "10px",
        background: "var(--accent-color)",
        border: "none",
        borderRadius: "10px",
        color: "white",
        width: "50px",
        height: "50px",
        flexShrink: 0,
    },
};
