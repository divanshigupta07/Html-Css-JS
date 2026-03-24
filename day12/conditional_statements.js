// Conditional Statements

// If Statement
let age=25;
if(age >= 18){
    console.log("You can vote");
}
age=16;
if(age < 18){
    console.log("You can not vote");
}

let mode="dark";
let color;
if(mode==="dark"){
    color = "black";
}
if(mode === "light"){
    color = "white";
}

console.log(color);

// if-else statements: used for true-false pairing
mode="pink"
if(mode==="dark"){
    color="black";
} else{
    color="white";
}
console.log(color);

let x = 7;
if(x%2 == 0){
    console.log(x ,"is even");
}else{
    console.log(x ,"is odd");
}

// else-if statements: to check multiple conditions
mode="pink"
if(mode==="dark"){
    color="black";
} else if(mode==="pink"){
    color="pink";
}else{
    color="white";
}
console.log(color);

//  Switch statement

let fruitType = "Apples";
// fruitType = "Watermelon";

switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
// console.log("Is there anything else you'd like?");

let num = prompt("Enter a Number: ");
if(num%5 == 0){
    console.log(num ,"is multiple of 5");
}else{
    console.log(num ,"is not a multiple of 5");
}

let score = 48;
if(score >=90 && score<=100){
    console.log("Grade: A");
}else if(score >=70 && score<=89){
    console.log("Grade: B");
}else if(score >=60 && score<=69){
    console.log("Grade: C");
}else if(score >=50 && score<=59){
    console.log("Grade: D");
}else {
    console.log("Grade: F");
}