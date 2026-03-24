// Function

// function myFunction(){
//     console.log("Welcome to World");
//     console.log("I'm Learning JS.")
// }

// myFunction();

// function text(msg){
//     // parameter -> input
//     console.log(msg);
// }
// text("I am Sleepy");//Argument
// text("My name is DIYA")

// sum of two numbers

// function sum(a, b){
//     // console.log(a+b);
//     // here a and b are local variables
//     s = a+b;
//     return s;
// }
// sum(452,785);
// console.log(s);

// // Sum
// function sum(a, b) {
//     return a + b;
// }

// // Sum with arrow Function
// const arrowsum = (a, b) => {
//     console.log(a + b);
// };
// arrowsum(10, 20);

// // Multiply
// function mul(a, b) {
//     return a * b;
// }

// const arrowMul = (a, b) => {
//     console.log(a * b);
// };
// arrowMul(4, 5);
// const printHello = () => {
//     console.log("Hello");
// };
// printHello();

// // check for vowels
// function countVowels(str) {
//     let count = 0;
//     for (i = 0; i < str.length; i++) {
//         if (
//             str[i] === "a" ||
//             str[i] === "e" ||
//             str[i] === "i" ||
//             str[i] === "o" ||
//             str[i] === "u"
//         ) {
//             count++;
//         }
//     }
//     console.log("Number of Vowels:", count);
//     return count;
// }
// countVowels("aeiou");
// countVowels("Divanshi");

// const countVow = (str)=>{
//     let count = 0;
//     for (i = 0; i < str.length; i++) {
//         if (
//             str[i] === "a" ||
//             str[i] === "e" ||
//             str[i] === "i" ||
//             str[i] === "o" ||
//             str[i] === "u"
//         ) {
//             count++;
//         }
//     }
//     console.log("Number of Vowels:", count);
//     return count;
// }
// countVow("asdfghjklie");

// let arr = ["delhi","pune","mumbai"];
// arr.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr);
//     // console.log(val.toUpperCase(),idx);
// })

// let num=[1,2,3,4,5,6,7,8,9,45,88];
// let q = num.forEach((val)=>{
//     console.log(`Square of ${val} is ${val**2}`);
// })
// // console.log(q);

// let calcSquare = (val)=>{
//     console.log(`Square of ${val} is ${val**2}`);
// }

// num.forEach(calcSquare)

// let marks = [45,85,98,78,69,96,91];
// let above90 = marks.filter((val)=>{
//    return val>90;
// })
// console.log(above90);

// let userNum = prompt("Enter a Number: ")
// let ar=[];
// for(let i = 1;i<=userNum;i++){
//     ar[i-1]=i;
// }
// console.log(ar);
// let sum1 = ar.reduce((res,current)=>{
//     return res+current;
// })
// console.log(sum1);

// let prod = ar.reduce((res,current)=>{
//     return res*current;
// })
// console.log(prod);



// FUNCTION INSTANCE METHODS
// function greet(city, country) {
//   console.log(`Hi, I am ${this.name} from ${city}, ${country}`);
// }
// const person = {
//   name: "Divanshi"
// };
// greet.apply(person, ["Punjab", "India"]);

// function greet(city) {
//   console.log(`Hi, I am ${this.name} from ${city}`);
// }
// const user = { name: "Divanshi" };
// greet.call(user, "Delhi");
// greet.apply(user, ["Delhi"]);


// const greetDivanshi = greet.bind(user);
// greetDivanshi("Mumbai");

// function add(a, b) {
//   return a + b;
// }
// console.log(add.toString());


// This Keyword
console.log(this);

function show() {
  console.log(this);
}
show(); 
