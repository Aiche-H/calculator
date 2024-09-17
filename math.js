export function calculateResult(screenValue) {
  return eval(screenValue);
}

export function clearScreen() {
  return '';
}

export function eraseLastEntry(screenValue) {
  return screenValue.slice(0, -1);
}

export function backspace(screenValue) {
  return screenValue.slice(0, -1);
}

export function divide() {
  return '/';
}

export function multiply() {
  return '*';
}

export function subtract() {
  return '-';
}

export function add() {
  return '+';
}

export function negate(screenValue) {
  return '-' + screenValue;
}

export function square(screenValue) {
  return Math.pow(parseFloat(screenValue), 2);
}

export function squareRoot(screenValue) {
  return Math.sqrt(parseFloat(screenValue));
}

export function calculatePercentage(screenValue) {
  return parseFloat(screenValue) / 100;
}

export function calculateReciprocal(screenValue) {
  return 1 / parseFloat(screenValue);
}