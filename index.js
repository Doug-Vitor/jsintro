// Anonymous functions.
console.log((function (number1, number2, operator) {
    return eval(`${number1} ${operator} ${number2}`)
})(1, 2, "*"));

// Arrow functions.
let result = (number1, number2, operator) => {
    return eval(`${number1} ${operator} ${number2}`)
}

console.log(result(10, 20, "*"));