# BingoBuche

Bingo original réalisé par Plogojowitz (LegalAlexis) pour le twitch de Bubuchenbois.

---

## Fonctionnement :

La règle du bingo est simple, il faut réussir a remplir une ligne, une colonne ou une diagonale sur la grille.

La case du milieu est un Joker et peut être cochée ou non.

Si un bingo est réalisé, il y'a une animation de victoire avec de la musique.

## Moteur de génération des grilles :

Les grilles se trouvent dans le dossier *grids*.

Ce sont des fichiers texte avec un item par ligne.
Le fichier est lu est utilisé pour alimenter les tuiles du bingo.

le fichier *standard.txt* est OBLIGATOIRE !
Il permet de compléter une grille qui ne contiendrait pas 24 items afin de compléter la grille.
Le but étant de pas devoir forcément s'imposer une longue réflexion pour trouver les idées.

## Multi-grilles

Il est possible d'avoir plusieurs grilles, que les utilisateurs peuvent choisir avant de généré la grille.
Une liste déroulante permet de sélectionner la grille active.

## Mode transparence :

Utile pour les vidéastes qui souhaitent utiliser le jeu dans le logiciel de live.
En effet, le mode va transformer le fond en vert et faire dispaître les tuiles.
Un interrupteur présent dans le menu permet de réafficher la grille.

# Todo

* [X] mettre les images du popup bingo en variables
* [X] revoir la police du bingo dans la popup (quand même...)
* [ ] Faire une explication du fonctionnement des paramétrages
* [ ] faire une branch main neutre, et une branche HA et une branche Bubuche
* [X] Faire une option pour mettre la grille a gauche ou a droite
  * [X] ou la placer en drag and drop ? a voir... (non)
* [ ] Revoir la version mobile vitef
