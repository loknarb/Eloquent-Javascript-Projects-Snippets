// array shuffle
var shuffle = function (nums, n) {
    let value = [];
    for (let i = 0; i < nums.length / 2; i++) {
        value.push(nums[i], nums[i + n]);
        console.log(nums[i])
        // console.log(nums[i + n])
        console.log(nums[n])
    }
    return value;
}
console.log(shuffle(nums = [2, 5, 1, 3, 4, 7], n = 3))