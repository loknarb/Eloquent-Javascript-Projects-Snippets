var programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
programming.languages.push("Go");
console.log(programming.difficulty);
delete programming.jokes;
programming.isFun = true;
for (let i in programming.languages) {
    console.log(programming.languages[i]);
}
for (let i = 0; i < Object.keys(programming).length; i++) {
    console.log(Object.keys(programming)[i]);
}
for (let i in programming) {
    console.log(programming[i]);
}
