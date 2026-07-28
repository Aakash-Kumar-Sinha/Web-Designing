// JavaScript Loops


// for loop

for (let i = 1; i <= 5; i++) {

    console.log("Number: " + i);

}


// while loop

let count = 1;


while (count <= 5) {

    console.log("Count: " + count);

    count++;

}


// do while loop

let value = 1;


do {

    console.log("Value: " + value);

    value++;

} while (value <= 5);



// for of loop (arrays)

let skills = ["HTML", "CSS", "JavaScript"];


for (let skill of skills) {

    console.log(skill);

}


// break example

for (let i = 1; i <= 10; i++) {

    if (i === 5) {

        break;

    }

    console.log(i);

}


// continue example

for (let i = 1; i <= 5; i++) {

    if (i === 3) {

        continue;

    }

    console.log(i);

}


// Display output

document.getElementById("output").innerHTML = "Check console for loop examples";