// let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// !→ [1, 2, 3, 4, 5, 6]
// console.log(arrays.forEach((x) => x.forEach(y), x.forEach(y) => console.log(y)));

// arrays.forEach(function (val) {
//     val.forEach(function (x) {
//         console.log(x);
//     });
// });
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((flat, current) => flat.concat(current), []));

console.log(
    arrays.reduce(function (flat, current) {
        return flat.concat(current);
    }, [])
);

// → 3
// → 2
// → 1

let map = Object.create(null);
map["randoProp"] = "randoString";
console.log("toString" in map);
console.log("randoProp" in map);
