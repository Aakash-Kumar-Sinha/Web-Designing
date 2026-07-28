// JavaScript Arrays and Objects


// Array

let skills = [

    "HTML",
    "CSS",
    "JavaScript"

];


console.log(skills);


// Access array elements

console.log(skills[0]);


// Add element

skills.push("React");

console.log(skills);


// Remove element

skills.pop();

console.log(skills);


// Array length

console.log(skills.length);



// Loop through array

skills.forEach(function(skill) {

    console.log(skill);

});



// Object

let user = {

    name: "Rahul",

    age: 22,

    role: "Developer"

};


console.log(user);


// Access object values

console.log(user.name);

console.log(user["age"]);


// Add new property

user.country = "India";


console.log(user);


// Object method

let person = {

    name: "John",

    greet: function() {

        return "Hello " + this.name;

    }

};


console.log(person.greet());



// Display output

document.getElementById("output").innerHTML = "Check console for arrays and objects examples";