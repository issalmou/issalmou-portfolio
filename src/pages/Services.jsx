// src/pages/Services.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import translations from "../data/translations";
import "../assets/css/services.css"
import SEO from "../components/SEO";

const Services = ({ language }) => {

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
    }, [language]);


    const texts = translations[language];

    return (
        <>
            {/* SEO dynamique pour Services */}
            <SEO language={language} pageKey="services" />
            
            <main className="main">
                {/* Services Section */}
                <section id="services" className="services section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>{texts.services.title}</h2>
                        <p>{texts.services.subtitle}</p>
                    </div>{/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row justify-content-center g-5">
                            <div className="row g-4">
                                {texts.services.items.map((item, i) => {
                                    return (
                                        <div className="col-md" data-aos="fade-up" data-aos-delay={item.fade} key={i}>
                                            <div className="skill-item text-center">
                                                <i className={`bi ${item.icon} skill-icon`} />
                                                <h3>{item.title}</h3>
                                                <p className="pt-4 pb-2">{item.desc}</p>
                                                <ul className="service-list">
                                                    {item.list.map((b, j) => { return <li className={j == 0 ? "first-li" : ""} key={j}>{b}</li> })}
                                                </ul>
                                            </div>
                                        </div>
                                    )

                                })}

                            </div>
                        </div>
                    </div>
                    <div className="container process-wrapper" data-aos="fade-up" data-aos-delay={100}>
                        <h2 className="mb-5">{texts.services.process.title}</h2>
                        <div className="row justify-content-center work_process">
                            {texts.services.process.steps.map((step, i) => {
                                return (
                                    <div className="col-md-3 process-step" data-aos="fade-down" data-aos-delay={step.fade} key={i}>
                                        <div className="circle"><span>{i + 1}</span></div>
                                        <div className="step-title">{step.title}</div>
                                        <div className="step-desc">{step.desc}
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>{/* /Services Section */}
                {/* Stats Section */}
                <section id="stats" className="stats section dark-background py-5">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        {/* Titre */}
                        <div className="text-center" data-aos="fade-up" data-aos-delay={200}>
                            <h2 className="fw-bold text-white">{texts.services.cta.title}</h2>
                        </div>
                        {/* Paragraphe */}
                        <div className="text-center mt-3" data-aos="fade-down" data-aos-delay={300}>
                            <p className="text-white-50 fs-5">
                                {texts.services.cta.desc}
                            </p>
                        </div>
                        {/* Boutons */}
                        <div className="d-flex justify-content-center gap-3 mt-4" data-aos="fade-up" data-aos-delay={400}>
                            <a href="/contact" style={{ backgroundColor: '#1387c1' }} className="btn rounded-pill px-4 py-2">
                                <i className="bi bi-hand-index-thumb" /> {texts.services.cta.button}
                            </a>
                        </div>
                    </div>
                </section>
                {/* /Stats Section */}
            </main>
        </>
    );
}
export default Services;
