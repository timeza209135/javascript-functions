const add = (a,b)=>a+b;

const subtract = (a,b)=>a-b;

const multiply = (a,b) => a*b;

const divide = (a,b)=>a/b;

const calculator = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
}

let addResult = (calculator.add(10,20));
console.log(addResult);

let divideResult = (calculator.divide(10,20));
console.log(divideResult);
