// NORMAL ERRORS

// function getUserById(id) {
//     return new Promise((resolve, reject) => {
//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }
// console.log(getUserById(2));

// function getUserById(id) {
//     if (typeof id !== "number" || id <= 0) {
//         throw new Error("Invalid id argument");
//     }

//     return new Promise((resolve, reject) => {
//         resolve({
//             id: id,
//             username: "admin",
//         });
//     });
// }

// getUserById(10)
//     .then((user) => console.log(user.username))
//     .catch((err) => console.log(err));

// // getUserById('a')   //output: Uncaught Error: Invalid id argument
// //     .then(user => console.log(user.username))
// //     .catch(err => console.log(err));

// try {
//     getUserById("a")
//         .then((user) => console.log(user.username))
//         .catch((err) => console.log(`Caught by .catch ${err}`));
// } catch (error) {
//     console.log(`Caught by try/catch ${error}`);
// }

// Errors inside the Promises

let authorized = false;

// function getUserById(id) {
//     return new Promise((resolve, reject) => {
//         if (!authorized) {
//             throw new Error('Unauthorized access to the user data');
//         }

//         resolve({
//             id: id,
//             username: 'admin'
//         });
//     });
// }

// try {
//     getUserById(10)
//         .then(user => console.log(user.username))
//         .catch(err => console.log(`Caught by .catch ${err}`));
// } catch (error) {
//     console.log(`Caught by try/catch ${error}`);
// }

// // output : Caught by .catch Error: Unauthorized access to the user data

// try {
//     getUserById('a')
//         .then(user => console.log(user.username))
//         .catch(err => console.log(`Caught by .catch ${err}`));
// } catch (error) {
//     console.log(`Caught by try/catch ${error}`);
// }

// let authorized = false;

function getUserById(id) {
    return new Promise((resolve, reject) => {
        if (!authorized) {
            reject('Unauthorized access to the user data');
        }

        resolve({
            id: id,
            username: 'admin'
        });
    });
}

try {
    getUserById(10)
        .then(user => console.log(user.username))
        .catch(err => console.log(`Caught by .catch ${err}`));
} catch (error) {
    console.log(`Caught by try/catch ${error}`);
}