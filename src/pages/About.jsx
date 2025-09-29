// src/pages/About.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import translations from "../data/translations";
import '../assets/css/about.css'
import SEO from "../components/SEO";

const About = ({ language }) => {
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
            {/* SEO dynamique pour About */}
            <SEO language={language} pageKey="about" />

            <main className="main">
                {/* About Section */}
                <section id="about" className="about section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2 className="link-underline">{texts.about.title}</h2>
                        <p>{texts.about.subtitle}</p>
                    </div>

                    <div className="container" data-aos="fade-up" data-aos-delay="100">
                        {/* Intro + Photo */}
                        <div className="row align-items-center justify-content-between gy-5 mb-5">
                            <div className="col-lg-7" data-aos="fade-right" data-aos-delay="150">
                                <div className="intro-content">
                                    <span className="eyebrow">{texts.about.greeting}</span>
                                    <h2 className="headline">
                                        {texts.about.headline}
                                    </h2>
                                    <p className="lead">
                                        {texts.about.description}
                                    </p>
                                    <div className="cta-group">
                                        <a href="/projects" className="btn-ghost">
                                            {texts.about.viewWork} <i className="bi bi-arrow-up-right"></i>
                                        </a>
                                        <a href="/CV_issalmou_adaaiche.pdf"
                                            download="Issalmou_Adaaiche_CV.pdf"
                                            className="link-underline">
                                            {texts.about.downloadCV} <i className="bi bi-download"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5" data-aos="zoom-in" data-aos-delay="250">
                                <figure className="profile-figure text-center text-lg-end">
                                    <img
                                        src="assets/img/profile/isalmo_radio.jpg"
                                        alt={texts.heroName}
                                        className="img-fluid profile-photo"
                                    />
                                </figure>
                            </div>
                        </div>
                        {/* End Intro + Photo */}

                        {/* Quote */}
                        <blockquote
                            className="personal-quote text-center"
                            data-aos="fade-down"
                            data-aos-delay="200"
                        >
                            <p>{texts.about.quote}</p>
                        </blockquote>
                        {/* End Quote */}
                    </div>
                </section>
                {/* /About Section */}

                {/* Skills Section */}
                <section id="skills" className="skills section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>{texts.skills.title}</h2>
                        <p>
                            {texts.skills.subtitle}
                        </p>
                    </div>

                    <div className="container py-5">
                        <div className="row g-3">
                            {/* Ligne 1 */}
                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fab fa-html5 fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">HTML5</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fab fa-css3-alt fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">CSS3</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fas fa-wind fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">Tailwind CSS</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fab fa-bootstrap fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">Bootstrap</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fab fa-js fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">JavaScript</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fab fa-react fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">React.js</p>
                                </div>
                            </div>

                            {/* Ligne 2 */}
                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <img
                                        src="assets/icons/next_js.svg"
                                        alt="Next.js"
                                        className="mb-2"
                                        style={{ width: "40px", height: "40px" }}
                                    />
                                    <p className="mb-0 small">Next.js</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <img
                                        src="assets/icons/node_js.svg"
                                        alt="Node.js"
                                        className="mb-2"
                                        style={{ width: "40px", height: "40px" }}
                                    />
                                    <p className="mb-0 small">Node.js</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <img
                                        src="assets/icons/express_js.svg"
                                        alt="Express.js"
                                        className="mb-2"
                                        style={{
                                            width: "60px",
                                            height: "30px",
                                            objectFit: "contain",
                                        }}
                                    />
                                    <p className="mb-0 small">Express.js</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fab fa-php fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">PHP</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fab fa-laravel fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">Laravel</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <img
                                        src="assets/icons/symfony.svg"
                                        alt="Symfony"
                                        className="mb-2"
                                        style={{
                                            width: "60px",
                                            height: "30px",
                                            objectFit: "contain",
                                        }}
                                    />
                                    <p className="mb-0 small">Symfony</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fab fa-python fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">Python</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <img
                                        src="assets/icons/tensorflow.svg"
                                        alt="TensorFlow"
                                        className="mb-2"
                                        style={{
                                            width: "60px",
                                            height: "30px",
                                            objectFit: "contain",
                                        }}
                                    />
                                    <p className="mb-0 small">TensorFlow</p>
                                </div>
                            </div>

                            {/* Ligne 3 */}
                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fab fa-java fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">Java</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fas fa-database fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">MySQL</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fas fa-leaf fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">MongoDB</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <img
                                        src="\assets/icons/oracle.svg"
                                        alt="Oracle"
                                        className="mb-2"
                                        style={{ width: "40px", height: "40px" }}
                                    />
                                    <p className="mb-0 small">Oracle</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fab fa-git-alt fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">Git</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fas fa-laptop-code fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">Visual Studio</p>
                                </div>
                            </div>

                            {/* Ligne 4 */}
                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <i className="fas fa-code fs-1 text-info mb-2"></i>
                                    <p className="mb-0 small">VS Code</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <img
                                        src="assets/icons/scrum.png"
                                        alt="Scrum"
                                        className="mb-2"
                                        style={{ width: "40px", height: "40px" }}
                                    />
                                    <p className="mb-0 small">Scrum</p>
                                </div>
                            </div>

                            <div
                                className="col-6 col-md-3 col-lg-2"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="d-flex flex-column align-items-center justify-content-center bg-black border border-secondary rounded-4 shadow-sm p-4 h-100">
                                    <img
                                        src="assets/icons/xampp.svg"
                                        alt="XAMPP"
                                        className="mb-2"
                                        style={{ width: "40px", height: "40px" }}
                                    />
                                    <p className="mb-0 small">XAMPP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* /Skills Section */}
            </main>
        </>
    );
}
export default About;
