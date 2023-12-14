const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 250, 'two'); // toggle from resolve to reject to experiment with Promise Methods
});

// Promise.all([promise1, promise2]).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

// Promise.allSettled([promise1, promise2]).then((result) => {
//     console.log(result);
// });

// Promise.race([promise1, promise2]).then((result) => {
//     console.log(result);
// });