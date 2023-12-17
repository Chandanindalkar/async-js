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

// concurrent execution

async function sequentialStart() {
    const hello = await resolveHello();
    const world = await resolveWorld();
    
    console.log(hello);
    console.log(world);
}

sequentialStart()