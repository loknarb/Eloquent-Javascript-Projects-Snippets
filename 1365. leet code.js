nums = [8, 1, 2, 2, 3];
function taker(nums) {
    let finalFinalList = [];
    for (let i = 0; i < nums.length; i++) {
        let numsUpdated = [];
        let finalList = [];

        count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++
            } else {
                continue
            }
            numsUpdated.push(count)
        }
        finalList.push(numsUpdated.length);
        // return finalList;
        finalFinalList.push(finalList)
    }
    console.log(finalFinalList)
}
taker(nums)
// for (let i = 0; i < nums.length; i++) {
//     let numsUpdated = [];
//     let finalList = [];
//     count = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[i] > nums[j]) {
//             count++
//         } else {
//             continue
//         }
//         numsUpdated.push(count)
//     }
//     finalList.push(numsUpdated.length);
//     // return finalList;
//     console.log(finalList)
// }