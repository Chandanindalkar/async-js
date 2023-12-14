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
// while performing async operations like data fetch, callbacks may result in a callback hell
// thus promises are preferred over callbacks for better reasoning while trying to understand code