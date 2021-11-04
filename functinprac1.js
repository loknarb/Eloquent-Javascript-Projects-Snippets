function myName() {
    let fullName = "Sebastien Brumbaugh";
    console.log(fullName)
}

function randomFood() {
    let favoriteFoods = ["pizza", "ice cream"]

    return Math.random(favoriteFoods)
}
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function displayOddNumbers() {
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            oddNumbers.push(numbers[i])
        }
    }
    return oddNumbers
}
function displayevenNumbers() {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i])
        }
    }
    return evenNumbers
}
function displayfirstOddNumber() {
    let firstOddNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 != 0) {
            return firstOddNumber.push(numbers[i])
        }
    }
}
function displayfirstEvenNumber() {
    let firstEvenNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            return firstEvenNumber.push(numbers[i])
        }
    }
}
function displayfirstHalf() {
    let firstHalf = [];
    for (let i = 0; i < numbers.length / 2; i++) {
        if (numbers[i] % 2 == 0) {
            firstHalf.push(numbers[i])
        }
    }
    return firstHalf
}
function displaylastHalf() {
    let lastHalf = [];
    for (let i = 0; i < slice(numbers.length / 2); i++) {
        if (numbers[i] % 2 == 0) {
            lastHalf.push(numbers[i])
        }
    }
    return lastHalf
}

