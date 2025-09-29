// src/pages/Contact.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import translations from "../data/translations";
import '../assets/css/contact.css'
import SEO from "../components/SEO";

export default function Contact({ language }) {
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
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/assets/vendor/php-email-form/validate.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const texts = translations[language];
    return (
        <>
            {/* SEO dynamique pour Contact */}
            <SEO language={language} pageKey="contact" />
            
            <main className="main">
                {/* Contact Section */}
                <section id="contact" className="contact section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>{texts.contact.sectionTitle}</h2>
                        <p>{texts.contact.sectionDescription}</p>
                    </div>{/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row g-4 g-lg-5">
                            <div className="col-lg-5">
                                <div className="info-box" data-aos="fade-up" data-aos-delay={200}>
                                    <h3>{texts.contact.contactInfoTitle}</h3>
                                    <p>{texts.contact.contactInfoDescription}</p>
                                    <div className="info-item" data-aos="fade-up" data-aos-delay={300}>
                                        <div className="icon-box">
                                            <i className="bi bi-geo-alt" />
                                        </div>
                                        <div className="content">
                                            <h4>{texts.contact.locationTitle}</h4>
                                            <p>{texts.contact.location}</p>
                                        </div>
                                    </div>
                                    <div className="info-item" data-aos="fade-up" data-aos-delay={400}>
                                        <div className="icon-box">
                                            <i className="bi bi-telephone" />
                                        </div>
                                        <div className="content">
                                            <h4>{texts.contact.phoneTitle}</h4>
                                            <p style={{ direction: 'ltr' }}>{texts.contact.phone}</p>
                                        </div>
                                    </div>
                                    <div className="info-item" data-aos="fade-up" data-aos-delay={500}>
                                        <div className="icon-box">
                                            <i className="bi bi-envelope" />
                                        </div>
                                        <div className="content">
                                            <h4>{texts.contact.emailTitle}</h4>
                                            <p>{texts.contact.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="contact-form" data-aos="fade-up" data-aos-delay={300}>
                                    <h3>{texts.contact.formTitle}</h3>
                                    <p>{texts.contact.formDescription}</p>
                                    <form onSubmit={(e) => e.preventDefault()} action={"/contact.php"} method="POST" className="php-email-form" data-aos="fade-up" data-aos-delay={200}>
                                        <div className="row gy-4">
                                            <div className="col-md-6">
                                                <input type="text" name="name" className="form-control" placeholder={texts.contact.formFields.name} required />
                                            </div>
                                            <div className="col-md-6 ">
                                                <input type="email" className="form-control" name="email" placeholder={texts.contact.formFields.email} required />
                                            </div>
                                            <div className="col-12">
                                                <input type="text" className="form-control" name="subject" placeholder={texts.contact.formFields.subject} required />
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control" name="message" rows={6} placeholder={texts.contact.formFields.message} required defaultValue={""} />
                                            </div>
                                            <div className="col-12 text-center">
                                                <div className="loading">{texts.contact.formFields.loading}</div>
                                                <div className="error-message">{texts.contact.formFields.errorMessage}</div>
                                                <div className="sent-message">{texts.contact.formFields.sentMessage}</div>
                                                <button type="submit" className="btn btn-send">{texts.contact.formFields.sendButton}</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Contact Section */}
            </main>
        </>
    )
}
