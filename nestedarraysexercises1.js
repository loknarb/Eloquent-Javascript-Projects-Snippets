// rotate([1, 2, 3], 1); // [3,1,2]
// rotate([1, 2, 3], 2); // [2,3,1]
// rotate([1, 2, 3], 3); // [1,2,3]
rotate([1, 2, 3, 4], 1);

function rotate(arr1, move) {
    let arr1Copy = arr1.slice();
    indexOne = arr1.shift(1);

    // arr1.splice(move, 1, indexOne);
    // console.log(arr1);
    // arr1.splice(move, 1, indexOne);
    // console.log(arr1Copy);
    console.log(arr1);
    if (move >= arr1Copy.length) {
        move = move - arr1Copy.length;
        arr1.splice(move, 0, indexOne);
    } else {
        arr1.splice(move, 0, indexOne);
        console.log(arr1);
        if (arr1.length < arr1Copy.length) {
            arr1.unshift(arr1Copy[arr1Copy.length - 1]);
            // arr1.splice(move, 1, indexOne);
        }
    }
    console.log(arr1);
}
