function add(a, b) {
    let result = a + b;
     return parseFloat(result.toFixed(3)); 
    }

function subtract(a, b) {
    let result = a - b;
    return parseFloat(result.toFixed(3)); 
}

function multiply(a, b) {
    let result = a * b;
    return parseFloat(result.toFixed(3)); 
}

function divide(a, b) {
    let result = a / b;
    return parseFloat(result.toFixed(3)); 
}

function operate(a, b, operator) {
    console.log("running operate");
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

let choice = document.querySelector('.display');
let input = document.querySelector('#input');
let number = '';
let number1 = '';
let operator = '';
let pressed = false;
let pressedOperator = false;

const numberMap = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
    zero: '0'
};

const operatorMap = {
    plus: '+',
    minus: '-',
    multiply: '*',
    divide: '/'
};

choice.addEventListener('click', (e) => {
    const id = e.target.id;

    // Check if the clicked ID is a number button
    if (numberMap[id]) {
        number += numberMap[id];
        input.value = number;
        console.log(number);
        pressed = true;
        return;
    }

    if (operatorMap[id]) {
        if (pressedOperator) {
            if(number == ''){
                number = number1;
            }
            number = operate(parseFloat(number1), parseFloat(number), operator);
            input.value = number;
        }
        number1 = number;
        number = '';
        operator = operatorMap[id];
        console.log(`Operator set to: ${operator}`);
        pressed = false;
        pressedOperator = true;
        return;
    }

    // Handle special cases
    switch (id) {
        case 'clear':
            number = '';
            number1 = '';
            operator = '';
            input.value = 0;
            console.log('Cleared');
            pressed = false;
            pressedOperator = false;
            break;

        case 'equal':
            if (!pressed || !pressedOperator) {
                alert('Please enter a valid combination of numbers and operators');
                break;
            }
            if (number == 0 && operator === '/') {
                alert('Cannot divide by zero');
                number = '';
                number1 = '';
                operator = '';
                pressed = false;
                pressedOperator = false;
                break;
            }
            number = operate(parseFloat(number1), parseFloat(number), operator);
            console.log(`Result: ${number}`);
            input.value = number;
            number1 = '';
            operator = '';
            pressed = false;
            pressedOperator = false;
            break;

        default:
            console.log(`Unhandled button ID: ${id}`);
    }
}
);