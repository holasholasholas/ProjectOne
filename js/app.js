const tilesContainer = document.querySelector(".tiles");
const colors = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorPickList = [...colors, ...colors];
const tileCount = colorPickList.length;

//game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

function buildTile(color){
    const element = document.createElement("div");
    
    //using data color to match with color 
    element.classList.add("tile");
    element.setAttribute("data-color", color);
    

    element.addEventListener("click", () => {
        if (awaitingEndOfMove) {
            return;
        }


        element.style.backgroundColor = color;

        if (!activeTile) {
            activeTile = element;

            return;
        }
       // condition to match tiles
        const colorToMatch = activeTile.getAttribute("data-color");

        // if tiles match, + tile count
        if(colorToMatch === color){
            awaitingEndOfMove = false;
            activeTile = null;
            revealedCount += 2;

            //condition to complete game
            if (revealedCount === tileCount){
                alert("you win!");

            }
            return;
        }
        // resets and wait 1sec if tiles don't match 
        awaitingEndOfMove = true;
        setTimeout(() => {
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor = null;

            awaitingEndOfMove = false;
            activeTile = null;
        }, 1000);
    });

    return element;
}

// build up tile 
for (let i=0; i < tileCount; i++){
    // generate random number to assign tile
    const randomIndex = Math.floor(Math.random() * colorPickList.length);
    const color = colorPickList[randomIndex];
    const tile = buildTile(color);
    
    // clear dups
    colorPickList.splice(randomIndex, 1);
    tilesContainer.appendChild(tile);
}

