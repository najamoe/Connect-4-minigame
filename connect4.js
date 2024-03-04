"use strict"

var playerRed ="R"
var playerYellow ="Y"
var currentPlayer = playerRed;

var gameOver = false;
var board;
var currentColumns;

var rows = 6;
var columns = 7;

window.addEventListener("load", start);

function start(){
    setGame();
}

function setGame(){
    board = [];
    currentColumns= [5,5,5,5,5,5,5];

    for(let r = 0; r < rows; r++){
        let row=[];
        for(let c = 0; c < columns; c++){
            row.push(' ');

            //HTML
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece)
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }

    function setPiece() {
        if (gameOver){
            return;
        }

        let coords = this.id.split("-") // returns an array of two values, row and column
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        r = currentColumns[c];
        if (r < 0){
            return;
        }

        board[r][c] = currentPlayer;
        let tile = document.getElementById(r.toString() + "-" + c.toString());
        if(currentPlayer === playerRed){
            tile.classList.add("red-piece")
            currentPlayer = playerYellow;
        } else {
            tile.classList.add("yellow-piece")
            currentPlayer = playerRed;
        }

        r -= 1; //Updating row height for column, 
        currentColumns[c] = r; //Updating the array
    }

    
}