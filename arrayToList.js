// function arrayToList(array) {
//     let list = {};
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//         console.log(list);
//         if (i < array.length) {
//             Object.assign(list, { value: array[i], rest: list });
//         } else {
//             Object.assign(list, { value: array[i], rest: null });
//         }
//     }

// }
// console.log(arrayToList([10, 20]));

//eloquents version

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
        console.log(list);
    }
    return list;
}
console.log(arrayToList([10, 20, 30]));

// {
//         value: 10, rest:
//         {
//             value: 20, rest:
//             {
//                 value: 30, rest:
//                 {
//                     value: 40, rest:
//                     {
//                         value: 50, rest:
//                         {
//                             value: 60, rest:
//                              {
//                              value: 70, rest: null }
//                         }
//                     }
//                 }
//             }
//         }
//     }
