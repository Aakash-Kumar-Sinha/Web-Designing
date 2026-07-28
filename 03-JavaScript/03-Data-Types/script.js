// JavaScript Data Types


// String

let name = "Developer";


// Number

let age = 22;

let price = 99.99;


// Boolean

let isStudent = true;


// Undefined

let course;


// Null

let value = null;


// Object

let user = {

    username: "Rahul",

    age: 20

};


// Array

let skills = [

    "HTML",

    "CSS",

    "JavaScript"

];


// Checking data types

console.log(typeof name);

console.log(typeof age);

console.log(typeof isStudent);

console.log(typeof course);

console.log(typeof value);

console.log(typeof user);

console.log(typeof skills);


// Display output

document.getElementById("output").innerHTML =

"Name: " + name +
"<br>Age: " + age +
"<br>Student: " + isStudent +
"<br>Skills: " + skills;