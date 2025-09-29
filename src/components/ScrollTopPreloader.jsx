import React, { useEffect } from "react";

const ScrollTopPreloader = () => {
    useEffect(() => {
        // --- Scroll Top button ---
        const scrollTop = document.querySelector("#scroll-top");

        const toggleScrollTop = () => {
            if (window.scrollY > 100) {
                scrollTop.classList.add("active");
            } else {
                scrollTop.classList.remove("active");
            }
        };

        // Attacher l'événement
        window.addEventListener("scroll", toggleScrollTop);

        // Scroll to top on click
        if (scrollTop) {
            scrollTop.addEventListener("click", (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        // --- Preloader ---
        const preloader = document.querySelector("#preloader");
        if (preloader) {
            window.addEventListener("load", () => {
                preloader.remove(); 
                
            });
        }

        // Nettoyage quand le composant est démonté
        return () => {
            window.removeEventListener("scroll", toggleScrollTop);
        };
    }, []);

    return (
        <>
            {/* Scroll Top */}
            <a
                href="#"
                id="scroll-top"
                className="scroll-top d-flex align-items-center justify-content-center"
            >
                <i className="bi bi-arrow-up-short"></i>
            </a>

            {/* Preloader */}
            <div id="preloader"></div>
        </>
    );
};

export default ScrollTopPreloader;
