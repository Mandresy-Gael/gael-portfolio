import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition.jsx";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="pt-32 pb-section px-6 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-gold text-sm mb-4"
          >
            Erreur 404
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl text-white mb-4"
          >
            Cette page n'existe pas.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted mb-10"
          >
            Le lien est peut-être incorrect ou la page a été déplacée.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block"
          >
            <Link
              to="/"
              className="bg-gold text-night font-medium px-6 py-3 rounded-sm hover:brightness-110 transition-all duration-200"
            >
              Retour à l'accueil
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
