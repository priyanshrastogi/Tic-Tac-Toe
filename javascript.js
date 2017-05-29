var play = document.querySelector('#play-button');

var squares = document.querySelectorAll("td");

var game_array_X = [];
var game_array_O = [];
var turn = 1;

function clearBoard() {
    for(var i=0; i<squares.length; i++) {
        squares[i].textContent = '';
    }
    game_array_X = [];
    game_array_O = [];
    turn=1;
}

play.addEventListener('click',clearBoard);

function checkWinnerX() {
    if(game_array_X.indexOf(0)!=-1 && game_array_X.indexOf(4)!=-1 && game_array_X.indexOf(8)!=-1)
        alert("Player X wins!")
    else if(game_array_X.indexOf(2)!=-1 && game_array_X.indexOf(4)!=-1 && game_array_X.indexOf(6)!=-1)
        alert("Player X wins!")
    else if(game_array_X.indexOf(0)!=-1 && game_array_X.indexOf(1)!=-1 && game_array_X.indexOf(2)!=-1)
        alert("Player X wins!")
    else if(game_array_X.indexOf(3)!=-1 && game_array_X.indexOf(4)!=-1 && game_array_X.indexOf(5)!=-1)
        alert("Player X wins!")
    else if(game_array_X.indexOf(6)!=-1 && game_array_X.indexOf(7)!=-1 && game_array_X.indexOf(8)!=-1)
        alert("Player X wins!")
    else if(game_array_X.indexOf(0)!=-1 && game_array_X.indexOf(3)!=-1 && game_array_X.indexOf(6)!=-1)
        alert("Player X wins!")
    else if(game_array_X.indexOf(1)!=-1 && game_array_X.indexOf(4)!=-1 && game_array_X.indexOf(7)!=-1)
        alert("Player X wins!")
    else if(game_array_X.indexOf(2)!=-1 && game_array_X.indexOf(5)!=-1 && game_array_X.indexOf(8)!=-1)
        alert("Player X wins!")
}

function checkWinnerO() {
    if(game_array_O.indexOf(0)!=-1 && game_array_O.indexOf(4)!=-1 && game_array_O.indexOf(8)!=-1)
        alert("Player O wins!")
    else if(game_array_O.indexOf(2)!=-1 && game_array_O.indexOf(4)!=-1 && game_array_O.indexOf(6)!=-1)
        alert("Player O wins!")
    else if(game_array_O.indexOf(0)!=-1 && game_array_O.indexOf(1)!=-1 && game_array_O.indexOf(2)!=-1)
        alert("Player O wins!")
    else if(game_array_O.indexOf(3)!=-1 && game_array_O.indexOf(4)!=-1 && game_array_O.indexOf(5)!=-1)
        alert("Player O wins!")
    else if(game_array_O.indexOf(6)!=-1 && game_array_O.indexOf(7)!=-1 && game_array_O.indexOf(8)!=-1)
        alert("Player O wins!")
    else if(game_array_O.indexOf(0)!=-1 && game_array_O.indexOf(3)!=-1 && game_array_O.indexOf(6)!=-1)
        alert("Player O wins!")
    else if(game_array_O.indexOf(1)!=-1 && game_array_O.indexOf(4)!=-1 && game_array_O.indexOf(7)!=-1)
        alert("Player O wins!")
    else if(game_array_O.indexOf(2)!=-1 && game_array_O.indexOf(5)!=-1 && game_array_O.indexOf(8)!=-1)
        alert("Player O wins!")
}

function changeTurn() {
    if(turn===1) {
        turn=2;
        this.textContent = 'X';
        game_array_X.push(parseInt(this.id));
        checkWinnerX();
    }
    else if(turn===2) {
        turn=1;
        this.textContent = 'O';
        game_array_O.push(parseInt(this.id));
        checkWinnerO();
    }
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeTurn);
}
