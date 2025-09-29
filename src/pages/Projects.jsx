// src/components/Projects.jsx
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import translations from "../data/translations";
import "../assets/css/projects.css"
import "glightbox/dist/css/glightbox.css";
import SEO from "../components/SEO";


const Projects = ({ language }) => {
    const [filter, setFilter] = useState("*");

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
        const lightbox = GLightbox({
            selector: ".glightbox",
            touchNavigation: false,
            loop: true
        });

        return () => lightbox.destroy();
    }, [language]);
    useEffect(() => {
        const timer = setTimeout(() => {
            const lightbox = GLightbox({
                selector: ".glightbox",
                touchNavigation: false,
                loop: true
            });

            return () => lightbox.destroy();
        }, 50);

        return () => clearTimeout(timer);
    }, [filter]);

    const texts = translations[language];

    const filteredProjects =
        filter === "*"
            ? texts.projects.projects_details
            : texts.projects.projects_details.filter((p) => p.category === filter);

    return (
        <>
            {/* SEO dynamique pour Projects */}
            <SEO language={language} pageKey="projects" />
            
            <main className="main">
                {/* Projects Section */}
                <section id="portfolio" className="portfolio section">
                    <div className="container section-title" data-aos="fade-up" data-aos-delay="100">
                        <h2>{texts.projects.title}</h2>
                        <p>
                            {texts.projects.subtitle}
                        </p>
                    </div>

                    <div className="projects container" data-aos="fade-up" data-aos-delay="200">
                        {/* Filters */}
                        <ul
                            className="portfolio-filters isotope-filters"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <li
                                className={filter === "*" ? "filter-active" : ""}
                                onClick={() => setFilter("*")}
                            >
                                {texts.projects.allbtn}
                            </li>
                            <li
                                className={filter === "devweb" ? "filter-active" : ""}
                                onClick={() => setFilter("devweb")}
                            >
                                {texts.projects.devbtn}
                            </li>
                            <li
                                className={filter === "ai" ? "filter-active" : ""}
                                onClick={() => setFilter("ai")}
                            >
                                {texts.projects.aibtn}
                            </li>
                        </ul>

                        {/* Swiper */}
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={20}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            data-aos="fade-up"
                            data-aos-delay="200"
                            dir="rtl"
                            className="portfolioSwiper"
                        >
                            {filteredProjects.map((project, j) => (
                                <SwiperSlide
                                    key={j}
                                    className={`portfolio-item isotope-item filter-${project.category}`}
                                >
                                    <div className="portfolio-card">
                                        <div className="portfolio-img">
                                            <img
                                                src={project.images[0]}
                                                alt={project.title}
                                                className="img-fluid"
                                            />
                                            <div className="portfolio-overlay">
                                                <a
                                                    href={project.images[0]}
                                                    className="glightbox portfolio-lightbox"
                                                >
                                                    <i className="bi bi-eye"></i>
                                                </a>
                                                <a
                                                    href={`/project/${project.shortName}`}
                                                    className="portfolio-details-link"
                                                >
                                                    <i className="bi bi-hand-index"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="portfolio-info"
                                            onClick={() => window.location.href = `/project/${project.shortName}`}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <h4>{project.title}</h4>
                                            <p>{project.description}</p>
                                            <div className="portfolio-tags">
                                                {project.technologies.map((tag, i) => (
                                                    <span key={i}>{tag}</span>
                                                ))}
                                            </div>
                                            <a href={`/project/${project.shortName}`} className="view-info-btn">
                                                <i className="bi bi-arrow-up-right"></i> {texts.projects.btnviewinfo}
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
                {/* End Projects Section */}
                {/* Stats Section */}
                <section id="stats" className="stats section dark-background py-5">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        {/* Titre */}
                        <div className="text-center" data-aos="fade-up" data-aos-delay={200}>
                            <h2 className="fw-bold text-white">{texts.home.statsTitle}</h2>
                        </div>
                        {/* Paragraphe */}
                        <div className="text-center mt-3" data-aos="fade-down" data-aos-delay={300}>
                            <p className="text-white-50 fs-5">
                                {texts.home.statsDescription}
                            </p>
                        </div>
                        {/* Boutons */}
                        <div className="d-flex justify-content-center gap-3 mt-4" data-aos="fade-up" data-aos-delay={300}>
                            <a href="services.html" style={{ backgroundColor: '#1387c1' }} className="btn rounded-pill px-4 py-2">
                                <i className="bi bi-eye" /> {texts.home.viewServicesBtn}
                            </a>
                            <a href="contact.html" className="btn btn-outline-light rounded-pill px-4 py-2">
                                <i className="bi bi-hand-index-thumb" /> {texts.home.getInTouchBtn}
                            </a>
                        </div>
                    </div>
                </section>
                {/* /Stats Section */}

            </main>
        </>
    );
}
export default Projects