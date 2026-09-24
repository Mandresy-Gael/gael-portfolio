import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition.jsx";

const formation = [
  { period: "Déc. 2024 — aujourd'hui", title: "Licence 1 en informatique", place: "École Supérieure Saint-Gabriel, Mahajanga" },
  { period: "2024", title: "Baccalauréat, série A2 — mention Assez bien", place: "Lycée Montfort Saint-Gabriel, Mahajanga" },
  { period: "2021", title: "BEPC, option B", place: "Lycée Chrystelle-Parc, Tamatave" },
  { period: "2017", title: "CEPE", place: "Lycée Chrystelle-Parc, Tamatave" },
];

const experience = [
  { period: "Déc. 2025 — aujourd'hui", title: "Membre — JCI Majunga", place: "Réunions locales, communication, esprit d'initiative" },
  { period: "Mars 2025", title: "Maître de cérémonie", place: "Coordination d'évènement, prise de parole en public" },
];

const langues = [
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Courant" },
  { name: "Malagasy", level: "Natif" },
  { name: "Espagnol", level: "Notion" },
];

const competences = [
  { title: "Bureautiques", items: ["Word", "Excel"] },
  { title: "Programmation", items: ["Base en HTML/CSS", "Python"] },
];

const qualites = ["Rigoureux", "Ponctuel", "Minutieux"];

const interets = ["Cuisine", "Lecture", "Basket-ball", "Jeux vidéos"];

function Timeline({ items }) {
  return (
    <ul className="space-y-6">
      {items.map((it, i) => (
        <motion.li
          key={it.title}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="border-l border-border pl-5 relative"
        >
          <span className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-gold" />
          <p className="font-mono text-xs text-gold mb-1">{it.period}</p>
          <p className="text-white font-medium">{it.title}</p>
          <p className="text-muted text-sm">{it.place}</p>
        </motion.li>
      ))}
    </ul>
  );
}

export default function Resume() {
  return (
    <PageTransition>
      <section className="pt-32 pb-section px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl sm:text-4xl text-white"
            >
              Parcours
            </motion.h1>
            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              href="/cv/CV%20professionnel.pdf"
              download
              className="bg-gold text-night text-sm font-medium px-5 py-2.5 rounded-sm hover:brightness-110 transition-all duration-200"
            >
              Télécharger le CV
            </motion.a>
          </div>

          <div className="grid sm:grid-cols-2 gap-12 mb-14">
            <div>
              <h2 className="font-heading text-xl text-white mb-6">Formation</h2>
              <Timeline items={formation} />
            </div>
            <div>
              <h2 className="font-heading text-xl text-white mb-6">Expérience</h2>
              <Timeline items={experience} />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-xl text-white mb-6">Compétences</h2>
            <div className="grid sm:grid-cols-2 gap-element mb-14">
              {competences.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="border border-border rounded-sm p-6 bg-marine/40"
                >
                  <h3 className="font-heading text-xl text-white mb-4">{cat.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {cat.items.map((it) => (
                      <li key={it} className="text-sm text-cream border border-border rounded-sm px-3 py-1">
                        {it}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-xl text-white mb-6">Langues</h2>
            <div className="flex flex-wrap gap-3 mb-14">
              {langues.map((l) => (
                <span
                  key={l.name}
                  className="text-sm text-cream border border-border rounded-sm px-4 py-2"
                >
                  {l.name} <span className="text-gold">({l.level})</span>
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="font-heading text-xl text-white mb-6">Qualités</h2>
              <div className="flex flex-wrap gap-3">
                {qualites.map((q) => (
                  <span
                    key={q}
                    className="text-sm text-cream border border-border rounded-sm px-4 py-2"
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-xl text-white mb-6">Centres d'intérêt</h2>
              <div className="flex flex-wrap gap-3">
                {interets.map((i) => (
                  <span
                    key={i}
                    className="text-sm text-cream border border-border rounded-sm px-4 py-2"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
