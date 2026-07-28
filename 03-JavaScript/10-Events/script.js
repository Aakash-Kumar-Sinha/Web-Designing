// JavaScript Events


let button = document.getElementById("clickBtn");

let message = document.getElementById("message");

let input = document.getElementById("inputBox");


// Click Event

button.addEventListener("click", function() {

    message.textContent = "Button clicked!";

});


// Mouse Event

button.addEventListener("mouseover", function() {

    button.style.backgroundColor = "green";

});


button.addEventListener("mouseout", function() {

    button.style.backgroundColor = "";

});


// Keyboard Event

input.addEventListener("keyup", function(event) {

    message.textContent = "You typed: " + event.target.value;

});


// Change Event

input.addEventListener("change", function() {

    console.log("Input changed");

});


// Double Click Event

button.addEventListener("dblclick", function() {

    message.textContent = "Button double clicked!";

});