function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

console.log(add(21, 21));
console.log(sub(63, 21));
console.log(mult(21, 2));
console.log(div(84, 2));
console.log(mod(42, 2)); 

function askUserOperation() {
  return prompt("Quelle opération voulez-vous faire ? (+, -, *, /, %)");
}

function askUserFirstNumber() {
  return Number(prompt("Entrez le premier nombre :"));
}

function askUserSecondNumber() {
  return Number(prompt("Entrez le second nombre :"));
}