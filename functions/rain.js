import { rainFolder, rainMp3Folder, rainImgFolder, configRainFile } from "./path.js";
import { readFileAndReturnArray} from "./function.js";

var audio = document.getElementById("mp3Player"); 
var audioMp3 = $("#mp3Song"); 

var interval;
export var hasAnimationBeenTriggered;

export async function initRain()
{
  var listRain = [];
  var gridsConfig = await readFileAndReturnArray(rainFolder+configRainFile);
  $.each(gridsConfig, function (index, value) {
    if (value.startsWith("img-"))
    {
        listRain.push(value.substring(4, value.length));
    }
  });
  return listRain;
}

async function initMp3()
{
  var listMp3 = [];
  var gridsConfig = await readFileAndReturnArray(rainFolder+configRainFile);
  $.each(gridsConfig, function (index, value) {
    if (value.startsWith("mp3-"))
    {
        listMp3.push(value.substring(4, value.length));
    }
  });
  return listMp3;
}
export async function randomMp3()
{
    var listMp3 = await initMp3();
    let rngArray = Math.floor((Math.random() * listMp3.length));
    return listMp3[rngArray];
}

export async function itsBingo() {
        if(!hasAnimationBeenTriggered) {
        $("#bingo").toggleClass("hidden");
        var songMp3 = await randomMp3();
        audioMp3.attr("src", rainMp3Folder+songMp3);
        audio.load();
        audio.play();
        makeItRain()
        hasAnimationBeenTriggered = true;
    }
}

async function makeItRain() {
    var listRain = await initRain();
    interval = self.setInterval(function(){addRandomImage(listRain)},50);
}

function addRandomImage(listRain) {
    let rngImg = Math.floor((Math.random() * listRain.length));
    let rngX = Math.floor((Math.random() * ($(window).width() - 91)));
    let rngY = Math.floor((Math.random() * ($(window).height() - 91)));
    $( "#rain" ).append(`<img src="${rainImgFolder}${listRain[rngImg]}" style="top: ${rngY}px;left: ${rngX}px;" class="floating pop">`);
}

export function continueBingo() {
    clearInterval(interval);
    $("#bingo").toggleClass("hidden");
    audio.pause();
}

export function resetBingoAnim() {
    hasAnimationBeenTriggered = false;
}