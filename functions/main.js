import { readFileAndReturnArray, getRandomSubset, hello, shuffle} from "./function.js";
var grille = new Array();
var grille2 = new Array();
const fichierLoaded = 0;
readFileAndReturnArray("../grilles/secret_histoire.txt")
  .then(lines => {
    //console.log(lines);
    grille = lines;
    // Faites quelque chose avec le tableau de lignes
    console.log(grille);
    console.log(grille.length);
    grille2 = getRandomSubset(grille);
    console.log(grille2);
  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
    fichierLoaded = 2;
  });
