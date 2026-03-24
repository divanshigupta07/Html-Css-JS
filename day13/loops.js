// Loops
// for loop

for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}

// for (initialization; condition; afterthought)
//   statement

console.log("Loop has ended");

// Sum of first n numbers
let sum = 0;
for(let i=0; i<=5; i++){
    sum=sum+i;
}
console.log("Sum = ",sum);

// While loop
let i=1
while(i<=5){
    console.log("i=",i);
    i++;
}
// do-while loop
i=20;
do{
    console.log("Walking east one step");
    i++;
} while(i<=10);

// for-of loop
let str = "Walking east one step";
let size = 0
for(let i of str){
    // console.log("i = ", i);
    size++;
}
console.log("String size is ",size);

// for in loop

let student = {
    fName: "Divanshi",
    age: 22,
    cgpa: 8.4,
    isPass: true,
};

for (let i in student){
    console.log(i,"=",student[i]);
}

// Practise Questions
// Print all even numbers from 0 to 100
for (let i = 0; i<=100 ; i++){
    if (i%2 == 0){
        console.log(i);
    }
}

// for await (variable of iterable)
//   statement

// // Game
// let gameNum=25;

// let userNum = prompt("Guess the Game Number");
// console.log(userNum);
// while(userNum != gameNum){
//     let userNum =  prompt("You entered wrong number. Guess the Game Number");
//     // userNum;
//     console.log(userNum);
// }
// console.log("Congratulations")


