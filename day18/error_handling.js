// Error Handling

// then and catch block
// const promise = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("Data fetched successfully!");
//   } else {
//     reject("Something went wrong 😵");
//   }
// });

// promise
//   .then(result => {
//     console.log(result); // success case
//   })
//   .catch(error => {
//     console.log(error);  // error case
//   });

// Chaining with error handling

// fetch("https://api.example.com/data")
//   .then(res => {
//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.error("Error:", err.message);
//   });

// Try...catch

// try {
//   let obj = JSON.parse('{ "invalid json" }"]'); // ❌ error
//   console.log(obj);
// } catch (err) {
//   console.log("Error caught:", err.message);
// }


// try...catch with async/await

// async function getData() {
//   try {
//     const res = await fetch("https://api.example.com/data");

//     if (!res.ok) {
//       throw new Error("Request failed");
//     }

//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }

// getData();








// async function f() {

//   try {
//     let response = await fetch('http://no-such-url');
//   } catch(err) {
//     alert(err); // TypeError: failed to fetch
//   }
// }

// f();

// async function f() {

//   try {
//     let response = await fetch('/no-user-here');
//     let user = await response.json();
//   } catch(err) {
//     // catches errors both in fetch and response.json
//     alert(err);
//   }
// }

// f();