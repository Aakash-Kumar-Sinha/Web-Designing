// JavaScript Conditions


let age = 20;


// if statement

if (age >= 18) {

    console.log("You can vote");

}


// if else statement

let marks = 45;


if (marks >= 40) {

    console.log("Pass");

} else {

    console.log("Fail");

}


// else if statement

let score = 85;


if (score >= 90) {

    console.log("Grade A");

} else if (score >= 75) {

    console.log("Grade B");

} else if (score >= 50) {

    console.log("Grade C");

} else {

    console.log("Fail");

}


// Nested if

let username = "admin";

let password = "1234";


if (username === "admin") {

    if (password === "1234") {

        console.log("Login successful");

    }

}


// Ternary operator

let result = age >= 18 ? "Adult" : "Minor";


console.log(result);


// Display output

document.getElementById("output").innerHTML =
"Check console for conditional results";