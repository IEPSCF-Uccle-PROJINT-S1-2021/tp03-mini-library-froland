# TP03 - Mini-bibliothèque

Votre objectif pour ce TP est de réaliser un mini-site affichant une collection de livres.
Un formulaire permet de choisir la catégorie littéraire.
En appuyant sur un bouton, vous arrivez sur une autre page présentant la collection correspondante.

## Consignes

* Le serveur HTTP sera implémenté à l'aide d'express.js dans le script `app.js`.
  Il écoutera sur le port 4242.
* La mise en forme et la mise en page du formulaire et de la page d'affichage des livres seront assurées par une feuille de style CSS.
  Vous êtes libres de vos choix de design mais la présentation des deux pages doit être soignée et professionelle.
* Le formulaire de choix de catégorie peut être une page statique HTML ou générée à partir d'un template pug.
  Il présentera le choix de catégorie à l'aide d'une liste déroulante.
  Un bouton permettra de lancer la recherche.
* La page d'affichage de la collection est générée à partir d'un template pug.
  Elle présentera le titre et l'auteur de chaque livre appartenent à la catégorie sélectionnée sous forme de tableau.
  Un lien hypertexte permettra de revenir facilement au formulaire de recherche.
* Les méthodes HTTP et URLs suivantes seront utilisées :
  * `GET /books/search` : formulaire de recherche, idéalement en direct, mais une redirection vers une page statique est autorisée.
  * `POST /books/list` : affichage des livres.
  * `GET /` : redirigée vers `/form`.
* Le fichier `package.json` sera mis à jour avec les éventuelles dépendances.
* Les URLs `/books/search` et `/books/list` seront prises en charge par un module séparé `books.js`.
* Les livres seront stockés dans `books.js` sous forme d'un tableau d'objets.
  Ces objets contiendront les propriétés `author`, `title` et `category`.
* Utilisez `morgan` pour afficher les URLs utilisées dans la console du serveur.
  Configurez-le pour utiliser le format `dev`.

## Liste de livres

Voici une liste de livres.
Votre code doit contenir au moins ceux-ci.
Vous êtes libres d'en ajouter.

auteur | titre | catégorie
-------|-------|---------
Guillaume Debré | L'affaire Lafayette | roman historique
Gérald Messadié | La conspiration Jeanne d'Arc | roman historique
J.R.R. Tolkien | Le Seigneur des anneaux | fantasy
Michael Ende | L'Histoire sans fin | fantasy
Andrzej Sapkowski | Le Sorceleur | fantasy
George R. R. Martin | Le Trône de fer | fantasy
Hervé Bazin | Vipère au poing | autobiographie
Marie Cardinal | Les mots pour le dire | autobiographie
Giacomo Casanova | Histoire de ma vie | autobiographie

## Remarque

Ce repository est configuré pour ne pas sauvegarder le répertoire `node_modules`.
Ne changez pas ce réglage.
