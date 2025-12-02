import React, { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import SEO from "../components/SEO";
import { FaRobot } from "react-icons/fa";
import { sendMessageToAPI } from "../api/chatApi";
import translations from "../data/translations";

const AssistantPage = ({ language, chatMessages, setChatMessages }) => {
    const texts = translations[language];
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatRef = useRef(null);
    const inputRef = useRef(null);

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

        // Ajouter le message utilisateur dans le state GLOBAL
        setChatMessages(prev => [...prev, { sender: "user", text: userMessage }]);

        setInput("");
        inputRef.current.style.height = "auto";
        setIsTyping(true);

        try {
            const res = await sendMessageToAPI(userMessage);
            const assistantReply = res || texts.chatbot.assistantError;

            // Ajouter la réponse assistant dans le state GLOBAL
            setChatMessages(prev => [...prev, { sender: "assistant", text: assistantReply }]);

        } catch (err) {
            ssetChatMessages(prev => [
                ...prev,
                { sender: "assistant", text: texts.chatbot.assistantConnectionError }
            ]);
        }

        setIsTyping(false);
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

    // Fonction principale pour formater le texte Markdown
    const formatMarkdown = (text) => {
        const lines = text.split("\n");
        let tempList = [];
        const finalElements = [];

        lines.forEach((line, idx) => {
            const trimmed = line.trim();

            // Gestion des listes
            if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                tempList.push(<li key={idx}>{parseInlineMarkdown(trimmed.slice(2))}</li>);
            } else {
                if (tempList.length > 0) {
                    finalElements.push(<ul key={`ul-${idx}`}>{tempList}</ul>);
                    tempList = [];
                }
                if (trimmed) {
                    finalElements.push(
                        <span key={idx}>
                            {parseInlineMarkdown(trimmed)}
                            <br />
                        </span>
                    );
                } else {
                    finalElements.push(<br key={idx} />);
                }
            }
        });

        // Si le texte finit par une liste
        if (tempList.length > 0) {
            finalElements.push(<ul key={`ul-end`}>{tempList}</ul>);
        }

        return finalElements;
    }

    // Fonction pour gérer le formatage inline (**gras**, *italique*, __souligné__)
    const parseInlineMarkdown = (text) => {
        const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|__.*?__)/g);

        return parts.map((part, idx) => {
            if (!part) return null;
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={idx}>{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith("*") && part.endsWith("*")) {
                return <em key={idx}>{part.slice(1, -1)}</em>;
            }
            if (part.startsWith("__") && part.endsWith("__")) {
                return <u key={idx}>{part.slice(2, -2)}</u>;
            }
            return part;
        });
    }

    return ( <>
    
            {/* SEO dynamique pour Projects */}
            <SEO language={language} pageKey="chatbot" />
        <div
            style={{
                maxWidth: "800px",
                margin: "10px auto",
                padding: "20px",
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

            {/* MESSAGES */}
            <div style={styles.messages} ref={chatRef}>
                {chatMessages.map((msg, i) => (
                    <div
                        key={i}
                        style={{
                            ...styles.message,
                            ...(msg.sender === "user" ? styles.userMessage : styles.assistantMessage),
                        }}
                    >
                        {formatMarkdown(msg.text)}
                    </div>
                ))}

                {isTyping && (
                    <div style={styles.typingContainer}>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                )}
            </div>

            {/* INPUT */}
            <div style={styles.inputContainer}>
                <textarea
                    ref={inputRef}
                    style={styles.input}
                    placeholder={texts.chatbot.placeholder}
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    style={styles.sendButton}
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
    },
    title: {
        fontSize: "17px",
        fontWeight: 700,
        color: "var(--default-color)",
    },
    slogan: {
        fontSize: "12px",
        color: "var(--default-color)",
        opacity: 0.7,
        marginTop: "2px",
    },
    messages: {
        height: "60vh",
        overflowY: "auto",
        padding: "15px",
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
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
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
        gap: "6px",
        paddingLeft: "12px",
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