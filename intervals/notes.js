// it is possible to achieve the same effect as setInterval with a recursive setTimeout
// we do so, to have same time intervals between code re-runs
// suitable for scenarios where the code takes longer than the interval to run.

setTimeout(function run() {
    console.log('hello');
    setTimeout(run, 1500);// this interval is for duration between re-runs
}, 1500) // this interval gives you control of the duration after which the code must begin execution

// recursive setTimeout give you calculation of different delay before each iteration.
// (timeTakenToRun + interval), and iterative difference tells you the change in timeTakenToRun.