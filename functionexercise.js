function difference(num1, num2) {
    return num1 - num2
}
// console.log(difference(2, 2)); // 0
// console.log(difference(0, 2)); // -2
function product(num1, num2) {
    return num1 * num2
}
// console.log(product(2, 2)); // 4
// console.log(product(0, 2)); // 0
function printDay(num) {
    if (num == 1) {
        return "Sunday";
    }
    if (num == 2) {
        return "Monday";
    }
    if (num == 3) {
        return "Tuesday";
    }
    if (num == 4) {
        return "Wednesday";
    }
    if (num == 5) {
        return "Thursday";
    }
    if (num == 6) {
        return "Friday";
    }
    if (num == 7) {
        return "Saturday";
    }
}

// console.log(printDay(4)); // "Wednesday"
// console.log(printDay(41)); // undefined

function lastElement(arr) {
    return arr[arr.length - 1]
}
// console.log(lastElement([1, 2, 3, 4])); // 4
// console.log(lastElement([])); // undefined
function numberCompare(num1, num2) {
    if (num1 > num2) {
        return "First is greater"
    }
    if (num1 < num2) {
        return "Second is greater"
    }
    return "Numbers are equal"
}
// console.log(numberCompare(1, 1)); // "Numbers are equal"
// console.log(numberCompare(2, 1)); // "First is greater"
// console.log(numberCompare(1, 2)); // "Second is greater"
function singleLetterCount(str1, str2) {
    let count = 0

    for (i = 0; i < str1.length; i++) {
        // console.log(str1[i].toUpperCase());
        if (str1[i].toUpperCase().indexOf(str2.toUpperCase()) != -1) {
            count++
        }
        // console.log(count)
    }
    console.log(count)

}

singleLetterCount('amazing', 'A'); // 2
singleLetterCount('Rithm School', 'o'); // 2


