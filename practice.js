let journal = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let journalLog2 = [10, 11, 12, 13]
let notArray = ("Bob")
console.log(journal.length)
//slices an array with start value index 2 and 6end value index of 6 
console.log(journal.slice(2, 6))
// slices an array with no end value 
console.log(journal.slice(2))
// slices an array from index 2:- and then indexs for value or element 7 within this array
console.log(journal.slice(2).indexOf(7))
// concactenates two arrays
console.log(journal.concat(journalLog2))
// adds a string to an array with concat
console.log(journal.concat(notArray))
