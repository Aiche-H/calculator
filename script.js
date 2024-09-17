import { calculateResult, clearScreen, eraseLastEntry, backspace, divide, multiply, subtract, add, negate, square, squareRoot, calculatePercentage, calculateReciprocal } from './math.js';

const screen = document.getElementById('screen');
const buttonPercent = document.getElementById('buttonPercent');
const buttonClearEntry = document.getElementById('buttonClearEntry');
const buttonClear = document.getElementById('buttonClear');
const buttonBackspace = document.getElementById('buttonBackspace');
const buttonReciprocal = document.getElementById('buttonReciprocal');
const buttonSquare = document.getElementById('buttonSquare');
const buttonSquareRoot = document.getElementById('buttonSquareRoot');
const buttonDivide = document.getElementById('buttonDivide');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const buttonMultiply = document.getElementById('buttonMultiply');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const buttonSubtract = document.getElementById('buttonSubtract');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const buttonAdd = document.getElementById('buttonAdd');
const buttonNegate = document.getElementById('buttonNegate');
const button0 = document.getElementById('button0');
const buttonDecimal = document.getElementById('buttonDecimal');
const buttonEquals = document.getElementById('buttonEquals');

let screenValue = '';

const buttons = [
    buttonPercent, buttonClearEntry, buttonClear, buttonBackspace,
    buttonReciprocal, buttonSquare, buttonSquareRoot, buttonDivide,
    button7, button8, button9, buttonMultiply,
    button4, button5, button6, buttonSubtract,
    button1, button2, button3, buttonAdd,
    buttonNegate, button0, buttonDecimal, buttonEquals
  ];

  
  
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    if (buttonValue === '=') {
      // Calculate the result
      const result = calculateResult(screenValue);
      screenValue = result.toString();
    } else if (buttonValue === 'C') {
      // Clear the screen
      screenValue = clearScreen();
      screen.textContent = screenValue;
    } else if (buttonValue === 'CE') {
      // Erase the last number or operation
      screenValue = eraseLastEntry(screenValue);
      screen.textContent = screenValue;
    } else if (buttonValue === '⌫') {
      // Backspace
      screenValue = backspace(screenValue);
      screen.textContent = screenValue;
    } else if (buttonValue === '/') {
      // Append division operator to screen value
      screenValue += divide();
    } else if (buttonValue === '*') {
      // Append multiplication operator to screen value
      screenValue += multiply();
    } else if (buttonValue === '+') {
      // Append addition operator to screen value
      screenValue += add();
    } else if (buttonValue === '-') {
      // Append subtraction operator to screen value
      screenValue += subtract();
    } else if (buttonValue === '√') {
      // Calculate square root
      screenValue = squareRoot(screenValue);
    } else if (buttonValue === 'x^2') {
      // Calculate the square of the current value
      screenValue = square(screenValue);
    } else if (buttonValue === '%') {
      // Calculate the percentage of the current value
      screenValue = calculatePercentage(screenValue);
    } else if (buttonValue === '¬') {
      // Negate the current value
      screenValue = negate(screenValue);
    } else if (buttonValue === '1/x') {
      // Calculate the reciprocal of the current value
      screenValue = calculateReciprocal(screenValue);
    } else {
      // Append button value to screen value
      screenValue += buttonValue;
    }
    // Update the screen
    screen.textContent = screenValue;
  });
});