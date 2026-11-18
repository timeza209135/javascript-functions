// Start coding here
let calculator = {};

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

calculator.add = add;
calculator.subtract = subtract;
calculator.multiply = multiply;
calculator.divide = divide;

const addResult = calculator.add(10, 20);
console.log(addResult); 

const divideResult = calculator.divide(3000, 10);
console.log(divideResult); 
