// // // CLASS
// // class Person {
// //   name: string;
// //   age: number;

// //   constructor(name: string, age: number) {
// //     this.name = name;
// //     this.age = age;
// //   }

// //   greet(): string {
// //     return `Hi, I'm ${this.name}`;
// //   }
// // }

// // const user = new Person("Divanshi", 22);
// // console.log(user);


// // Access Modifiers

// // Public Modifier
// class Person {
//   public name: string;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const user = new Person("John");
// console.log(user.name); // ✅ Allowed

// // Private access modifier
// class per {
//   private age : number;

//   constructor(age: number) {
//     this.age = age;
//   }

//   getAge() {
//     return this.age;
//   }
// }
// const user1 = new per(22);
// // console.log(user1.age); // Age can't be accessed outside the class as it is a private property

// // Protected Modifier

// class person1{
//   protected salary: number;

//   constructor(salary: number){
//     this.salary = salary;
//   }
// }

// class Employee extends person1{
//   getSalary() {
//     console.log(this.salary);
//     return this.salary;
    
//   }
// }

// const emp = new Employee(50000);
// // console.log(emp.salary); // ❌ Error
// console.log(emp);

// // Parameter Properties (Shortcut)

// class Person2 {
//   constructor(
//     public name: string,
//     private age: number
//   ) {}
// }

// Readonly in classes
// class Person {
//   readonly id: number;

//   constructor(id: number) {
//     this.id = id;
//   }
// }
// const user=new Person(42);
// console.log(user);
// // user.id=45;//id can't be reassigned as it is readonly property
// const user1= new Person(22);
// console.log(user1);

// Inheritance

// class Person {
//   constructor(public name: string) {}

//   greet() {
//     return "Hello";
//   }
// }

// class Employee extends Person { //extends → inheritance
//   constructor(name: string, public department: string) {
//     super(name);//super() → calls parent constructor
//   }
// }

// const user=new Employee("Divanshi","Software Engineering");
// console.log(user);

// Method Overriding
// class Person {
//   greet() {
//     return "Hello";
//   }
// }

// class Employee extends Person {
//   greet() {
//     return "Hello from Employee";
//   }
// }
// const user=new Employee();
// console.log(user.greet());

// Static Properties and Methods
class MathUtils{
  static pi = 3.14;

  static square(num: number) {
    return num * num;
  }
}

console.log(MathUtils.pi);
console.log(MathUtils.square(4));

// Getter & setter
class Person {
  private _age: number = 5;

  get age() {
    return this._age;
  }

  set age(value: number) {
    if (value > 0) {
      this._age = value;
    }
  }
}
console.log(new Person());