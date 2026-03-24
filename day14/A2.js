// A2
// Task 1

// function shoppingSpree(arr) {
//     return arr.reduce((total, item) => {
//         return total + item.price;
//     }, 0);
// }

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 },
// ];

// console.log(shoppingSpree(wishlist));

// Task 2

function shoppingSpree(arr) {
    const itemsTotal = arr.reduce((total, item) => {
        return total + item.price;
    }, 0);
    const baseServicePrice = 300;
    return itemsTotal + baseServicePrice;
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); 









// Practise of reduce

const fruits = ["apple", "banana", "kiwi", "Grapes"];
fruits.forEach((Element) => {
    console.log(Element);
});

a = [1, 2, 3, 4].reduce((sum, n) => sum + n, 0);
b = [2, 3, 4].reduce((multi, n) => multi * n, 1);

c = ["hi", "hello", "hey"].reduce((count, n) => count + n.length, 0);

console.log(a, b, c);
