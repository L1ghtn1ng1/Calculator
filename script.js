// Basic math operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert('Cannot divide by zero');
        return null;
    }
    return a / b;
}

function operate(a, b, operator) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === '*') return multiply(a, b);
    if (operator === '/') return divide(a, b);
    return null;
}

// Variables to store the calculator's state
let number = '';
let number1 = '';
let operator = '';
let pressed = false;
let pressedOperator = false;

const input = document.querySelector('#input');
const choice = document.querySelector('.display');

// Function to update the display
function updateDisplay(value) {
    input.value = value;
}

// Handle number button clicks
function handleNumberInput(digit) {
    number += digit;
    updateDisplay(number);
    pressed = true;
}

// Handle operator button clicks
function handleOperatorInput(op) {
    if (pressedOperator) {
        number = operate(parseInt(number1), parseInt(number), operator);
        updateDisplay(number);
    }
    number1 = number;
    number = '';
    operator = op;
    pressed = false;
    pressedOperator = true;
}

// Handle the equals button click
function handleEqual() {
    if (!pressed) {
        alert('Please enter a valid combination of numbers and operators');
        return;
    }
    number = operate(parseInt(number1), parseInt(number), operator);
    if (number === null) {
        resetCalculator();
        return;
    }
    updateDisplay(number);
    resetPartial();
}

// Reset the calculator completely
function resetCalculator() {
    number = '';
    number1 = '';
    operator = '';
    pressed = false;
    pressedOperator = false;
    updateDisplay(0);
}

// Reset only the operator and first number
function resetPartial() {
    number1 = '';
    operator = '';
    pressed = false;
    pressedOperator = false;
}

// Add event listener for button clicks
choice.addEventListener('click', (e) => {
    const { id } = e.target;

    // Handle number buttons
    if (!isNaN(id)) {
        handleNumberInput(id);
    } 
    // Handle clear button
    else if (id === 'clear') {
        resetCalculator();
    } 
    // Handle operator buttons
    else if (['plus', 'minus', 'multiply', 'divide'].includes(id)) {
        const opMap = { plus: '+', minus: '-', multiply: '*', divide: '/' };
        handleOperatorInput(opMap[id]);
    } 
    // Handle equals button
    else if (id === 'equal') {
        handleEqual();
    }
});
