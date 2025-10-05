// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";
import translations from "../data/translations";

const SEO = ({ language, pageKey }) => {
    const siteUrl = "https://issalmouad.com";
    const t = translations[language] || translations["en"];

    const fixedTitle = t?.seo?.[pageKey]?.title || "Issalmou Adaaiche";

    const pageDescription =
        t?.seo?.[pageKey]?.description || t.metaDescription;
    const pageKeywords =
        t?.seo?.[pageKey]?.keywords ||
        "portfolio, web developer, AI, Machine Learning, Deep Learning, React, Node.js, JavaScript, Python, Artificial Intelligence, Full-Stack Developer, Issalmou Adaaiche";

    // Couleurs CSS (protégées contre SSR)
    let backgroundColor = "#101a20";
    let accentColor = "#1387c1";
    let headingColor = "#ffffff";

    if (typeof window !== "undefined") {
        const rootStyles = getComputedStyle(document.documentElement);
        backgroundColor =
            rootStyles.getPropertyValue("--background-color")?.trim() || backgroundColor;
        accentColor =
            rootStyles.getPropertyValue("--accent-color")?.trim() || accentColor;
        headingColor =
            rootStyles.getPropertyValue("--heading-color")?.trim() || headingColor;
    }

    // JSON-LD WebSite + WebPage + Person
    const schemaOrgData = [
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Issalmou Adaaiche Portfolio",
            "url": siteUrl,
            "inLanguage": language,
            "description": "Portfolio officiel de Issalmou Adaaiche en plusieurs langues (Français, Anglais, Arabe)."
        },
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": fixedTitle,
            "description": pageDescription,
            "url": `${siteUrl}/${language}`,
            "inLanguage": language,
            "isPartOf": {
                "@type": "WebSite",
                "url": siteUrl,
                "name": "Issalmou Adaaiche Portfolio"
            },
            "author": {
                "@type": "Person",
                "name": "Issalmou Adaaiche",
                "url": siteUrl,
                "image": `${siteUrl}/assets/img/profile/profile.png`
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Issalmou Adaaiche",
            "url": siteUrl,
            "sameAs": [
                "https://github.com/issalmou",
                "https://linkedin.com/in/issalmouadaaiche",
                "https://www.facebook.com/isalmo.idaaiche",
                "https://www.instagram.com/isalmoad_49/"
            ],
            "jobTitle": "Étudiant en Master - Systèmes d’Information et Systèmes Intelligents (M2SI)",
            "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "INSEA - Institut National de Statistique et d'Économie Appliquée",
                "url": "https://www.insea.ac.ma/"
            },
            "knowsAbout": t?.seo?.knowsAbout || [
                "Full-Stack Web Development",
                "Information Systems",
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Cloud Computing"
            ]
        }
    ];


    return (
        <Helmet>
            <html lang={language} />
            <title>{fixedTitle}</title>

            <meta name="description" content={pageDescription} key={pageDescription} />
            <meta name="keywords" content={pageKeywords} key={pageKeywords} />
            <link rel="canonical" href={`${siteUrl}/${language}`} />

            <link rel="alternate" href={`${siteUrl}/fr`} hrefLang="fr" />
            <link rel="alternate" href={`${siteUrl}/en`} hrefLang="en" />
            <link rel="alternate" href={`${siteUrl}/ar`} hrefLang="ar" />
            <link rel="alternate" href={siteUrl} hrefLang="x-default" />

            <meta property="og:title" content={fixedTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${siteUrl}/${language}`} />
            <meta property="og:site_name" content="Issalmou Adaaiche Portfolio" />
            <meta property="og:image" content={`${siteUrl}/assets/img/seo-preview.jpg`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fixedTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={`${siteUrl}/assets/img/seo-preview.jpg`} />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=5"
            />
            <meta name="theme-color" content={backgroundColor} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content={accentColor} />
            <meta name="msapplication-navbutton-color" content={headingColor} />

            <script type="application/ld+json">
                {JSON.stringify(schemaOrgData)}
            </script>
        </Helmet>
    );
};

export default SEO;
