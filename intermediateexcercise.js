function countDown(time) {
    var timer = setInterval(function () {
        time--;
        if (time <= 0) {
            clearInterval(timer);
            console.log("DONE!");
        } else {
            console.log(time);
        }
    }, 1000);
}

function randomGame() {
    let count = 0;
    let timer = setInterval(function () {
        count++;
        randnum = Math.random();
        if (randnum > 0.75) {
            console.log(count);
            clearInterval(timer);
        }
    }, 1000);
}
// randomGame();
function isEven(num) {
    if (num % 2 == 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}
// isEven(3);

function isOdd(num) {
    if (num % 2 != 0) {
        console.log("true");
    } else {
        console.log("false");
    }
}
// isOdd(4);
function isPrime(value) {
    for (var i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
            console.log("false");
        }
    }
    console.log(value > 1);
}

function numberFact(num, fn) {
    return fn(num);
}
// numberFact(59, isEven); // false
// numberFact(59, isOdd); // true
// numberFact(59, isPrime); // true

function find(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            console.log(arr[i]);
            break;
        }
    }
}

// find([8, 11, 4, 27], function (val) {
//     return val >= 10;
// }); // 11
// find([8, 11, 4, 27], function (val) {
//     return val === 5;
// }); // undefined

function findIndex(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            console.log(i);
            break;
        }
    }
}
// returns 1 (index of the first value greater than or equal to 10)
findIndex([8, 11, 4, 27], function (val) {
    return val >= 10;
});

findIndex([8, 11, 4, 27], function (val) {
    return val === 7;
}); // undefined

function specialMultiply(param1, param2) {
    if (arguments.length === 1) {
        return function (param2) {
            return param1 * param2;
        };
    }
    return param1 * param2;
}
console.log(specialMultiply(3, 4)); // 12
console.log(specialMultiply(3)(4)); // 12
console.log(specialMultiply(3)); // returns a function
function add() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i]; // this is shorthand for total = total + arguments[i]
    }
    return total;
}

add(1, 2, 3); // 6
add(1, -2, 3, -4); // -2
add(); // 0
