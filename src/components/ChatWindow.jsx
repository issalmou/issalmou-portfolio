import { useState, useEffect, useRef } from "react";
import translations from "../data/translations";
import { IoClose } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { sendMessageToAPI } from "../api/chatApi";

const ChatWindow = ({ onClose, language, messages, setMessages }) => {
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatRef = useRef(null);
    const inputRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = window.innerWidth < 768;
    const texts = translations[language];

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
        setMessages(prev => [...prev, { sender: "user", text: userMessage }]);
        setInput("");
        inputRef.current.style.height = "auto";
        setIsTyping(true);

        try {
            const res = await sendMessageToAPI(userMessage);
            const assistantReply = res || texts.chatbot.assistantError;
            setMessages((prev) => [...prev, { sender: "assistant", text: assistantReply }]);
        } catch (err) {
            setMessages((prev) => [...prev, { sender: "assistant", text: texts.chatbot.assistantConnectionError }]);
        }

        setIsTyping(false);
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

    return (
        <div style={{
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
                <IoClose onClick={onClose} size={26} style={styles.close} />
            </div>

            {/* MESSAGES */}
            <div style={styles.messages} ref={chatRef}>
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        style={{
                            ...styles.message,
                            ...(msg.sender === "user" ? styles.userMessage : styles.assistantMessage)
                        }}
                    >
                        {formatMarkdown(msg.text)}
                    </div>
                ))}

                {/* TYPING INDICATOR */}
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
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            sendMessage();
                        }
                    }}
                />
                <button
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
        width: "380px",
        height: "520px",
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
    close: {
        cursor: "pointer",
        color: "var(--default-color)",
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
    },
};
