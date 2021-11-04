function reverse(array) {
    newArray = [];
    element = [];
    for (let i = 0; i < array.length;) {
        element = array.pop()
        newArray = newArray.concat(element);
    }
    console.log(newArray);
}
reverse([1, 2, 3, 4, 5, 6, 7, 8, 9])

// *solved 
// Todo reverse in place
