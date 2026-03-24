// Immediately invoked function expressions: to deal with global scope pollution
// function chai(){
//     console.log("DB CONNECTED")
// }
// chai();

// named iife
(function chai(){
    console.log("DB CONNECTED")
})();

((namme)=>{
    console.log(`My name is ${namme}`)
})('Divanshi Gupta')
