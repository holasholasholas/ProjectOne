const tilesCon = document.querySelector("mainBoard");   
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;

// Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color){
    const element = document.createElement("div");
    element.classList.add("tile");
    element.setAttribute("data-color", color);

    return element;

}

// build up tile randomly

for (let i=0; i< tileCount; i++){
    const randomTileGeneration = Math.floor(Math.random() * colorsPicklist.length)
    const colorsPicklist = colorsPicklist[randomTileGeneration];
    const tile = buildTile(color);
    

// remove duplicates

    colorsPicklist.splice(randomTileGeneration, 1);
    document.body.appendChild(tile);
}

