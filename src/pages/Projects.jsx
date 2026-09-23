import { motion } from "framer-motion";
import projects from "../data/projects.js";
import PageTransition from "../components/PageTransition.jsx";

export default function Projects() {
  return (
    <PageTransition>
      <section className="pt-32 pb-section px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl text-white mb-10"
          >
            Projets
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-element">
            {projects.map((project, i) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="border border-border rounded-sm bg-marine/40 flex flex-col overflow-hidden"
              >
                {project.image ? (
                  <div className="aspect-video overflow-hidden border-b border-border">
                    <img
                      src={project.image}
                      alt={`Aperçu de ${project.name}`}
                      className="w-full h-full object-cover object-top"
                    />
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

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gold hover:underline underline-offset-4 self-start"
                  >
                    Voir le code sur GitHub
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
