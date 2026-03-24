function first(flag){
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            if(flag){
                resolve("Resolved by first");
            }else{
                reject("Rejected by first");
            }
        },1000);
    });
}

function second(flag){
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            if(flag){
                resolve("Resolved by second");
            }else{
                reject("Rejected by second");
            }
        },1000);
    });
}

function third(flag){
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            if(flag){
                resolve("Resolved by third");
            }else{
                reject("Rejected by third");
            }
        },1000);
    });
}

// Call all the functions parallelly 
// case-1
Promise.all([
    first(true),
    second(true),
    third(true)
])
  .then(results => {
    console.log("Parallel Case 1:", results);
  })
  .catch(error => {
    console.log("Parallel Case 1 Error:", error);
  });
// case-2
Promise.all([
    first(true),
    second(false),
    third(true)
])
  .then(results => {
    console.log("Parallel Case 1:", results);
  })
  .catch(error => {
    console.log("Parallel Case 1 Error:", error);
  });

// Call all the functions in sequence by promise chaining

// case-1
first(true)
  .then(result=>{
    console.log(result);
    return second(true);
  })
  .then(result=>{
    console.log(result);
    return third(true);
  })
  .then(result=>{
    console.log(result);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// case-2
first(true)
  .then(result=>{
    console.log(result);
    return second(false);
  })
  .then(result=>{
    console.log(result);
    return third(true);
  })
  .then(result=>{
    console.log(result);
  })
  .catch(error => {
    console.log("Error:", error);
  });

// Call all the functions in sequence by async await

// Case 1
async function runCase1() {
  try {
    const r1 = await first(true);
    console.log(r1);

    const r2 = await second(true);
    console.log(r2);

    const r3 = await third(true);
    console.log(r3);
  } catch (error) {
    console.log("Async Error:", error);
  }
}

runCase1();

// case-2
async function runCase2() {
  try {
    const r1 = await first(true);
    console.log(r1);

    const r2 = await second(false);
    console.log(r2);

    const r3 = await third(true);
    console.log(r3);
  } catch (error) {
    console.log("Async Error:", error);
  }
}
runCase2();
