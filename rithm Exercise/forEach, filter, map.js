function printFirstAndLast(arr) {
    let returnArr = [];
    arr.forEach(function (val) {
        returnArr.push(val[0] + val[val.length - 1]);
        returnArr.push();
    });
    console.log(returnArr);
}
// * SOLVED
//  printFirstAndLast(["awesome", "example", "of", "forEach"]);
function addKeyAndValue(arr, key, value) {
    let returnArr = [];
    // let obj = {};
    arr.forEach(function (val) {
        val[key] = value;
        returnArr.push(val);
    });
    console.log(returnArr);
}
// * SOLVED
// addKeyAndValue(
//     [{name: "Elie"}, {name: "Tim"}, {name: "Elie"}],
//     "isInstructor",
//     true
// );
var arr = [1, 2, 3, 4];
arr.map(function (val) {
    return val * 2;
}); // [2,4,6,8]

var tripledValues = arr.map(function (val) {
    return val * 3;
});
tripledValues; // [3,6,9,12]

// * Here is how we can refactor our double method to use map
function doubleArray(arr) {
    // * return the result of arr.map
    return arr.map(function (val) {
        // * return a new array with each value doubled
        return val * 2;
    });
}
doubleArray([2, 4]); // [4,8]

function valTimesIndex(arr) {
    return arr.map(function (val) {
        return val * arr.indexOf(val);
    });
}
// * SOLVED
// console.log(valTimesIndex([1, 2, 3])); // [0,2,6]
// console.log(valTimesIndex([5, 10, 15])); // [0,10,30]

function extractKey(arr, name) {
    return arr.map(function (val) {
        return val[name];
    });
}
// * SOLVED
// console.log(
//     extractKey(
//         [
//             {name: "Elie", isInstructor: true},
//             {name: "Tim", isInstructor: true},
//             {name: "Matt", isInstructor: true},
//         ],
//         "name"
//     )
// );

// ["Elie", "Tim", "Matt"]
var arr = [1, 2, 3, 4];
var valuesGreaterThanTwo = arr.filter(function (val) {
    return val > 2;
});
function filterLetters(arr, str) {
    let count = 0;
    arr.filter(function (val) {
        if (str.toLowerCase() === val.toLowerCase()) {
            count++;
        }
    });
    return count;
}
// * SOLVED
// console.log(filterLetters(["a", "a", "b", "c", "A"], "a")); // 3
// console.log(filterLetters(["a", "a", "b", "c", "A"], "z")); // 0
// console.log(filterLetters(["a", "a", "b", "c", "A"], "B")); // 1

function filterKey(arr, key) {
    return arr.filter(function (val) {
        if (true === val[key]) {
            return val;
        }
    });
}
// * SOLVED
// console.log(
//     filterKey(
//         [
//             {name: "Elie", isInstructor: true, isHilarious: false},
//             {name: "Tim", isInstructor: true, isHilarious: true},
//             {name: "Matt", isInstructor: true},
//         ],
//         "isHilarious"
//     )
// );
