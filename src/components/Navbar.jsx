import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/projects", label: "Projets" },
  { to: "/resume", label: "Parcours" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `hover:text-gold transition-colors duration-200 ${isActive ? "text-gold" : ""}`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-night/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="font-heading text-xl text-white tracking-wide">
          Gaël <span className="text-gold">R.</span>
        </NavLink>

        <ul className="hidden lg:flex items-center gap-8 font-body text-sm text-muted">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="/cv/CV-Gael-Randriamanana.pdf"
          download
          className="hidden lg:inline-block border border-gold text-gold text-sm px-4 py-2 rounded-sm hover:bg-gold hover:text-night transition-colors duration-200"
        >
          Télécharger le CV
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className="lg:hidden text-cream w-8 h-6 flex flex-col justify-between"
        >
          <span className={`h-px bg-current transition-transform duration-200 ${open ? "translate-y-[11px] rotate-45" : ""}`} />
          <span className={`h-px bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`h-px bg-current transition-transform duration-200 ${open ? "-translate-y-[11px] -rotate-45" : ""}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-night border-b border-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-4 font-body text-muted">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} onClick={() => setOpen(false)} className={linkClass} end={link.to === "/"}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a href="/cv/CV-Gael-Randriamanana.pdf" download onClick={() => setOpen(false)} className="text-gold">
                  Télécharger le CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
