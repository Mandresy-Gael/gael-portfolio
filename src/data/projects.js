import contapp from "../assets/project-contapp.jpg";
import foot from "../assets/project-foot.jpg";
import hikaly from "../assets/project-hikaly.jpg";

const projects = [
  {
    name: "Gestionnaire de Contacts",
    tagline: "CRUD de gestion de contacts",
    description:
      "Un carnet d'adresses en ligne pour conserver, retrouver et mettre à jour ses contacts sans feuille volante ni tableur. Techniquement : CRUD complet en Node/Express sur base MySQL avec recherche, et première mise en place de toute l'identité visuelle Tailwind CSS.",
    stack: ["Node.js", "Express", "EJS", "MySQL", "Tailwind CSS"],
    github: "https://github.com/Mandresy-Gael/Gestionnaire-de-contacts",
    image: contapp,
  },
  {
    name: "Hi'Kaly",
    tagline: "Site vitrine — restaurant gastronomique",
    description:
      "Un site vitrine pour qu'un restaurant malgache de Majunga présente sa carte, son histoire et reçoive des demandes de réservation. Techniquement : HTML/CSS/JS avec formulaire de réservation validé côté JavaScript (l'écriture en base n'est pas encore branchée).",
    stack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Mandresy-Gael/Hi-Kaly",
    image: hikaly,
  },
  {
    name: "FootAdmin",
    tagline: "Gestion de clubs et joueurs de football",
    description:
      "Un outil pour qu'un club gère ses joueurs sans tableur : ajout, recherche, statistiques automatiques. Techniquement : CRUD complet avec association dynamique clubs/joueurs et dashboard calculé à la volée.",
    stack: ["Node.js", "Express", "EJS", "MySQL", "Tailwind CSS v4"],
    github: "https://github.com/Mandresy-Gael/FootAdmin",
    image: foot,
  },
  {
    name: "Gestion de Tâches",
    tagline: "To-do list en PHP natif",
    description:
      "Une petite to-do list pour suivre ses tâches et leur statut, sans service payant ni dépendance lourde. Techniquement : PHP en PDO pur sans framework, requêtes préparées et badges de statut (la pagination n'est pas encore implémentée).",
    stack: ["PHP", "MySQL", "PDO"],
    github: "https://github.com/Mandresy-Gael/Gestion-de-taches-PHP-Mysql",
    image: null,
  },
];

export default projects;
