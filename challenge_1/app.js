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
    if (res === 'tie') {
      winner.innerHTML = 'TIE';
      return;
    } else {
      winner.innerHTML = `${player} won`;
      document.getElementById(player.split(" ").join("")).innerHTML++;
      return;
    }
  },
  rowChecker: function(val1, val2, val3) {
    if (!!val1[0] && !!val2[0] && !!val3[0]) {
      var results = val1[0] + val2[0] + val3[0];
      if (results === 'XXX' || results === 'OOO') {
        this.gameOver();
      } else if (info[0].turn === 9) {
        this.gameOver('tie');
      }
    }
  },
  solutionChecker: function(row, col) {
    var board = info.slice(1);
    if (info[0].turn > 4) {
      if (row + col % 2 === 0) {
        this.rowChecker(board[0][col], board[1][col], board[2][col]);
        this.rowChecker(board[row][0], board[row][1], board[row][2]);
      } else {
        this.rowChecker(board[0][col], board[1][col], board[2][col]);
        this.rowChecker(board[row][0], board[row][1], board[row][2]);
        this.rowChecker(board[0][0], board[1][1], board[2][2]);
        this.rowChecker(board[2][0], board[1][1], board[0][2]);
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
    console.log(event.target.innerHTML.length < 0);
    if (event.target.innerHTML.length === 0) {
      rules.putIntoCell(event.target.id, info[0].token);
      document.addEventListener("click", function(){
          if (event.target.innerHTML.length <= 0) {
            event.target.innerHTML = rules.playerTurn();
          }
      });
      event.target.removeEventListener("onclick", handlers.checkBox);
    }
  },
  startOver: function() {
    document.getElementById("brd").innerHTML = "";
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











