function sayHi(name) {
    console.log('Hi', name)
}

const timeoutId = setTimeout(sayHi, 2000, 'chandan');
//  timeoutId is cleared before 2000 ms, thus nothing is logged to console
clearTimeout(timeoutId);