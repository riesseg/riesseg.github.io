import { rainFolder } from "./path.js";
import { readFileAndReturnArray} from "./function.js";

const images = ["Lion-Coin.png", "Tw_abo-T1.png", "Tw_abo-T2.png", "Tw_abo-T3.png" ]
var audio = document.getElementById("mp3player"); 
var interval;
export var hasAnimationBeenTriggered;

export async function initRain()
{
  var listRain = [];
  var gridsConfig = await readFileAndReturnArray(rainFolder+"config_rain.txt");
  $.each(gridsConfig, function (index, value) {
    if (value.startsWith("img-"))
    {
        listRain.push(value.substring(4, value.length));
    }
  });
  return listRain;
}

export function itsBingo() {
        if(!hasAnimationBeenTriggered) {
        $("#bingo").toggleClass("hidden");
        audio.volume = 0.0;
        audio.play();
        makeItRain()
        hasAnimationBeenTriggered = true;
    }
}

function makeItRain() {
    interval = self.setInterval(function(){addRandomImage()},50);
}

async function addRandomImage() {
    var listRain = await initRain();
    let rngImg = Math.floor((Math.random() * listRain.length));
    let rngX = Math.floor((Math.random() * ($(window).width() - 91)));
    let rngY = Math.floor((Math.random() * ($(window).height() - 91)));
    $( "#rain" ).append(`<img src="${rainFolder}${listRain[rngImg]}" style="top: ${rngY}px;left: ${rngX}px;" class="floating pop">`);
}

export function continueBingo() {
    clearInterval(interval);
    $("#bingo").toggleClass("hidden");
    audio.pause();
}

export function resetBingoAnim() {
    hasAnimationBeenTriggered = false;
}