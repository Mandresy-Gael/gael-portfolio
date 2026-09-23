import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profile from "../assets/gael-profile.jpg";
import PageTransition from "../components/PageTransition.jsx";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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
              variants={item}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Bonjour, je suis Gaël.
            </motion.h1>

            <motion.p variants={item} className="text-muted text-lg leading-relaxed max-w-md mb-10">
              Étudiant à Mahajanga, je développe des applications web —
              de l'interface à la base de données.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="bg-gold text-night font-medium px-6 py-3 rounded-sm hover:brightness-110 transition-all duration-200"
              >
                Voir mes projets
              </Link>
              <Link
                to="/contact"
                className="border border-border text-cream px-6 py-3 rounded-sm hover:border-gold hover:text-gold transition-colors duration-200"
              >
                Me contacter
              </Link>
            </motion.div>
          </div>

          <motion.div variants={item} className="justify-self-center">
            <div className="relative w-56 sm:w-72">
              <div className="absolute -inset-3 border border-gold/40 rounded-sm" />
              <img
                src={profile}
                alt="Portrait de Gaël Randriamanana"
                className="relative w-full aspect-[3/4] object-cover rounded-sm grayscale-[15%]"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
}
