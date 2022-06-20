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

/* // Arrays

let cars = ["Car1", "Car2", "Car3"];

cars.forEach((value, index) => {
    console.log(index, value);
})*/

//===========================================================

// Oriented Object Programming in Javascript.

// The class
class computer {
    processor;

    constructor(processor) {
        this.processor = processor ?? "AMD";
    }

    power() {
        return "The computer is on."
    }
}

// Default instantiate;
let anyComputer = new computer();
console.log(`${"Any computer: "} ${anyComputer}`)
console.log(`${"Any computer processor:" } ${anyComputer.processor}`)
console.log(`${"Any computer state: "} ${anyComputer.power()}`)

// Instantiate with values
let myComputer = new computer("Intel");
console.log(`${"My computer: "} ${myComputer}`)
console.log(`${"My computer processor:" } ${myComputer.processor}`)
console.log(`${"My computer state: "} ${myComputer.power()}`)

// Awesome!

//===========================================================