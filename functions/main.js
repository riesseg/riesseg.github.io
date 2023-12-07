import { setGrid, resetGrid } from "./function.js";
import { loadGrid, listGrids  } from "./grille.js";
import { itsBingo, continueBingo, resetBingoAnim } from "./rain.js";

var grille = new Array();
var grille2 = new Array();
var selectedGrid = listGrids[0][1];
const fichierLoaded = 0;
var displayInterval;
var transparencyTrigger = false;

export function hello() {
    console.log('hello!');
};

 $( document ).ready(function() {
    var selectGrid = $("#selectGrid");

    setGrid("grilles/"+selectedGrid);
    selectGrid.val(selectedGrid);

    loadGrid();

    transparencyTrigger = false;
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



function setTransparencyMode() {
    transparencyTrigger = !transparencyTrigger;
    if(transparencyTrigger) {
        $("html").css('background-color', '#00FF00');
        startDisplayInterval();

        $(".container")
            .mouseenter(function(){
                $(".cell").toggleClass('animated-hidden');
                $(".cell").toggleClass('animated-visible');
                clearInterval(displayInterval);
            })
            .mouseleave(function() {
                startDisplayInterval();
            })
    } else {
        $("html").css('background-color', '#526870');
        $(".cell").toggleClass('animated-hidden');
        $(".cell").toggleClass('animated-visible');
        clearInterval(displayInterval);
        $(".container").unbind("mouseenter");
        $(".container").unbind("mouseleave");
    }
}

function startDisplayInterval() {
    displayInterval = setInterval(
        function() {
            if ($('.container:hover').length === 0) {
                $(".cell").addClass('animated-hidden');
                $(".cell").removeClass('animated-visible');
            }
        }
    , 1000)
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

$("#selectGrid").on('change', function () {
    selectedGrid = $("#selectGrid").val();
});

$('#newGrid').on('click',function (e) {
    setGrid("grilles/"+selectedGrid);
    resetBingoAnim();
    resetGrid();
});

$('#continueBingo').on('click', function() {
    continueBingo();
});

$('#toggleTransparence').change(function() {
    setTransparencyMode()
});


  