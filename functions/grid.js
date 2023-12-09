import { readFileAndReturnArray} from "./function.js";
import { gridsFolder } from "./path.js";

var bingoLines = [
  [0,1,2,3,4],
  [5,6,7,8,9],
  [10,11,12,13,14],
  [15,16,17,18,19],
  [20,21,22,23,24],

  [0,5,10,15,20],
  [1,6,11,16,21],
  [2,7,12,17,22],
  [3,8,13,18,23],
  [4,9,14,19,24],

  [0,6,12,18,24],
  [4,8,12,16,20]
];

//lit le fichier config_grids présent dans le dossier grids. 
//ignore les lignes qui commencent par #
//converti les lignes en tableau utilisé par la suite. 
async function initGrids()
{
  var listGrids = [];
  listGrids.push(["Standard", "standard.txt"]);
  var gridsConfig = await readFileAndReturnArray(gridsFolder+"config_grids.txt");
  $.each(gridsConfig, function (index, value) {
    if (!value.startsWith("#"))
    {
      listGrids.push(value.split(';'));
    }
  });
  return listGrids;
}


// Fonction pour charger les options dans le menu déroulant
export async function loadGrid() {
  var listGrids = await initGrids();

  var selectState = $("#selectGrid");
  // Ajouter les options au menu déroulant
  $.each(listGrids, function (index, value) {
    selectState.append($("<option>", { value: value[1], text: value[0] }));
  });
}

export function isBingo() {
  var bool = false;
  $.each( bingoLines, function( key, line ) {
      if(line.every(isSelected)) {
        line.forEach((item, index, arr) => $("#c"+ item).addClass('bingo'));
        bool = true;
      }  
   });
   return bool;  
}; 
function isSelected(index) {
    return $("#c"+ index).hasClass("selected")
}
