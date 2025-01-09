document.getElementById("easyButton").onclick = easyTiles;
const tilesContainerEasy = document.querySelector(".easy-tiles")
let serialArray = [];
let firstCard, secondCard;
let lockBoard = false;
let assignId = 0;

for (let i=0; i < 8; i++){
    assignId += 1 ;    
    serialArray.push(assignId)
}
const serialArrayEasy = [...serialArray, ...serialArray];

shuffle(serialArrayEasy);

function shuffle(array) {
    for (let i = array.length -1; i >= 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

console.log(serialArrayEasy);

function generateCards(){
    for(let i=0; i < 16; i++){
    const element = document.createElement("div");
    element.classList.add("tile");
    element.setAttribute("data-number", serialArrayEasy.pop()); 
    tilesContainerEasy.appendChild(element);
    element.addEventListener("click", flipCard);
}};



function flipCard(){
    
    if(lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");
    if (!firstCard){
        firstCard = this;
        return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch(){
    let isMatch = firstCard.dataset.number === secondCard.dataset.number;

    isMatch ? disableCards() : unflipCards();

    function disableCards(){
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    };

    // resetBoard();

}

function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetBoard();
    }, 1000);

}

function resetBoard(){
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}


function clearCache(){
    document.querySelector(".title").style.display = "none";
    document.querySelector(".buttons").style.display = "none";
}
// function restart(){
//     resetBoard();
    
// }

// 
function easyTiles(){
    generateCards();
    clearCache();
    
}