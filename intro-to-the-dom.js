const buttons = document.querySelectorAll('.button');
const display = document.querySelector(".display");

let emptyArray = []

function calculate(button){
    
    const value = button.textContent
    if(value === "C"){
        emptyArray = []
        display.textContent = "0"
    } else if (value === "="){
        display.textContent = eval(calculation)
    }
    else {
    emptyArray.push(value)
    calculation = emptyArray.join("")
    display.textContent = calculation
}
}

buttons.forEach(button => button.addEventListener("click", () => calculate(button)))
// doesn't want to use the first param of the nameless function but the function of calculate 

const button = buttons[i]