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

// sequential execution

async function sequentialStart() {
    const hello = await resolveHello();
    console.log(hello);

    const world = await resolveWorld();
    console.log(world);
}

sequentialStart()