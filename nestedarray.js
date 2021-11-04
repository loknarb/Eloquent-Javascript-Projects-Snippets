var nestedArr1 = [
    [1, 2],
    [3, 4],
];
for (var i = 0; i < nestedArr1.length; i++) {
    for (let j = 0; j < nestedArr1[i].length; j++) {
        // !console.log(nestedArr1[i][j]);
    }
}
var nestedArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10, 11, 12],
];
for (let i = 0; i < nestedArr.length; i++) {
    for (let j = 0; j < nestedArr[i].length; j++) {
        // !console.log(nestedArr[i][j]);
    }
}
// console.log(nestedArr[2][4]);

// var nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];
function printEvens() {
    let nestedArr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8],
        [9, 10, 11, 12],
    ];
    for (let i = 0; i < nestedArr.length; i++) {
        for (let j = 0; j < nestedArr[i].length; j++) {
            if (nestedArr[i][j] % 2 == 0) {
                console.log(nestedArr[i][j]);
            }
        }
    }
}
// printEvens();
function sumTotal() {
    var nestedArr = [
        [1, 2],
        [3, 4],
        [5, 6],
    ];
    let total = 0;
    for (let i = 0; i < nestedArr.length; i++) {
        for (let j = 0; j < nestedArr[i].length; j++) {
            total += nestedArr[i][j];
        }
    }
    console.log(total);
}
sumTotal();

function seeIfVowel(char, count) {
    var vowels = "aeiou";
    if (vowels.includes(char.toLowerCase())) {
        return ++count; // add 1 to count then return the value (this is called a prefix operator)
    }
    return count;
}

function countCharacters(str, count) {
    for (var i = 0; i < str.length; i++) {
        count = seeIfVowel(str[i], count);
    }
    return count;
}

function countVowels(arr) {
    var nestedArr = [
        "Elie",
        ["Matt", ["Tim"]],
        ["Colt", ["Whisky", ["Janey"], "Tom"]],
        "Lorien",
    ];
    let count = 0;
    for (let i = 0; i < nestedArr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < nestedArr[i].length; j++) {
                if (Array.isArray(arr[i][j])) {
                    for (let k = 0; k < nestedArr[i][j].length; k++) {
                        if (Array.isArray(arr[i][j][k])) {
                            for (
                                let l = 0;
                                l < nestedArr[i][j][k].length;
                                l++
                            ) {
                                if (Array.isArray(arr[i][j][k][l])) {
                                    for (
                                        let o = 0;
                                        o < nestedArr[i][j][k][l].length;
                                        o++
                                    ) {
                                        if (Array.isArray(arr[i][j][k][l][o])) {
                                            console.log(
                                                nestedArr[i][j][k][l][o]
                                            );
                                        }
                                    }
                                } else {
                                    count = countCharacters(
                                        arr[i][j][k][l],
                                        count
                                    );
                                }
                            }
                        } else {
                            count = countCharacters(arr[i][j], count);
                        }
                    }
                } else {
                    count = countCharacters(arr[i], count);
                }
            }
        } else {
            count = countCharacters(arr[i][j], count);
        }
    }
    return count;
}

function countVowelsEasier(arr) {
    var str = arr.toString();
    var count = 0;
    count = countCharacters(str, count);
    return count;
}

countVowels();
//     countVowels();
//     for (var i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             for (var j = 0; j < arr[i].length; j++) {
//                 if (Array.isArray(arr[i][j])) {
//                     for (var k = 0; k < arr[i][j].length; k++) {
//                         if (Array.isArray(arr[i][j][k])) {
//                             for (var l = 0; l < arr[i][j][k].length; l++) {
//                                 count = countCharacters(arr[i][j][k][l], count);
//                             }
//                         } else {
//                             count = countCharacters(arr[i][j][k], count);
//                         }
//                     }
//                 } else {
//                     count = countCharacters(arr[i][j], count);
//                 }
//             }
//         } else {
//             count = countCharacters(arr[i], count);
//         }
//     }
//     return count;
// }
