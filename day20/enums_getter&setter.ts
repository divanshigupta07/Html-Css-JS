// // Numeric enums(Default)
// enum Status {
//   Pending,
//   Approved,
//   Rejected
// }

// // CUstom Numeric values
// enum Status{
//     Pending=1,
//     Approved=5,
//     Rejected=10
// }

// // String enums
// enum Role {
//   Admin = "ADMIN",
//   User = "USER",
//   Guest = "GUEST"
// }

// Enum as function Parameter
enum Direction {
  Up,
  Down,
  Left,
  Right
}

function move(direction: Direction) {
  console.log(direction);
}

move(Direction.Left);

// Reverse Mapping (Numeric Enums Only)
enum Status {
  Success,
  Error
}

console.log(Status[0]); // "Success"

// Const Enums (Optimized)
const enum Size {
  Small,
  Medium,
  Large
}


// Getter  & Setter
class User {
  private _age: number = 0;

  // Getter
  get age(): number {
    return this._age;
  }

  // Setter
  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }
}

const user = new User();

user.age = 25;   // Calls setter
console.log(user.age);  // Calls getter

// Example
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p = new Person("Divanshi", "Gupta");
console.log(p.fullName); // "Divanshi Gupta"