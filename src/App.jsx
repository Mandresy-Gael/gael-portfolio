import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";

const NAME = "Gaël Randriamanana";
const titles = {
  "/": `${NAME} — Développeur Web Full-Stack`,
  "/about": `À propos — ${NAME}`,
  "/projects": `Projets — ${NAME}`,
  "/resume": `Parcours — ${NAME}`,
  "/contact": `Contact — ${NAME}`,
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = titles[location.pathname] ?? `Page introuvable — ${NAME}`;
  }, [location.pathname]);

  return (
    <div className="bg-night text-cream font-body min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-gold focus:text-night focus:px-4 focus:py-2 focus:rounded-sm"
      >
        Aller au contenu
      </a>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main id="main" className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
