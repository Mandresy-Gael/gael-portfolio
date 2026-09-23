import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition.jsx";

const categories = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { title: "Backend", items: ["PHP", "Node.js / Express"] },
  { title: "Base de données", items: ["MySQL"] },
  { title: "Outils", items: ["Git", "GitHub"] },
];

export default function About() {
  return (
    <PageTransition>
      <section className="pt-32 pb-section px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl text-white mb-8"
          >
            À propos
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted leading-relaxed space-y-4 max-w-2xl mb-14"
          >
            <p>
              2ᵉ année d'informatique à l'ESSGAM (Mahajanga), spécialisation
              full-stack. En parallèle, je prends des projets en freelance :
              site vitrine, gestion de contenu, outils internes pour de
              petites structures locales.
            </p>
            <p>
              Ce qui m'intéresse : le moment où une interface se connecte
              vraiment à une base de données. Mes projets récents tournent
              autour de CRUD complets, en PHP pur ou en Node/Express selon
              le besoin.
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="font-heading text-2xl text-white mb-6"
          >
            Compétences
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-element">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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
        </div>
      </section>
    </PageTransition>
  );
}
