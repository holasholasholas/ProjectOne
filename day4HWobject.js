
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

 let selectStarter = [];

 for (let i = 0; i < pokemon.length; i++) {
 if (pokemon[i].starter === true) {
 selectStarter.push(pokemon[i]); } 
 }
 console.log(selectStarter);

 game.party.push(selectStarter[1])

 console.log(game.party);

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

let hp = [];
let legendaryBird = [];
let op = [];
 
for (i = 0; i < pokemon.length; i++) {
  if (pokemon[i].hp > 100)
     hp.push(pokemon[i])
}

console.log(hp);

//selected Chansey bc highest HP
game.party.push(hp[4])


for (i = 0; i < pokemon.length; i++) {
  if (pokemon[i].name === 'Articuno' || pokemon[i].name === 'Zapdos' || pokemon[i].name === 'Moltres')
    
     legendaryBird.push(pokemon[i])   

}

console.log(legendaryBird)

// selected zapdos 

game.party.push(legendaryBird[1])

for (let i=0; i<pokemon.length; i++) {
  if (pokemon[i].type === "dragon")
    op.push(pokemon[i])
}

console.log(op);
//selected dragonite

game.party.push(op[2])

console.log(game.party);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/

// for (let i=0; i < game.gyms.length; i++) {
// if (game.gyms[i].difficulty < 3){
//   game.gyms[i].completed = true 

// } 
// }

// console.log(game.gyms);

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

// function evolveCharmander() {
// game.party[0] = pokemon[4]  
// }

// evolveCharmander()

// console.log(game.party);

// OR by using splice method 

// game.party.splice(0,1);

// game.party.push(pokemon[4]);

// console.log(game.party)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

// for (let i=0; i <= game.party.length; i++) {
//   console.log(game[i].party);
// }

/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

// let starterStatus = []

// for(let i = 0; i < pokemon.length; i++) {
//   if (pokemon[i].starter === true){
//     starterStatus.push(pokemon[i]);
//   }
// }

// console.log(starterStatus);

/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

///TBC
