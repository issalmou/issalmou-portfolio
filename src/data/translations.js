import Projects from "../pages/Projects"

const translations = {
    en: {
        metaDescription: "Portfolio of Issalmou Adaaiche, Full-Stack Developer and AI enthusiast.",
        seo: {
            knowsAbout: [
                "Full-Stack Web Development",
                "Information Systems",
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Cloud Computing",
                "SEO"
            ],
            home: {
                title: "Issalmou Adaaiche",
                description: "Welcome to my personal portfolio. Explore my projects in web development, AI, Machine Learning, and Deep Learning.",
                keywords: "portfolio, home, Issalmou Adaaiche, web developer, AI, React, JavaScript, Python, Full-Stack Developer"
            },
            about: {
                title: "About Me - Issalmou Adaaiche",
                description: "Learn more about Issalmou Adaaiche, my skills, experiences, and achievements.",
                keywords: "about, Issalmou Adaaiche, skills, experience, portfolio, web developer, AI"
            },
            resume: {
                title: "Resume - Issalmou Adaaiche",
                description: "Check my professional resume including my education, skills, and work experience.",
                keywords: "resume, CV, Issalmou Adaaiche, education, skills, experience, portfolio"
            },
            services: {
                title: "Services - Issalmou Adaaiche",
                description: "Discover the services I offer including web development, AI solutions, and consulting.",
                keywords: "services, web development, AI, consulting, Issalmou Adaaiche"
            },
            projects: {
                title: "Projects - Issalmou Adaaiche",
                description: "Explore my projects in web development, AI, Machine Learning, and Deep Learning.",
                keywords: "projects, portfolio, Issalmou Adaaiche, web development, AI, ML, DL"
            },
            agep: {
                title: "AGEP – Paramedical Teams Management Application",
                description: "Streamline paramedical team management with automated HR workflows and performance tracking."
            },
            esticar: {
                title: "EstiCar – Car Price Prediction Platform",
                description: "Predict car prices with machine learning using brand, model, year, and mileage."
            },
            wiredwave: {
                title: "WiredWave – Electronic Products Platform",
                description: "Modern React front-end with Amazon API integration for smooth product browsing and shopping."
            },
            speechly: {
                title: "Speechly – Smart Voice Transcription",
                description: "Convert audio to text quickly and reliably using advanced Speech-to-Text."
            }
            ,
            contact: {
                title: "Contact - Issalmou Adaaiche",
                description: "Get in touch with me for collaborations, projects, or inquiries.",
                keywords: "contact, email, portfolio, Issalmou Adaaiche"
            },
            chatbot: {
                title: "AI Assistant - Issalmou Adaaiche",
                description: "Interact with Issalmou Adaaiche's AI Assistant. Ask questions about web development, artificial intelligence, Machine Learning, Deep Learning, and more.",
                keywords: "AI assistant, chatbot, Issalmou Adaaiche, web development, artificial intelligence, Machine Learning, Deep Learning, portfolio"
            }
        },

        nav: {
            home: "Home",
            about: "About",
            resume: "Resume",
            services: "Services",
            projects: "Projects",
            contact: "Contact",
            chatbot: "AI Assistant"
        },

        footer: {
            rights: "All Rights Reserved.",
        },

        heroName: "Issalmou Adaaiche",

        home: {
            heroTitle: "Hello, I'm",
            heroRoles: "Full Stack Web Developer, Data Scientist",
            heroType: "Creative",
            heroDescription: "Full-Stack Developer passionate about web and AI, I combine creativity and precision to design innovative solutions. Curious and motivated, I enjoy tackling technical challenges while continuously learning and evolving in the digital field.",
            contactBtn: "Contact Me",
            aboutBtn: "About Me",
            servicesTitle: "Expertise",
            servicesDescription: "Here are the tools and technologies I use to develop digital solutions.",
            services: [
                { title: "Frontend Development", description: "Building responsive and interactive user interfaces using React and Next.js.", icon: "bi-brush", fade: "fade-right" },
                { title: "Backend Development", description: "Creating robust server-side applications and APIs with Node.js, Express, and MongoDB.", icon: "bi-server", fade: "fade-left" },
                { title: "Full-Stack Expertise", description: "Seamless integration of frontend and backend technologies for scalable solutions.", icon: "bi-layers", fade: "fade-right" },
                { title: "Database Management", description: "Designing and managing efficient databases using SQL and NoSQL technologies.", icon: "bi-database", fade: "fade-left" },
                { title: "Version Control", description: "Using Git and GitHub for smooth collaboration and project management.", icon: "bi-git", fade: "fade-right" },
                { title: "Cloud Deployment", description: "Deploying and managing web apps on Vercel, Netlify, and AWS.", icon: "bi-cloud-upload", fade: "fade-left" },
                { title: "AI Expertise", description: "Designing and deploying ML/DL models to extract insights and automate decisions.", icon: "bi-cpu", fade: "fade-right" },
                { title: "Performance Optimization", description: "Optimizing load times, smooth transitions, and user experience.", icon: "bi-speedometer2", fade: "fade-left" }
            ],
            statsTitle: "Ready to Start Your Project?",
            statsDescription: "Whether you’re looking for a modern web application, an AI-powered solution, or a predictive model, I’m here to turn your ideas into reality. Let’s collaborate to build innovative and impactful digital experiences together.",
            viewServicesBtn: "View Services",
            getInTouchBtn: "Get in Touch",
            vision: "Vision",
            code: "Code",
            ideas: "Ideas"
        },

        about: {
            title: "About",
            subtitle: "Explore my journey, skills, and the projects that inspire me.",
            greeting: "Hello there",
            headline: "I'm Issalmou - a curious and passionate developer who loves turning ideas into real-world digital solutions",
            description: "Combining creativity with technical expertise, I work on everything from full-stack web development to AI and data-driven projects. I enjoy solving complex problems with elegant and efficient solutions, and I’m always exploring new technologies to build applications that are not only functional but truly meaningful for users.",
            quote: "\"Technology is my tool, innovation is my mindset.\"",
            viewWork: "View My Work",
            downloadCV: "Download Resume"
        },

        skills: {
            title: "Skills",
            subtitle: "Skills that empower me to build, innovate, and solve real-world problems."
        },

        resume: {
            title: "Resume",
            subtitle: "Discover my professional journey and academic background.",
            educationTitle: "Education",
            education: [
                {
                    degree: "Master’s student in Information Systems and Intelligent Systems (M2SI)",
                    period: "2025 - Present",
                    institution: "National Institute of Statistics and Applied Economics (INSEA) — Rabat, Morocco"
                },
                {
                    degree: "Bachelor’s Degree in Artificial Intelligence (Excellence Program)",
                    period: "2024 - 2025",
                    institution: "Hassan II University — Casablanca, Morocco"
                },
                {
                    degree: "Specialized Technician in Digital Development, Web Full-Stack Option",
                    period: "2022 - 2024",
                    institution: "City of Trades and Skills (CMC) — Laayoune, Morocco"
                }
            ],
            skillsTitle: "Professional Skills",
            skillsData: [
                { name: "Frontend Development", value: 90 },
                { name: "Backend Development", value: 95 },
                { name: "Data & AI", value: 93 },
                { name: "Cloud & DevOps", value: 85 },
            ],
            internshipsTitle: "Professional Internships",
            internships: [
                {
                    role: "Full-Stack Web Developer Intern",
                    duration: "3-month",
                    company: "Polyclinique Internationale — Laayoune, Morocco",
                    responsibilities: [
                        "Developed an application to manage the medical team, including department heads, the medical director, the care director, and HR.",
                        "Acted as a liaison between the technical team and clinic representatives, ensuring smooth communication.",
                        "Participated in project planning and implementation, contributing to workflow optimization and overall efficiency."
                    ]
                },
                {
                    role: "IT & Administrative Systems Intern",
                    duration: "2-month",
                    company: "Al Hikma Medical Center — Laayoune, Morocco",
                    responsibilities: [
                        "Analyzed and resolved issues related to the **ZKBiotime application**, ensuring accurate data management.",
                        "Implemented efficient department rotations and created dedicated accounts to optimize workflow.",
                        "Provided training sessions for department managers to ensure proper use of the system.",
                        "Proactively monitored and corrected discrepancies in absence and delay reports."
                    ]
                }
            ],
            statsTitle: "Discover My Work",
            statsDescription: "From web development to AI-powered applications, explore the projects I’ve developed with passion and precision. Each project reflects creativity, problem-solving, and innovation.",
            viewProjectsBtn: "View My Projects",
            backHomeBtn: "Back to Home"
        },

        services: {
            title: "Services",
            subtitle: "Modern and innovative digital solutions, tailored to your needs and goals.",
            items: [
                {
                    title: "Web Development",
                    desc: "Custom websites and web applications tailored to your specific needs and goals.",
                    icon: "bi-globe",
                    fade: 120,
                    list: [
                        "Responsive Design",
                        "Frontend & Backend Development",
                        "CMS Integration",
                        "E-commerce Solutions"
                    ]
                }, {
                    title: "Artificial Intelligence",
                    desc: "Innovative AI solutions to analyze data, make predictions, and enhance decision-making.",
                    icon: "bi-robot",
                    fade: 180,
                    list: [
                        "Machine Learning & Deep Learning",
                        "Computer Vision & Image Classification",
                        "RNN & LSTM Models",
                        "Transfer Learning & Fine-Tuning",
                        "Feature Extraction & Data Representation",
                        "Predictive Analytics & Data Modeling"
                    ]
                }, {
                    title: "Custom Solutions",
                    desc: "Designing intelligent and scalable software solutions tailored to the specific needs of businesses. Whether it’s modern web applications, artificial intelligence models, high-performance backend systems, or data science tools.",
                    icon: "bi-tools",
                    fade: 240,
                    list: [
                        "Application & Web Development",
                        "Integration with Third-Party Services",
                        "Scalability"
                    ]
                }
            ],
            process: {
                title: "My Work Process",
                steps: [{
                    title: "Discovery",
                    desc: "Deeply analyzing your goals, needs, and vision to ensure a clear understanding of the project scope.",
                    fade: 200
                }, {
                    title: "Planification",
                    desc: "Developing a detailed project plan, specifying timelines, objectives, and the appropriate technical stack.",
                    fade: 300
                }, {
                    title: "Development",
                    desc: "Transforming ideas into functional solutions with iterative updates and continuous feedback.",
                    fade: 400
                }, {
                    title: "Testing & Delivery",
                    desc: "Ensuring quality through testing, then launching the project with reliable deployment and support.",
                    fade: 500
                }
                ]
            },
            cta: {
                title: "Ready to Start Your Project?",
                desc: "Whether you’re looking for a modern web application, an AI-powered solution, or a predictive model, I’m here to turn your ideas into reality. Let’s collaborate to build innovative and impactful digital experiences together.",
                button: "Get in Touch"
            }
        },

        projects: {
            title: "Projects",
            subtitle: "These projects reflect my journey as a developer, from conception to implementation.",
            allbtn: "All",
            devbtn: "Web Development",
            aibtn: "Artificial Intelligence",
            btnviewinfo: "View Info",
            projects_details: [
                {
                    title: "AGEP – Paramedical Teams Management Application",
                    shortName: "agep",
                    company: "International Polyclinic",
                    description: "A web platform designed to streamline the management of paramedical teams at the International Polyclinic Laayoune. It automates HR processes, improves internal communication, and facilitates performance tracking for medical staff.",
                    projectOverview: "This web platform was developed to optimize the management of paramedical teams at the International Polyclinic Laayoune. It streamlines HR workflows, enhances internal communication, and enables efficient tracking of staff performance, helping the clinic operate more effectively.",
                    theChallenge: "Create a system to effectively manage schedules, attendance, and performance of the paramedical team while ensuring smooth communication between department heads, the medical director, and HR.",
                    theSolution: "A web-based platform that automates HR processes, organizes team schedules, and facilitates seamless communication and performance tracking for the paramedical staff.",
                    date: "July 2024",
                    category: "devweb",
                    keyFeatures: [
                        "Automated HR Processes",
                        "Performance Monitoring",
                        "Secure Authentication",
                        "Customizable Dashboards",
                        "Data Export Options",
                        "Multi-device Support"
                    ],
                    type: "Web Development",
                    technologies: ["HTML/CSS", "Bootstrap", "JavaScript", "Laravel", "MySQL"],
                    images: [
                        "/assets/img/projects/poly.png",
                        "/assets/img/projects/polydesktop.png",
                        "/assets/img/projects/poly_ipad.png",
                        "/assets/img/projects/polyphone1.png"
                    ],
                    externalUrl: null,
                    seo: {
                        title: "AGEP – Paramedical Teams Management Application",
                        description: "Streamline paramedical team management with automated HR workflows and performance tracking."
                    }
                },
                {
                    title: "EstiCar – Car Price Prediction Platform",
                    shortName: "esticar",
                    company: null,
                    description: "A car price prediction project using machine learning. The application estimates a vehicle’s value based on characteristics such as brand, model, year, mileage, and more.",
                    projectOverview: "Analyzes vehicle characteristics (brand, model, year, mileage, etc.) to provide accurate price estimations. The development process included data collection and cleaning, model training, and the creation of an intuitive user interface.",
                    theChallenge: "Dynamic market prices influenced by multiple factors make determining a fair price both time-consuming and uncertain.",
                    theSolution: "Leverages machine learning to predict prices from key features. Users can input details and receive instant, reliable estimates through an intuitive user interface.",
                    date: "May 2025",
                    category: "ai",
                    keyFeatures: [
                        "Quick Price Estimation",
                        "Multiple Criteria Considered",
                        "Helps Buying or Selling",
                        "Reliable Predictions",
                        "Time-Saving",
                        "Multi-device Support"
                    ],
                    type: "Artificial Intelligence",
                    technologies: ["HTML/CSS", "Bootstrap", "JavaScript", "Python", "Flask"],
                    images: [
                        "/assets/img/projects/esticar.png",
                        "/assets/img/projects/esticar_computer.png",
                        "/assets/img/projects/esticar_ipad.png",
                        "/assets/img/projects/esticar_phone.png"
                    ],
                    externalUrl: "https://issalmou.github.io/EstiCar/",
                    seo: {
                        title: "EstiCar – Car Price Prediction Platform",
                        description: "Predict car prices with machine learning using brand, model, year, and mileage."
                    }
                },
                {
                    title: "WiredWave – Electronic Products Platform",
                    shortName: "wiredwave",
                    company: null,
                    description: "A web project developed with React.js, using the Amazon API to display electronic products. The application allows users to browse products, access a purchase link for each item, log in, and manage their shopping cart. The project focuses on a modern, responsive interface and a smooth user experience.",
                    projectOverview: "Integrates the Amazon API to display products. Users can browse items, access direct purchase links, log in, and manage their cart within a modern, responsive user interface.",
                    theChallenge: "E-commerce platforms often struggle with providing a fast, intuitive, and visually appealing browsing experience. Integrating third-party APIs while maintaining performance, ensuring responsive design, and managing user accounts and shopping carts in real time can be complex and challenging. Additionally, delivering accurate product data and smooth interactions is essential to keep users engaged.",
                    theSolution: "Leverage React.js for a dynamic responsive front-end and the Amazon API for real-time product data with seamless interactions.",
                    date: "January 2024",
                    category: "devweb",
                    keyFeatures: [
                        "Product Browsing",
                        "Direct Purchase Links",
                        "User Authentication",
                        "Shopping Cart Management",
                        "Smooth User Experience",
                        "Multi-device Support"
                    ],
                    type: "Web Development",
                    technologies: ["HTML/CSS", "Bootstrap", "React js"],
                    images: [
                        "/assets/img/projects/wiredwave.png",
                        "/assets/img/projects/wiredwave_computer.png",
                        "/assets/img/projects/wiredwave_ipad.png",
                        "/assets/img/projects/wiredwave_phone.png"
                    ],
                    externalUrl: "https://wiredwave.netlify.app/",
                    seo: {
                        title: "WiredWave – Electronic Products Platform",
                        description: "Modern React front-end with Amazon API integration for smooth product browsing and shopping."
                    }
                },
                {
                    title: "Speechly – Smart Voice Transcription",
                    shortName: "speechly",
                    company: null,
                    description: "A project using Speech-to-Text technology to convert audio files into text. The application allows users to upload audio files, receive automatic transcriptions, and view the results clearly. The project emphasizes accuracy and a user-friendly interface.",
                    projectOverview: "Converts audio recordings into written text efficiently with a clear, readable output and focus on usability.",
                    theChallenge: "Converting spoken language into text presents multiple challenges, including handling different accents, speech speeds, background noise, and audio quality. Ensuring accurate transcription while maintaining an intuitive and easy-to-use interface is critical for a seamless user experience. Users need a solution that can quickly and reliably transform audio into text without requiring technical knowledge.",
                    theSolution: "The project addresses these challenges by implementing advanced Speech-to-Text algorithms capable of understanding various speech patterns and audio conditions. Users can simply upload their audio files and receive accurate transcriptions instantly. The application’s intuitive design makes it accessible to everyone, enabling fast, reliable, and effortless conversion of speech into text.",
                    date: "July 2025",
                    category: "ai",
                    keyFeatures: [
                        "Automatic Transcription",
                        "High Accuracy",
                        "Record Audio",
                        "Audio Upload",
                        "Time-Saving",
                        "Multi-device Support"
                    ],
                    type: "Artificial Intelligence",
                    technologies: ["HTML/CSS", "Bootstrap", "JavaScript", "Python", "FastAPI"],
                    images: [
                        "/assets/img/projects/speechly.png",
                        "/assets/img/projects/speechly_computer.png",
                        "/assets/img/projects/speechly_ipad.png",
                        "/assets/img/projects/speechly_phone.png"
                    ],
                    externalUrl: "https://issalmou.github.io/Speechly/",
                    seo: {
                        title: "Speechly – Smart Voice Transcription",
                        description: "Convert audio to text quickly and reliably using advanced Speech-to-Text."
                    }
                }
            ],

        },

        projectDetails: {
            projectOverview: "Project Overview",
            theChallenge: "The Challenge",
            theSolution: "The Solution",
            keyFeatures: "Key Features",
            backToProjects: "Back to Projects",
            viewLiveProject: "View Live Project"
        },

        contact: {
            sectionTitle: "Contact",
            sectionDescription: "Feel free to reach out for collaborations, opportunities, or any inquiries.",
            contactInfoTitle: "Contact Info",
            contactInfoDescription: "I’m always open to new opportunities and conversations. Let’s connect!",
            locationTitle: "Our Location",
            location: "Laayoune, Morocco",
            phoneTitle: "Phone Number",
            phone: "+212 640065118",
            emailTitle: "Email Address",
            email: "contact@issalmouad.com",
            formTitle: "Get In Touch",
            formDescription: "Get in touch and let’s create something great together.",
            formFields: {
                name: "Your Name",
                email: "Your Email",
                subject: "Subject",
                message: "Message",
                sendButton: "Send Message",
                loading: "Loading",
                sentMessage: "Your message has been sent. Thank you!",
                errorMessage: "There was an error sending your message."
            }
        },

        notFound: {
            title: "Oops! Page Not Found",
            description: "The page you’re looking for doesn’t exist. It might have been moved, renamed, or never existed. ",
            homeButton: "Back to Home"
        },

        chatbot: {
            placeholder: "Type your message...",
            assistantWelcome: "How can I help you today?",
            assistantError: "Sorry, I couldn't answer.",
            assistantConnectionError: "Server connection error.",
            slogan: "Always here to help and guide you.",
            title: "Issalmou Assistant AI",
        }
    },
    fr: {
        metaDescription: "Portfolio de Issalmou Adaaiche, développeur Full-Stack et passionné d'IA.",
        seo: {
            knowsAbout: [
                "Développement Web Full-Stack",
                "Systèmes d’Information",
                "Intelligence Artificielle",
                "Apprentissage Automatique",
                "Deep Learning",
                "Cloud Computing",
                "SEO"
            ],
            home: {
                title: "Issalmou Adaaiche",
                description: "Bienvenue sur mon portfolio personnel. Découvrez mes projets en développement web, IA, Machine Learning et Deep Learning.",
                keywords: "portfolio, accueil, Issalmou Adaaiche, développeur web, IA, React, JavaScript, Python, Full-Stack Developer"
            },
            about: {
                title: "À propos - Issalmou Adaaiche",
                description: "En savoir plus sur Issalmou Adaaiche, mes compétences, expériences et réalisations.",
                keywords: "à propos, Issalmou Adaaiche, compétences, expérience, portfolio, développeur web, IA"
            },
            resume: {
                title: "CV - Issalmou Adaaiche",
                description: "Consultez mon CV professionnel incluant mon parcours académique, mes compétences et mon expérience.",
                keywords: "CV, parcours, Issalmou Adaaiche, éducation, compétences, expérience, portfolio"
            },
            services: {
                title: "Services - Issalmou Adaaiche",
                description: "Découvrez les services que je propose, incluant développement web, solutions IA et consulting.",
                keywords: "services, développement web, IA, consulting, Issalmou Adaaiche"
            },
            projects: {
                title: "Projets - Issalmou Adaaiche",
                description: "Explorez mes projets en développement web, IA, Machine Learning et Deep Learning.",
                keywords: "projets, portfolio, Issalmou Adaaiche, développement web, IA, ML, DL"
            },

            agep: {
                title: "AGEP – Application de gestion des équipes paramédicales",
                description: "Optimisez la gestion des équipes paramédicales avec des workflows RH automatisés et un suivi des performances."
            },
            esticar: {
                title: "EstiCar – Plateforme de prédiction des prix de voitures",
                description: "Prédisez les prix des voitures avec le machine learning en utilisant marque, modèle, année et kilométrage."
            },
            wiredwave: {
                title: "WiredWave – Plateforme de produits électroniques",
                description: "Front-end React moderne avec intégration de l'API Amazon pour une navigation fluide des produits."
            },
            speechly: {
                title: "Speechly – Transcription vocale intelligente",
                description: "Convertissez rapidement et fiablement l’audio en texte grâce à la technologie Speech-to-Text avancée."
            }
            ,
            contact: {
                title: "Contact - Issalmou Adaaiche",
                description: "Contactez-moi pour des collaborations, projets ou toute demande d'information.",
                keywords: "contact, email, portfolio, Issalmou Adaaiche"
            },
            chatbot: {
                title: "Assistant IA - Issalmou Adaaiche",
                description: "Interagissez avec l'Assistant IA d'Issalmou Adaaiche. Posez vos questions sur le développement web, l'intelligence artificielle, le Machine Learning et plus encore.",
                keywords: "assistant IA, chatbot, Issalmou Adaaiche, développement web, intelligence artificielle, Machine Learning, Deep Learning, portfolio"
            }
        },

        nav: {
            home: "Accueil",
            about: "À propos",
            resume: "CV",
            services: "Services",
            projects: "Projets",
            contact: "Contact",
            chatbot: "Assistant IA"
        },

        footer: {
            rights: "Tous droits réservés.",
        },

        heroName: "Issalmou Adaaiche",

        home: {
            heroTitle: "Bonjour, je suis",
            heroRoles: "Développeur Full Stack, Data Scientist",
            heroType: "Créative",
            heroDescription: "Développeur Full-Stack passionné par le web et l'IA, je combine créativité et précision pour concevoir des solutions innovantes. Curieux et motivé, j'aime relever les défis techniques tout en apprenant et évoluant continuellement dans le domaine digital.",
            contactBtn: "Contactez-moi",
            aboutBtn: "À propos",
            servicesTitle: "Expertise",
            servicesDescription: "Voici les outils et technologies que j'utilise pour développer des solutions digitales.",
            services: [
                { title: "Développement Frontend", description: "Création d'interfaces utilisateur réactives et interactives avec React et Next.js.", icon: "bi-brush" },
                { title: "Développement Backend", description: "Création d'applications serveur robustes et d'API avec Node.js, Express et MongoDB.", icon: "bi-server" },
                { title: "Expertise Full-Stack", description: "Intégration fluide des technologies frontend et backend pour des solutions évolutives.", icon: "bi-layers" },
                { title: "Gestion de Bases de Données", description: "Conception et gestion de bases de données efficaces avec SQL et NoSQL.", icon: "bi-database" },
                { title: "Contrôle de Version", description: "Utilisation de Git et GitHub pour une collaboration et une gestion de projet efficaces.", icon: "bi-git" },
                { title: "Déploiement Cloud", description: "Déploiement et gestion d'applications web sur Vercel, Netlify et AWS.", icon: "bi-cloud-upload" },
                { title: "Expertise IA", description: "Conception et déploiement de modèles ML/DL pour extraire des informations et automatiser les décisions.", icon: "bi-cpu" },
                { title: "Optimisation de la Performance", description: "Optimisation des temps de chargement, transitions fluides et expérience utilisateur.", icon: "bi-speedometer2" }
            ],
            statsTitle: "Prêt à démarrer votre projet ?",
            statsDescription: "Que vous recherchiez une application web moderne, une solution IA ou un modèle prédictif, je suis là pour transformer vos idées en réalité. Collaborons pour créer des expériences digitales innovantes et impactantes.",
            viewServicesBtn: "Voir les services",
            getInTouchBtn: "Contactez-moi",
            vision: "Vision",
            code: "Code",
            ideas: "Idées"
        },

        about: {
            title: "À propos",
            subtitle: "Découvrez mon parcours, mes compétences et les projets qui m'inspirent.",
            greeting: "Bonjour",
            headline: "Je suis Issalmou - un développeur curieux et passionné qui aime transformer les idées en solutions digitales concrètes",
            description: "Alliant créativité et expertise technique, je travaille sur tout, du développement web full-stack aux projets d'IA et orientés données. J'aime résoudre des problèmes complexes avec des solutions élégantes et efficaces, tout en explorant continuellement de nouvelles technologies pour créer des applications fonctionnelles et réellement utiles.",
            quote: "\"La technologie est mon outil, l'innovation est mon état d'esprit.\"",
            viewWork: "Voir Mes Projets",
            downloadCV: "Télécharger le CV"
        },

        skills: {
            title: "Compétences",
            subtitle: "Compétences qui me permettent de construire, innover et résoudre des problèmes réels."
        },

        resume: {
            title: "CV",
            subtitle: "Découvrez mon parcours professionnel et mon parcours académique.",
            educationTitle: "Formation",
            education: [
                {
                    degree: "Étudiant en Master Systèmes d'Information et Systèmes Intelligents (M2SI)",
                    period: "2025 - Présent",
                    institution: "Institut National de Statistique et d'Économie Appliquée (INSEA) — Rabat, Maroc"
                },
                {
                    degree: "Licence en Intelligence Artificielle (Programme Excellence)",
                    period: "2024 - 2025",
                    institution: "Université Hassan II — Casablanca, Maroc"
                },
                {
                    degree: "Technicien Spécialisé en Développement Digital, option Web Full-Stack",
                    period: "2022 - 2024",
                    institution: "Cité des Métiers et des Compétences (CMC) — Laâyoune, Maroc"
                }
            ],
            skillsTitle: "Compétences Professionnelles",
            skillsData: [
                { name: "Développement Frontend", value: 90 },
                { name: "Développement Backend", value: 95 },
                { name: "Données & IA", value: 93 },
                { name: "Cloud & DevOps", value: 85 },
            ],
            internshipsTitle: "Stages Professionnels",
            internships: [
                {
                    role: "Stagiaire Développeur Web Full-Stack",
                    duration: "3 mois",
                    company: "Polyclinique Internationale — Laâyoune, Maroc",
                    responsibilities: [
                        "Développé une application pour gérer l'équipe médicale, y compris les chefs de département, le directeur médical, le directeur des soins et les RH.",
                        "Servi d'intermédiaire entre l'équipe technique et les représentants de la clinique, garantissant une communication fluide.",
                        "Participé à la planification et à la mise en œuvre du projet, contribuant à l'optimisation du flux de travail et à l'efficacité globale."
                    ]
                },
                {
                    role: "Stagiaire Systèmes Informatiques & Administratifs",
                    duration: "2 mois",
                    company: "Centre Médical Al Hikma — Laâyoune, Maroc",
                    responsibilities: [
                        "Analysé et résolu les problèmes liés à l'application **ZKBiotime**, assurant une gestion précise des données.",
                        "Mis en place des rotations efficaces des départements et créé des comptes dédiés pour optimiser le flux de travail.",
                        "Fournir des sessions de formation aux responsables de département pour garantir une utilisation correcte du système.",
                        "Surveillé et corrigé proactivement les écarts dans les rapports d'absence et de retard."
                    ]
                }
            ],
            statsTitle: "Découvrez Mes Projets",
            statsDescription: "Du développement web aux applications alimentées par l'IA, explorez les projets que j’ai développés avec passion et précision. Chaque projet reflète créativité, résolution de problèmes et innovation.",
            viewProjectsBtn: "Voir Mes Projets",
            backHomeBtn: "Retour à l'Accueil"
        },

        services: {
            title: "Services",
            subtitle: "Des solutions numériques modernes et innovantes, adaptées à vos besoins et objectifs.",
            items: [{
                title: "Développement Web",
                desc: "Sites web et applications personnalisés adaptés à vos besoins spécifiques et objectifs.",
                icon: "bi-globe",
                fade: 120,
                list: [
                    "Design Responsive",
                    "Développement Frontend & Backend",
                    "Intégration CMS",
                    "Solutions E-commerce"
                ]
            }, {
                title: "Intelligence Artificielle",
                desc: "Des solutions IA innovantes pour analyser les données, faire des prédictions et améliorer la prise de décision.",
                icon: "bi-robot",
                fade: 180,
                list: [
                    "Machine Learning & Deep Learning",
                    "Vision par Ordinateur & Classification d’Images",
                    "Modèles RNN & LSTM",
                    "Transfer Learning & Fine-Tuning",
                    "Extraction de Caractéristiques & Représentation des Données",
                    "Analytique Prédictive & Modélisation"
                ]
            }, {
                title: "Solutions Personnalisées",
                desc: "Conception de solutions logicielles intelligentes et évolutives, adaptées aux besoins spécifiques des entreprises. Qu’il s’agisse d’applications web modernes, de modèles d’intelligence artificielle, de systèmes backend performants ou d’outils de data science.",
                icon: "bi-tools",
                fade: 240,
                list: [
                    "Développement d’Applications & Web",
                    "Intégration avec des Services Tiers",
                    "Scalabilité"
                ]
            }
            ],
            process: {
                title: "Mon Processus de Travail",
                steps: [
                    {
                        title: "Découverte",
                        desc: "Analyser en profondeur vos objectifs, besoins et vision pour assurer une compréhension claire du projet.",
                        fade: 200
                    }, {
                        title: "Planification",
                        desc: "Élaborer un plan de projet détaillé en précisant les délais, objectifs et la stack technique appropriée.",
                        fade: 300
                    }, {
                        title: "Développement",
                        desc: "Transformer les idées en solutions fonctionnelles avec des mises à jour itératives et un retour continu.",
                        fade: 400
                    }, {
                        title: "Tests & Livraison",
                        desc: "Assurer la qualité grâce aux tests, puis lancer le projet avec un déploiement fiable et un support continu.",
                        fade: 500
                    }
                ]
            },
            cta: {
                title: "Prêt à Démarrer Votre Projet ?",
                desc: "Que vous recherchiez une application web moderne, une solution IA ou un modèle prédictif, je suis là pour transformer vos idées en réalité. Collaborons pour construire ensemble des expériences numériques innovantes et impactantes.",
                button: "Me Contacter"
            }
        },

        projects: {
            title: "Projets",
            subtitle: "Ces projets reflètent mon parcours en tant que développeur, de la conception à la mise en œuvre.",
            allbtn: "Tous",
            devbtn: "Développement Web",
            aibtn: "Intelligence Artificielle",
            btnviewinfo: "Voir les Infos",
            projects_details: [
                {
                    title: "AGEP – Application de Gestion des Équipes Paramédicales",
                    shortName: "agep",
                    company: "Polyclinique internationale",
                    description: "Une plateforme web conçue pour rationaliser la gestion des équipes paramédicales à la Polyclinique Internationale Laayoune. Elle automatise les processus RH, améliore la communication interne et facilite le suivi des performances du personnel médical.",
                    projectOverview: "Cette plateforme web a été développée pour optimiser la gestion des équipes paramédicales à la Polyclinique Internationale Laayoune. Elle rationalise les flux RH, améliore la communication interne et permet un suivi efficace des performances.",
                    theChallenge: "Créer un système pour gérer efficacement les horaires, la présence et les performances, tout en assurant une communication fluide entre chefs de service, directeur médical et RH.",
                    theSolution: "Une plateforme web qui automatise les processus RH, organise les plannings d’équipe et facilite la communication et le suivi des performances.",
                    date: "Juillet 2024",
                    category: "devweb",
                    keyFeatures: [
                        "Automatisation des processus RH",
                        "Suivi des performances",
                        "Authentification sécurisée",
                        "Tableaux de bord personnalisables",
                        "Options d’exportation de données",
                        "Compatibilité multi-appareils"
                    ],
                    type: "Développement Web",
                    technologies: ["HTML/CSS", "Bootstrap", "JavaScript", "Laravel", "MySQL"],
                    images: [
                        "/assets/img/projects/poly.png",
                        "/assets/img/projects/polydesktop.png",
                        "/assets/img/projects/poly_ipad.png",
                        "/assets/img/projects/polyphone1.png"
                    ],
                    externalUrl: null,
                },
                {
                    title: "EstiCar – Plateforme de Prédiction de Prix des Voitures",
                    shortName: "esticar",
                    company: null,
                    description: "Un projet de prédiction des prix des voitures basé sur le machine learning. L’application estime la valeur d’un véhicule en fonction de caractéristiques telles que la marque, le modèle, l’année, le kilométrage, et d’autres facteurs.",
                    projectOverview: "Analyse des caractéristiques des véhicules (marque, modèle, année, kilométrage, etc.) afin de fournir des estimations précises. Le développement a inclus la collecte et le nettoyage des données, l’entraînement du modèle et la conception d’une interface intuitive.",
                    theChallenge: "Les prix de marché, dynamiques et influencés par de nombreux facteurs, rendent l’estimation fiable à la fois complexe et chronophage.",
                    theSolution: "Exploiter le machine learning pour prédire les prix à partir de caractéristiques clés. L’utilisateur saisit simplement les informations et obtient une estimation instantanée grâce à une interface intuitive.",
                    date: "Mai 2025",
                    category: "ai",
                    keyFeatures: [
                        "Estimation rapide des prix",
                        "Prise en compte de multiples critères",
                        "Aide à l’achat ou à la vente",
                        "Prédictions fiables",
                        "Gain de temps",
                        "Compatibilité multi-appareils"
                    ],
                    type: "Intelligence Artificielle",
                    technologies: ["HTML/CSS", "Bootstrap", "JavaScript", "Python", "Flask"],
                    images: [
                        "/assets/img/projects/esticar.png",
                        "/assets/img/projects/esticar_computer.png",
                        "/assets/img/projects/esticar_ipad.png",
                        "/assets/img/projects/esticar_phone.png"
                    ],
                    externalUrl: "https://issalmou.github.io/EstiCar/",
                },
                {
                    title: "WiredWave – Plateforme de Produits Électroniques",
                    shortName: "wiredwave",
                    company: null,
                    description: "Un projet web développé avec React.js, utilisant l’API Amazon pour afficher des produits électroniques. L’application permet aux utilisateurs de parcourir les produits, accéder à un lien d’achat pour chaque article, se connecter et gérer leur panier. Le projet met l’accent sur une interface moderne, réactive et une expérience utilisateur fluide.",
                    projectOverview: "Intègre l’API Amazon pour afficher les produits. Les utilisateurs peuvent parcourir les articles, accéder aux liens d’achat directs, se connecter et gérer leur panier au sein d’une interface moderne et réactive.",
                    theChallenge: "Les plateformes e-commerce rencontrent souvent des difficultés à fournir une expérience de navigation rapide, intuitive et visuellement attrayante. Intégrer des API tierces tout en maintenant la performance, garantir un design réactif et gérer les comptes utilisateurs et les paniers en temps réel peut être complexe et exigeant. De plus, fournir des données produits précises et des interactions fluides est essentiel pour maintenir l’engagement des utilisateurs.",
                    theSolution: "Exploiter React.js pour un front-end dynamique et réactif et intégrer l’API Amazon pour obtenir des données produits en temps réel avec des interactions fluides.",
                    date: "Janvier 2024",
                    category: "devweb",
                    keyFeatures: [
                        "Navigation dans les produits",
                        "Liens directs d’achat",
                        "Authentification utilisateur",
                        "Gestion du panier",
                        "Expérience utilisateur fluide",
                        "Compatibilité multi-appareils"
                    ],
                    type: "Développement Web",
                    technologies: ["HTML/CSS", "Bootstrap", "React js"],
                    images: [
                        "/assets/img/projects/wiredwave.png",
                        "/assets/img/projects/wiredwave_computer.png",
                        "/assets/img/projects/wiredwave_ipad.png",
                        "/assets/img/projects/wiredwave_phone.png"
                    ],
                    externalUrl: "https://wiredwave.netlify.app/",
                },
                {
                    title: "Speechly – Transcription Vocale Intelligente",
                    shortName: "speechly",
                    company: null,
                    description: "Un projet utilisant la technologie Speech-to-Text pour convertir des fichiers audio en texte. L’application permet aux utilisateurs de télécharger des fichiers audio, d’obtenir des transcriptions automatiques et de visualiser les résultats de manière claire. Le projet met l’accent sur la précision et une interface conviviale.",
                    projectOverview: "Convertit efficacement des enregistrements audio en texte écrit avec un rendu clair et lisible, en mettant l’accent sur l’ergonomie.",
                    theChallenge: "La conversion de la parole en texte présente de nombreux défis, notamment la gestion des accents variés, des vitesses de parole différentes, du bruit de fond et de la qualité audio. Assurer une transcription précise tout en maintenant une interface intuitive et facile à utiliser est essentiel pour une expérience utilisateur fluide. Les utilisateurs ont besoin d’une solution capable de transformer rapidement et de manière fiable l’audio en texte sans connaissances techniques.",
                    theSolution: "Le projet répond à ces défis en mettant en œuvre des algorithmes avancés de Speech-to-Text capables de comprendre divers patterns de parole et conditions audio. Les utilisateurs peuvent simplement télécharger leurs fichiers audio et recevoir instantanément des transcriptions précises. Le design intuitif de l’application la rend accessible à tous, permettant une conversion rapide, fiable et sans effort de la parole en texte.",
                    date: "Juillet 2025",
                    category: "ai",
                    keyFeatures: [
                        "Transcription automatique",
                        "Haute précision",
                        "Enregistrement audio",
                        "Téléversement de fichiers audio",
                        "Gain de temps",
                        "Compatibilité multi-appareils"
                    ],
                    type: "Intelligence Artificielle",
                    technologies: ["HTML/CSS", "Bootstrap", "JavaScript", "Python"],
                    images: [
                        "/assets/img/projects/speechly.png",
                        "/assets/img/projects/speechly_computer.png",
                        "/assets/img/projects/speechly_ipad.png",
                        "/assets/img/projects/speechly_phone.png"
                    ],
                    externalUrl: "https://issalmou.github.io/Speechly/",
                }
            ]
        },

        projectDetails: {
            projectOverview: "Aperçu du projet",
            theChallenge: "Le défi",
            theSolution: "La solution",
            keyFeatures: "Fonctionnalités clés",
            backToProjects: "Retour aux projets",
            viewLiveProject: "Voir la démo"
        },

        contact: {
            sectionTitle: "Contact",
            sectionDescription: "N’hésitez pas à me contacter pour des collaborations, opportunités ou toute autre demande.",
            contactInfoTitle: "Informations de Contact",
            contactInfoDescription: "Je suis toujours ouvert à de nouvelles opportunités et discussions. Connectons-nous !",
            locationTitle: "Notre Localisation",
            location: "Laâyoune, Maroc",
            phoneTitle: "Numéro de Téléphone",
            phone: "+212 640065118",
            emailTitle: "Adresse Email",
            email: "contact@issalmouad.com",
            formTitle: "Prenez Contact",
            formDescription: "Prenez contact et créons ensemble quelque chose de formidable.",
            formFields: {
                name: "Votre Nom",
                email: "Votre Email",
                subject: "Sujet",
                message: "Message",
                sendButton: "Envoyer le Message",
                loading: "Chargement",
                sentMessage: "Votre message a été envoyé. Merci !",
                errorMessage: "Une erreur est survenue lors de l'envoi de votre message."

            }
        },

        notFound: {
            title: "Oups ! Page Non Trouvée",
            description: "La page que vous recherchez n'existe pas. Elle a peut-être été déplacée, renommée ou n'a jamais existé.",
            homeButton: "Retour à l'Accueil"
        },

        chatbot: {
            placeholder: "Écris ton message...",
            assistantWelcome: "Comment puis-je t'aider aujourd'hui ?",
            assistantError: "Désolé, je n'ai pas pu répondre.",
            assistantConnectionError: "Erreur de connexion au serveur.",
            slogan: "Toujours là pour t’aider et te guider.",
            title: "Issalmou Assistant AI",
        }
    },
    ar: {
        metaDescription: "ملف شخصي لـ اسلمو إيدعيش، مطور ويب متكامل ومهتم بالذكاء الاصطناعي.",
        seo: {
            knowsAbout: [
                "تطوير الويب الكامل (Full-Stack)",
                "أنظمة المعلومات",
                "الذكاء الاصطناعي",
                "التعلم الآلي",
                "التعلم العميق",
                "الحوسبة السحابية",
                "تحسين محركات البحث"
            ],
            home: {
                title: "اسلمو إيدعيش",
                description: "مرحبًا بكم في ملفي الشخصي. اكتشف مشاريعي في تطوير الويب، والذكاء الاصطناعي، وتعلم الآلة، والتعلم العميق.",
                keywords: "ملف شخصي, الرئيسية, اسلمو إيدعيش, مطور ويب, الذكاء الاصطناعي, React, JavaScript, Python, Full-Stack Developer"
            },
            about: {
                title: "من أنا - اسلمو إيدعيش",
                description: "تعرف على اسلمو إيدعيش، مهاراته، خبراته، وإنجازاته.",
                keywords: "من أنا, اسلمو إيدعيش, مهارات, خبرة, ملف شخصي, مطور ويب, الذكاء الاصطناعي"
            },
            resume: {
                title: "السيرة الذاتية - اسلمو إيدعيش",
                description: "اطلع على سيرتي الذاتية المهنية بما في ذلك التعليم، المهارات، والخبرة العملية.",
                keywords: "السيرة الذاتية, التعليم, اسلمو إيدعيش, مهارات, خبرة, ملف شخصي"
            },
            services: {
                title: "الخدمات - اسلمو إيدعيش",
                description: "اكتشف الخدمات التي أقدمها بما في ذلك تطوير الويب، حلول الذكاء الاصطناعي، والاستشارات.",
                keywords: "الخدمات, تطوير الويب, الذكاء الاصطناعي, الاستشارات, اسلمو إيدعيش"
            },
            projects: {
                title: "المشاريع - اسلمو إيدعيش",
                description: "استعرض مشاريعي في تطوير الويب، الذكاء الاصطناعي، تعلم الآلة، والتعلم العميق.",
                keywords: "المشاريع, ملف شخصي, اسلمو إيدعيش, تطوير الويب, الذكاء الاصطناعي, ML, DL"
            },
            agep: {
                title: "AGEP – تطبيق إدارة الفرق شبه الطبية",
                description: "تبسيط إدارة الفرق شبه الطبية من خلال سير عمل آلي للموارد البشرية وتتبع الأداء."
            },
            esticar: {
                title: "EstiCar – منصة التنبؤ بأسعار السيارات",
                description: "تنبؤ بأسعار السيارات باستخدام التعلم الآلي بناءً على العلامة التجارية، الطراز، السنة، والمسافة المقطوعة."
            },
            wiredwave: {
                title: "WiredWave – منصة المنتجات الإلكترونية",
                description: "واجهة أمامية React حديثة مع دمج API أمازون لتصفح المنتجات بسلاسة."
            },
            speechly: {
                title: "Speechly – تحويل الصوت إلى نص ذكي",
                description: "تحويل الصوت إلى نص بسرعة وبدقة باستخدام تقنية Speech-to-Text المتقدمة."
            }
            ,
            contact: {
                title: "اتصل بي - اسلمو إيدعيش",
                description: "تواصل معي للتعاون، المشاريع، أو أي استفسارات.",
                keywords: "اتصل بي, البريد الإلكتروني, ملف شخصي, اسلمو إيدعيش"
            },
            chatbot: {
                title: "مساعد الذكاء الاصطناعي - إسلمو إيدعيش",
                description: "تفاعل مع مساعد الذكاء الاصطناعي الخاص بإسلمو إيدعيش. اسأل عن تطوير الويب، الذكاء الاصطناعي، التعلم الآلي، التعلم العميق والمزيد.",
                keywords: "مساعد الذكاء الاصطناعي, شات بوت, إسلمو إيدعيش, تطوير الويب, الذكاء الاصطناعي, التعلم الآلي, التعلم العميق, بورتفوليو"
            }
        },

        nav: {
            home: "الرئيسية",
            about: "حول",
            resume: "السيرة الذاتية",
            services: "الخدمات",
            projects: "المشاريع",
            contact: "اتصل بي",
            chatbot: "المساعد الذكي"
        },

        footer: {
            rights: "جميع الحقوق محفوظة.",
        },

        heroName: "إسلمو إيدعيش",

        home: {
            heroTitle: "مرحباً، أنا",
            heroRoles: "مطور ويب متكامل,خبير بيانات",
            heroType: "مبدع",
            heroDescription: "مطور ويب متكامل شغوف بالويب والذكاء الاصطناعي. أجمع بين الإبداع والدقة لتصميم حلول مبتكرة. فضولي ودائم التعلم، أستمتع بمواجهة التحديات التقنية مع التطور المستمر في المجال الرقمي.",
            contactBtn: "اتصل بي",
            aboutBtn: "معلومات عني",
            servicesTitle: "الخبرات",
            servicesDescription: "إليك الأدوات والتقنيات التي أستخدمها لتطوير الحلول الرقمية.",
            services: [
                { title: "تطوير الواجهة الأمامية", description: "بناء واجهات مستخدم تفاعلية وسريعة الاستجابة باستخدام React و Next.js.", icon: "bi-brush", fade: "fade-right" },
                { title: "تطوير الواجهة الخلفية", description: "إنشاء تطبيقات خادم قوية وواجهات برمجة تطبيقات باستخدام Node.js و Express و MongoDB.", icon: "bi-server", fade: "fade-left" },
                { title: "خبرة ويب متكامل", description: "دمج سلس بين تقنيات الواجهة الأمامية والخلفية لبناء حلول قابلة للتوسع.", icon: "bi-layers", fade: "fade-right" },
                { title: "إدارة قواعد البيانات", description: "تصميم وإدارة قواعد بيانات فعّالة باستخدام تقنيات SQL و NoSQL.", icon: "bi-database", fade: "fade-left" },
                { title: "التحكم في الإصدارات", description: "استخدام Git و GitHub لتسهيل التعاون وإدارة المشاريع بسلاسة.", icon: "bi-git", fade: "fade-right" },
                { title: "النشر السحابي", description: "نشر وإدارة تطبيقات الويب على Vercel و Netlify و AWS.", icon: "bi-cloud-upload", fade: "fade-left" },
                { title: "خبرة الذكاء الاصطناعي", description: "تصميم ونشر نماذج التعلم الآلي والعميق لاستخراج الرؤى وأتمتة القرارات.", icon: "bi-cpu", fade: "fade-right" },
                { title: "تحسين الأداء", description: "تحسين أوقات التحميل، الانتقالات السلسة، وتجربة المستخدم.", icon: "bi-speedometer2", fade: "fade-left" }
            ],
            statsTitle: "هل أنت مستعد لبدء مشروعك؟",
            statsDescription: "سواء كنت تبحث عن تطبيق ويب حديث، أو حل يعتمد على الذكاء الاصطناعي، أو نموذج تنبؤي، فأنا هنا لتحويل أفكارك إلى حقيقة. لنتعاون معاً لبناء تجارب رقمية مبتكرة وفعّالة.",
            viewServicesBtn: "عرض الخدمات",
            getInTouchBtn: "تواصل معي",
            vision: "رؤية",
            code: "كود",
            ideas: "أفكار"
        },

        about: {
            title: "حول",
            subtitle: "استكشف رحلتي، مهاراتي، والمشاريع التي تلهمني.",
            greeting: "مرحباً",
            headline: "أنا إسلمو - مطور فضولي وشغوف يحب تحويل الأفكار إلى حلول رقمية واقعية",
            description: "أجمع بين الإبداع والخبرة التقنية، أعمل على كل شيء من تطوير الويب المتكامل إلى مشاريع الذكاء الاصطناعي والمبنية على البيانات. أستمتع بحل المشكلات المعقدة بحلول أنيقة وفعّالة، وأستكشف دائمًا تقنيات جديدة لبناء تطبيقات ليست فقط عملية ولكن ذات قيمة حقيقية للمستخدمين.",
            quote: "\"التكنولوجيا هي أداتي، الابتكار هو عقليتي.\"",
            viewWork: "عرض مشاريعي",
            downloadCV: "تحميل السيرة الذاتية"
        },

        skills: {
            title: "المهارات",
            subtitle: "مهارات تمكنني من البناء، الابتكار وحل المشاكل الواقعية."
        },

        resume: {
            title: "السيرة الذاتية",
            subtitle: "اكتشف مساري المهني والخلفية الأكاديمية الخاصة بي.",
            educationTitle: "التعليم",
            education: [
                {
                    degree: "طالب ماجستير في نظم المعلومات والأنظمة الذكية (M2SI)",
                    period: "2025 - حتى الآن",
                    institution: "المعهد الوطني للإحصاء والاقتصاد التطبيقي (INSEA) — الرباط، المغرب"
                },
                {
                    degree: "إجازة في الذكاء الاصطناعي (برنامج التميز)",
                    period: "2024 - 2025",
                    institution: "جامعة الحسن الثاني — الدار البيضاء، المغرب"
                },
                {
                    degree: "تقني متخصص في تطوير الويب الرقمي، خيار Web Full-Stack",
                    period: "2022 - 2024",
                    institution: "مدن المهن والكفاءات (CMC) — العيون، المغرب"
                }
            ],
            skillsTitle: "المهارات المهنية",
            skillsData: [
                { name: "تطوير الواجهة الأمامية", value: 90 },
                { name: "تطوير الواجهة الخلفية", value: 95 },
                { name: "البيانات والذكاء الاصطناعي", value: 93 },
                { name: "الحوسبة السحابية و DevOps", value: 85 },
            ],
            internshipsTitle: "التدريبات المهنية",
            internships: [
                {
                    role: "متدرب مطور ويب متكامل",
                    duration: "3 أشهر",
                    company: "المصحة الدولية — العيون، المغرب",
                    responsibilities: [
                        "طور تطبيقًا لإدارة الفريق الطبي، بما في ذلك رؤساء الأقسام والمدير الطبي ومدير الرعاية والموارد البشرية.",
                        "كان حلقة وصل بين الفريق الفني وممثلي العيادة لضمان التواصل السلس.",
                        "شارك في تخطيط المشروع وتنفيذه، مساهماً في تحسين سير العمل والكفاءة العامة."
                    ]
                },
                {
                    role: "متدرب في نظم المعلومات والإدارة",
                    duration: "شهرين",
                    company: "مركز الحكمة الطبي — العيون، المغرب",
                    responsibilities: [
                        "حلّل وحل المشكلات المتعلقة بتطبيق **ZKBiotime** لضمان إدارة دقيقة للبيانات.",
                        "نفّذ دورات فعالة للأقسام وأنشأ حسابات مخصصة لتحسين سير العمل.",
                        "قدّم جلسات تدريبية لمديري الأقسام لضمان الاستخدام الصحيح للنظام.",
                        "راقب وصحح بشكل استباقي الفروقات في تقارير الغياب والتأخير."
                    ]
                }
            ],
            statsTitle: "اكتشف مشاريعي",
            statsDescription: "من تطوير الويب إلى التطبيقات المعتمدة على الذكاء الاصطناعي، استكشف المشاريع التي قمت بتطويرها بشغف ودقة. كل مشروع يعكس الإبداع وحل المشكلات والابتكار.",
            viewProjectsBtn: "عرض مشاريعي",
            backHomeBtn: "العودة للرئيسية"
        },

        services: {
            title: "الخدمات",
            subtitle: "حلول رقمية حديثة ومبتكرة، مصممة خصيصًا لتلبية احتياجاتك وأهدافك.",
            items: [{
                title: "تطوير الويب",
                desc: "مواقع وتطبيقات ويب مخصصة لتناسب احتياجاتك وأهدافك الخاصة.",
                icon: "bi-globe",
                fade: 120,
                list: [
                    "تصميم متجاوب",
                    "تطوير الواجهة الأمامية والخلفية",
                    "تكامل مع أنظمة إدارة المحتوى (CMS)",
                    "حلول التجارة الإلكترونية"
                ]
            }, {
                title: "الذكاء الاصطناعي",
                desc: "حلول ذكاء اصطناعي مبتكرة لتحليل البيانات، التنبؤ، وتعزيز عملية اتخاذ القرار.",
                icon: "bi-robot",
                fade: 180,
                list: [
                    "التعلم الآلي والتعلم العميق",
                    "الرؤية الحاسوبية وتصنيف الصور",
                    "نماذج RNN و LSTM",
                    "التعلم بالنقل والتحسين",
                    "استخراج الميزات وتمثيل البيانات",
                    "التحليلات التنبؤية والنمذجة"
                ]
            }, {
                title: "حلول مخصصة",
                desc: "تصميم حلول برمجية ذكية وقابلة للتطوير، مخصّصة لتلبية احتياجات الشركات الخاصة. سواء كانت تطبيقات ويب حديثة، نماذج ذكاء اصطناعي، أنظمة خلفية عالية الأداء أو أدوات علم البيانات.",
                icon: "bi-tools",
                fade: 240,
                list: [
                    "تطوير التطبيقات والويب",
                    "التكامل مع خدمات خارجية",
                    "القابلية للتوسع"
                ]
            }],
            process: {
                title: "طريقة العمل",
                steps: [
                    {
                        title: "الاكتشاف",
                        desc: "تحليل عميق لأهدافك واحتياجاتك ورؤيتك لضمان فهم واضح لنطاق المشروع.",
                        fade: 200
                    }, {
                        title: "التخطيط",
                        desc: "وضع خطة مشروع مفصلة مع تحديد الجداول الزمنية والأهداف والتقنيات المناسبة.",
                        fade: 300
                    }, {
                        title: "التطوير",
                        desc: "تحويل الأفكار إلى حلول عملية مع تحديثات متكررة وتفاعل مستمر.",
                        fade: 400
                    }, {
                        title: "الاختبار والتسليم",
                        desc: "ضمان الجودة من خلال الاختبارات، ثم إطلاق المشروع بموثوقية ودعم مستمر.",
                        fade: 500
                    }
                ]
            },
            cta: {
                title: "هل أنت مستعد لبدء مشروعك؟",
                desc: "سواء كنت تبحث عن تطبيق ويب حديث، أو حل قائم على الذكاء الاصطناعي، أو نموذج تنبؤي، فأنا هنا لتحويل أفكارك إلى حقيقة. لنتعاون لبناء تجارب رقمية مبتكرة وفعالة معًا.",
                button: "تواصل معي"
            }
        },

        projects: {
            title: "المشاريع",
            subtitle: "تعكس هذه المشاريع رحلتي كمطور، من التصميم إلى التنفيذ.",
            allbtn: "الكل",
            devbtn: "تطوير الويب",
            aibtn: "الذكاء الاصطناعي",
            btnviewinfo: "عرض المعلومات",
            projects_details: [
                {
                    title: "AGEP – تطبيق إدارة الفرق الطبية",
                    shortName: "agep",
                    company: "المصحة الدولية",
                    description: "منصة ويب لتبسيط إدارة الفرق الطبية في العيادة الدولية للعيون، عبر أتمتة الموارد البشرية، تحسين التواصل الداخلي، وتتبع الأداء بسهولة وكفاءة.",
                    projectOverview: "تم تطوير هذه المنصة لتحسين إدارة الفرق الطبية المساعدة في العيادة الدولية العيون. تبسط سير العمل في الموارد البشرية وتحسن التواصل الداخلي وتمكّن من تتبع الأداء بكفاءة.",
                    theChallenge: "إنشاء نظام لإدارة الجداول والحضور والأداء بشكل فعال مع ضمان التواصل السلس بين رؤساء الأقسام والمدير الطبي والموارد البشرية.",
                    theSolution: "منصة ويب تعمل على أتمتة عمليات الموارد البشرية وتنظيم جداول الفرق وتسهيل التواصل وتتبع الأداء.",
                    date: "يوليو 2024",
                    category: "devweb",
                    keyFeatures: [
                        "أتمتة عمليات الموارد البشرية",
                        "مراقبة الأداء",
                        "مصادقة آمنة",
                        "لوحات معلومات قابلة للتخصيص",
                        "خيارات تصدير البيانات",
                        "دعم متعدد الأجهزة"
                    ],
                    type: "تطوير ويب",
                    technologies: ["HTML/CSS", "Bootstrap", "JavaScript", "Laravel", "MySQL"],
                    images: [
                        "/assets/img/projects/poly.png",
                        "/assets/img/projects/polydesktop.png",
                        "/assets/img/projects/poly_ipad.png",
                        "/assets/img/projects/polyphone1.png"
                    ],
                    externalUrl: null,
                },
                {
                    title: "EstiCar – منصة التنبؤ بأسعار السيارات",
                    shortName: "esticar",
                    company: null,
                    description: "مشروع للتنبؤ بأسعار السيارات باستخدام تقنيات التعلم الآلي. يقوم التطبيق بتقدير قيمة السيارة اعتمادًا على خصائص مثل العلامة التجارية، الطراز، سنة الصنع، عدد الكيلومترات المقطوعة، وغيرها من العوامل.",
                    projectOverview: "يُحلّل المشروع خصائص المركبات (العلامة التجارية، الطراز، سنة الصنع، عدد الكيلومترات المقطوعة، وغيرها) لتقديم تقديرات دقيقة للأسعار. وقد شمل تطويره جمع البيانات وتنظيفها، تدريب النموذج، وإنشاء واجهة مستخدم سهلة.",
                    theChallenge: "تأثير عوامل عديدة على الأسعار يجعل تحديد السعر العادل مستهلكًا للوقت وغير مؤكد.",
                    theSolution: "الاستفادة من التعلم الآلي للتنبؤ بالأسعار من الميزات الرئيسية. إدخال بسيط ونتائج فورية بواجهة سهلة.",
                    date: "ماي 2025",
                    category: "ai",
                    keyFeatures: [
                        "تقدير سريع للأسعار",
                        "أخذ معايير متعددة بعين الاعتبار",
                        "مساعدة في الشراء أو البيع",
                        "توقعات موثوقة",
                        "توفير الوقت",
                        "دعم متعدد الأجهزة"
                    ],
                    type: "الذكاء الاصطناعي",
                    technologies: ["HTML/CSS", "Bootstrap", "JavaScript", "Python", "Flask"],
                    images: [
                        "/assets/img/projects/esticar.png",
                        "/assets/img/projects/esticar_computer.png",
                        "/assets/img/projects/esticar_ipad.png",
                        "/assets/img/projects/esticar_phone.png"
                    ],
                    externalUrl: "https://issalmou.github.io/EstiCar/",
                },
                {
                    title: "WiredWave – منصة المنتجات الإلكترونية",
                    shortName: "wiredwave",
                    company: null,
                    description: "مشروع ويب مطوّر باستخدام React.js، ويستفيد من واجهة برمجة التطبيقات Amazon لعرض المنتجات الإلكترونية. يتيح التطبيق للمستخدمين تصفح المنتجات، الوصول إلى رابط شراء لكل منتج، تسجيل الدخول، وإدارة سلة التسوق الخاصة بهم. يركز المشروع على واجهة حديثة ومتجاوبة وتجربة مستخدم سلسة.",
                    projectOverview: "يتكامل المشروع مع واجهة برمجة تطبيقات Amazon لعرض المنتجات، حيث يمكن للمستخدمين تصفح العناصر، الوصول إلى روابط الشراء المباشرة، تسجيل الدخول، وإدارة سلة التسوق الخاصة بهم ضمن واجهة حديثة ومتجاوبة.",
                    theChallenge: "غالبًا ما تواجه منصات التجارة الإلكترونية صعوبة في تقديم تجربة تصفح سريعة وبديهية وجذابة بصريًا. قد يكون دمج واجهات برمجة التطبيقات الخارجية مع الحفاظ على الأداء، وضمان تصميم متجاوب، وإدارة حسابات المستخدمين وسلات التسوق في الوقت الفعلي أمرًا معقدًا وصعبًا. بالإضافة إلى ذلك، فإن تقديم بيانات دقيقة عن المنتجات وتوفير تفاعلات سلسة أمر ضروري للحفاظ على تفاعل المستخدمين.",
                    theSolution: "استخدام React.js لتطوير واجهة أمامية ديناميكية ومتجاوبة، ودمج واجهة برمجة التطبيقات Amazon للحصول على بيانات المنتجات في الوقت الفعلي مع توفير تفاعلات سلسة.",
                    date: "يناير 2024",
                    category: "devweb",
                    keyFeatures: [
                        "تصفح المنتجات",
                        "روابط شراء مباشرة",
                        "مصادقة المستخدم",
                        "إدارة سلة التسوق",
                        "تجربة مستخدم سلسة",
                        "دعم متعدد الأجهزة"
                    ],
                    type: "تطوير ويب",
                    technologies: ["HTML/CSS", "Bootstrap", "React js"],
                    images: [
                        "/assets/img/projects/wiredwave.png",
                        "/assets/img/projects/wiredwave_computer.png",
                        "/assets/img/projects/wiredwave_ipad.png",
                        "/assets/img/projects/wiredwave_phone.png"
                    ],
                    externalUrl: "https://wiredwave.netlify.app/",
                },
                {
                    title: "Speechly – النسخ الصوتي الذكي",
                    shortName: "speechly",
                    company: null,
                    description: "مشروع يستخدم تقنية تحويل الكلام إلى نص لتحويل الملفات الصوتية إلى نص مكتوب. يتيح التطبيق للمستخدمين رفع الملفات الصوتية، الحصول على نسخ آلية، وعرض النتائج بوضوح. يركز المشروع على الدقة وسهولة استخدام الواجهة.",
                    projectOverview: "يحّول التسجيلات الصوتية إلى نص مكتوب بكفاءة وبمخرجات واضحة وسهلة القراءة مع التركيز على سهولة الاستخدام.",
                    theChallenge: "تحويل الكلام إلى نص يواجه عدة تحديات، مثل التعامل مع اللهجات المختلفة، سرعات الكلام المتفاوتة، الضوضاء الخلفية وجودة الصوت. من الضروري توفير نسخ دقيقة مع الحفاظ على واجهة سهلة وبديهية لضمان تجربة مستخدم سلسة. يحتاج المستخدمون إلى حل قادر على تحويل الصوت إلى نص بسرعة وموثوقية دون الحاجة لمعرفة تقنية.",
                    theSolution: "يتعامل المشروع مع هذه التحديات من خلال تنفيذ خوارزميات متقدمة لتحويل الكلام إلى نص قادرة على فهم أنماط الكلام المختلفة وظروف الصوت المتنوعة. يمكن للمستخدمين ببساطة رفع ملفاتهم الصوتية والحصول على نسخ دقيقة فورًا. التصميم الصديق للمستخدم للتطبيق يجعله متاحًا للجميع، مما يتيح تحويل الكلام إلى نص بسرعة وموثوقية وسهولة.",
                    date: "يوليو 2025",
                    category: "ai",
                    keyFeatures: [
                        "نسخ تلقائي",
                        "دقة عالية",
                        "تسجيل الصوت",
                        "تحميل الملفات الصوتية",
                        "توفير الوقت",
                        "دعم متعدد الأجهزة"
                    ],
                    type: "الذكاء الاصطناعي",
                    technologies: ["HTML/CSS", "Bootstrap", "JavaScript", "Python"],
                    images: [
                        "/assets/img/projects/speechly.png",
                        "/assets/img/projects/speechly_computer.png",
                        "/assets/img/projects/speechly_ipad.png",
                        "/assets/img/projects/speechly_phone.png"
                    ],
                    externalUrl: "https://issalmou.github.io/Speechly/",
                }
            ]
        },

        projectDetails: {
            projectOverview: "نظرة عامة على المشروع",
            theChallenge: "التحدي",
            theSolution: "الحل",
            keyFeatures: "الميزات الرئيسية",
            backToProjects: "العودة إلى المشاريع",
            viewLiveProject: "عرض العرض التجريبي"
        },

        contact: {
            sectionTitle: "تواصل معنا",
            sectionDescription: "لا تتردد في التواصل لأي تعاون، فرص عمل أو أي استفسارات.",
            contactInfoTitle: "معلومات التواصل",
            contactInfoDescription: "أنا دائمًا منفتح على الفرص الجديدة والمحادثات. لنتواصل!",
            locationTitle: "موقعنا",
            location: "العيون، المغرب",
            phoneTitle: "رقم الهاتف",
            phone: "+212 640065118",
            emailTitle: "البريد الإلكتروني",
            email: "contact@issalmouad.com",
            formTitle: "تواصل معنا",
            formDescription: "تواصل معنا ولنبتكر شيئًا رائعًا معًا.",
            formFields: {
                name: "الاسم",
                email: "البريد الإلكتروني",
                subject: "الموضوع",
                message: "الرسالة",
                sendButton: "إرسال الرسالة",
                loading: "جاري الإرسال",
                sentMessage: "تم إرسال رسالتك. شكرًا لك!",
                errorMessage: "حدث خطأ أثناء إرسال رسالتك."
            }
        },

        notFound: {
            title: "عذرًا! الصفحة غير موجودة",
            description: "الصفحة التي تبحث عنها غير موجودة. ربما تم نقلها، إعادة تسميتها، أو لم تكن موجودة أبدًا.",
            homeButton: "العودة إلى الصفحة الرئيسية"
        },

        chatbot: {
            placeholder: "اكتب رسالتك...",
            assistantWelcome: "كيف يمكنني مساعدتك اليوم؟",
            assistantError: "عذرًا، لم أتمكن من الرد.",
            assistantConnectionError: "خطأ في الاتصال بالخادم.",
            slogan: "دائمًا هنا لمساعدتك وإرشادك.",
            title: "مساعد إسلمو الذكي",
        }
    }
};

export default translations;
