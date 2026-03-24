// Strings

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4

const sentence = "The quick brown fox jumps over the lazy dog.";

// const word = "fox";
const word = "jack";

console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"
  } in the sentence`,
);

const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false coz it is case sensitive
console.log(str.includes(" ")); // true


const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";
const name1NFC = name1.normalize("NFC");
const name2NFC = name2.normalize("NFC");

console.log(`${name1NFC}, ${name2NFC}`);

const mood = "Happy! ";
console.log(`I feel ${mood.repeat(3)}`);

const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"
const regex = /dog/i;//Match "dog", "Dog", "DOG", "DoG" … all of them.
console.log(paragraph.replace(regex, "ferret"));

const paragrap = "I think Ruth's dog is cuter than your dog!";
// Anything not a word character, whitespace or apostrophe
const rege = /[^\w\s']/g;
console.log(paragrap.search(rege));
// Expected output: 41

console.log(paragraph[paragraph.search(rege)]);
// Expected output: "!"

const str7 = "Life, the universe and everything. Answer:";
console.log(`${str7} ${str7.length}`);