# Spotify Clone

## Introduction
Ce projet consiste à créer un site web exploitant une API Spotify. L'objectif est de développer une application web utilisant React pour afficher des informations sur des albums, des genres et des artistes à partir des données fournies par l'API.

## Fonctionnalités du Site Web
Le site web devra comporter les pages suivantes :

### Page de Listing des Albums
Affiche la liste paginée de tous les albums. Au clic sur un album, l'utilisateur est redirigé vers la page de détail de l'album.

### Page de Détail d'un Album
Affiche le détail d'un album, ainsi que ses pistes. Il doit être possible de jouer les pistes à l'aide d'un lecteur audio HTML5. Il ne doit pas être possible de lancer plusieurs musiques simultanément.

### Page de Listing des Genres
Affiche la liste des genres. Au clic sur un genre, l'utilisateur est redirigé vers la page du détail du genre sélectionné.

### Page du Détail d'un Genre
Affiche la liste des albums correspondants au genre sélectionné de la même manière que sur la page de listing des albums. Au clic sur un album, l'utilisateur est redirigé vers la page de détail d'un album.

### Page de Listing des Artistes
Affiche la liste paginée des artistes. Au clic sur un artiste, l'utilisateur est redirigé vers la page de détail d'un artiste.

### Page de Détail d'un Artiste
Affiche un listing des albums de l'artiste de la même manière que sur la page du listing des albums. Au clic sur un album, l'utilisateur est redirigé vers la page de détail d'un album.

### Page de Recherche
Permet à l'utilisateur de rechercher soit un album, soit un genre, soit un artiste. Les résultats seront paginés.

### Page d'Accueil
Affiche un listing aléatoire des albums contenus dans la base de données.

## Développement
Le site web doit être développé en utilisant React pour la partie front-end. Les données seront récupérées à partir de l'API Spotify en utilisant les appels appropriés.

## Prérequis
- Node.js et npm pour la gestion des dépendances JavaScript.
- Docker pour la configuration de l'API Spotify.

## Installation et Utilisation

### 1. Cloner le Répertoire du Projet
```bash
git clone git@github.com:Liilice/Spotify.git
cd Spotify
```
### 2. Configuration de l'API 
Installation de Docker : https://docs.docker.com/engine/install/ 

Image et tutoriel pour installer l'image : https://hub.docker.com/r/matfire/spotitech

Si vous avez un problème de version lors de lancement de votre docker, ajoutez platform: linux/amd64 sous le champ "image:"
Une image Docker est fournie pour configurer l'API Spotify. En suivant les instructions du README, vous pouvez accéder à l'API à l'adresse `localhost:8000`.

### 3. Installer les Dépendances JavaScript
Utilisez npm pour installer les dépendances du projet.
```bash
npm install
```

### 4. Lancez le serveur de développement avec `npm start`.
```bash
npm start
```
### 5.  Accédez au site web dans votre navigateur à l'adresse `http://localhost:3000`.
