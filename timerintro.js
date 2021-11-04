// setInterval(function () {
//     console.log("Hello!");
// }, 1000);
// var timerId = setTimeout(function () {
//     console.log("Hello!");
// }, 1000);

// clearTimeout(timerId); //this prints nothing so lets looked uth

var timerId = setInterval(function () {
    console.log("HI!");
}, 1000);

setTimeout(function () {
    clearTimeout(timerId);
}, 3000);

// setTimeout(timerId);
