//src/components/NotFound.jsx
import React, { useEffect } from "react";
import "../assets/css/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import translations from "../data/translations";
import "../assets/css/404.css"

export default function NotFound({ language }) {
    useEffect(() => {
        if (language === "ar") {
            document.body.classList.add("rtl");
            document.body.dir = "rtl";
        } else {
            document.body.classList.remove("rtl");
            document.body.dir = "ltr";
        }
        AOS.init({
            duration: 600,
            mirror: false,
            easing: 'ease-in-out',
            once: true
        });
    }, [language])

    const texts = translations[language];
    return (
        <>
            <main className="main" style={{ minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }} data-aos="fade-up">
            <div data-aos="fade-down" data-aos-delay="100">
                <h1 className="error-title link-underline">{texts.notFound.title}</h1>
                <p className="zoom-area">{texts.notFound.description} <br />
                    {texts.notFound.homeButton} </p>
                <section className="error-container" data-aos="fade-up" data-aos-delay="150">
                    <span className="four"><span className="screen-reader-text">4</span></span>
                    <span className="zero"><span className="screen-reader-text">0</span></span>
                    <span className="four"><span className="screen-reader-text">4</span></span>
                </section>
                <div className="link-container">
                    <a target="_blank" href="/" className="more-link">{texts.notFound.homeButton}</a>
                </div>
            </div>

        </main >
        </>
    );
}
