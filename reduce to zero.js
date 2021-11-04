var numberOfSteps = function (num) {
    let counter = 0;
    for (let steps = 0; num > 0; steps++) {
        if (num % 2 == 0) {
            num = num / 2;
            counter++;
        } else {
            num--;
            counter++;
        }
    }
    console.log(counter);
}
numberOfSteps(14)