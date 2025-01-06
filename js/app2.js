
const tilesContainer = document.querySelector(".tiles")

console.log(tilesContainer)

function createTile(){
    const element = document.createElement("div");
    const randomId = Math.random();
    element.classList.add("tile");
    element.setAttribute("serial", randomId);
    tilesContainer.appendChild(element)
    
}

hardTiles()

function easyTiles(){
    for(let i=0; i < 16; i++){
        createTile()
    }
}

function mediumTiles(){
    for(let i=0; i < 32; i++){
        createTile()
    }
}
function hardTiles(){
    for(let i=0; i < 64; i++){
        createTile()
    }
}


