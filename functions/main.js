import { resetGrid, setTransparencyMode, setVolume, changeAlign } from "./function.js";
import { setGrid, loadGridsChoice, isBingo, getRandomJoker  } from "./grid.js";
import { itsBingo, continueBingo, resetBingoAnim, GetrandomImgBIngo} from "./rain.js";
import { gridsFolder, gridsImgJokerFolder, standardGridFile, bingoImgFolder } from "./path.js";

var selectedGrid = standardGridFile;
var displayInterval;
var transparencyTrigger = false;

export function hello() {
    console.log('hello!');
};

$(document).ready(async function() {
    var imgJoker  = await  getRandomJoker();
    var imgBingo  = await  GetrandomImgBIngo();

    setGrid(gridsFolder+selectedGrid);
    $("#selectGrid").val(selectedGrid);

    loadGridsChoice();

    transparencyTrigger = false;
    
    $(".joker").css("background-image","url('"+gridsImgJokerFolder+imgJoker+"')");
    $(".imgBingo").attr("src", bingoImgFolder+imgBingo);
});

$('#inputSound').on('input', function () {
    setVolume($(this).val()/100);
});

$(".tuile").on('click', function(){
    $(this).toggleClass('selected');
    if (isBingo()){
        itsBingo();
    }
});

$("#selectGrid").on('change', function () {
    selectedGrid = $(this).val();
});

$("#selectAlign").on('change', function () {
    changeAlign($(this).val());
});

$('#newGrid').on('click',function (e) {
    setGrid(gridsFolder+selectedGrid);
    resetBingoAnim();
    resetGrid();
});

$('#continueBingo').on('click', function() {
    continueBingo();
});

$('#toggleTransparence').on('change', function () {
    transparencyTrigger = !transparencyTrigger;
    setTransparencyMode(transparencyTrigger);
});


  