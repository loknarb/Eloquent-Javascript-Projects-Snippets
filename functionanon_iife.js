(function displayName(par1, par2) {
    console.log(par1 + " " + par2);
})("Michael", "Meyers");
// * ^^^ Immediately Invoked Function Expression
// * \/\/\/  Immediately Invoked Function Expression keeps a and b outside of global scope
function createCalculator() {
    return {
        add: function (a, b) {
            return a + b;
        },
        subtract: function (a, b) {
            return a - b;
        },
        divide: function (a, b) {
            return a / b;
        },
        multiply: function (a, b) {
            return a * b;
        },
    };
}
let calc = createCalculator();
calc.add(20, 20); // 40
calc.subtract(2, 2); // 0
calc.multiply(2, 2); // 4
calc.divide(12, 2); // 6
