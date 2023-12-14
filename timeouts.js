function sayHi(name) {
    console.log('Hi', name)
}

// First Param is the function
// Second Param is the timeout
// Third Param is any params to be passed to the function
setTimeout(sayHi, 2000, 'chandan');