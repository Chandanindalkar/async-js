function resolveHello() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve('hello')
        }, 2000)
    })
}

function resolveWorld() {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve('world')
        }, 1000)
    })
}

// parallel execution
// resolve individual functions without waiting for other fucntions to resolve

// function parallelStart() {
//     Promise.all([
//         (async () => console.log(await resolveHello()))(), // logs after 2 seconds
//         (async () => console.log(await resolveWorld()))(), // logs after 1 seconds
//     ])
// }

async function parallelStart() {
    await Promise.all([
        (async () => console.log(await resolveHello()))(), // logs after 2 seconds
        (async () => console.log(await resolveWorld()))(), // logs after 1 seconds
    ])
    // js awaits until all promises are settled
    console.log('finally')
}

parallelStart()