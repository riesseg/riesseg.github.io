import { resetGrid, setTransparencyMode, setVolume, changeAlign,convertBool, revertCheck } from "./function.js";
import { setGrid, loadGridsChoice, isBingo, getRandomJoker  } from "./grid.js";
import { itsBingo, continueBingo, resetBingoAnim, GetRandomImgBingo, isRotate} from "./rain.js";
import { gridsFolder, gridsImgJokerFolder, standardGridFile, bingoImgFolder } from "./path.js";

var selectedGrid = standardGridFile;
var transparencyTrigger = false;
var selectedVolume = 80;
var selectedAlign = "center";

export function hello() {
    console.log('hello!');
};

$(document).ready(async function() {
    console.log($.cookie())
    if ( $.cookie('selectedGrid') != undefined) {selectedGrid = $.cookie('selectedGrid');}
    if ( $.cookie('selectAlign') != undefined) {selectedAlign = $.cookie('selectAlign');}
    if ( $.cookie('transparencyTrigger') != undefined) {transparencyTrigger = convertBool($.cookie('transparencyTrigger'));}
    if ( $.cookie('inputSound') != undefined) {selectedVolume = $.cookie('inputSound');}

    var imgJoker  = await  getRandomJoker();
    var imgBingo  = await  GetRandomImgBingo();

    setGrid(gridsFolder+selectedGrid);
    $("#selectGrid").val(selectedGrid);
    $("#selectAlign").val(selectedAlign);
    $("#inputSound").val(selectedVolume);
    $('#switchTransparence').prop('checked', transparencyTrigger);
    loadGridsChoice(selectedGrid);
    changeAlign(selectedAlign);
    setVolume(selectedVolume/100);
    setTransparencyMode(transparencyTrigger);

    $(".joker").css("background-image","url('"+gridsImgJokerFolder+imgJoker+"')");
    $(".imgBingo").attr("src", bingoImgFolder+imgBingo[0]);
    isRotate(imgBingo[1]);
});

$(".tuile").on('click', function(){
    $(this).toggleClass('selected');
    if (isBingo()){
        itsBingo();
    }
});

$("#selectGrid").on('change', function () {
    selectedGrid = $(this).val();
    $.cookie("selectedGrid",selectedGrid, { expires: 7 });
});

$("#selectAlign").on('change', function () {
    changeAlign($(this).val());
    $.cookie("selectAlign",$(this).val(), { expires: 7 });
});

$('#inputSound').on('input', function () {
    setVolume($(this).val()/100);
    $.cookie("inputSound",$(this).val(), { expires: 7 });
});

$('#newGrid').on('click',function (e) {
    setGrid(gridsFolder+selectedGrid);
    resetBingoAnim();
    resetGrid();
});

$('#continueBingo').on('click', function() {
    continueBingo();
});

$('.switchTrsp').on('click', function () {
    revertCheck("#switchTransparence");
    setTransparencyMode($("#switchTransparence").is(':checked'));
    $.cookie("transparencyTrigger",$("#switchTransparence").is(':checked'), { expires: 7 });
});


  