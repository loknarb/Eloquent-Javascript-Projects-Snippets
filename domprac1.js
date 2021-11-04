var secondDiv = document.getElementsByTagName("div")[1];

secondDiv.innerText = "Just changed Again!";
var firstDiv = document.getElementsByTagName("div")[0];
firstDiv.innerHTML = "Just changed!";
var firstDiv = document.getElementsByTagName("div")[0];

firstDiv.style.color = "red";
firstDiv.style.backgroundColor = "teal";

var body = document.getElementById("container");

body.getAttribute("id"); // "container"
body.setAttribute("id", "new_container");
body.getAttribute("id"); // "new_container"

var secondDiv = document.getElementsByTagName("div")[1];

secondDiv.classList; // ["hello"]
secondDiv.classList.add("another_class");
secondDiv.classList; // ["hello", "another_class"]
secondDiv.classList.remove("hello");
secondDiv.classList; // [another_class"]

let container = document.getElementById("container");
container.childNodes; // this contains all of the nodes (including text nodes) that are children
container.childNodes.length; // 11
container.children; // this contains all of the elements that are children of the element we have selected
container.children.length; // 5
let link = document.querySelector("a");
link.parentElement; // <body id="container">...</body>
link.previousElementSibling; // <div class="hello">Hello Everyone!</div>
link.previousSibling; // text node
link.nextSibling; // text node
link.nextElementSibling; // <button>​Click me!​</button>​

var newDiv = document.createElement("div");

let button = document.createElement("button");
button.innerText = "I am a button created with JavaScript!";

let container = document.getElementById("container");
container.appendChild(button);

let linkToBeRemoved = document.querySelector("a");

let container = document.getElementById("container");
container.removeChild(linkToBeRemoved);

// we have to use a loop for each one instead.
for (var i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "red"; // this will work!
}
