// Assignment 1
// Approach 1
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];

fruits.splice(1,2);
console.log(fruits);

// Approach 2
function removeItem(arr, item) {
  return arr.filter(el => el !== item);
}

const fruit = ["Banana", "Orange", "Apple", "Kiwi"];
const result = removeItem(fruit, "Kiwi");
console.log(result); 
console.log(fruit);
