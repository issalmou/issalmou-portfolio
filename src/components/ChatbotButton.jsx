import { useState, useEffect } from "react";
import { FaBrain } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai"; // icône X

export default function ChatbotButton({ onClick, onHide }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                bottom: "65px",
                right: "15px",
                zIndex: 100000,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                direction: "ltr"
            }}
        >
            {/* Bouton X pour cacher le bouton */}
            <button
                onClick={(e) => {
                    e.stopPropagation(); // empêche le onClick principal
                    if (onHide) onHide();
                }}
                style={{
                    background: "rgba(0,0,0,0.6)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    cursor: "pointer",
                    display: visible ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "12px",
                    direction: "ltr"
                }}
            >
                <AiOutlineClose />
            </button>

            {/* Bouton principal */}
            <button
                onClick={onClick}
                style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-color)",
                    color: "var(--contrast-color)",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "var(--default-font)",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
                    transition: "opacity 0.4s, transform 0.4s",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "22px",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    pointerEvents: visible ? "auto" : "none",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.8")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
                <FaBrain size={22} />
            </button>
        </div >
    );
}
