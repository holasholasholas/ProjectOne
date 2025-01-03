/*-------------------------------- Constants --------------------------------*/
const choices = ["rock", "paper", "scissors"];

/*-------------------------------- Variables --------------------------------*/
// let playerChoice;
// let computerChoice;
// let msg;

/*------------------------ Cached Element References ------------------------*/
const resultDisplayEl = document.querySelector("#result-display");
const rockButton = document.querySelector("#rock");

/*----------------------------- Event Listeners -----------------------------*/
const play = (event, id) => {
  const button = event.target;
  button.classList.add("choose");

  const you = id;
  const comp = computerRandomChoose();
  const result = compare(you, comp);
  resultDisplayEl.textContent = `You choose ${you}, Computer choose ${comp} Result is ${result}`;
};

/*----------------------------- Wire up Event Listeners -----------------------------*/
document
  .querySelector(".something")
  .addEventListener("click", (event) => play(event, "rock"));
document.querySelector("#paper").addEventListener("click", play);
document.querySelector("#scissors").addEventListener("click", play);

document.querySelector("#high-score-button").addEventListener("click", () => {
  // console.log("high");
  document.querySelector("#high-score-page").style.display = "block";
  document.querySelector("#game-page").style.display = "none";
});

/*-------------------------------- Functions --------------------------------*/

//? As a user, I want to be able to click on one of the “Rock”, “Paper”, or “Scissors” buttons, making it easy to select my game move.
//? As a user, I want visual feedback after making my selection, so I know my choice has been registered.
//? Start small -> Rock -> rock button -> change background-color

const computerRandomChoose = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];
  return computerChoice;
};

//! ideally should be pure and self contained
const compare = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "Tied";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "Player wins";
  } else {
    return "Player lose";
  }
};