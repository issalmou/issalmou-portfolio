// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";
import translations from "../data/translations";

const SEO = ({ language, pageKey }) => {
    const siteUrl = "https://issalmouadaaiche.com";
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

    // JSON-LD enrichi
    const schemaOrgWebPage = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        name: fixedTitle,
        description: pageDescription,
        url: `${siteUrl}/${language}`,
        inLanguage: language,
        author: {
            "@type": "Person",
            name: "Issalmou Adaaiche",
            url: siteUrl,
            sameAs: [
                "https://github.com/issalmou",
                "https://linkedin.com/in/issalmouadaaiche",
            ],
        },
    };

    return (
        <Helmet>
            <html lang={language} />
            <title>{fixedTitle}</title>

            <meta name="description" content={pageDescription} key={pageDescription}/>
            <meta name="keywords" content={pageKeywords} key={pageKeywords}/>
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
            <meta property="og:image" content={`${siteUrl}/images/og-image.jpg`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fixedTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={`${siteUrl}/images/og-image.jpg`} />

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=5"
            />
            <meta name="theme-color" content={backgroundColor} />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content={accentColor} />
            <meta name="msapplication-navbutton-color" content={headingColor} />

            <script type="application/ld+json">
                {JSON.stringify(schemaOrgWebPage)}
            </script>
        </Helmet>
    );
};

export default SEO;
