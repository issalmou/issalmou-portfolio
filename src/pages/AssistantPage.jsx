import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoSend } from "react-icons/io5";
import SEO from "../components/SEO";
import { FaRobot } from "react-icons/fa";
import { sendMessageToAPI, toBackendConversation } from "../api/chatApi";
import { formatMarkdown } from "../utils/chatMarkdown";
import translations from "../data/translations";

const AssistantPage = ({ language, chatMessages, setChatMessages }) => {
    const texts = translations[language];
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatRef = useRef(null);
    const inputRef = useRef(null);
    // Le hook useNavigate exige un Router — AssistantPage est toujours
    // rendue à l'intérieur de <Router> (voir App.jsx), donc sûr ici.
    const navigate = useNavigate();
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


    useEffect(() => {
        chatRef.current?.scrollTo({
            top: chatRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [chatMessages, isTyping]);


    // Sauvegarder les messages dans sessionStorage à chaque changement
    useEffect(() => {
        sessionStorage.setItem("chatMessages", JSON.stringify(chatMessages));
    }, [chatMessages]);


    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const userMessage = input;
        // Construit l'historique AVANT d'ajouter le nouveau message (le
        // backend attend la conversation précédente, pas la question en cours).
        const conversation = toBackendConversation(chatMessages);

        // Ajouter le message utilisateur dans le state GLOBAL
        setChatMessages(prev => [...prev, { sender: "user", text: userMessage }]);

        setInput("");
        inputRef.current.style.height = "auto";
        setIsTyping(true);

        try {
            const res = await sendMessageToAPI(userMessage, conversation);
            const assistantReply = res || texts.chatbot.assistantError;

            // Ajouter la réponse assistant dans le state GLOBAL
            setChatMessages(prev => [...prev, { sender: "assistant", text: assistantReply }]);

        } catch {
            setChatMessages(prev => [
                ...prev,
                { sender: "assistant", text: texts.chatbot.assistantConnectionError }
            ]);
        }

        setIsTyping(false);
        // Rend la main au clavier immédiatement : l'utilisateur peut
        // enchaîner sans re-cliquer dans le champ de saisie.
        inputRef.current?.focus();
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
        const textarea = inputRef.current;
        textarea.style.height = "auto";
        textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return ( <>

            {/* SEO dynamique pour Projects */}
            <SEO language={language} pageKey="chatbot" />
        <div
            style={{
                maxWidth: "800px",
                margin: "10px auto",
                padding: "clamp(10px, 4vw, 20px)",
                color: "var(--default-color)",
                fontFamily: "var(--default-font)",
            }}
        >
            {/* HEADER */}
            <div style={styles.header}>
                <div style={styles.headerLeft}>
                    <FaRobot size={22} color="var(--accent-color)" />
                    <div>
                        <div style={styles.title}>{texts.chatbot.title}</div>
                        <div style={styles.slogan}>{texts.chatbot.slogan}</div>
                    </div>
                </div>
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
                {chatMessages.map((msg, i) => (
                    <div
                        key={i}
                        dir="auto"
                        style={{
                            ...styles.message,
                            ...(msg.sender === "user" ? styles.userMessage : styles.assistantMessage),
                        }}
                    >
                        {formatMarkdown(msg.text, markdownCtx)}
                    </div>
                ))}

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
                    onKeyDown={handleKeyDown}
                />
                <button
                    type="button"
                    aria-label={texts.chatbot.sendLabel}
                    style={{
                        ...styles.sendButton,
                        opacity: isTyping ? 0.3 : 1,
                        cursor: isTyping ? "not-allowed" : "pointer",
                    }}
                    onClick={handleSend}
                    disabled={isTyping}
                >
                    <IoSend size={20} color="white" />
                </button>
            </div>
        </div>
    </>);
}

const styles = {
    header: {
        padding: "14px",
        background: "rgba(255,255,255,0.03)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "12px 12px 0 0",
        marginBottom: "10px",
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
    noticeBar: {
        fontSize: "12px",
        lineHeight: 1.4,
        color: "var(--default-color)",
        opacity: 0.75,
        textAlign: "center",
        padding: "6px 12px",
        marginBottom: "10px",
        background: "var(--surface-color)",
        borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.05)",
    },
    disclaimer: {
        fontSize: "11px",
        lineHeight: 1.4,
        color: "var(--default-color)",
        opacity: 0.55,
        textAlign: "center",
        padding: "8px 12px 0",
    },
    messages: {
        height: "clamp(320px, 60vh, 640px)",
        overflowY: "auto",
        padding: "clamp(10px, 3vw, 15px)",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "var(--surface-color)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.05)",
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
        display: "flex",
        gap: "8px",
        marginTop: "10px",
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
        width: "50px",
        height: "50px",
        marginBottom: "10px",
        background: "var(--accent-color)",
        borderRadius: "10px",
        border: "none",
        color: "white",
        cursor: "pointer",
        flexShrink: 0,
    },
};
export default AssistantPage
