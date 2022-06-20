/*// Anonymous functions.
console.log((function (number1, number2, operator) {
    return eval(`${number1} ${operator} ${number2}`)
})(1, 2, "*"));

// Arrow functions.
let result = (number1, number2, operator) => {
    return eval(`${number1} ${operator} ${number2}`)
}

console.log(result(10, 20, "*"));*/

//===========================================================

/*// Event listener to the window.
window.addEventListener('focus', () => {
    console.log('focus')
})

// Event listener to the document.
document.addEventListener('click', () => {
    console.log('click')
})*/

//===========================================================

let cars = ["Car1", "Car2", "Car3"];

cars.forEach((value, index) => {
    console.log(index, value);
})