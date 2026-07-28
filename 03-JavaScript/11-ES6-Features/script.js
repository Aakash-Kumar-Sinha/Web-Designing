// JavaScript ES6 Features


// let and const

let name = "Developer";

const age = 22;


console.log(name);

console.log(age);



// Template Literals

let message = `My name is ${name} and age is ${age}`;

console.log(message);



// Arrow Functions

const add = (a, b) => a + b;


console.log(add(10, 5));



// Default Parameters

function greet(user = "Guest") {

    return `Hello ${user}`;

}


console.log(greet());

console.log(greet("Rahul"));



// Destructuring Array

let colors = ["Red", "Green", "Blue"];


let [first, second] = colors;


console.log(first);

console.log(second);



// Destructuring Object

let user = {

    username: "John",

    country: "India"

};


let {username, country} = user;


console.log(username);

console.log(country);



// Spread Operator

let numbers = [1, 2, 3];

let newNumbers = [...numbers, 4, 5];


console.log(newNumbers);



// Rest Operator

function total(...values) {

    return values;

}


console.log(total(1, 2, 3, 4));



// Display output

document.getElementById("output").innerHTML = "Check console for ES6 examples";