// ! create an array of favourite foods make it have 5 elements
favoriteFoods = ["chipotle", "pasta", "pho", "meaballs", "hamburger"];
// ! access second element in favorite foods
console.log(favoriteFoods[1]);
//! change the last element to disgusting food
favoriteFoods.splice(4, 5, "otherfood");
console.log(favoriteFoods);
//! remove first element and store it in formerfavoritefood
formerFavoriteFood = favoriteFoods.splice(0, 1);
//! add banana element to back of favoritefood element
favoriteFoods.push("banana");
//! add an apple element to front of favorite food element
favoriteFoods.unshift("apple");
//! what happens when you try to pop empty array
empty = [];
console.log(empty.pop());

//! use splice in following should 
// ->>> [2, 4, 5]
console.log([2, 3, 4, 5].splice(1, 1));

// ->>> ["alpha", "beta", "gamma", "delta"]
test1 = ["alpha", "gamma", "delta"];
test1.splice(1, 1, "beta", "gamma");
console.log(test1)
// ->>> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// [10, -10, -5, -3, 2, 1].splice(1, 3, 9, 8, 7, 6, 5, 4, 3);
test2 = [10, -10, -5, -3, 2, 1];
test2.splice(1, 3, 9, 8, 7, 6, 5, 4, 3);
console.log(test2)


console.log(favoriteFoods);
console.log(formerFavoriteFood);