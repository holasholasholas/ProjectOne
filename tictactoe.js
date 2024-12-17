// alert("Hello, hope you're ready to play TIC-TAC-TOE!")
// alert("Player 1 will start first followed by Player 2!")
// alert("First to line up 3 boxes wins, good luck!")




/*-------------------------------- Constants --------------------------------*/
// const selection = ["p1Click","p2Click"]


/*---------------------------- Variables (state) ----------------------------*/
// let = player1;
// let = player2;


/*------------------------ Cached Element References ------------------------*/

// when button triggers, chosen square box will "X" or "O" depending on player.




/*-------------------------------- Functions --------------------------------*/
// let count = 10;
// for (let i= 0; i < count.length; i++) {
//     if ()
//     // document.getElementById("h1").textContent = "Player 2's turn!"
// }


/*----------------------------- Event Listeners -----------------------------*/

// changeText.addEventListener("click", function() {
//     changeText.textContent = "Text has been changed!";
//   });



const firstSqr = addEventListener("click", function() {
    
    document.getElementById("0").textContent = "X";
    
    
});

firstSqr = addEventListener("click", function() {
    
    document.getElementById("0").textContent = "O"; 
    
});

let reset = addEventListener("click", function() {
    
    document.getElementById("0").textContent = " "; 
    stopPropagation()
});

