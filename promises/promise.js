function getTacos() {
    return true
}

function onFulfillment(data) {
    console.log(data);
    console.log('setting up table to eat tacos')
}

function onRejection(error) {
    console.log(error);
    console.log('start cooking pasta for dinner')
}

const promise = new Promise((resolve, reject) => {
    let task = getTacos();
    if(task) {
        resolve('Bringing Tacos')
    } else {
        reject('No Tacos')
    }
});

// if a seperate catch() method is used, it would handle the error, 
// but does not stop the error from being thrown hence breaking the flow of execution
// promise.then(onFulfillment)
// promise.catch(onRejection)

// ***************************************************************************************

// in the below method, onRejection only handles errors from only the promise
// if your callback function itself throws an error, theres no code to handle that
// promise.then(onFulfillment, onRejection)

// ***************************************************************************************

// this method of handling async operation after promise settlement also handles
// errors without breaking the flow of exection like any other error when thrown
promise.then(onFulfillment).catch(onRejection)