// this function should accept 2 parameters, put them in!

function each(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}
// * each([1, 2, 3, 4], function (val) {
//     console.log(val);
// });

function map(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

// ** map([1, 2, 3, 4], function (val) {
//     console.log(val * 2);
// }); // [2,4,6,8]

function reject(array, fn) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i]) === false) {
            newArr.push(array[i]);
        }
    }
    console.log(newArr);
}
reject([1, 2, 3, 4], function (val) {
    return val > 2;
}); // [1,2]

reject([2, 3, 4, 5], function (val) {
    return val % 2 === 0;
}); // [3,5]
