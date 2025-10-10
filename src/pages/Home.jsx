// src/pages/Home.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import translations from "../data/translations";
import SEO from "../components/SEO";
import "../assets/css/main.css";


const Home = ({ language }) => {

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

        const typedEl = document.querySelector(".typed");
        let typedInstance;

        if (typedEl) {
            const oldCursor = typedEl.parentElement.querySelector(".typed-cursor");
            if (oldCursor) oldCursor.remove();

            const typed_strings = typedEl.getAttribute("data-typed-items").split(",");
            typedInstance = new Typed(".typed", {
                strings: typed_strings,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: "|",
            });
        }

        return () => {
            if (typedInstance) typedInstance.destroy();
        };
    }, [language]);


    const texts = translations[language];

    return (
        <>
            {/* SEO dynamique pour Home */}
            <SEO language={language} pageKey="home" />

            <main className="main">
                {/* Hero Section */}
                <section id="hero" className="hero section">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        <div className="row gy-4 align-items-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="hero-content">
                                    <h1 data-aos="fade-up" data-aos-delay="200">
                                        {texts.home.heroTitle} <span className="highlight">{texts.heroName}</span>
                                    </h1>
                                    <h2 data-aos="fade-up" data-aos-delay="300">
                                        {texts.home.heroType}{" "}<span className="typed" data-typed-items={texts.home.heroRoles}></span>
                                    </h2>
                                    <p data-aos="fade-up" data-aos-delay="400">{texts.home.heroDescription}</p>
                                    <div
                                        className="hero-actions"
                                        data-aos="fade-up"
                                        data-aos-delay="500"
                                    >
                                        <a href="/contact" className="btn btn-primary">
                                            <i className="bi bi-envelope"></i> {texts.home.contactBtn}
                                        </a>
                                        <a href="/about" className="btn btn-outline">
                                            <i className="bi bi-person"></i> {texts.home.aboutBtn}
                                        </a>
                                    </div>
                                    <div
                                        className="social-links"
                                        data-aos="fade-up"
                                        data-aos-delay="600"
                                    >
                                        <a
                                            href="mailto:issalmouadaaiche@gmail.com"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <i className="bi bi-envelope"></i>
                                        </a>
                                        <a
                                            href="https://github.com/issalmou"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <i className="bi bi-github"></i>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/issalmou-adaaiche-1390bb281"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <i className="bi bi-linkedin"></i>
                                        </a>
                                        <a
                                            href="https://www.facebook.com/isalmo.idaaiche"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/isalmoad_49/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="hero-image" data-aos="zoom-in" data-aos-delay="300">
                                    <div className="image-wrapper">
                                        <img
                                            src="assets/img/profile/profile.webp"
                                            alt={texts.home.heroName}
                                            className="img-fluid"
                                        />
                                        <div className="floating-elements">
                                            <div
                                                className="floating-card design"
                                                data-aos="fade-left"
                                                data-aos-delay="700"
                                            >
                                                <i className="bi bi-eye"></i>
                                                <span>{texts.home.vision}</span>
                                            </div>
                                            <div
                                                className="floating-card code"
                                                data-aos="fade-right"
                                                data-aos-delay="800"
                                            >
                                                <i className="bi bi-code-slash"></i>
                                                <span>{texts.home.code}</span>
                                            </div>
                                            <div
                                                className="floating-card creativity"
                                                data-aos="fade-up"
                                                data-aos-delay="900"
                                            >
                                                <i className="bi bi-lightbulb"></i>
                                                <span>{texts.home.ideas}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Hero Section */}

                {/* Services Section */}
                <section id="services" className="services section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>{texts.home.servicesTitle}</h2>
                        <p>{texts.home.servicesDescription}</p>
                    </div>
                    {/* End Section Title */}

                    <div className="container" data-aos="fade-up" data-aos-delay="200">
                        <div className="row justify-content-center g-5">
                            {texts.home.services.map((service, i) => (
                                <div className="col-md-6" data-aos={`${service.fade}`} data-aos-delay="100" key={i}>
                                    <div className="service-item">
                                        <div className="service-icon">
                                            <i className={`bi ${service.icon} skill-icon`}></i>
                                        </div>
                                        <div className="service-content">
                                            <h3>{service.title}</h3>
                                            <p>
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </section>
                {/* /Services Section */}

                {/* Stats Section */}
                <section id="stats" className="stats section dark-background py-5">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        {/* Title */}
                        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="fw-bold text-white">{texts.home.statsTitle}</h2>
                        </div>
                        {/* Paragraph */}
                        <div
                            className="text-center mt-3"
                            data-aos="fade-down"
                            data-aos-delay="300"
                        >
                            <p className="text-white-50 fs-5">{texts.home.statsDescription}</p>
                        </div>
                        {/* Buttons */}
                        <div
                            className="d-flex justify-content-center gap-3 mt-4"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <a
                                href="/services"
                                style={{ backgroundColor: "#1387c1" }}
                                className="btn rounded-pill px-4 py-2"
                            >
                                <i className="bi bi-eye"></i> {texts.home.viewServicesBtn}
                            </a>
                            <a
                                href="/contact"
                                className="btn btn-outline-light rounded-pill px-4 py-2"
                            >
                                <i className="bi bi-hand-index-thumb"></i> {texts.home.getInTouchBtn}
                            </a>
                        </div>
                    </div>
                </section>
                {/* /Stats Section */}
            </main>
        </>
    );
};

export default Home;
