var readlineSync = require('readline-sync');

// User Input
var num1st = readlineSync.questionInt('Please enter the first number: ');
var num2nd = readlineSync.questionInt('Please enter the second number: ');
var enterOperator = readlineSync.question('Please enter the operation: add, sub, mul, div ')

// Addition
function add2Numbers(firstNumber, secondNumber) {
    return num1st + num2nd; 
}

// Subtraction
function subtract2Numbers(num1st, num2nd) {
    return num1st - num2nd
}

// Multiply
function multiply2Numbers(num1st, num2nd) {
    return num1st * num2nd
}

// Divide
function divide2Numbers(num1st, num2nd) {
    return num1st / num2nd
}

// Function to determine which operator to use

function myCalculator(num1st, num2nd, enterOperator) {
    if (enterOperator == "add") {
        console.log("The result is: " + add2Numbers(num1st, num2nd));
    } else if (enterOperator == "sub") {
        console.log("The result is: " + subtract2Numbers(num1st, num2nd));
    } else if (enterOperator == 'mul') {
        console.log("The result is: " + multiply2Numbers(num1st, num2nd));
    } else if(enterOperator == 'div') {
        console.log("The result is: " + divide2Numbers(num1st, num2nd));
    } else {
        console.log("The result is: Error. Please try again.")
    }
}

// call function
myCalculator(num1st, num2nd, enterOperator)
