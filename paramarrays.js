function logAll() {
    console.log(arguments);
}

logAll(2, 2); // [2,2]
logAll(10, 5, 4); // [10,5,4]
logAll(1); // [1]

function displayFirstArgument() {
    return arguments[0];
}

displayFirstArgument(10, 20); // [10]
displayFirstArgument(true); // [true]
displayFirstArgument(); // []

function tryPushOnArguments() {
    arguments.push("another one");
    return arguments;
}

// tryPushOnArguments(); // Uncaught TypeError: arguments.push is not a function

function add() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i]; // this is shorthand for total = total + arguments[i]
    }
    console.log(total);
}

add(1, 2, 3); // 6
add(1, -2, 3, -4); // -2
add(); // 0
