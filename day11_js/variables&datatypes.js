// JS is Case-sensitive, dynamically-typed language

// alert("Hello JS!");

console.log("Hello World!!!");

age = 25; // = is assignment operator
Age = 30; //
console.log(age);
console.log(Age);
console.log(typeof age, age+1);

n = "John";
console.log(n);
console.log(typeof n, n + " Doe");

console.log(n , age);

x=null;
console.log(x);
console.log(typeof x, x+1);
console.log(typeof x,x + " is null");
x="Diya";
console.log(typeof x, x);

y=undefined;
console.log(y);
console.log(typeof y, y+1);
y=100;
console.log(typeof y, y);

// Null vs Undefined
// Use undefined to indicate a value that is not assigned or missing (usually by JavaScript), and use null to explicitly represent an intentional empty value.

// VARIABLE DECLARATION KEYWORDS
var a ;//since value is not defined, it is assigned as undefined
let b = "Hello";
b=25;
const pi = 3.14;
console.log(a, b, pi);//output: undefined Hello 3.14

isFollow = false;
console.log(typeof isFollow,isFollow);

let fullName = "Diya";
let totalPrice = 1000;
console.log(fullName, totalPrice);

let price;
console.log(price); // output: undefined

price = 100;
console.log(price); // output: 100

let q = BigInt("123");
console.log(typeof q, q);

let w = Symbol("Hello!!");
console.log(typeof w, w)

// OBJECT

const student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true,
};
console.log(typeof student, student);
console.log(student["cgpa"]);
console.log(student.fullName);

student["age"] = student["age"] + 1;

console.log(student.age);

const product = {
    title: "Ball Pen",
    rating: 4,
    offer: 5,
    price: 96,
};

const profile = {
    title: "ABC123",
    post: 25,
    isFollow: true,
    followers: 200000,
    following : 4,
    about: "Although these data types are relatively few, they enable you to perform useful operations with your applications",
};

console.log(profile);
console.log(typeof profile.title);

const myList = ["home", , "school", /* empty */, ];

console.log(myList);
