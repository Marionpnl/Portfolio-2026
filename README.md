# Marion Penel | Portfolio Professionnel

Bienvenue sur le dépôt de mon portfolio professionnel. Ce projet est une application web moderne, performante et entièrement accessible, conçue pour présenter mes compétences, mes créations et mon parcours de développeuse web.

---

## 🚀 Fonctionnalités & Optimisations

- **Sélection de projets dynamiques :** Système de filtrage fluide par catégorie (Front-End, Back-End, Fullstack) et affichage détaillé via des modales sur-mesure.
- **Internationalisation (i18n) :** Application entièrement bilingue (Français / Anglais) avec chargement asynchrone des dictionnaires de traduction pour optimiser les performances.
- **Formulaire de contact sécurisé :** Intégration asynchrone avec l'API Web3Forms, validation stricte des champs en temps réel (`.trim()`) et gestion des variables d'environnement.
- **Performance & SEO de pointe :** Score optimal sur Lighthouse grâce au préchargement asynchrone des polices/icônes, une architecture d'image soignée et une structure HTML sémantique.
- **Design Responsive & Fluide :** Interface moderne conçue d'abord sur Figma, puis intégrée avec Tailwind CSS (gestion fine du cross-browsers incluant des correctifs CSS natifs pour Firefox).

---

## 🛠️ Stack Technique

| Catégorie                   | Technologies utilisées                                                    |
| :-------------------------- | :------------------------------------------------------------------------ |
| **Front-End**               | React (Hooks, Components, Context), TypeScript, Tailwind CSS, HTML5, CSS3 |
| **Outils & Gestion**        | Vite, i18next (Internationalisation), Git & GitHub                        |
| **Architecture / Sécurité** | Variables d'environnement (`.env`), TypeScript Generics & Interfaces      |

---

## 📦 Architecture du projet

```text
├── index.html            # Point d'entrée HTML de l'application (SEO, Fonts, Open Graph)
├── src/
│   ├── assets            # Images
│   ├── components/       # Composants React réutilisables
│   │   ├── ui/           # Composants atomiques (Cards, Modales, Formulaire)
│   │   └── layout/       # Footer & Navigation
│   │   └── sections/     # Sections principales de la page (Hero, About, Projects)
│   ├── data/             # Fichiers de données statiques (Liste des projets et des skills)
│   ├── i18n/             # Configuration de i18next et dictionnaires JSON (FR/EN)
│   ├── types/            # Fichiers de typage et interfaces TypeScript
│   ├── index.css         # Styles globaux et configurations Tailwind
│   ├── App.tsx           # Composant racine
│   └──  main.tsx         # Point d'entrée de l'application
└── .env.local            # Fichier caché pour les variables d'environnement
```

## ⚙️ Installation et Lancement Local

### 1. Prérequis

Assurez-vous d'avoir installé [Node.js](https://nodejs.org/) sur votre machine (version LTS recommandée).

### 2. Cloner le projet

```bash
git clone [https://github.com/votre-username/nom-du-repo.git](https://github.com/votre-username/nom-du-repo.git)
cd nom-du-repo
```

### 3. Installer les dépendances

```bash
npm install
```

### 4. Configurer les variables d'environnement

Créez un fichier .env à la racine du projet et ajoutez votre clé publique Web3Forms:

VITE_WEB3FORMS_ACCESS_KEY=votre_cle_publique_ici

### 5. Lancer le serveur de développement

```bash
npm run dev
```

L'application sera accessible localement à l'adresse indiquée dans votre terminal
