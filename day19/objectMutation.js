// const person ={
//     name:"John",
//     age: 25,

// };

// person.age = 35;

// console.log(person)

// function updateAge(user) {
//   user.age = 40;  // Side effect
// }
// updateAge(person);

// console.log(person)

const person1 ={ name: "Ajay"};
const person2 = person1;

console.log(`person1 is`,person1);
console.log(`person2 is `,person2);

person2.name='Shiv';

console.log(`person2 after update`, person2);
console.log(`person1 `, person1);


// making object immutable
// let user = {
//   name: "Divanshi",
//   age: 22
// };

// Object.freeze(user);

// user.age = 25;      //Won't change
// user.city = "Delhi"; // Won't add

// console.log(user);

// Freeze is SHALLOW

let obj = {
  user: {
    name: "Divanshi"
  }
};

Object.freeze(obj);

obj.user.name = "Anjali"; // ✅ This still works!
console.log(obj);
console.log(obj.user);

let obj2 = structuredClone(obj);
console.log(obj2.user);

