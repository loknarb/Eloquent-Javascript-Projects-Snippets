function extractKey(arr, name) {
    arr.reduce(
        function (acc, next) {
            {
                return [...acc, ...next[name]];
            }
        },
        ["Elie"]
    );
}
// ! FAIL
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

function filterLetters(arr, letter) {
    // .toLowerCase()
    arr.reduce(function (acc) {
        console.log(arr);
        console.log(letter);
    }, 1);
}
filterLetters(["a", "a", "b", "c", "A"], "a"); // 3
filterLetters(["a", "a", "b", "c", "A"], "z"); // 0
filterLetters(["a", "a", "b", "c", "A"], "B"); // 1
