// * This goes with DOM exercise.html
window.onload = function () {
    let changeHeading = document.getElementById("change_heading");
    changeHeading.innerText = "Hello World";

    let section = document.querySelector("section");
    let selectedColor = document.querySelector(".selected");
    section.addEventListener("mouseover", function (event) {
        selectedColor.innerText = event.target.className;
    });
    let divPurple = document.createElement("div");
    divPurple.className = "purple";
    divPurple.style.backgroundColor = "purple";
    section.appendChild(divPurple);

    let button = document.querySelector("button");
    let car1 = document.querySelector(".car1");
    let car2 = document.querySelector(".car2");
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;

    // * reset function
    function reset(car1, car2) {
        clearInterval(car1.timer);
        clearInterval(car2.timer);
        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;
        button.disabled = false;
    }
    button.addEventListener("click", function (event) {
        button.disabled = true;
        car1.timer = setInterval(function () {
            car1.style.marginLeft =
                parseInt(car1.style.marginLeft) + Math.random() * 60 + "px";
            if (parseInt(car1.style.marginLeft) > window.innerWidth) {
                alert("Car 1 Wins!");
                reset(car1, car2);
            }
        }, 1000);
        car2.timer = setInterval(function () {
            car2.style.marginLeft =
                parseInt(car2.style.marginLeft) + Math.random() * 60 + "px";
            if (parseInt(car2.style.marginLeft) > window.innerWidth) {
                alert("Car 2 Wins!");
                reset(car1, car2);
            }
        }, 1000);
    });
};
