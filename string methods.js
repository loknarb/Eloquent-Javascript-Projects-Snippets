// !slice works normally in a string
console.log("this is a string".slice(4, 9));
// !indexOf counts the index number in a string
console.log("this is a string".indexOf("r"));
// !indexof also accepts multiple values within a specific string same as indexof it also just passes the indexnumber
console.log("this is a string".indexOf("ri"));
// !trim method helps remove unnecessary whitespacce when indexing a string ONLY from start and end of given string
console.log("    this is a string".trim());
console.log("    this is a string");
// !padStart creates padding such as whitespace or even other strings but only applicable to characters not entire strings?
// ! no it does apply to even longer strings however they have their own index number there for the padstart(indexnum) has to account for the string length
console.log("bob".padStart(5, "0"));
console.log(String(3).padStart(3, "0"))
// ! .split(" ") finds every space within a string and recreates it into a seperate string
let sentence = "That’s the motto yolo";
let words = sentence.split(" ");
console.log(words);
// ! .join(". ") joins every single string within an array and combines them with values period and space
let newSentence = words.join("? ");
console.log(newSentence);
// !repeat string method
let newString = "this gonna be repeated 4 times";
console.log(newString.repeat(4));
// !string.length and now string[index]
let indexString = "hmmthinking";
console.log(indexString[3])
// ! ... params or REST params
let threeParams = ["this", "is", "three", "onemoretime"] //this array can be slowly incremented without directly interfering with the line below
console.log(["man", ...threeParams, "times"])

// ! one more example of Rest Params
let numbers = [2, 4, 5, 9];
console.log(Math.max(...numbers));
// * versus
console.log(Math.max(numbers));

console.log(Math.floor(Math.random() * 10)); //this will always be random rounded down so if .25 * 10 = 2.5 it will theoretically be 2
console.log(Math.floor(2.5)); // this will be rounded  DOWN
console.log(Math.ceil(2.5)); // this will be rounded UP

