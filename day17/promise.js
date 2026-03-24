// let promise = new Promise(function(resolve, reject) {
//   // the function is executed automatically when the promise is constructed
// //   setTimeout(() => resolve("done"), 1000);
//    setTimeout(() => reject(new Error("Whoops!")), 1000);
// });

// console.log(promise)

// let promise = new Promise(function(resolve, reject) {
// //   setTimeout(() => resolve("done!"), 1000);
//     setTimeout(() => reject("error"), 1000);
// });

// // resolve runs the first function in .then
// promise.then(
//   result => alert(result), // shows "done!" after 1 second
//   error => alert(error) // doesn't run
// );

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve("value"), 2000);
// })
//   .finally(() => alert("Promise ready")) // triggers first
//   .then(result => alert(result)); // <-- .then shows "value"

// new Promise((resolve, reject) => {
//   throw new Error("error");
// })
//   .finally(() => alert("Promise ready")) // triggers first
//   .catch(err => alert(err));  // <-- .catch shows the error

// let checkEven = new Promise((resolve, reject) => {
//     let number = 4;
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });
// checkEven
//     .then((message) => console.log(message)) // On success
//     .catch((error) => console.error(error)); // On failure

// Promise.all([
//     Promise.resolve("Task 1 completed"),
//     Promise.resolve("Task 2 completed"),
//     // Promise.reject("Task 3 failed")

// ])
//     .then((results) => console.log(results))
//     .catch((error) => console.error(error));

// Promise.allSettled([
//     Promise.resolve("Task 1 completed"),
//     Promise.reject("Task 2 failed"),
//     Promise.resolve("Task 3 completed")
// ])
//     .then((results) => console.log(results));

// Promise.race([
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 1 finished"), 1000)),
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 2 finished"), 5000)),
// ]).then((result) =>
//     console.log(result));

// Promise.any([
//     Promise.reject("Task 1 failed"),
//     Promise.resolve("Task 2 completed"),
//     Promise.resolve("Task 3 completed")
// ])
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));

// Promise.resolve("Immediate success")
//     .then((value) => console.log(value));

// Promise.reject("Immediate failure")
//     .catch((error) => console.error(error));

// Promise.resolve("Task completed")
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error))
//     .finally(() => console.log("Cleanup completed"));

// Promise.resolve(10)
//     .then((value) => value * 2) // Multiplies by 2
//     .then((value) => value + 3) // Adds 3
//     .then((finalValue) => console.log(finalValue)); // Logs: 13

// let tasks = [1, 2, 3];
// tasks.reduce((prevPromise, current) => {
//     return prevPromise.then(() => {
//         return new Promise((resolve) => {
//             console.log(`Processing task ${current}`);
//             setTimeout(resolve, 500); // Simulate async task
//         });
//     });
// }, Promise.resolve());


function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 2");
            resolve("success");
        }, 4000);
    });
}

// console.log("fetching data1");

// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);  
// })

// console.log("fetching data2");

// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);  
// })

// Promise Chaining
// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data2...."); 
//     let p2= asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// })

// console.log("fetching data1...");
// asyncFunc1().then((res)=>{
//     // console.log(res);
//     console.log("fetching data2...."); 
//     asyncFunc2().then((res)=>{
//         // console.log(res);
//     });
// })

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

// Soln to Callback hell via Promise Chain

// getData(1).then((res) => {
//     // console.log(res);
//     return getData(2);
//     // .then((res)=>{
//     // console.log(res);   
//     // })
// })
//     .then((res) => {
//         console.log(res);
//     })

// Example
const p = new Promise((resolve) => {
  resolve(10);
});

p
  .then(result => {
    console.log(result);   // 10
    return result * 2;    // pass to next then
  })
  .then(result => {
    console.log(result);   // 20
    return result + 5;
  })
  .then(result => {
    console.log(result);   // 25
  });


// Chaining with Async Tasks

function fetchUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, name: "Divanshi" }), 1000);
  });
}

function fetchPosts(user) {
  return new Promise(resolve => {
    setTimeout(() => resolve([`Post by ${user.name}`]), 1000);
  });
}

function fetchComments(posts) {
  return new Promise(resolve => {
    setTimeout(() => resolve([`Comment on ${posts[0]}`]), 1000);
  });
}

// fetchUser()
//   .then(user => {
//     console.log("User:", user);
//     return fetchPosts(user);   // return promise
//   })
//   .then(posts => {
//     console.log("Posts:", posts);
//     return fetchComments(posts);
//   })
//   .then(comments => {
//     console.log("Comments:", comments);
//   })
//   .catch(err => {
//     console.error("Error:", err);
//   });

// shortform to get result only

// fetchUser()
//   .then(fetchPosts)
//   .then(fetchComments)
//   .then(console.log)
//   .catch(console.error);

// dynamic Promise creation
function asyncTask(taskName) {
    return new Promise((resolve) => {
        setTimeout(() => 
            resolve(`${taskName} completed`), 10000);
    });
}
asyncTask("Download").then((result) => 
    console.log(result));


// Combining Promises with Parallel and Sequential Execution

Promise.all([
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task A done"), 1000)),
    new Promise((resolve) =>
        setTimeout(() =>
            resolve("Task B done"), 500))
])
    .then(([resultA, resultB]) => {
        console.log(resultA, resultB);
        return new Promise((resolve) =>
            setTimeout(() => resolve("Final Task done"), 700));
    })
    .then((finalResult) =>
        console.log(finalResult));
