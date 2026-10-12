import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects.js";
import PageTransition from "../components/PageTransition.jsx";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/SocialIcons.jsx";

const filters = [
  { label: "Tous", match: () => true },
  { label: "Node.js", match: (p) => p.stack.includes("Node.js") },
  { label: "PHP", match: (p) => p.stack.includes("PHP") },
  { label: "HTML / CSS / JS", match: (p) => p.stack.includes("HTML5") },
];

export default function Projects() {
  const [active, setActive] = useState(filters[0].label);
  const current = filters.find((f) => f.label === active) ?? filters[0];
  const visible = projects.filter(current.match);

  return (
    <PageTransition>
      <section className="pt-32 pb-section px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl text-white mb-6"
          >
            Projets
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-3 mb-10"
            role="group"
            aria-label="Filtrer les projets par technologie"
          >
            {filters.map((f) => (
              <button
                key={f.label}
                type="button"
                aria-pressed={active === f.label}
                onClick={() => setActive(f.label)}
                className={`text-sm font-mono px-4 py-1.5 rounded-sm border transition-colors duration-200 ${
                  active === f.label
                    ? "bg-gold text-night border-gold"
                    : "border-border text-muted hover:border-gold/60 hover:text-gold"
                }`}
              >
                {f.label}
              </button>
            ))}
            <span className="font-mono text-xs text-muted ml-auto" aria-live="polite">
              {visible.length} projet{visible.length > 1 ? "s" : ""}
            </span>
          </motion.div>

          <motion.div layout className="grid md:grid-cols-2 gap-element">
            <AnimatePresence mode="popLayout">
              {visible.map((project, i) => (
                <motion.article
                  layout="position"
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="group border border-border rounded-sm bg-marine/40 flex flex-col overflow-hidden hover:border-gold/40 hover:shadow-[0_0_32px_-14px_rgba(201,169,110,0.45)] transition-[border-color,box-shadow] duration-300"
                >
                  {project.image ? (
                    <div className="relative aspect-video overflow-hidden border-b border-border">
                      <img
                        src={project.image}
                        alt={`Aperçu de ${project.name}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  ) : (
                    <div className="aspect-video border-b border-border flex items-center justify-center">
                      <span className="font-heading text-2xl text-gold/50">{project.name}</span>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-2xl text-white mb-1">{project.name}</h3>
                    <p className="text-gold text-sm font-mono mb-3">{project.tagline}</p>
                    <p className="text-muted leading-relaxed mb-5 flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono text-cream/80 border border-border rounded-sm px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm bg-gold text-night font-medium px-4 py-2 rounded-sm hover:brightness-110 transition-all duration-200"
                        >
                          <ExternalLink size={14} />
                          Voir la démo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gold hover:underline underline-offset-4"
                      >
                        <GithubIcon size={14} />
                        Voir le code sur GitHub
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
