// Option 1: - directly in HTML. Note that in your HTML,
// the first button makes reference to a function called firstClick
// in the onclick attribute
function firstClick() {
    alert("you clicked the first button!");
}

// Option 2 - attach the function to the element
var secondButton = document.querySelector(".second_button");
secondButton.onclick = function () {
    alert("you clicked the second button!");
};
// Option 3 - use addEventListener
var thirdButton = document.querySelector(".third_button");
thirdButton.addEventListener("click", function () {
    alert("you clicked the third button!");
});

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        alert("You just clicked on a button!");
    });
}
for (var i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener("click", function () {
        alert("You just clicked on a button!");
    });
}
// In order to remove, we have to name our function before adding it instead of adding an anonymous function
function alertData() {
    alert("You just clicked a button");
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", alertData);
}

// since we have named our function, we know which one to remove
for (var i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener("click", alertData);
}
document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("container");
    container.innerText = "Hello World"; // This works now!
});
// OPTION 1: listening on the parent
var ul = document.querySelector("ul");

// how many event listeners?
ul.addEventListener("click", function (event) {
    alert("You just clicked on " + event.target.innerText);
});
