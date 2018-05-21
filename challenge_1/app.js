var info = [{player1: 'x'}, {player2: 'o'}];

//onClick of any [] place el 'x'

//onClick of first [] place el 'x' change el 'x' to el 'o'

//create function that pushes el into correct row, column or diagonal

//create function that checks

var handlers = {
  checkBox: function(event) {
    document.addEventListener("click", function(){
      event.target.innerHTML = '[x]'
        console.log(event.target.innerHTML);
    });
  }
}