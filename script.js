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
        const result = eval(screenValue);
        screenValue = result.toString();
      } else if (buttonValue === 'C') {
        // Clear the screen
        screenValue = '';
      } else if (buttonValue === 'CE') {
        // Erase the last number or operation
        screenValue = screenValue.slice(0, -1);
      } else if (buttonValue === '⌫') {
        // Backspace
        screenValue = screenValue.slice(0, -1);
      } else if (buttonValue === '/') {
        // Append division operator to screen value
        screenValue += '/';
      } else if (buttonValue === '*') {
        // Append multiplication operator to screen value
        screenValue += '*';
      } else if (buttonValue === '√') {
        var value = eval(screenValue);
        if (value < 0) {
          screenValue = "Error: Square root of negative number";
        } else {
          screenValue = Math.sqrt(value);
        }
      } else if (buttonValue === 'x^2') {
        // Calculate the square of the current value
        screenValue = eval(screenValue) ** 2;
      } else if (buttonValue === '%') {
        // Calculate the percentage of the current value
        screenValue = eval(screenValue) / 100;
      } else if (buttonValue === '1/x') {
        // Append reciprocal operator to screen value
        screenValue += '1 / ' + screenValue;
      } else if (buttonValue === '¬') {
        // Negate the current value
        if (screenValue !== '') {
          if (screenValue.startsWith('-')) {
            screenValue = screenValue.substring(1);
          } else {
            screenValue = '-' + screenValue;
          }
        }
      } else {
        // Append button value to screen value
        screenValue += buttonValue;
      }
      // Update the screen
      screen.textContent = screenValue;
    });
  });