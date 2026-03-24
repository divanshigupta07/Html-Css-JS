// A4
// Task 1

let array = [12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 99, 128];

console.log(array.includes(14));

// Task 2

function above80(arr){
    return arr.every(num => num > 80);
}

console.log(above80(array));