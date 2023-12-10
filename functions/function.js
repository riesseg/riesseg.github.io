var displayInterval;

export function hello(){
    console.log('hello');
};

export async function readFileAndReturnArray(fileUrl) {
  return new Promise((resolve, reject) => {
    $.get(fileUrl, function(data) {
      var lignes = data.split(/\r\n|\n/);
      resolve(lignes);
    }).fail(function(error) {
      reject(error);
    });
  });
};

export function resetGrid(){
  for(var i = 0; i<25; i++)
  {
    $("#c"+i).removeClass("selected");
    $("#c"+i).removeClass("bingo");
  }
}

export function setTransparencyMode(transparencyTrigger) {
  console.log("changing:" +transparencyTrigger)
  if(transparencyTrigger) {
    $("body").removeClass('bg-normal').addClass('bg-streamer');
    startDisplayInterval();

    $("#grid")
      .mouseenter(function(){
          $(".tuile").removeClass('animated-hidden').addClass('animated-visible');
          clearInterval(displayInterval);
      })
      .mouseleave(function() {
          startDisplayInterval();
      })
  } else {
    $("body").removeClass('bg-streamer').addClass('bg-normal');
    $(".tuile").removeClass('animated-hidden').addClass('animated-visible');
    clearInterval(displayInterval);
    $("#grid").unbind("mouseenter");
    $("#grid").unbind("mouseleave");
  }
}

function startDisplayInterval() {
  displayInterval = setInterval(
      function() {
          if ($('#grid:hover').length === 0) {
              $(".tuile").removeClass('animated-visible').addClass('animated-hidden');
          }
      }
  , 1000)
}

export function setVolume(volume) {
  var audio = document.getElementById("mp3Player"); 
  audio.volume = volume;
}

export function changeAlign(align) {
  $(".container").css("justify-content",align);
}
export function convertBool(bool) {
  if (bool == 'false') { return false}
  return true;
}
export function revertCheck(input) {
  if ($(input).is(':checked'))
  {
    $(input).prop('checked', false);
  }
  else
  {
    $(input).prop('checked', true);
  }
}