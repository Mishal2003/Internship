<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript file is loaded and running!");

    const nameHeader = document.getElementById("name");
    
    if (nameHeader) {
        console.log("Found the name header:", nameHeader);
        nameHeader.addEventListener("click", () => {
            nameHeader.style.color = nameHeader.style.color === "blue" ? "black" : "blue";
            console.log("Name header clicked, color changed.");
        });
    } else {
        console.log("Error: Could not find the element with ID 'name'.");
    }
});
=======
let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');

let currentInput = "";
let operator = "";
let firstNum = null;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        let value = event.target.getAttribute('data-value');

        if (value === 'C') {
            currentInput = "";
            firstNum = null;
            operator = "";
            display.value = "";
        } else if (value === '=') {
            if (firstNum !== null && operator !== "") {
                currentInput = evaluate(firstNum, operator, currentInput);
                display.value = currentInput;
                firstNum = null;
                operator = "";
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (firstNum === null) {
                firstNum = currentInput;
                operator = value;
                currentInput = "";
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
}

// Function to evaluate the expression
function evaluate(firstNum, operator, secondNum) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);

    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            if (secondNum !== 0) {
                return firstNum / secondNum;
            } else {
                return "Error";
            }
        default:
            return secondNum;
    }
}

>>>>>>> 4d98f70 (calculator added)
