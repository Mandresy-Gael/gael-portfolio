import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layers, Server, Database } from "lucide-react";
import profile from "../assets/gael-profile.jpg";
import PageTransition from "../components/PageTransition.jsx";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const titleContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const word = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.7, ease } },
};

const titleWords = ["Bonjour,", "je", "suis", "Gaël."];

const domaines = [
  {
    icon: Layers,
    title: "Interfaces",
    text: "React, Tailwind CSS, HTML/CSS et JavaScript pour des pages claires et responsive.",
  },
  {
    icon: Server,
    title: "Back-end",
    text: "Node.js/Express et PHP pour les routes, les formulaires et le traitement des données.",
  },
  {
    icon: Database,
    title: "Données",
    text: "MySQL : modélisation, requêtes préparées et CRUD complets.",
  },
];

export default function Home() {
  return (
    <PageTransition>
      <section className="min-h-[90vh] flex items-center pt-28 pb-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(201,169,110,0.08), transparent)",
          }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -z-10 top-16 right-[8%] w-72 h-72 rounded-full bg-gold/10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 24, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -z-10 bottom-10 left-[4%] w-64 h-64 rounded-full bg-marine blur-3xl"
          animate={{ x: [0, -24, 0], y: [0, -18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center"
        >
          <div>
            <motion.p variants={item} className="text-gold font-mono text-sm tracking-wide mb-4">
              Développeur Web Full-Stack Junior
            </motion.p>

            <motion.h1
              variants={titleContainer}
              aria-label="Bonjour, je suis Gaël."
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              {titleWords.map((w, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em] mr-[0.25em]"
                >
                  <motion.span variants={word} className="inline-block">
                    {w}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p variants={item} className="text-muted text-lg leading-relaxed max-w-md mb-10">
              Étudiant à Mahajanga, je développe des applications web —
              de l'interface à la base de données.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/projects"
                  className="block bg-gold text-night font-medium px-6 py-3 rounded-sm hover:brightness-110 transition-all duration-200"
                >
                  Voir mes projets
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="block border border-border text-cream px-6 py-3 rounded-sm hover:border-gold hover:text-gold transition-colors duration-200"
                >
                  Me contacter
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={item} className="justify-self-center">
            <motion.div initial="rest" whileHover="hover" className="relative w-56 sm:w-72">
              <motion.div
                variants={{ rest: { x: 0, y: 0 }, hover: { x: 8, y: 8 } }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute -inset-3 border border-gold/40 rounded-sm"
              />
              <motion.img
                src={profile}
                alt="Portrait de Gaël Randriamanana"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                transition={{ duration: 0.9, delay: 0.35, ease }}
                className="relative w-full aspect-[3/4] object-cover rounded-sm grayscale-[15%]"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted text-xs font-mono"
        >
          <span>Défiler</span>
          <motion.span
            className="block w-px h-8 bg-gold origin-top"
            animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>

      <section className="py-section px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl text-white mb-8"
          >
            Ce que je fais
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-element">
            {domaines.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="border border-border rounded-sm p-6 bg-marine/40 hover:border-gold/40 transition-colors duration-300"
              >
                <d.icon size={22} className="text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-xl text-white mb-2">{d.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{d.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-section pt-section px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto border border-border rounded-sm bg-marine/40 px-6 py-10 sm:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div>
            <h2 className="font-heading text-2xl sm:text-3xl text-white mb-1">Un projet en tête ?</h2>
            <p className="text-muted">Parlons-en, ou consultez mon CV.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="block bg-gold text-night font-medium px-6 py-3 rounded-sm hover:brightness-110 transition-all duration-200"
              >
                Me contacter
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
              <a
                href="/cv/CV-Gael-Randriamanana.pdf"
                download="CV-Gael-Randriamanana.pdf"
                className="block border border-gold text-gold px-6 py-3 rounded-sm hover:bg-gold hover:text-night transition-colors duration-200"
              >
                Télécharger le CV
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
