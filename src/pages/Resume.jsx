// src/pages/Resume.jsx
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import translations from "../data/translations";
import { Waypoint } from "react-waypoint";
import SEO from "../components/SEO";


const Resume = ({ language }) => {
    const [visible, setVisible] = useState(false);

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
            {/* SEO dynamique pour Resume */}
            <SEO language={language} pageKey="resume" />
            
            <main className="main">
                {/* Resume Section */}
                <section id="resume" className="resume section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>{texts.resume.title}</h2>
                        <p>{texts.resume.subtitle}</p>
                    </div>{/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row">
                            <div className="col-lg-6">
                                {/* Education Section */}
                                <div className="resume-item" data-aos="fade-up">
                                    <h3 className="resume-title">{texts.resume.educationTitle}</h3>
                                    <div className="resume-content">
                                        {texts.resume.education.map((item, i) => {
                                            return (
                                                <article className="education-item" key={i}>
                                                    <h4>{item.degree}</h4>
                                                    <h5>{item.period}</h5>
                                                    <p className="institution"><em>{item.institution}</em></p>
                                                </article>)
                                        })}

                                    </div>
                                </div>{/* End Education Section */}
                                {/* Professional Skills Section */}
                                <div className="resume-item skills-animation" data-aos="fade-up">
                                    <h3 className="resume-title">{texts.resume.skillsTitle}</h3>
                                    {/* Waypoint déclenche l'animation */}
                                    <Waypoint
                                        onEnter={() => setVisible(true)}
                                        bottomOffset="20%" // déclenche quand 20% du composant est visible
                                    />

                                    <div className="resume-content">
                                        {texts.resume.skillsData.map((skill, index) => (
                                            <div className="skill-item" key={index}>
                                                <h4>{skill.name}</h4>
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        aria-valuenow={skill.value}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                        style={{
                                                            width: visible ? `${skill.value}%` : "0%",
                                                            transition: "width 1s ease-in-out",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* End Professional Skills Section */}
                            </div>
                            <div className="col-lg-6">
                                {/* Experience Section */}
                                <div className="resume-item" data-aos="fade-up" data-aos-delay={100}>
                                    <h3 className="resume-title">{texts.resume.internshipsTitle}</h3>
                                    <div className="resume-content">
                                        {texts.resume.internships.map((item, i) => {
                                            return (
                                                <article className="experience-item" key={i}>
                                                    <h4>{item.role}</h4>
                                                    <h5>{item.duration}</h5>
                                                    <p className="company"><em>{item.company}</em></p>
                                                    <ul>
                                                        {item.responsibilities.map((x, j) => {
                                                            return (
                                                                <li key={j}>{x}</li>)
                                                        })}
                                                    </ul>
                                                </article>
                                            )
                                        })}
                                    </div>
                                </div>{/* End Experience Section */}
                            </div>
                        </div>
                    </div>
                </section>{/* /Resume Section */}
                {/* Stats Section */}
                <section id="stats" className="stats section dark-background py-5">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        {/* Titre */}
                        <div className="text-center" data-aos="fade-up" data-aos-delay={200}>
                            <h2 className="fw-bold text-white">{texts.resume.statsTitle}</h2>
                        </div>
                        {/* Paragraphe */}
                        <div className="text-center mt-3" data-aos="fade-down" data-aos-delay={300}>
                            <p className="text-white-50 fs-5"> {texts.resume.statsDescription} </p>
                        </div>
                        {/* Boutons */}
                        <div className="d-flex justify-content-center gap-3 mt-4" data-aos="fade-up" data-aos-delay={300}>
                            <a href="/projects" style={{ backgroundColor: '#1387c1' }} className="btn rounded-pill px-4 py-2">
                                <i className="bi bi-eye" /> {texts.resume.viewProjectsBtn}
                            </a>
                            <a href="/" className="btn btn-outline-light rounded-pill px-4 py-2">
                                <i className="bi bi-house-door" /> {texts.resume.backHomeBtn}
                            </a>
                        </div>
                    </div>
                </section>
                {/* /Stats Section */}
            </main>
        </>
    );
}
export default Resume;
