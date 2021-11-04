// * we can store the inner function in a variable
// var laterAdd = outer(10);
// * we can now call that inner function
// console.log(laterAdd(15)); // 25
// * but how was the inner function able to
// * remember the parameter "a" defined in
// * the outer function which already returned?
// * The answer is through closure.

// console.log(outer(5)); // * this returns the inner function

// * this calls the inner function right away
// console.log(outer(5)(2)); // 7
function outer(a) {
    return function inner(b) {
        return a + b;
    };
}
// console.log(outer(10)(15)); // * 25
function defineAge() {
    var age = 28;
    return function growUp() {
        return ++age;
    };
}
console.log(defineAge());
var ageOnce = defineAge();
// console.log(ageOnce()); // *29
// console.log(ageOnce()); // *30

function createInstructors() {
    var instructors = ["Elie", "Matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors() {
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor) {
            instructors.push(instructor);
            return instructors;
        },
    };
}
console.log(createInstructors());
var firstClass = createInstructors();
firstClass.addInstructor("Jennifer");
// console.log(firstClass.showInstructors()); // ["Elie", "Matt", "Tim", "Jennifer"]

var secondClass = createInstructors();
// console.log(secondClass.addInstructor("Ashley")); // ["Elie", "Matt", "Tim", "Ashley"]

// on one line

var instructors = createInstructors().showInstructors();
["Elie", "Matt", "Tim"];
