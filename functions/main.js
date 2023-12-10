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
    if ( Cookies.get('selectedGrid') != undefined) {selectedGrid = Cookies.get('selectedGrid');}
    if ( Cookies.get('selectAlign') != undefined) {selectedAlign = Cookies.get('selectAlign');}
    if ( Cookies.get('transparencyTrigger') != undefined) {transparencyTrigger = convertBool(Cookies.get('transparencyTrigger'));}
    if ( Cookies.get('inputSound') != undefined) {selectedVolume = Cookies.get('inputSound');}

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

$('#newGrid').on('click',function (e) {
    setGrid(gridsFolder+selectedGrid);
    resetBingoAnim();
    resetGrid();
});

$('#continueBingo').on('click', function() {
    continueBingo();
});

$("#selectGrid").on('change', function () {
    selectedGrid = $(this).val();
    Cookies.set("selectedGrid",selectedGrid, { expires: 7, sameSite: 'strict'  });
});

$("#selectAlign").on('change', function () {
    changeAlign($(this).val());
    Cookies.set("selectAlign",$(this).val(), { expires: 7, sameSite: 'strict'  });
});

$('#inputSound').on('input', function () {
    setVolume($(this).val()/100);
    Cookies.set("inputSound",$(this).val(), { expires: 7, sameSite: 'strict'  });
});

$('.switchTrsp').on('click', function () {
    revertCheck("#switchTransparence");
    setTransparencyMode($("#switchTransparence").is(':checked'));
    Cookies.set("transparencyTrigger",$("#switchTransparence").is(':checked'), { expires: 7, sameSite: 'strict' });
});


  