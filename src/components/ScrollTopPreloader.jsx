import React, { useEffect, useState } from "react";

const ScrollTopPreloader = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setLoaded(true); // quand la page est chargée => cacher le preloader
        };

        window.addEventListener("load", handleLoad);

        // fallback sécurité si load ne se déclenche pas
        const fallback = setTimeout(() => setLoaded(true), 3000);

        return () => {
            window.removeEventListener("load", handleLoad);
            clearTimeout(fallback);
        };
    }, []);

    useEffect(() => {
        if (!loaded) return; // on n'active le bouton scroll qu'après le préloader

        const scrollTop = document.querySelector("#scroll-top");

        const toggleScrollTop = () => {
            if (window.scrollY > 100) {
                scrollTop.classList.add("active");
            } else {
                scrollTop.classList.remove("active");
            }
        };

        window.addEventListener("scroll", toggleScrollTop);

        if (scrollTop) {
            scrollTop.addEventListener("click", (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        return () => {
            window.removeEventListener("scroll", toggleScrollTop);
        };
    }, [loaded]);

    return (
        <>
            {/* Scroll Top */}
            {loaded && (
                <a
                    href="#"
                    id="scroll-top"
                    className="scroll-top d-flex align-items-center justify-content-center"
                >
                    <i className="bi bi-arrow-up-short"></i>
                </a>
            )}

            {/* Preloader */}
            {!loaded && <div id="preloader"></div>}
        </>
    );
};

export default ScrollTopPreloader;
