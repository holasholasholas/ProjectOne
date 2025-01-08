let awaitingEndOfMove = false;
let activeTile = false;



const tilesContainerEasy = document.querySelector(".easy-tiles")
const tilesContainerMedium = document.querySelector(".medium-tiles")
const tilesContainerHard = document.querySelector(".hard-tiles")



function createEasyTile(){
    const element = document.createElement("div");
    element.classList.add("tile");
    element.setAttribute("serial-number", serialArrayEasy.pop());
    element.textContent = element.getAttribute("serial-number");
    tilesContainerEasy.appendChild(element)
    element.addEventListener("click", ()=> {
        
    
        element.textContent = element.getAttribute("serial-number");   

        
        
    })

    

    setTimeout(()=> {
        element.textContent = null;
        
        
            
    }, 1000);
    
}
function createMediumTile(){
    const element = document.createElement("div");
    element.classList.add("tile");
    tilesContainerMedium.appendChild(element)
    
}
function createHardTile(){
    const element = document.createElement("div");
    element.classList.add("tile");
    tilesContainerHard.appendChild(element)
    
}
function easyTiles(){
        
        clearCache();
    for(let i=0; i < 16; i++){
        createEasyTile()
       

    }
}
function mediumTiles(){

        clearCache();
    for(let i=0; i < 32; i++){
        createMediumTile()
    }
}
function hardTiles(){

        clearCache();
    for(let i=0; i < 64; i++){
        createHardTile()
    }
}
function clearCache(){
    document.querySelector(".title").style.display = "none";
    document.querySelector(".buttons").style.display = "none";
}

// when user selects diffculty, init game and hide elements 
//hide divs, create tiles based on diffculty 

function init(){
    
    document.getElementById("easyButton").onclick = easyTiles;
    document.getElementById("mediumButton").onclick = mediumTiles;
    document.getElementById("hardButton").onclick = hardTiles;
    
}

// fisher-yates algorithm

function shuffle(array) {
    for (let i = array.length -1; i >= 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


init()


//generate serial numbers

const serialArray = [];
let assignId = 0;

for (let i=0; i < 8; i++){
    assignId += 1 ;    
    serialArray.push(assignId)
}
const serialArrayEasy =[...serialArray, ...serialArray];

shuffle(serialArrayEasy);





/* 

addeventlistener 

conditions to match tiles
reveal counter  
flip mechanics 

condition to win game 


*/