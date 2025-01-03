const todoListElement = document.getElementById("todo-list");
const titleInputElement = document.getElementById("title-input");
/*-------------------------------- Functions --------------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
const handleCreate = () => {
  const liElement = document.createElement("li");
  liElement.textContent = titleInputElement.value;
  todoListElement.appendChild(liElement);
};

document
  .getElementById("create-button")
  .addEventListener("click", handleCreate);

  // THIS DEMOSTRATES HOW TO ADD ITEM VIA CLICK

  const itemElement = document.getElementById("item");
itemElement.addEventListener("click", () => {
  console.log("click");
});

// THIS DEMOSTRATES IF "click" is logged onto console in chrome

const removeListElement = document.getElementById("todo-list")