let squareEls = document.querySelectorAll(".sqr");
let messageEls = document.getElementById("message");

let board;
let turn;
let winner = false;
let tie = false;
let squareIndex;

const winningCombos = [
    
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // center column
        [2, 5, 8], // right column
        [0, 4, 8], // diagonal from top-left to bottom-right
        [2, 4, 6] // diagonal from top-right to bottom-left
]

console.log({squareEls})
console.log({messageEls})

function init(){
    board = ["","","","","","","","",""];
    turn = "X";
    winner = false;
    tie = false;

    render()
}

function updateMessage(){
    if(winner === false && tie === false){
        if( turn === "X"){
            turn = "O"
        } else {
            turn = "X"
        }
    
    } else if(winner === false && tie === true){
        messageEls.textContent = "It's a tie!"
    } else { 
        messageEls.textContent = `Player ${turn} won!`

    }
}

function render(){
    
    updateBoard()
    updateMessage()

}
function updateBoard(){
    for(let i=0; i < board.length; i++){
        
    }
}

for(let i=0; i < board.length; i++){
    
   squareEls[i].addEventListener("click", handleClick); 
}

function handleClick(event){
    const squareIndex = event.currentTarget.id
    if(board[squareIndex] === "X" || board[squareIndex] === "O" || winner === true){
        return
    }
    placePiece(squareIndex)
}

function placePiece(squareIndex){
    squareEls[squareIndex].textContent = turn
    board[squareIndex] = turn
}

function checkForWinner(){
    for(let i = 0; i < winnerCombos.length; i++){
        let firstItem = "";
        for(let j = 0; j < winnerCombos.length; j++){
        
        }
    }
}