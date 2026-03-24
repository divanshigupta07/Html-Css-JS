function greet(name: string): string {
    // return "hello, ", name; //error statement
    return `Hello, ${name}`;
}

console.log(greet("Divanshi"));

const username: string ="Chai aur Code";
console.log(greet(username));