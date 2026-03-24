// OPERATORS
// Arithematic Operators

let a = 5;
let b = 2;

console.log(a+b);
console.log(b-a, a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b, b%a);//Modulus Operator: gives remainder
console.log("b**a=",b**a); // 7^5 : exponentiation

// Unary operator
a++;
console.log("a++ = ",a);
console.log("a=",a);
console.log("a++ =", a++);//Post Increment i.e me pehle kaam krunga fir increment krunga
console.log("a=",a);
console.log("++a =", ++a);//Pre Increment i.e me pehle increment krunga fir print krunga

// Same goes for Pre and Post Decrement


b--;
console.log("b-- =",b );

// Assignment Operators
a+=4;//a=a+4
console.log("a=",a);

// like we used += we can use all the arithmetic operators like this

// Comparison Operators
console.log("a==b",a==b);
console.log("a!=b",a != b);

b="5";
a=5;
console.log("a!=b",a != b);
console.log("a!==b",a!==b);
console.log("a===b",a===b);

a=5;
b=3;
console.log("5>3", a > b );
console.log("5>=3", a >= b );
console.log("5<3", a < b );
b=5;
console.log("5<=5", a <= b );

// Conditional Operators

a=6;
b=3;

let cond1 = a > b; //true
let cond2 = a===6; // true

console.log("cond1 && cond2", cond1 && cond2);//true
cond2 = a===5; // false
console.log("cond1 && cond2", cond1 && cond2);//false
console.log("cond1 || cond2", cond1 || cond2);//true

console.log("!(6<5)",!(6<5));//Not operator 

// || vs ??
// || returns the right side if the left side is falsy(falsy: false, 0, null, undefined, "", NaN)
// ?? returns the right side only if the left side is null or undefined

console.log(0 || 5);     // 5
console.log(0 ?? 5);     // 0
console.log("" || "Hi"); // Hi
console.log("" ?? "Hi"); // " "
console.log(null ?? "Hi"); // Hi


// Ternary Operator
// cond ? true output : false output
age = 25;
let result = age>=18 ? "adult" : "not adult"
console.log(result);

