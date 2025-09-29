import { useEffect } from "react";

export default function ScrollHandler() {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                document.body.classList.add("scrolled");
                document.querySelector(".scroll-top")?.classList.add("active");
            } else {
                document.body.classList.remove("scrolled");
                document.querySelector(".scroll-top")?.classList.remove("active");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return null; 
}
