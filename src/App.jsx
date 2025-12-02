import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollHandler from "./components/ScrollHandler";
import ScrollTopPreloader from "./components/ScrollTopPreloader"
import NotFound from "./pages/NotFound";
import AssistantPage from "./pages/AssistantPage";
import ChatbotButton from "./components/ChatbotButton";
import ChatWindow from "./components/ChatWindow";
import translations from "./data/translations";

function getGreeting(lang = "en",sal) {
  const now = new Date();
  const hour = now.getHours();
  const greetings = {
    fr: {
      morning: "Bonjour !",
      afternoon: "Bon après-midi !",
      evening: "Bonsoir !"
    },
    en: {
      morning: "Good morning !",
      afternoon: "Good afternoon !",
      evening: "Good evening !"
    },
    ar: {
      morning: "صباح الخير !",
      afternoon: "مساء الخير !",
      evening: "مساء الخير !"
    }
  };

  let period;
  if (hour >= 5 && hour < 12) period = "morning";
  else if (hour >= 12 && hour < 18) period = "afternoon";
  else period = "evening";

  return `${greetings[lang]?.[period] || greetings["en"][period]} ${sal}`
}

function AppContent() {
  const location = useLocation();
  const [language, setLanguage] = useState("en");

  const [isChatOpen, setIsChatOpen] = useState(false); // État du chatbot
  const [buttonHidden, setButtonHidden] = useState(false);

  const [chatMessages, setChatMessages] = useState(() => {

    // Charger depuis sessionStorage au lancement
    const saved = sessionStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : [
      { sender: "assistant", text: getGreeting(language,translations[language].chatbot.assistantWelcome) }
    ];
  });

  // Mettre à jour sessionStorage dès que chatMessages change
  useEffect(() => {
    sessionStorage.setItem("chatMessages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  // Lors du changement de langue changer juste le message d'accueil si aucun historique
  useEffect(() => {
    const saved = sessionStorage.getItem("chatMessages");
    if (chatMessages.length <= 1) {
      setChatMessages([
        { sender: "assistant", text: getGreeting(language,translations[language].chatbot.assistantWelcome) }
      ]);
    }

  }, [language]);

  // Fonction passée à Navbar pour changer la langue
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const toggleChat = () => {
    setIsChatOpen(prev => !prev); // ouvre ou ferme le chat
  };

  const hideChatbot = () => {
    setButtonHidden(true); // cache le bouton
    setIsChatOpen(false);  // ferme le chat window
  };

  return (
    <>
      <ScrollTopPreloader />
      <ScrollHandler />
      <Navbar onLanguageChange={handleLanguageChange} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/resume" element={<Resume language={language} />} />
        <Route path="/projects" element={<Projects language={language} />} />
        <Route path="/project/:name" element={<ProjectDetails language={language} />} />
        <Route path="/services" element={<Services language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route
          path="/chat" element={<AssistantPage
            language={language}
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
          />
          }
        />

        <Route path="/*" element={<NotFound language={language} />} />
      </Routes>

      {/*pour exclus la page /chat*/}
      {location.pathname !== "/chat" && !buttonHidden && (
        <ChatbotButton onClick={toggleChat} onHide={hideChatbot} />
      )}
      {isChatOpen && !buttonHidden && (
        <ChatWindow
          onClose={toggleChat}
          language={language}
          messages={chatMessages}
          setMessages={setChatMessages}
        />
      )}

      <Footer language={language} />
    </>
  );
}

/*j'ai fais ca car on a une composant qui utilise useLocation donc on ne 
peut pas mettez ce composant a l'interieur directement de Router il faut le 
mettez dans une autre composant
*/
function App() {
  return <Router>
    <AppContent />
  </Router>

}

export default App;
