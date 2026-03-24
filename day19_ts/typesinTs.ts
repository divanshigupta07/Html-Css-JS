let drink = "chai"

let cups = Math.random()>0.5 ? 10 : 5;

let chaiflavour: string= "Masala Chai";
chaiflavour="Ginger Tea"

// BASIC DATA TYPES
let name: string = "Divanshi";
let age: number = 22;
let isStudent: boolean = true;
let value: null = null;
let data: undefined = undefined;

// Array Types
let numbers: number[] = [1, 2, 3];
let names: string[] = ["A", "B"];

// Tuple

let user: [string, number,boolean] = ["John", 25, false];

// Special data-types
let valu: any = "Hello";//any turns off checking
valu = 10;
valu = true;

let val: unknown = "Hello";
if (typeof val === "string") {
  console.log(val.toUpperCase());
}

function logMessage(): void {
  console.log("Hello");
}
logMessage();

// function throwError(): never {
//   throw new Error("Something went wrong");
// }
// throwError();

// enum
enum Role {
  Admin,
  User,
  Guest
}

let myRole: Role = Role.Admin;
console.log(myRole);

// Union type
let id: string | number |boolean;

id = 101;
id = "A101";

// INTERSECTION TYPES
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

let worker: Staff = {
  name: "John",
  employeeId: 101
};

// Literal types
let direction: "left" | "right";

direction = "left";  // ✅
// direction = "up";    // gives error

// OBJECT TYPE
let user1: {
  name: string;
  age: number;
};

user1 = {
  name: "Divanshi",
  age: 22
};

// TYPE ALIAS
type User = {
  name: string;
  age: number;
};

let person: User = {
  name: "John",
  age: 30
};
console.log(person);

// FUNCTION TYPE

function add(a: number, b: number): number {
  return a + b;
}
const multiply = (a: number, b: number): number => a * b;
console.log(add(10,20), multiply(10,5));

//Optional Properties
type User5 = {
  name: string;
  age?: number;
}; 
let people : User5 = {
    name: "Diya"
}
console.log(people);
people = {
    name: "Diya",
    age: 20
}
console.log(people);

// readonly properties
type User6 = {
  readonly id: number;
  name: string;
};


const orders = ['12','22','28','42'];
let currentOrder;
for(let order of orders){
  if(order === '28'){
    currentOrder = order;
    break;
  }
} 

console.log(currentOrder);
