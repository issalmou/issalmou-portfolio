import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
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

function App() {
  const [language, setLanguage] = useState("en"); 

  // Fonction passée à Navbar pour changer la langue
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <Router>
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
      </Routes>
      <Footer language={language}/>
    </Router>
  );
}

export default App;
