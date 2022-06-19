console.log(arguments);
console.log(require('module').wrapper);

class Calculator {
    add(a, b) {
        return a + b;
    } 

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

module.exports = Calculator;