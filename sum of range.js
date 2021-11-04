z = "";
for (let x = 0; x <= 10; x = x + 2) {
    // if (x <= 10) {
    z = +x + +z;
    console.log(x);
    // console.log(z);
    // }
    // var sum = +z + x - 10;
}
console.log(z)
// console.log(sum)c
function rangeF(start, end, increment) {
    const newLocal = "start = start + increment";
    increment = newLocal || "start = start + 1";
    start = start || 0;
    z = "";
    for (start; start <= end; increment) {
        // if (x <= 10) {
        z = +increment + +z;
        console.log(increment);
        // console.log(z);
        // }
        // var sum = +z + x - 10;
    }
}
console.log(rangeF(1, 10, 2))