export function hello(){
    console.log('hello');
}

export const message = "How you doing?";


export function readFile(fileName) {

    var cardRules = new Array();
    $.get(fileName, function(data){
            cardRules = data.split('\n');
            console.log(cardRules);
        });
  };