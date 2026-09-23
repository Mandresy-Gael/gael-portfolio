import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import PageTransition from "../components/PageTransition.jsx";

const EMAIL = "randriamananamandresygael@gmail.com";
const PHONE = "037 57 153 35";
const ADDRESS = "Majunga, Madagascar";

const EMAILJS_SERVICE_ID = "service_im8g34b";
const EMAILJS_TEMPLATE_ID = "template_xnsp08t";
const EMAILJS_PUBLIC_KEY = "83PbmDCZrO7jML25q";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // le lien mailto reste utilisable si le presse-papiers est inaccessible
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClasses =
    "w-full bg-marine border border-border px-4 py-3 text-cream placeholder:text-muted/70 focus:border-gold focus:outline-none transition-colors";

  return (
    <PageTransition>
      <section className="pt-32 pb-section px-6 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl text-white mb-4"
          >
            Discutons de votre projet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted mb-10"
          >
            Disponible pour une mission freelance ou un stage.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="text-left space-y-5 mb-12"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-wider text-muted mb-2">
                  Votre nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-wider text-muted mb-2">
                  Votre email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jean@exemple.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-muted mb-2">
                Objet
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Demande de devis pour un site vitrine"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-wider text-muted mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet, vos délais, votre budget…"
                className={`${inputClasses} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gold text-night font-medium px-6 py-3 rounded-sm hover:brightness-110 transition-all duration-200 disabled:opacity-60 disabled:cursor-wait"
            >
              {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-green-400 text-center"
                >
                  Message envoyé ! Je reviens vers vous très vite.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-red-400 text-center"
                >
                  Une erreur est survenue. Réessayez ou écrivez-moi directement à {EMAIL}.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative">
              <button
                onClick={handleCopy}
                className="bg-gold text-night font-medium px-6 py-3 rounded-sm hover:brightness-110 transition-all duration-200"
              >
                {EMAIL}
              </button>
              <AnimatePresence>
                {copied && (
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-gold font-mono whitespace-nowrap"
                  >
                    Adresse copiée
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            <a href={`mailto:${EMAIL}`} className="text-sm text-muted hover:text-gold underline underline-offset-4">
              Ouvrir dans votre messagerie
            </a>

            <div className="flex flex-col sm:flex-row gap-6 mt-6 text-muted text-sm">
              <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-gold">
                {PHONE}
              </a>
              <span>{ADDRESS}</span>
              <a
                href="https://github.com/Mandresy-Gael"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                github.com/Mandresy-Gael
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}