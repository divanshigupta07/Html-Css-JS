function greet(name, callback) {
  console.log("Hello " + name);
  callback();   // calling the passed function
}

function sayBye() {
  console.log("Bye!");
}

greet("Divanshi", sayBye);


// Callback Uses
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(2, 3, add));       // 5
console.log(calculate(2, 3, multiply));  // 6


// Callback Hell
setTimeout(() => {
  console.log("Step 1");

  setTimeout(() => {
    console.log("Step 2");

    setTimeout(() => {
      console.log("Step 3");
    }, 1000);

  }, 1000);

}, 1000);
