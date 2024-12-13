
const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
   
  
    
  }
  
//   /*
// Exercise 3
// 1. Add a new property to the `game` object. Let's call it "difficulty".
// 2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


// Solve Exercise 3 here:
// */

// let gameDiff = selectDiff()

//   game.difficulty = {Easy: false, Medium: false, Diffcult: false};

// function selectDiff() { 
//   if (game.difficulty === false);
//   return console.log("Please select game diffculty! (Easy, Medium, Diffcult)");

//   if (game.difficulty.Easy === true);
//   return console.log("You've selected Easy!");

//   if (game.difficulty.Medium === true);
//   return console.log("You've selected Medium!");

//   if (game.difficulty.Diffcult === true);
//   return console.log("You've selected Diffcult!");
// }

///***** Having problems trying to change the boolean for game.diffculty. Wanted to add a windows.prompt in for input to trigger the change but can't figure it out. Will revisit during the weekends.


/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/ 
// const x = pokemon.length;


// function selectStarter(choose) {
//   for (let i=0; i<pokemon.length; i++ ) 
//       if (pokemon.starter === true)  
//         pokemon.starter.push{x} }
        

// console.log(game.party)


// pushing pokemon out of array 

let name = pokemon;

function StarterPokemon(x) {
  let (i=0; i<pokemon.length; i++) {
    if (pokemon.starter === true) {
      console.log(pokemon.push);
    }
  }
}




/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

// console.log(game.party);


// party.length(4)

// game.party.push = pokemon[3]
// game.party.push = pokemon[5]

