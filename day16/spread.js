// Spread with ARRAYS

// Copy
const nums = [1, 2, 3];
const copy = [...nums];
console.log(copy); // [1, 2, 3]

// merge
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]

// Add elements while copying
const arr = [2, 3, 4];
const newArr = [1, ...arr, 5];
console.log(newArr); // [1, 2, 3, 4, 5]

// Spread with Objects

// Copy
const user = { name: "Divanshi", age: 22 };
const copyUser = { ...user };

// Merge
const a1 = { x: 1 };
const b1 = { y: 2 };
const merged1 = { ...a1, ...b1 };
console.log(merged); // { x: 1, y: 2 }

// Override Properties
const user1 = { name: "Divanshi", age: 20 };
const updatedUser = { ...user1, age: 22 };
console.log(updatedUser);// { name: "Divanshi", age: 22 }

// Spread in Function Calls
const numss = [10, 20, 30];
function add(a, b, c) {
  return a + b + c;
}
console.log(add(...numss)); // 60


// Spread with Strings
const str = "HELLO  ";

const chars = [...str];
console.log(chars); // ["H", "E", "L", "L", "O"]

// Practise question

const q =[1,2];
const w =[4,5];
const t = [...q,3,...w];
console.log(t);

const qwerty = {
    name: "Divanshi",
    dob: "07-02",
}
const qwerty1={...qwerty,name:"Tanya"};
console.log(qwerty1);

let fName = "Divanshi";
const characters =[...fName];
console.log(characters);

const sdf = [5,10,15];
function mul(a,b,c){
    return a*b*c;
}
console.log(mul(...sdf));

