const images = ["Lion-Coin.png", "tw_abo-T1.png", "tw_abo-T2.png", "tw_abo-T3.png" ]
const rainFolder = "./ressources/rain/"
var audio = document.getElementById("birdmachine"); 
var interval;
export var hasAnimationBeenTriggered;

export function itsBingo() {
        if(!hasAnimationBeenTriggered) {
        $("#bingo").toggleClass("hidden");
        audio.play();
        makeItRain()
        hasAnimationBeenTriggered = true;
    }
}

function makeItRain() {
    interval = self.setInterval(function(){addRandomImage()},50);
}

function addRandomImage() {
    let rngImg = Math.floor((Math.random() * 4));
    let rngX = Math.floor((Math.random() * ($(window).width() - 91)));
    let rngY = Math.floor((Math.random() * ($(window).height() - 91)));
    $( "#rain" ).append(`<img src="${rainFolder}${images[rngImg]}" style="top: ${rngY}px;left: ${rngX}px;" class="floating pop">`);
}

export function continueBingo() {
    clearInterval(interval);
    $("#bingo").toggleClass("hidden");
    audio.pause();
}

export function resetBingoAnim() {
    hasAnimationBeenTriggered = false;
}