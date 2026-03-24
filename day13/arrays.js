// Arrays

let marks = [98,58,67,78,85];
console.log(marks, typeof marks);
console.log(marks.length);
console.log(marks[4]);
marks[2]=97;
console.log(marks);

// looping over arrays
let heros=["Iron-man","Thor","hulk", "Wonder women","spider-man","Groot"];
console.log(heros, typeof heros);

// for(let i=0; i<heros.length; i++){
//     console.log(heros[i]);
// }

for(let el of heros){
    console.log(el);
}

let cities= ["Chandigarh","Delhi", "Varanasi","Patna","Lucknow"];
for(let city of cities){
    console.log(city);
    console.log(city.toUpperCase());
}

marks = [85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum += val;
}
console.log(sum);
let avg = sum / marks.length;
console.log(`Average is ${avg}`);


let items = [250,645,300,900,50];
let idx =0;
for(let val of items){
    offer = val/10;
    val= val-offer;
    console.log(`Value at index ${idx}: ${val}`);
    items[idx]=val;
    idx++;
}
console.log(items);

for(let i = 0; i<items.length; i++){
    offer = items[i]/10;
    items[i]= items[i]-offer;
    // console.log(`Value at index ${i}: ${items[i]}`);
}
console.log(items);

// Array Methods
let foodItem = ["Potato","Tomato","Pizza","Rajma-Chawal","Curd","Milk"];
console.log(foodItem);

foodItem.push("Chips");
console.log(foodItem);

foodItem.push("Paneer", "Juice");
console.log(foodItem);
let deteledItem = foodItem.pop();
console.log(foodItem);
console.log("deleted item ", deteledItem);
console.log(foodItem.toString());

let marvel_heroes = ['Thor','Spiderman','CaptainAmerica','Hulk'];
let dc_heroes = ['batman', 'Superman'];
let indian_heroes = ['Shaktiman','Krish'];

let heroes = marvel_heroes.concat(dc_heroes , indian_heroes);
heroes.unshift("Groot");
console.log(heroes);
let deleted_dcHero = dc_heroes.shift();
console.log(deleted_dcHero);
console.log(dc_heroes);

// Day 14
let Marvel_heros = ['Thor','Spiderman','Captain America','Hulk','Dr. Strange'];
console.log(Marvel_heros);
console.log(Marvel_heros.slice(1,3));

let num=[1,2,3,4,5,6,7,8];
num.splice(2,2,101,102);
console.log(num);//[1, 2, 101, 102, 5, 6, 7, 8]
// Add Element
num.splice(1,0,505);
console.log(num);//[1, 505, 2, 101, 102, 5, 6, 7, 8]

// Delete Element
num.splice(2,1);
console.log(num);//[1, 505, 101, 102, 5, 6, 7, 8]


let companies = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
companies.shift();
console.log(companies);
companies.splice(2,1,"OLA");
console.log(companies);
companies.push("Amazon");
console.log(companies);