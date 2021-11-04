// ! Hard- Nested Array Vowel Counter
// * Makes use of recursion multiple functions calling each other
// * Makes use of prefix operator
// * uses .includes function
// * uses isArray instead of typeof because it would return object
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
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (var j = 0; j < arr[i].length; j++) {
                if (Array.isArray(arr[i][j])) {
                    for (var k = 0; k < arr[i][j].length; k++) {
                        if (Array.isArray(arr[i][j][k])) {
                            for (var l = 0; l < arr[i][j][k].length; l++) {
                                count = countCharacters(arr[i][j][k][l], count);
                            }
                        } else {
                            count = countCharacters(arr[i][j][k], count);
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
    return count;
}

function countVowelsEasier(arr) {
    var str = arr.toString();
    var count = 0;
    count = countCharacters(str, count);
    return count;
}

let nestedArr = [
    "Elie",
    ["Matt", ["Tim"]],
    ["Colt", ["Whisky", ["Janey"], "Tom"]],
    "Lorien",
];

console.log(countVowels(nestedArr));
