import React, { useEffect } from "react";
import "../assets/css/main.css";
import translations from "../data/translations";

export default function Footer({ language }) {
    useEffect(() => {
        if (language === "ar") {
            document.body.classList.add("rtl");
            document.body.dir = "rtl"; 
        } else {
            document.body.classList.remove("rtl");
            document.body.dir = "ltr";
        }
    }, [language])
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="copyright text-center ">
                    <p>
                        © <span>{new Date().getFullYear()}</span>{" "}
                        <a href="/">
                            <strong className="px-1 sitename">{translations[language].heroName}.</strong>
                        </a>{" "}
                        <span>{translations[language].footer.rights}<br /></span>
                    </p>
                </div>
                <div className="social-links d-flex justify-content-center">
                    <a href="https://www.facebook.com/isalmo.idaaiche" target="_blank" rel="noreferrer">
                        <i className="bi bi-facebook" />
                    </a>
                    <a href="https://www.instagram.com/issalmouad_49/" target="_blank" rel="noreferrer">
                        <i className="bi bi-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/issalmou-adaaiche-1390bb281" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin" />
                    </a>
                    <a href="mailto:issalmouadaaiche@gmail.com" target="_blank" rel="noreferrer">
                        <i className="bi bi-envelope" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
