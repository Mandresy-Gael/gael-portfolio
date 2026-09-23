import contapp from "../assets/project-contapp.jpg";
import foot from "../assets/project-foot.jpg";
import hikaly from "../assets/project-hikaly.jpg";

const projects = [
  {
    name: "Gestionnaire de Contacts",
    tagline: "CRUD de gestion de contacts",
    description:
      "Ajout, recherche, modification et suppression de contacts sur une base MySQL. Premier projet où j'ai posé toute mon identité visuelle en Tailwind CSS.",
    stack: ["Node.js", "Express", "EJS", "MySQL", "Tailwind CSS"],
    github: "https://github.com/Mandresy-Gael/Gestionnaire-de-contacts",
    image: contapp,
  },
  {
    name: "Hi'Kaly",
    tagline: "Site vitrine — restaurant gastronomique",
    description:
      "Vitrine pour un restaurant malgache à Majunga : carte, histoire, réservation avec validation JS. La réservation n'écrit pas encore en base.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Mandresy-Gael/Hi-Kaly",
    image: hikaly,
  },
  {
    name: "FootAdmin",
    tagline: "Gestion de clubs et joueurs de football",
    description:
      "CRUD complet sur clubs et joueurs, association dynamique, recherche par nom, dashboard avec stats calculées à la volée.",
    stack: ["Node.js", "Express", "EJS", "MySQL", "Tailwind CSS v4"],
    github: "https://github.com/Mandresy-Gael/FootAdmin",
    image: foot,
  },
  {
    name: "Gestion de Tâches",
    tagline: "To-do list en PHP natif",
    description:
      "Petit gestionnaire de tâches en PDO pur, sans framework. Requêtes préparées, badges de statut. Pas encore de pagination.",
    stack: ["PHP", "MySQL", "PDO"],
    github: "https://github.com/Mandresy-Gael/Gestion-de-taches-PHP-Mysql",
    image: null,
  },
];

export default projects;
