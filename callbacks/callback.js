// callback funtion:
//  a function that is passed as an argument to another function
function sayHi(name) {
    console.log('Hi', name)
}

// higher order function:
// A function that accepts a function as a parameter or returns a function
function greet(callback) {
    const name = 'Chandan';
    callback(name);
}

greet(sayHi);