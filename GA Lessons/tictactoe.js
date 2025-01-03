/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // center column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal from top-left to bottom-right
    [2, 4, 6] // diagonal from top-right to bottom-left
// ];

let board;
let turn;
let winner;
let tie;

squareEls = document.querySelectorAll(".sqr");
messageEls = document.getElementById("message");

console.log(squareEls)
console.log(messageEls.textContent)


function init(){
board = ['', '', '', '', '', '', '', '', ''];
turn = "X";
winner = false;
tie = false;
render()

}

// to tag and identify individual board pieces and tag a value to them.
function updateBoard(){
    board.forEach(value, index => {
        const square = squareEls[index];
        square.textContent = value;
        square.addEventListener("click",e);
        
    });
}

function updateMessage(){
    if (winner === false || tie === false)
        messageEl.textContent = `It's ${turn}'s turn!`; 
    else if(winner === false && tie === true)
        messageEl.textContent = `It's a tie!`;
    else messageEl.textContent = `Player ${turn} won!`;
}

function render(){
    updateBoard();
    updateMessage();
    handleClick();
    
}

function handleClick(){
    
}

// Learnt 

// innertext = visable text
// textContent = everything

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.
