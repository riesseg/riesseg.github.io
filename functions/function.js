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

export function setTransparencyMode() {
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