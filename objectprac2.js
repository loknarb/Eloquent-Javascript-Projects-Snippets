var instructor = {
    name: "Matt",
    mathWizard: true,
    dogOwner: true,
};

// console.log(Object.keys(instructor).length)
let inc = -1;

// for (let i in instructor) {
//     inc++;
//     let arr = [];
//     console.log(instructor[i]);
//     console.log(Object.keys(instructor)[inc]);
//     arr = [instructor[i], Object.keys(instructor)[inc]];
//     console.log(arr.join("=>"));
// }
// console.log(arr)
// for (let inc = 0; inc < Object.keys(instructor).length; inc++) {
//     console.log(Object.keys(instructor)[inc]);

// }

let namesAndHobbies = {
    elie: "JavaScript",
    matt: "jogging",
    janey: "table building",
    tim: "sailing",
};
namesAndHobbies.seb = "coding";
for (let i in namesAndHobbies) {
    inc++;
    let arr = [];
    // console.log(namesAndHobbies[i]);
    // console.log(Object.keys(namesAndHobbies)[inc]);
    arr = [namesAndHobbies[i], Object.keys(namesAndHobbies)[inc]];
    console.log(arr.join(" => "));
    if (Object.keys(namesAndHobbies)[inc] == "tim") {
        console.log("FOUND HIM");
    }
}
// ! needs delimiter, loops into

// Output should be:
// JavaScript => elie
// jogging => matt
// table building => janey
// sailing => tim
