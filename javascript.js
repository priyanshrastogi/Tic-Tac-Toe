var play = document.querySelector('#play-button');

var squares = document.querySelectorAll("td");

var win_array = [7, 56, 448, 73, 146, 292, 273, 84]

var game_array_X = [];
var game_array_O = [];

function clearBoard() {
    for(var i=0; i<squares.length; i++) {
        squares[i].textContent = '';
    }
    game_array_X = [];
    game_array_O = [];
}

play.addEventListener('click',clearBoard);


function checkWinnerX() {
    var sum = 0;
    for(var i in game_array_X)
        sum += parseInt(game_array_X[i]);
    //console.log(sum);
    if(win_array.indexOf(sum)!==-1)
        alert("Player X wins!")
}

function checkWinnerO() {
    var sum = 0;
    for(var i in game_array_O)
        sum += parseInt(game_array_O[i]);
    //console.log(sum);
    if(win_array.indexOf(sum)!==-1)
        alert("Player O wins!")
}

function markX() {
    this.textContent = 'X';
    game_array_X.push(this.id);
    checkWinnerX();
}

function markO() {
    this.textContent = 'O';
    game_array_O.push(this.id);
    checkWinnerO();
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', markX);
    squares[i].addEventListener('dblclick',markO);
}
