// JavaScript DOM Manipulation


// Selecting elements

let heading = document.getElementById("heading");

let text = document.getElementById("text");

let button = document.getElementById("button");

let box = document.querySelector(".box");



// Changing content

heading.innerHTML = "Learning DOM";

text.textContent = "Content changed using JavaScript";



// Changing styles

heading.style.color = "blue";

box.style.backgroundColor = "lightgreen";

box.style.padding = "20px";



// Adding event

button.addEventListener("click", function() {

    text.textContent = "Button clicked!";

});



// Creating new element

let newElement = document.createElement("p");

newElement.textContent = "New paragraph created using JavaScript";


document.body.appendChild(newElement);