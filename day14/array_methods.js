// Array Methods

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits);
console.log(fruits.length); // 3
console.log("Index of Banana is ",fruits.indexOf("banana"));

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(fruits);
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
// Increasing the length extends the array by adding empty slots without creating any new elements 
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
fruits.push("Watermelon","Papaya","Guava");
console.log(fruits);
fruits[8]="Lichi";
console.log(fruits);
// Reduceing array length deletes the elements
fruits.length = 2;
console.log(Object.keys(fruits),fruits); // ['0', '1']
console.log(fruits.length); // 2

// Array Methods and Empty Slots
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
// Output:
// 0: red
// 1: yellow
// 2: blue
// 5: purple

colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']
console.log(colors);

const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
}
const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']
console.log(newColors);
console.log(colors);

let arr = [0,1,2,3,4,5,6];
console.log(arr);
arr.copyWithin(0, 1, 5); // mutates arr
console.log(arr);
const arr2 = arr.slice().copyWithin(0, 1, 2); // does not mutate arr
console.log(arr2);
const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr

console.log("Index of Banana is ",fruits.indexOf("banana"));
console.log(fruits.includes("Cherry"));


fruits.push("Orange","Kiwi");
console.log(fruits);
const start = -3;
// const removedItems = fruits.splice(start);
console.log(fruits);
// console.log(removedItems);

for (const fruit of fruits) {
  console.log(fruit);
}

fruits.forEach((item, index) => {
  console.log(item, index);
});

const values = [];
for (let x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);

// Array Iterations
//entries()

let a = ["a", "b", "c"];

for (let [i, val] of a.entries()) {
  console.log(i, val);
}

// with()
let r = [10, 20, 30];

let newArr = r.with(1, 99);

console.log(newArr); // [10, 99, 30]
console.log(r);    // [10, 20, 30]

let k = [1, 2];
let b = [3, 4];

let combined = [...k, ...b];
console.log(combined); // [1,2,3,4]
