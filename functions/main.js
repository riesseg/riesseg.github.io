import { setGrid, resetGrid } from "./function.js";
import { loadGrid  } from "./grille.js";
import { itsBingo, continueBingo, resetBingoAnim } from "./rain.js";

var grille = new Array();
var grille2 = new Array();
var selectedValue = "defaultState";
const fichierLoaded = 0;

export function hello() {
    console.log('hello!');
};

 $( document ).ready(function() {
    setGrid("grilles/secret_histoire.txt");
    // Récupérer l'élément select
    var selectState = $("#selectState");

    // Charger les options
    loadGrid();

    // Sélectionner la valeur par défaut
    selectState.val(selectedValue);

    // Écouter les changements de sélection

});

function isSelected(index) {
    return $("#c"+ index).hasClass("selected")
}

function checkLine(indexesToCheck) {
    if(indexesToCheck.every(isSelected)) {
        indexesToCheck.forEach((item, index, arr) => $("#c"+ item).addClass('bingo'))
        itsBingo();
    }
}
$(".cell").on('click', function(){
    $(this).toggleClass('selected');
    checkLine([0,1,2,3,4]);
    checkLine([5,6,7,8,9]);
    checkLine([10,11,12,13,14]);
    checkLine([15,16,17,18,19]);
    checkLine([20,21,22,23,24]);

    checkLine([0,5,10,15,20]);
    checkLine([1,6,11,16,21]);
    checkLine([2,7,12,17,22]);
    checkLine([3,8,13,18,23]);
    checkLine([4,9,14,19,24]);

    checkLine([0,6,12,18,24]);
    checkLine([4,8,12,16,20]);
});

$("#selectState").on('change', function () {
    console.log(selectedValue);
    selectedValue = $("#selectState").val();
    console.log(selectedValue);
});

$('#newGrid').on('click',function (e) {
    setGrid("grilles/secret_histoire.txt");
    resetBingoAnim();
    resetGrid();
});

$('#continueBingo').on('click', function() {
    continueBingo();
});

  