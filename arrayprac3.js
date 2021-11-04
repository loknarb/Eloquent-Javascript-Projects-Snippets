let people = ["Greg", "Mary", "Devon", "James"];
console.log(people.indexOf("Mary"))
console.log(people.indexOf("Foo"))
let withBob = "Bob";
console.log(people.concat(withBob))
console.log(people.splice(2, 2, "Devon", "Elisabeth"))
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] == "James") {
        people.splice([i], [i]);
    } else if (people[0] != "Matt") {
        people.unshift("Matt")
        // } else if (people[-1] != "Seb") {
        //     people.push("Seb")
    } else if (people[i] == "Mary") {
        break;
    }
}
console.log(people)
copePeople = people.slice()