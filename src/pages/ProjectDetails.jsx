// src/components/PortfolioDetails.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import "aos/dist/aos.css";
import AOS from "aos";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import "../assets/css/projects_details.css"
import translations from "../data/translations";
import SEO from "../components/SEO";

const PortfolioDetails = ({ language }) => {
    const name = useParams()
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
            touchNavigation: true,
            loop: true
        });

        return () => lightbox.destroy();
    }, [language]);
    const texts = translations[language];

    const filteredProjects = texts.projects.projects_details.filter((p) => p.shortName === String(name.name));


    return (
        <>
            {/* SEO dynamique pour projectDetails */}
            <SEO language={language} pageKey={filteredProjects[0].shortName} />

            <main className="main">
                <section id="portfolio-details" className="portfolio-details section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            {/* Swiper Section */}
                            <div className="col-lg-6" data-aos="fade-right">
                                <div className="portfolio-details-media">
                                    <div className="main-image">
                                        <Swiper
                                            modules={[Autoplay, Navigation, EffectCreative]}
                                            loop={true}
                                            speed={1000}
                                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                                            effect="creative"
                                            creativeEffect={{
                                                prev: { shadow: true, translate: [0, 0, -400] },
                                                next: { translate: ["100%", 0, 0] },
                                            }}
                                            slidesPerView={1}
                                            navigation
                                            dir="rtl"
                                            className="portfolio-details-slider"
                                        >
                                            {filteredProjects[0].images.map((s, index) => (
                                                <SwiperSlide key={index}>
                                                    <img src={s} alt={filteredProjects[0].title} className="img-fluid" />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>

                                    {/* Thumbnail Grid */}
                                    <div className="thumbnail-grid mb-3" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="row g-2">
                                            {filteredProjects[0].images.map((s, index) => (
                                                <div className="col-3" key={index}>
                                                    <a href={s} className="glightbox">
                                                        <img src={s} alt={filteredProjects[0].title} className="img-fluid" />
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="tech-stack-badges mt-4" data-aos="fade-down" data-aos-delay={200}>
                                        {filteredProjects[0].technologies.map((s, index) => (
                                            <span key={index}>{s}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="col-lg-6" data-aos="fade-left">
                                <div className="portfolio-details-content">
                                    <div className="project-meta">
                                        <div className="badge-wrapper">
                                            <span className="project-badge">{filteredProjects[0].type}</span>
                                        </div>
                                        <div className="date-client">
                                            <div className="meta-item">
                                                <i className="bi bi-calendar-check"></i>
                                                <span>{filteredProjects[0].date}</span>
                                            </div>
                                            <div className="meta-item">
                                                <i className="bi bi-buildings"></i>
                                                <span>{filteredProjects[0].company ? filteredProjects[0].company : filteredProjects[0].shortName}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h2 className="project-title">
                                        {filteredProjects[0].title}
                                    </h2>

                                    <div className="project-overview">
                                        <p className="lead">
                                            {filteredProjects[0].description}
                                        </p>

                                        {/* Accordion */}
                                        <div className="accordion project-accordion" id="portfolio-details-projectAccordion">
                                            <div className="accordion-item" data-aos="fade-up">
                                                <h2 className="accordion-header">
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse1"
                                                        aria-expanded="true"
                                                        aria-controls="collapse1"
                                                    >
                                                        <i className="bi bi-clipboard-data me-2"></i> {texts.projectDetails.projectOverview}
                                                    </button>
                                                </h2>
                                                <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#portfolio-details-projectAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {filteredProjects[0].projectOverview}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item" data-aos="fade-up" data-aos-delay="100">
                                                <h2 className="accordion-header">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse2"
                                                        aria-expanded="false"
                                                        aria-controls="collapse2"
                                                    >
                                                        <i className="bi bi-exclamation-diamond me-2"></i> {texts.projectDetails.theChallenge}
                                                    </button>
                                                </h2>
                                                <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#portfolio-details-projectAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {filteredProjects[0].theChallenge}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                                                <h2 className="accordion-header">
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapse3"
                                                        aria-expanded="false"
                                                        aria-controls="collapse3"
                                                    >
                                                        <i className="bi bi-award me-2"></i> {texts.projectDetails.theSolution}
                                                    </button>
                                                </h2>
                                                <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#portfolio-details-projectAccordion">
                                                    <div className="accordion-body">
                                                        <p>
                                                            {filteredProjects[0].theSolution}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Key Features */}
                                    <div className="project-features" data-aos="fade-up" data-aos-delay="300">
                                        <h3>
                                            <i className="bi bi-stars"></i> {texts.projectDetails.keyFeatures}
                                        </h3>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <ul className="feature-list">
                                                    {filteredProjects[0].keyFeatures.slice(0, 3).map((b, index) => (
                                                        <li key={index}>
                                                            <i className="bi bi-check2-circle"></i> {b} </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="feature-list">
                                                    {filteredProjects[0].keyFeatures.slice(-3).map((b, index) => (
                                                        <li key={index}>
                                                            <i className="bi bi-check2-circle"></i> {b} </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    {filteredProjects[0].externalUrl ? (
                                        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="400">
                                            <a href="/projects" className="btn-next-project d-flex justify-content-center">
                                                <i className="bi bi-arrow-left"></i> {texts.projectDetails.backToProjects}
                                            </a>
                                            <a href={filteredProjects[0].externalUrl} target="_blank" className="btn-view-project"> <i className="bi bi-eye" /> {texts.projectDetails.viewLiveProject}</a>
                                        </div>
                                    ) : (
                                        <div className="cta-buttons" data-aos="fade-up" data-aos-delay="400">
                                            <a href="/projects" className="btn-view-project d-flex justify-content-center">
                                                <i className="bi bi-arrow-left"></i> {texts.projectDetails.backToProjects}
                                            </a>
                                        </div>)

                                    }



                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PortfolioDetails;
