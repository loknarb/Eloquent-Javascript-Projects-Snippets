// function multipleLetterCount(param1) {
//     let obj = {};
//     let str = "";
//     for (let i = 0; i < param1.length; i++) {
//         console.log(count)
//         console.log(param1[i])

//         obj.param1[i] = "count";
//         console.log(obj)
//     }

// }
// {p:1, e: 1, r: 1, s:1, o:1, n:1}

// *function singleLetterCount(str1, str2) {
// *    let count = 0

// *    for (i = 0; i < str1.length; i++) {
// *        // console.log(str1[i].toUpperCase());
// *        if (str1[i].toUpperCase().indexOf(str2.toUpperCase()) != -1) {
// *            count++
// *        }
// *        // console.log(count)
// *    }
// *    console.log(count)

// *}

function multipleLetterCount(param1) {
    let obj = {};
    for (let i = 0; i < param1.length; i++) {
        if (!(param1[i] in (obj))) {
            obj[param1[i]] = 1;
        } else {
            obj[param1[i]]++;
        }
    }
    console.log(obj);
}
// multipleLetterCount("hello"); // {h:1, e: 1, l: 2, o:1}
// multipleLetterCount("person"); // { p: 1, e: 1 r: 1, s: 1, o: 1, n: 1 }

function isPalindrome(string) {
    let halfString = string.slice(Math.ceil(string.length / 2));
    let firstHalfString = string.slice(0, string.length / 2);
    let x = 0;
    for (let i = string.length; i > string.slice(Math.ceil(string.length / 2)); i--) {
        x++;
        if (firstHalfString[x] === halfString[i]) {
            return true;
        }
        else {
            return false;
        }
    }
}
// console.log(isPalindrome('tacocat')); // true
// console.log(isPalindrome('testing')); // false
// console.log(isPalindrome('hannah')); // true
// console.log(isPalindrome('robert')); // false
// string = "hannah"+
// otherhalfString = string.slice(0, string.length / 2)
// halfString = string.slice(Math.ceil(string.length / 2))

// console.log(halfString)
// console.log(otherhalfString)
function arrayManipulation(par1, par2, par3, par4) {
    if (par2 === "remove") {
        if (par3 === "end") {
            return par1.pop();
        }
        return par1.shift();
    }

    if (par2 === "add") {
        if (par3 === "end") {
            par1.push(par4);
            return par1;
        }
        par1.unshift(par4);
        return par1
    }
}



// console.log(arrayManipulation([1, 2, 3], "remove", "end")); // 3
// console.log(arrayManipulation([1, 2, 3], "remove", "beginning")); // 1
// console.log(arrayManipulation([1, 2, 3], "add", "beginning", 20)); // [20,1,2,3]
// console.log(arrayManipulation([1, 2, 3], "add", "end", 30)); // [1,2,3,30]
