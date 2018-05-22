var info = [{player: 'player one', token: 'X', turn: 0}];

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
  gameOver: function(res) {
    var winner = document.getElementById("winner");
    var player = info[0].player;
    if (res !=='tie') {
      winner.innerHTML = `${player} won`;
      document.getElementById("brd").innerHTML = "";
      document.getElementById(player.split(" ").join("")).innerHTML++;
      return;
    } else {
      winner.innerHTML = 'TIE';
      document.getElementById("brd").innerHTML = "";
      return;
    }
  },
  rowChecker: function(array) {

    for (var set of array) {
      var results = '';
      for (var i = 0; i < set.length; i++) {
        results += set[i][0];
        if (results === 'XXX' || results === 'OOO') {
          console.log(results)
          this.gameOver();
          return;
        }
      }
    }

    if (info[0].turn === 9) {
      this.gameOver('tie');
      return;
    }
  },
  solutionChecker: function(row, col) {
    var board = info.slice(1);
    if (info[0].turn > 4) {
      if (row + col % 2 === 0) {
        var array = [[board[0][col], board[1][col], board[2][col]],[board[row][0], board[row][1], board[row][2]]]
        this.rowChecker(array);
      } else {
        var array = [[board[0][col], board[1][col], board[2][col]], [board[row][0], board[row][1], board[row][2]], [board[0][0], board[1][1], board[2][2]], [board[2][0], board[1][1], board[0][2]]]
        this.rowChecker(array);
      }
    }
  },
  putIntoCell: function(id, token) {
    var row = Number(id[3]) + 1;
    var col = Number(id[1]);
    info[row][col].push(token);
    info[0].turn++;
    this.solutionChecker(row - 1, col);
  }
} 

var handlers = {
  checkBox: function(event) {
    if (event.target.innerHTML.length === 0) {
      rules.putIntoCell(event.target.id, info[0].token);
      document.addEventListener("click", function(){
          if (event.target.innerHTML.length <= 0) {
            event.target.innerHTML = rules.playerTurn();
          }
      });
    }
  },
  startOver: function() {
    info = [{player: 'player one', token: 'X', turn: 0}];
    document.getElementById("winner").innerHTML = '';
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











