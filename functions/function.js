export function hello(){
    console.log('hello');
};

export function readFileAndReturnArray(fileUrl) {
  return new Promise((resolve, reject) => {
    $.get(fileUrl, function(data) {
      var lignes = data.split(/\r\n|\n/);
      resolve(lignes);
    }).fail(function(error) {
      reject(error);
    });
  });
};

export function getRandomSubset(array) {
  // S'assurer que le tableau d'origine a au moins 25 éléments
  if (array.length < 24) {
    throw new Error("Le tableau doit avoir au moins 25 éléments.");
  }

  // Mélanger le tableau d'origine
  const shuffledArray = array.slice().sort(() => Math.random() - 0.5);

  // Garantir que l'élément à l'index 12 est "bonus"
  shuffledArray[12] = "Bonus";

  // Extraire les 25 premiers éléments du tableau mélangé
  const resultArray = shuffledArray.slice(0, 25);

  return resultArray;
};

function setCell(item, index, arr) {
  $(".cell-"+ index).text(item)
};

export function setGrid(fileUrl) {
  readFileAndReturnArray(fileUrl)
  .then(lines => {
    //console.log(lines);
    var grille = lines;
    // Faites quelque chose avec le tableau de lignes
    console.log(grille);
    console.log(grille.length);
    var grille2 = getRandomSubset(grille);
    console.log(grille2);
    grille2.forEach(setCell);

  })
  .catch(error => {
    console.error('Une erreur s\'est produite :', error);
  });
}