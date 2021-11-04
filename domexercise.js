// * Write the code necessary to do the following:

// * Select the section with an id of container without using querySelector.
// * Select the section with an id of container using querySelector.
// * Select all of the list items with a class of "second".
// * Select a list item with a class of third, but only the list item inside of the ol tag.
// * Give the section with an id of container the text "Hello!".
// * Add the class main to the div with a class of footer.
// * Remove the class main on the div with a class of footer.
// * Create a new li element.
// * Give the li the text "four".
// * Append the li to the ul element.
// * Loop over all of the lis inside the ol tag and give them a background color of "green".
// * Remove the div with a class of footer.

let container = document.getElementById("container");
let container = document.querySelector("#container");
// let allSecond = document.querySelector("second")
let allSecond = document.getElementsByClassName("second");

let container = document.querySelector("ol .third");

let firstDiv = document.getElementsByTagName("div")[0];
firstDiv.innerHTML = "Hello!";

let mainDiv = document.createElement("main");
let footer = document.getElementById("footer");

footer.appendChild(mainDiv);
footer.removeChild(mainDiv);

let newList = document.createElement("li");
newList.classList.add("fourth");
newList.innerHTML = "four";

let unsortedList = document.getElementsByTagName("ul");

unsortedList[0].appendChild(newList);

let oList = document.getElementsByTagName("ol li");
for (let i = 0; i < oList.length; i++) {
    oList[i].style.backgroundColor = "green";
}

let footer = document.getElementsByClassName("footer");
footer[0].remove();
footer.className += "main";
