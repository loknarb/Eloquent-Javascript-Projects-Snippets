arr = [];
arr.unshift("firstname");
arr.push("lastname");
arr.unshift("black");
console.log(arr);
arr.splice(0, 1);
arr2 = [];
arr2.push(42);
arr2.push("Javascript");
console.log(arr2);
console.log(arr2.indexOf(42));
console.log(arr);
arrcombined = arr.concat(arr2);
console.log(arrcombined);

arr = ["Javascript", "Python", "Ruby", "Java"];
arr1 = arr.splice(1, 2);

arr2 = ["Haskell", "Clojure"];
console.log(arr1.concat(arr2));
