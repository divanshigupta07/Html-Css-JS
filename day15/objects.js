// OBJECTS

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};
// console.log(person.name,
// person.name[0],
// person.age);
// person.bio();
// person.introduceSelf();

// person.age = 45;
// person["name"]["last"] = "Cratchit";

// console.log(person);

// person["eyes"] = "hazel";
// person.farewell = function () {
//   console.log("Bye everybody!");
// };

// console.log(person);

// const myDataName = "height";
// const myDataValue = "1.75m";
// person[myDataName] = myDataValue;

// function createPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
//   return obj;
// }

// const divanshi = createPerson("Divanshi");
// divanshi.introduceSelf();

// 11-02-2026 Day-16

// object literals

const mySym = Symbol("key1");

const JSUSer = {
  name: "Hitesh",
  "full name":"Hitesh Choudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "hitesh@gmail.com",
  isLoggedIn : false,
  lastLoginDays: ["Monday","Saturday"]
}
// console.log(JSUSer["email"]);
// console.log(JSUSer[mySym], typeof JSUSer[mySym]);

JSUSer.email = "histesh@chatgpt.com"
// console.log(JSUSer);

// Object.freeze(JSUSer);
JSUSer.email = "hitesh@ms.com";
// console.log(JSUSer);

JSUSer.greeting = function(){
  console.log("Hello everyone!!!");
}
JSUSer.greetingTwo = function(){
  console.log(`Hello everyone!!!, ${this.name}`);
}
// console.log(JSUSer.greeting);
console.log(JSUSer.greeting());
console.log(JSUSer.greetingTwo());
