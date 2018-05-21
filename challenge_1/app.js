var info = [{player: 'player one', token: '[X]'}];

//onClick of any [] place el 'x'

//onClick of first [] place el 'x' change el 'x' to el 'o'

//create function that pushes el into correct row, column or diagonal

//create function that checks


var rules = {
  playerTurn: function() {
    let player = info[0].player;
    let token = info[0].token;
    if (info[0].player === 'player one') {
      info[0].player = 'player two';
      info[0].token = '[O]'
    } else {
      info[0].player = 'player one';
      info[0].token = '[X]'
    }
    return token;
  },
  findPlace: function(place) {

  }
} 

var handlers = {
  checkBox: function(event) {
    document.addEventListener("click", function(){
      var className = event.target.className.slice(event.target.className.length - 8);
        if (event.target.innerHTML.length <= 2) {
        event.target.innerHTML = rules.playerTurn();
        }
        var node = document.getElementsByClassName(className);
        console.log(node[0].attributes[1] = '');
        node[0].attributes[1] = ''
    });
  }
}