// synchronous behavior

// console.log('a');
// console.log('b');
// console.log('c');

// async behavior
// setTimeout takes a function and a delay
// run the function after the delay time
// setTimeout(() => console.log('a'), 5000);
// console.log('here');
// setTimeout(() => console.log('now'), 1000);
// setTimeout(() => console.log('now again'), 500);

// async behavior ... pyramid of doom
// setTimeout(() => {
//     console.log('a');
//     setTimeout(() => {
//         console.log('now');
//         setTimeout(() => {
//             console.log('now again');
//         }, 500)
//     }, 1000)
// }, 5000);

// async behavior w/ Promises

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), ms);
    });
}

const printA = () => {
    console.log('a');
    return delay(1000);
}
const printNow = () => {
    console.log('now');
    return delay(500);
}
const printNowAgain = () => console.log('now again');


delay(5000)
    .then(printA)
    .then(printNow)
    .then(printNowAgain);