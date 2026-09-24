import { Phone, Mail } from "lucide-react";
import { GithubIcon, FacebookIcon, InstagramIcon } from "./SocialIcons.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-muted">
        <p>© {year} Gaël Randriamanana</p>

        <div className="flex items-center gap-4">
          <a
            href="tel:0375715335"
            aria-label="Téléphone"
            className="text-muted hover:text-gold transition-colors duration-200"
          >
            <Phone size={16} />
          </a>
          <a
            href="mailto:randriamananamandresygael@gmail.com"
            aria-label="Email"
            className="text-muted hover:text-gold transition-colors duration-200"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://github.com/Mandresy-Gael"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-gold transition-colors duration-200"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://www.facebook.com/mandresy.randriamanana.79"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="text-muted hover:text-gold transition-colors duration-200"
          >
            <FacebookIcon size={16} />
          </a>
          <a
            href="https://www.instagram.com/simply.gael_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-muted hover:text-gold transition-colors duration-200"
          >
            <InstagramIcon size={16} />
          </a>
        </div>

        <p className="font-mono text-xs tracking-wide">Développé par Gaël</p>
      </div>
    </footer>
  );
}
