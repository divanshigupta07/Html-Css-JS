// function identity<T>(value: T): T {
//   return value;
// }
// identity<string>("Hello");
// identity<number>(100);
// identity<boolean>(true);
// identity("Hello");  // T becomes string automatically
// identity(100);      // T becomes number

// // Basic Generic Function
// function createPair<S, T>(v1: S, v2: T): [S, T] {
//   return [v1, v2];
// }
// console.log(createPair<string, number>('hello', 42));

// Generic with Arrays
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const num = getFirstElement([1, 2, 3]);       // number
const str = getFirstElement(["a", "b", "c"]); // string

console.log(num,str);

// Multiple generic types
function merge<A, B>(obj1: A, obj2: B): A & B {
  return { ...obj1, ...obj2 };
}

const result = merge(
  { name: "Divanshi" },
  { age: 22 }
);

// generic with Interfaces
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const response: ApiResponse<string> = {
  data: "User Created",
  success: true
};

// genrics with classes
class Box<T> {
  content: T;

  constructor(value: T) {
    this.content = value;
  }

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>("Hello");
console.log(numberBox,stringBox);

// generic constraints
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("Hello");     // OK
getLength([1, 2, 3]);   // OK
// getLength(100);      ❌ Error

// keyof operator with generics
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { name: "Divanshi", age: 22 };

getProperty(user, "name"); // ✅
getProperty(user, "age");  // ✅
// getProperty(user, "email"); ❌ Error
