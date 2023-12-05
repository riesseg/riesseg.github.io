import { setGrid, resetGrid } from "./function.js";
import { loadGrid  } from "./grille.js";

var grille = new Array();
var grille2 = new Array();
var selectedValue = "defaultState";
const fichierLoaded = 0;

export function hello() {
    console.log('hello!');
};

 $( document ).ready(function() {
    setGrid("../grilles/secret_histoire.txt");
    // Récupérer l'élément select
    var selectState = $("#selectState");

    // Charger les options
    loadGrid();

    // Sélectionner la valeur par défaut
    selectState.val(selectedValue);

    // Écouter les changements de sélection

});

$("#selectState").on('change', function () {
    console.log(selectedValue);
    selectedValue = $("#selectState").val();
    console.log(selectedValue);
});

$('#newGrid').on('click',function (e) {
    //e.preventDefault(); //optional
    //some code
    setGrid("../grilles/secret_histoire.txt");
    resetGrid();
});


  