let display = document.getElementById('display');
let currentInput = '';
let operation = '';
let firstValue = null;
let secondValue = null;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        let value = this.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            display.value = currentInput;
            firstValue = secondValue = operation = '';
        } else if (value === '=') {
            secondValue = parseFloat(currentInput);
            if (operation && firstValue !== null && secondValue !== null) {
                switch (operation) {
                    case '+':
                        currentInput = (firstValue + secondValue).toString();
                        break;
                    case '-':
                        currentInput = (firstValue - secondValue).toString();
                        break;
                    case '*':
                        currentInput = (firstValue * secondValue).toString();
                        break;
                    case '/':
                        if (secondValue !== 0) {
                            currentInput = (firstValue / secondValue).toString();
                        } else {
                            currentInput = 'Error';
                        }
                        break;
                }
                operation = '';
                firstValue = null;
                secondValue = null;
            }
            display.value = currentInput;
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (firstValue === null) {
                firstValue = parseFloat(currentInput);
            }
            operation = value;
            currentInput = '';
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
