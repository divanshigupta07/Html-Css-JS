interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Divanshi",
  age: 22
};

// Readonly properties
interface Person1 {
  readonly id: number;
  name: string;
}

const user1: Person1 = {
  id: 1,
  name: "John"
};

// user1.id = 2; // ❌ Error

// Interface with Functions
interface AddFunction {
  (a: number, b: number): number;
}

const add: AddFunction = (x, y) => x + y;

console.log(add(5,6));

// Interface with methods
interface Person7 {
  name: string;
  greet(): string;
}

const uqse: Person7 = {
  name: "John",
  greet() {
    return `Hi, I am ${this.name}` ;
  }
};

console.log(uqse)

// Interface with Arrays
interface StringArray {
  [index: number]: string;
}

const names: StringArray = ["A", "B", "C" ];

// Extending Interfaces
interface Person78{
    name: string;
}
interface employee12 extends Person78{
    employeeId: number;
}
const Worker: employee12 ={
    name:"Dee",
    employeeId:17
};
console.log(Worker);

// Interface declaration merging
interface Person8 {
  name: string;
}

interface Person8 {
  age: number;
}

const user8: Person8 = {
  name: "John",
  age: 30
};
// This does NOT work with (type).

