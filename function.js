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
    return a / b;
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

function chooseNumbers(event, number) {
    number += event.target.id;
    return number;
}


let choice = document.querySelector('.display');
let input = document.querySelector('#input');
let number = '';
let number1 = '';
let operator = '';
let pressed = false;
let pressedOperator = false;

choice.addEventListener('click', (e) =>{
    switch(e.target.id){
        case 'one':
            number += '1';
            input.value = number;
            console.log(number);
            pressed = true;
            break;
        case 'two':
            number += '2';
            input.value = number;
            console.log(number);
            pressed = true;
            break;
        case 'three':
            number += '3';
            input.value = number;
            console.log(number);
            pressed = true;
            break;
        case 'four':
            number += '4';
            input.value = number;
            console.log(number);
            pressed = true;
            break;
        case 'five':
            number += '5';
            input.value = number;
            console.log(number);
            pressed = true;
            break;
        case 'six':
            number += '6';
            input.value = number;
            console.log(number);
            pressed = true;
            break;
        case 'seven':
            number += '7';
            input.value = number;
            console.log(number);
            pressed = true;
            break;
        case 'eight':
            number += '8';
            input.value = number;
            console.log(number);
            pressed = true;
            break;
        case 'nine':
            number += '9';
            input.value = number;
            console.log(number);
            pressed = true;
            break;
        case 'zero':
            number += '0';
            input.value = number;
            console.log(number);
            pressed = true;
            break;
        case 'clear':
            number = '';
            input.value = 0;
            console.log(number);
            pressed = false;    
            pressedOperator = false;
            break;
        case 'plus':
            number1 = number;
            number = '';
            operator = '+';
            console.log(number);
            pressed = false;
            pressedOperator = true;
            break;
        case 'minus':
            if(pressedOperator){
                number = operate(parseInt(number1), parseInt(number), operator);
                input.value = number;
            }  
            number1 = number;
            number = '';
            operator = '-';
            console.log(number);
            pressed = false;
            pressedOperator = true;
            break;
        case 'multiply':
            number1 = number;
            number = '';
            operator = '*';
            console.log(number);
            pressed = false;
            pressedOperator = true;
            break;
        case 'divide':
            number1 = number;
            number = '';
            operator = '/';
            console.log(number);
            pressed = false;
            pressedOperator = true;
            break;
        case 'equal':
            if(!pressed || !pressedOperator){
                alert('Please enter a valid combination of numbers and operators'); 
                break;
            }
            if(number == 0 && operator == '/'){
                alert('Cannot divide by zero');
                number = '';
                number1 = '';
                operator = '';
                pressed = false;
                pressedOperator = false;
                break;
            }
            number = operate(parseInt(number1), parseInt(number), operator);
            console.log(number);
            input.value = number;
            number1 = '';   
            // number = '';
            operator = '';
            pressed = false;
            pressedOperator = false;
            break;
            
    }
}
);