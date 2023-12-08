import { setGrid, resetGrid } from "./function.js";
import { loadGrid, listGrids, isBingo  } from "./grid.js";
import { itsBingo, continueBingo, resetBingoAnim } from "./rain.js";

var selectedGrid = listGrids[0][1];
var displayInterval;
var transparencyTrigger = false;

export function hello() {
    console.log('hello!');
};

 $( document ).ready(function() {
    var selectGrid = $("#selectGrid");

    setGrid("grids/"+selectedGrid);
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
    if (isBingo()){
        itsBingo();
    }
});

$("#selectGrid").on('change', function () {
    selectedGrid = $("#selectGrid").val();
});

$('#newGrid').on('click',function (e) {
    setGrid("grids/"+selectedGrid);
    resetBingoAnim();
    resetGrid();
});

$('#continueBingo').on('click', function() {
    continueBingo();
});

$('#toggleTransparence').change(function() {
    setTransparencyMode()
});


  