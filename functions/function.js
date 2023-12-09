import { gridsFolder } from "./path.js";

export function hello(){
    console.log('hello');
};

export async function readFileAndReturnArray(fileUrl) {
  return new Promise((resolve, reject) => {
    $.get(fileUrl, function(data) {
      var lignes = data.split(/\r\n|\n/);
      resolve(lignes);
    }).fail(function(error) {
      reject(error);
    });
  });
};

export async function getRandomSubset(array) {
  var toShort = false;
  var resultArray = new Array();
  // S'assurer que le tableau d'origine a au moins 25 éléments
  if (array.length <= 25) {
    toShort = true;
  }

  if(toShort = false)
  {
      // Extraire les 25 premiers éléments du tableau mélangé
      resultArray = array.slice(0, 25);
  }
  else 
  {
    //si la liste est trop courte, alors on va compléter avec la grille standard.
    var standardGrid = await readFileAndReturnArray(gridsFolder+"standard.txt");
    resultArray = array.slice(0, array.length);
    standardGrid = standardGrid.slice().sort(() => Math.random() - 0.5);
    resultArray = resultArray.concat(standardGrid.slice(0, (25-array.length)));
  }
  // On mélange le tableau
  resultArray = resultArray.slice().sort(() => Math.random() - 0.5);

  // Garantir que l'élément à l'index 12 est "bonus"
  resultArray[12] = "";

  return resultArray;
};

function setCell(item, index, arr) {
  $(".cell-"+ index).text(item)
};

export async function setGrid(fileUrl) {
  var grille = await readFileAndReturnArray(fileUrl);
  grille = await getRandomSubset(grille);
  grille.forEach(setCell);
}

export function resetGrid(){
  for(var i = 0; i<25; i++)
  {
    $("#c"+i).removeClass("selected");
    $("#c"+i).removeClass("bingo");
  }
}
