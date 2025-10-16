# Configuration du Projet WebKoda

Ce document contient toutes les informations nécessaires pour configurer le projet sur un nouvel ordinateur.

## Versions des Outils

### Environnement de Développement
- **Node.js**: v22.16.0
- **npm**: 10.9.2
- **Git**: 2.50.0.windows.1

### Framework et Bibliothèques Principales
- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **React Router DOM**: ^7.6.2
- **TypeScript**: ^4.9.5
- **React Scripts**: 5.0.1

### Dépendances de Production
- @testing-library/jest-dom: ^5.17.0
- @testing-library/react: ^13.4.0
- @testing-library/user-event: ^13.5.0
- @types/jest: ^27.5.2
- @types/node: ^16.18.89
- @types/react: ^18.2.66
- @types/react-dom: ^18.2.22
- lucide-react: ^0.344.0
- react-helmet: ^6.1.0
- web-vitals: ^2.1.4

### Dépendances de Développement
- @types/react-helmet: ^6.1.11
- autoprefixer: ^10.4.18
- ftp-deploy: ^2.4.7
- postcss: ^8.4.35
- tailwindcss: ^3.4.1

## Instructions d'Installation sur le Nouvel Ordinateur

### 1. Prérequis
Installez les outils suivants :
- Node.js v22.16.0 ou version compatible (https://nodejs.org/)
- Git (https://git-scm.com/)

### 2. Cloner le Repository
```bash
git clone <URL_DU_REPOSITORY>
cd webkoda
```

### 3. Installer les Dépendances
```bash
npm install
```

### 4. Scripts Disponibles
- `npm start` : Démarre le serveur de développement
- `npm run build` : Crée une version de production
- `npm test` : Lance les tests
- `npm run deploy` : Compile et déploie le projet

### 5. Configuration Git
Configurez votre identité Git si ce n'est pas déjà fait :
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

## Structure du Projet
- `/src` : Code source de l'application
- `/public` : Fichiers publics et assets
- `/src/components` : Composants React
- `/src/pages` : Pages de l'application
- `/src/posts` : Articles de blog
- `/src/data` : Données et configurations

## Notes Importantes
- Le projet utilise TypeScript
- Tailwind CSS est configuré pour le styling
- Le déploiement se fait via FTP (voir deploy.js)
- Le projet est configuré pour React Router DOM v7

## Date de Documentation
Générée le : 2025-10-16
