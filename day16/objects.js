const tinderUser = new Object();//singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// console.log(typeof tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullname: {
            firstname: "Divanshi",
            lastname:"Gupta",
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullname);

const obj1 = { 1: "a", 2: "b"};
const obj2 = { 3: "a", 4: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);
// const obj4 = Object.assign({},obj1, obj2);
// console.log(obj4);

const obj3 = {...obj1,...obj2}; //spread operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "edge@gmail.com"
    },
    {
        id: 1,
        email: "edge@gmail.com"
    },
    {
        id: 1,
        email: "edge@gmail.com"
    },
    {
        id: 1,
        email: "edge@gmail.com"
    },
    {
        id: 1,
        email: "edge@gmail.com"
    },
]

users[1].email;
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));

// Constructor

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Divanshi", 22);
const p2 = new Person("Rahul", 25);

console.log(p1.name); // Divanshi
console.log(p2.age);  // 25

// Destructuring
const course = {
    name: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course;

console.log(instructor);

// const navbar = ({company}) => {
// }
// navbar(company = "Relinns")

// JSON API Calling
// {
//     "name": "Divanshi",
//     "coursename": "hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]