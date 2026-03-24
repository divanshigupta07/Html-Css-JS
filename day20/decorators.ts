// // Step 1: Create a decorator function
// function Logger(constructor: Function){
//     console.log("Class created!");  
// }
// // Apply it
// @Logger
// class Person {
//     name= "Divanshi";
// }

// console.log(Person);

// // Modifying a class using Decorator
// function AddProperty(constructor: any){
//     constructor.prototype.role ="Admin";
// }
// @AddProperty
// class User{}

// const user = new User() as any;
// console.log(user.role); // Admin


// // Method Decorator
// function Log(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("Method name:", propertyKey);
// }

// class Employee {
//   @Log
//   greet() {
//     console.log("Hello");
//   }
// }
// console.log(Employee.prototype);


// Class Decorator
// function Logger(constructor: Function) {
//   console.log("Class created:", constructor.name);
// }

// @Logger
// class User {
//   constructor() {
//     console.log("User instance created");
//   }
// }

// // Method Decorator
// function LogMethod(
//     target:any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
// ) {
//     console.log("method:", propertyKey);
// }

// class Person {
//   @LogMethod
//   sayHello() {
//     console.log("Hello");
//   }
// }

// // Property Decorator
// function LogProperty(target: any, propertyKey: string) {
//   console.log("Property:", propertyKey);
// }

// class Product {
//   @LogProperty
//   name: string = "Laptop";
// }

// // Parameter Decorator
function LogParameter(target: any, methodName: string, index: number) {
  console.log(`Parameter at index ${index} in ${methodName}`);
}

class Example {
  greet(@LogParameter message: string) {
    console.log(message);
  }
}