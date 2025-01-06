
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
    for(let i=0; i < 16; i++){
        createEasyTile()
    }
}
function mediumTiles(){
    for(let i=0; i < 32; i++){
        createMediumTile()
    }
}
function hardTiles(){
    for(let i=0; i < 64; i++){
        createHardTile()
    }
}


hardTiles()