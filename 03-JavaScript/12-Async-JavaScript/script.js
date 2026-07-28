// Asynchronous JavaScript


// setTimeout example

console.log("Start");


setTimeout(function() {

    console.log("Executed after 2 seconds");

}, 2000);


console.log("End");



// Callback function

function greet(name, callback) {

    console.log("Hello " + name);

    callback();

}


function message() {

    console.log("Callback executed");

}


greet("Developer", message);



// Promise example

let promise = new Promise(function(resolve, reject) {

    let success = true;


    if (success) {

        resolve("Promise resolved");

    } else {

        reject("Promise rejected");

    }

});


promise

.then(function(result) {

    console.log(result);

})

.catch(function(error) {

    console.log(error);

});



// Async Await example

async function fetchData() {

    let response = await Promise.resolve("Data received");

    console.log(response);

}


fetchData();



// Display output

document.getElementById("output").innerHTML =
"Check console for async JavaScript examples";