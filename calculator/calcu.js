let displayValue = "";
let operationPerformed = false;

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.textContent = displayValue;
    displayElement.style.textAlign = 'left';
}

function clearDisplay() {
    displayValue = "";
    operationPerformed = false;
    updateDisplay();
}

function toggleSign() {
    displayValue = (parseFloat(displayValue) * -1).toString();
    updateDisplay();
}

function percentage() {
    displayValue = (parseFloat(displayValue) / 100).toString();
    updateDisplay();
}

function appendCharacter(character) {
    if (displayValue === "" || displayValue === '-0') {
        operationPerformed = false;
        displayValue = character;
    }
    else {
        displayValue += character;
    }
    updateDisplay();
}
function operation(operand){
    try {
        if (!operationPerformed) {
            displayValue += operand;
            operationPerformed = true;
        } else {
            displayValue = displayValue.slice(0, -1) + operand;
        }
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
        operationPerformed = true;
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}


document.addEventListener('DOMContentLoaded', function () {
    updateDisplay();
});