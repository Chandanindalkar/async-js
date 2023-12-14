function sayHi(name) {
    console.log('Hi', name)
}
// The duration interval includes the time taken to execute the code also
// if the code takes 500 ms to run, then the interval is 1500 ms (total 2000 ms)
setInterval(sayHi, 2000, 'chandan')