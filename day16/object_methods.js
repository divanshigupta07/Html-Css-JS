const user = {
  name: "Divanshi",
  age: 22,
  city: "Delhi"
};
Object.freeze(user);//Makes an object completely immutable (can’t add, delete, or update properties)

user.age = 25;      // ❌ ignored (or error in strict mode)
user.country = "IN"; // ❌ ignored
delete user.city;  // ❌ ignored

console.log(user);
Object.keys(user);
// ["name", "age", "city"]

// Object.keys(user).forEach(key => {
//   console.log(key, user[key]);
// });

Object.values(user);
// ["Divanshi", 22, "Delhi"]
// example : sum of values
const scores = { math: 80, sci: 90 };
const total = Object.values(scores).reduce((a, b) => a + b, 0);//170


Object.entries(user);
// Best for destrucuring
for (const [key, value] of Object.entries(user)) {
  console.log(key, value);
}

const extra = { country: "India" };
const merged = Object.assign({}, user, extra);
console.log(merged);
// { name: "Divanshi", age: 22, city: "Delhi", country: "India" }

const personMethods = {
  greet() {
    console.log("Hello!");
  }
};
const p1 = Object.create(personMethods);
p1.name = "Divanshi";
p1.greet(); // Hello!
console.log(p1);

Object.hasOwn(user, "name"); // true
Object.hasOwn(user, "toString"); // false

Object.is(5, 5);        // true
Object.is(NaN, NaN);   // true  ✅ (=== fails here)
Object.is(+0, -0);     // false ✅ (=== treats them same)

// OLD WAY
user.hasOwnProperty("name"); // true
user.hasOwnProperty("toString"); // false


// JSON

const json = '{"result":true, "count":42}';
console.log(json);//returned as string
const obj = JSON.parse(json);
console.log(obj);
console.log(obj.count);
// Expected output: 42
console.log(obj.result);
// Expected output: true

//Stringify
let myObj = { name: "Chris", age: 38 };
myObj;
let myString = JSON.stringify(myObj);
myString;


