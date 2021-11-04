// function noisy(f) {
//     return (...args) => {
//         console.log("calling with", args);
//         let result = f(...args);
//         console.log("called with", args, ", returned", result);
//         return result;
//     };
// }

repeat(3, (n) => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});
