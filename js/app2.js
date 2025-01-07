let selectDiffculty;



const tilesContainerEasy = document.querySelector(".easy-tiles")
const tilesContainerMedium = document.querySelector(".medium-tiles")
const tilesContainerHard = document.querySelector(".hard-tiles")



function createEasyTile(){
    const element = document.createElement("div");
    const randomId = Math.random();
    element.classList.add("tile");
    element.setAttribute("serial", randomId);
    tilesContainerEasy.appendChild(element)
    
}
function createMediumTile(){
    const element = document.createElement("div");
    const randomId = Math.random();
    element.classList.add("tile");
    element.setAttribute("serial", randomId);
    tilesContainerMedium.appendChild(element)
    
}
function createHardTile(){
    const element = document.createElement("div");
    const randomId = Math.random();
    element.classList.add("tile");
    element.setAttribute("serial", randomId);
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

init()