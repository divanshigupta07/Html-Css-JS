// // Sync Code

// // console.log("one");
// // console.log("two");
// // console.log("Three");

// // Async JS
// function hello(){
//     console.log("Hello!");
// }
// // setTimeout(hello,2000);//Timeout, 2s=2000ms

// // setTimeout(()=>{
// //     console.log("i am displayed after 4 sec.")
// // },4000);

// // console.log("one");
// // console.log("two");
// // console.log("Three");

// // const id = setInterval(() => {
// //   console.log("Runs every 1 second ⏱️");
// // }, 1000);

// // Stop after 5 seconds
// // setTimeout(() => {
// //   clearInterval(id);
// // }, 5000);

// // function sum(a,b){
// //     console.log(a+b);
    
// // }
// // function calculator(a,b, sumCallback){
// //     sumCallback(a,b);
// // }

// // calculator(1,5,sum);
// // calculator(4,5,(a,b)=>{
// //     console.log(a+b);
// // })

// function getData(dataId, getNextData){ //2s
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     },2000);
// }

// // Callback Hell
// getData(1,()=>{
//     console.log("Getting Data 2....")
//     getData(2,()=>{
//         console.log("Getting Data 3....")
//         getData(3,()=>{
//             console.log("Getting Data 4....")
//             getData(4);
//         });
//     });
// })


// Promises
// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a Promise"); 
//     // resolve("Success");
//     reject("Some error");
// })
// console.log(promise);

// function getData(dataId, getNextData){ //2s
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("success");
//         // reject("error")
//         if(getNextData) {
//             getNextData();
//         }
//     },5000);
//     });    
// }
// let result = getData(123);

const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
    console.log("I am a Promise"); 
    // resolve("Success");
    reject("Some error");
})
}

let promise = getPromise();
promise.then((res)=>{
    console.log("Promise Fulfilled",res);
});
promise.catch((err)=>{
    console.log("Rejected",err);
})