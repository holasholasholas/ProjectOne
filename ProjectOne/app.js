const tilesContainer = document.querySelector(".tiles"); 
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorPicklist = [...colors,...colors];
tileCount = colorPicklist.length

// game state 
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color){
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-color", color);

    return element;
}

// build up tiles 
for (i=0; i<tileCount; i++) {
    const randomColor = Math.floor(Math.random() * colorPicklist.length);
    const color = colorPicklist[randomColor]
    const tile = buildTile(color);
    colorPicklist.splice(randomColor, 1);
    tilesContainer.appendChild(tile);

    console.log(tile);
}
