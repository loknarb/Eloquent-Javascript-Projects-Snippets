function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
multiply(2, 3);
function divide(a, b) {
    return a / b;
}
add(2, 2);

function sayHello(name) {
    let greeting = "Hello";
    return greeting, name;
}
sayHello("bob");

function average(nums) {
    let averaged = "";
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum / nums.length;
}
average([1, 2, 3, 4, 5, 6]);
// arr = []
function createStudent(param1, param2) {
    return {
        firstName: param1,
        lastName: param2,
    };
}
let tim = createStudent("Tim", "Garcia");
let matt = createStudent("Matt", "Lane");
let elie = createStudent("Elie", "Schoppik");
let students = ["tim", "matt", "elie"];

function findStudentByFirstName(str) {
    for (let i = 0; i < students.length; i++) {
        if (str.toUpperCase() === students[i].toUpperCase()) {
            return true;
        }
    }
    return false;
}
// findStudentByFirstName("elie") // true
// findStudentByFirstName("Elie") // true
findStudentByFirstName("Janey"); // false
// findStudentByFirstName("Janey") // false
// findStudentByFirstName("TIM") // true
// findStudentByFirstName("MMMaaaTTTtttTTT")
function extractEveryThird(arr2) {
    let thirds = [];
    for (let i = 0; i < arr2.length; i++)
        if ((i + 1) % 3 == 0) {
            thirds.push(arr2[i]);
        }
    return thirds;
}

// console.log(extractEveryThird([1, 2, 3])); // [3]
// console.log(extractEveryThird([1, 2, 3, 4, 5, 6])); // [3,6]
// console.log(extractEveryThird(["a", "b", "c", "d"])); // ["c"]
// console.log(extractEveryThird(["first value", "second value", "third value"])); // ["third value"]
function countEvensAndOdds(arr3) {
    let num1 = 0;
    let num2 = 0;
    let totaleven = "";
    let totalodd = "";
    obj = { oddCount: totalodd, evenCount: totaleven };
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] % 2 == 0) {
            num1 += 1;
            obj.evenCount = num1;
        } else {
            num2 += 1;
            obj.oddCount = num2;
        }
    }
    return obj;
}
// console.log(countEvensAndOdds([1, 2, 3, 4]));
// console.log(countEvensAndOdds([1, 2, 3, 4, 5, 6, 7]));
// function onlyCapitalLetters(string3) {
//     let string4 = [alphabet]
//     for (let i = 0; i < string3.length; i++) {
//         if string[i] ==
//     }

// }
// console.log(onlyCapitalLetters("Amazing")) // "A"
// console.log(onlyCapitalLetters("nothing")) // ""
// console.log(onlyCapitalLetters("EVERYTHING")) // "EVERYTHING"
stre = "Amazing";
console.log(stre.indexOf("a"));
console.log("".indexOf("o"));
