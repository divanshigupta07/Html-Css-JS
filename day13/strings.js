// Strings

let str = "  relinns"
console.log(str);
console.log(str.length);
console.log(str[4]);

let sentence = `This is a Template Literal`;
console.log(typeof sentence,sentence)

let obj = {
    item : "pen",
    price: 100,
};
console.log(`The name of the item is ${obj.item} and \nits cost is \tRs. ${obj.price} `);

let newstr = str.toUpperCase();
console.log(newstr);

newstr = str.trim();
console.log(newstr);

str="0123456789";
console.log(str.slice(2,7));// end is non-inclusive

console.log(str.concat(newstr), str + newstr);
console.log(str.replace("45","777"));

str="123456789777";
console.log(str.replaceAll("7","2"));

console.log(str.charAt(5));

// Practice Question
let fName = prompt("Enter your Full Name");
console.log(fName);
let userName = "@"+fName+ fName.length;
console.log("UserName: ", userName);

// console.log(+'10' - -'5');
