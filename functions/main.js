import { resetGrid, setTransparencyMode } from "./function.js";
import { setGrid, loadGridsChoice, isBingo, getRandomJoker  } from "./grid.js";
import { itsBingo, continueBingo, resetBingoAnim} from "./rain.js";
import { gridsFolder, gridsImgJokerFolder } from "./path.js";

var selectedGrid = "standard.txt";
var displayInterval;
var transparencyTrigger = false;

export function hello() {
    console.log('hello!');
};

$(document).ready(async function() {
    var selectGrid = $("#selectGrid");
    var imgJoker  =await  getRandomJoker();

    setGrid(gridsFolder+selectedGrid);
    selectGrid.val(selectedGrid);

    loadGridsChoice();

    transparencyTrigger = false;
    console.log(gridsImgJokerFolder+imgJoker)
    $(".joker").css("background-image","url('"+gridsImgJokerFolder+imgJoker+"')");
    
});

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


  