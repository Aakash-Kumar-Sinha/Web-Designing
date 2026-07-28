// JavaScript Functions


// Function declaration

function greet() {

    console.log("Hello JavaScript");

}


greet();


// Function with parameters

function add(a, b) {

    return a + b;

}


let sum = add(10, 5);

console.log(sum);



// Function with default parameter

function welcome(name = "User") {

    console.log("Hello " + name);

}


welcome();

welcome("Rahul");



// Function expression

const multiply = function(a, b) {

    return a * b;

};


console.log(multiply(4, 5));



// Arrow function

const subtract = (a, b) => {

    return a - b;

};


console.log(subtract(10, 3));



// Short arrow function

const square = number => number * number;


console.log(square(5));



// Display output

document.getElementById("output").innerHTML =
"Check console for function examples";