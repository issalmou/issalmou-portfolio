import { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import translations from "../data/translations";
import { NavLink } from "react-router-dom";
import "../assets/css/navbar.css";

export default function Navbar({ onLanguageChange }) {
    const [mobileActive, setMobileActive] = useState(false);
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const storedLang = sessionStorage.getItem("language");
        if (storedLang) {
            setLanguage(storedLang);
            if (onLanguageChange) onLanguageChange(storedLang);
        }
    }, []);

    useEffect(() => {
        if (language === "ar") {
            document.body.classList.add("rtl");
            document.body.dir = "rtl";
        } else {
            document.body.classList.remove("rtl");
            document.body.dir = "ltr";
        }
    }, [language]);
    const toggleMobileMenu = () => {
        const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
        document.body.classList.toggle("mobile-nav-active");
        if (mobileNavToggleBtn) {
            mobileNavToggleBtn.classList.toggle("bi-list");
            mobileNavToggleBtn.classList.toggle("bi-x");
        }
        setMobileActive(!mobileActive);
    };

    const closeMobileMenu = () => {
        if (mobileActive) {
            const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
            document.body.classList.remove("mobile-nav-active");
            if (mobileNavToggleBtn) {
                mobileNavToggleBtn.classList.add("bi-list");
                mobileNavToggleBtn.classList.remove("bi-x");
            }
            setMobileActive(false);
        }
    };

    const navLinks = [
        { path: "/", name: "home" },
        { path: "/about", name: "about" },
        { path: "/resume", name: "resume" },
        { path: "/services", name: "services" },
        { path: "/projects", name: "projects" },
        { path: "/contact", name: "contact" },
    ];

    return (
        <header
            id="header"
            className="header d-flex align-items-center light-background sticky-top"
        >
            <div className="container position-relative d-flex align-items-center justify-content-between">
                <a
                    href="/"
                    className="logo d-flex align-items-center me-auto me-xl-0"
                >
                    <h1 className="sitename">
                        <span style={{ color: "#1387c1" }}>
                            {translations[language].heroName.split(" ")[0]}
                        </span>{" "}
                        {translations[language].heroName.split(" ")[1]}
                    </h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <NavLink
                                    to={link.path}
                                    end
                                    onClick={closeMobileMenu}
                                    className={({ isActive }) =>
                                        link.path === "/projects" &&
                                            window.location.pathname.startsWith("/project")
                                            ? "active"
                                            : isActive
                                                ? "active"
                                                : ""
                                    }
                                >
                                    {translations[language].nav[link.name]}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <i
                        className="mobile-nav-toggle d-xl-none bi bi-list"
                        onClick={toggleMobileMenu}
                    />
                </nav>

                <div className="header-social-links d-flex align-items-center">
                    <a
                        href="https://www.facebook.com/isalmo.idaaiche"
                        target="_blank"
                        rel="noreferrer"
                        className="facebook"
                    >
                        <i className="bi bi-facebook" />
                    </a>
                    <a
                        href="https://www.instagram.com/issalmouad_49/"
                        target="_blank"
                        rel="noreferrer"
                        className="instagram"
                    >
                        <i className="bi bi-instagram" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/issalmou-adaaiche-1390bb281"
                        target="_blank"
                        rel="noreferrer"
                        className="linkedin"
                    >
                        <i className="bi bi-linkedin" />
                    </a>
                    <a
                        href="mailto:issalmouadaaiche@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        className="twitter"
                    >
                        <i className="bi bi-envelope" />
                    </a>

                    <ReactFlagsSelect
                        countries={["US", "FR", "MA"]}
                        customLabels={{ US: "", FR: "", MA: "" }} 
                        selected={
                            language === "en" ? "US" : language === "fr" ? "FR" : "MA"
                        }
                        onSelect={(code) => {
                            let newLang = "en";
                            if (code === "FR") newLang = "fr";
                            if (code === "MA") newLang = "ar";
                            setLanguage(newLang);
                            sessionStorage.setItem("language", newLang);
                            if (onLanguageChange) onLanguageChange(newLang);
                        }}
                        showSelectedLabel={false}
                        showOptionLabel={false}
                        selectedSize={16}
                        optionsSize={16}
                        className="custom-flags-select"
                    />

                </div>
            </div>
        </header>
    );
}
