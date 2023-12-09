import { setGrid, resetGrid } from "./function.js";
import { loadGrid, isBingo  } from "./grid.js";
import { itsBingo, continueBingo, resetBingoAnim } from "./rain.js";
import { gridsFolder } from "./path.js";

var selectedGrid = "standard.txt";
var displayInterval;
var transparencyTrigger = false;

export function hello() {
    console.log('hello!');
};

 $( document ).ready(function() {
    var selectGrid = $("#selectGrid");

    setGrid(gridsFolder+selectedGrid);
    selectGrid.val(selectedGrid);

    loadGrid();

    transparencyTrigger = false;
});

function setTransparencyMode() {
    transparencyTrigger = !transparencyTrigger;
    if(transparencyTrigger) {
        $("html").css('background-color', '#00FF00');
        startDisplayInterval();

        $(".container")
            .mouseenter(function(){
                $(".tuile").toggleClass('animated-hidden');
                $(".tuile").toggleClass('animated-visible');
                clearInterval(displayInterval);
            })
            .mouseleave(function() {
                startDisplayInterval();
            })
    } else {
        $("html").css('background-color', '#526870');
        $(".tuile").toggleClass('animated-hidden');
        $(".tuile").toggleClass('animated-visible');
        clearInterval(displayInterval);
        $(".container").unbind("mouseenter");
        $(".container").unbind("mouseleave");
    }
}

function startDisplayInterval() {
    displayInterval = setInterval(
        function() {
            if ($('.container:hover').length === 0) {
                $(".tuile").addClass('animated-hidden');
                $(".tuile").removeClass('animated-visible');
            }
        }
    , 1000)
}

$(".tuile").on('click', function(){
    $(this).toggleClass('selected');
    if (isBingo()){
        itsBingo();
    }
});

$("#selectGrid").on('change', function () {
    selectedGrid = $("#selectGrid").val();
});

$('#newGrid').on('click',function (e) {
    setGrid(gridsFolder+selectedGrid);
    resetBingoAnim();
    resetGrid();
});

$('#continueBingo').on('click', function() {
    continueBingo();
});

$('#toggleTransparence').change(function() {
    setTransparencyMode()
});


  