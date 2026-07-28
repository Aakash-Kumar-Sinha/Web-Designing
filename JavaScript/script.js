// JavaScript Variables


// var (old way)

var username = "John";

console.log(username);


// let (can be changed)

let age = 21;

age = 22;

console.log(age);


// const (cannot be changed)

const country = "India";

console.log(country);


// Using variables together

let firstName = "Rahul";

let lastName = "Kumar";


let fullName = firstName + " " + lastName;


console.log(fullName);


// Display output

document.getElementById("output").innerHTML = "Name: " + fullName + "<br>Age: " + age;