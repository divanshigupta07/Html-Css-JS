async function hello() {
    console.log("hello!!");
    
}

console.log(hello());

function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    })
}
// await api();  // can't be used outside async

async function getWeatherData() {
    await api();//1st
    await api();
}

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}

// iife
(async function (){
    await getData(1);
    await getData(2);
    await getData(3);
})();