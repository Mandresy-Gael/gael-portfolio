# Portfolio — Gaël Randriamanana

Portfolio multi-pages en React + Tailwind CSS + Framer Motion, parti de la
structure du template [`compavel/portfolio-dark`](https://github.com/compavel/portfolio-dark)
puis redécoupé en plusieurs routes (inspiration : portfolio-hachemmy), avec
l'identité visuelle Night & Gold et un vrai stack React.

## Stack

- React 18 + Vite + React Router (routes classiques, pas de hash)
- Tailwind CSS (tokens de couleur/typo dans `tailwind.config.js`)
- Framer Motion : transitions de page (fade + léger déplacement vertical) et micro-interactions

## Lancer en local

```bash
npm install
npm run dev
```

Le site est servi sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview   # pour vérifier le build avant déploiement
```

## Déploiement sur Vercel

1. Pousser ce dossier sur un dépôt GitHub.
2. Sur [vercel.com](https://vercel.com), "New Project" → importer le dépôt.
3. Vercel détecte Vite automatiquement (`build` → `npm run build`, output → `dist`).
4. Déployer.

## Structure

```
src/
├── App.jsx                 Déclare les routes + transitions animées (AnimatePresence)
├── main.jsx                 BrowserRouter
├── components/
│   ├── Navbar.jsx            Nav fixe, liens de route, bouton "Télécharger le CV"
│   ├── Footer.jsx
│   └── PageTransition.jsx    Wrapper d'animation réutilisé par chaque page
├── pages/
│   ├── Home.jsx               /
│   ├── About.jsx               /about
│   ├── Projects.jsx             /projects   — lit data/projects.js, affiche les captures
│   ├── Resume.jsx                /resume    — formation, expérience, langues (depuis le CV)
│   └── Contact.jsx                /contact
├── data/
│   └── projects.js           Contenu des 4 projets — à mettre à jour ici
└── assets/
    ├── gael-profile.jpg
    ├── project-contapp.jpg
    ├── project-foot.jpg
    └── project-hikaly.jpg

public/
└── cv/CV-Gael-Randriamanana.pdf   Servi tel quel, lien de téléchargement dans la Navbar et sur /resume
```

## À personnaliser

- `src/data/projects.js` : ajouter un lien de démo live (`demo`) dès qu'un des
  projets est déployé quelque part — actuellement seuls les liens GitHub sont
  renseignés. Le projet "Gestion de Tâches" n'a pas de capture — à ajouter si
  tu en fais une.
- `src/pages/Contact.jsx` : si tu ouvres un compte LinkedIn ou obtiens un
  numéro WhatsApp Business, ajoute-le à côté du téléphone.
- `src/pages/Resume.jsx` : le contenu vient de ton CV PDF ; à tenir à jour si
  ta formation ou tes expériences changent (le PDF dans `public/cv/` aussi).
- `public/cv/CV-Gael-Randriamanana.pdf` : remplace ce fichier quand tu mets ton
  CV à jour, en gardant le même nom pour que le lien de téléchargement reste
  valide.
