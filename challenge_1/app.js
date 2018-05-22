var info = [{player: 'player one', token: 'X'}];

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
      info[0].token = 'O'
    } else {
      info[0].player = 'player one';
      info[0].token = 'X'
    }
    return token;
  },
} 

var handlers = {
  createBoard: function() {
    document.addEventListener("click", function(){
      board();
    });
  },
  checkBox: function(event) {
    document.addEventListener("click", function(){
        if (event.target.innerHTML.length <= 0) {
          event.target.innerHTML = rules.playerTurn();
        }
      console.log(event.target.id)
    });
  },
  startOver: function() {
    info = [{player: 'player one', token: 'X'}];
    document.getElementById("brd").innerHTML = "";
    board();
  }
}

var board = function(number=3) {
  var brd = document.getElementById("brd");
  for (var r = 0; r < number; r++) {
    var row = document.createElement("tr");
    var arr = [];
    for (var c = 0; c < number; c++) {
      var cell = document.createElement("td");
      cell.width = "50px";
      cell.height = "50px";
      cell.id = `c${c}r${r}`;
      cell.onclick = handlers.checkBox;
      row.appendChild(cell);
      arr.push([]);
    }
    info.push(arr);
    arr = [];
    brd.appendChild(row);
  }
}











