const p1 = new Promise(resolve => setTimeout(() => resolve("Promise 1"), 5000));
const p2 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 2"), 2000));
const p3 = new Promise(resolve => setTimeout(() => resolve("Promise 3"), 3000));

// Parallel Processing ❌
// Concurrent Processing ✔️

// waits for resolving all the promises.
// Promise.all([p1, p2, p3])
// .then(result => {
//     console.log(result);
// })
// .catch((error) => {
//     console.error(error);
// })





// which ever promise resolve/reject

// Promise.race([p1, p2, p3])
// .then(result => {
//     console.log(result);
// })
// .catch((error) => {
//     console.error(error);
// })





// Whichever promise resolves first

// Promise.any([p1, p2, p3])
// .then(result => {
//     console.log(result);
// })
// .catch((error) => {
//     console.error(error);
// })














// // Async - await.

// async function fetchUser() {
//     let response = await fetch("https://fake-json-api.mock.beeceptor.com/users")
//     console.log(response);
//     console.log("Inside fetchUser function");
//     return response;
// }

// console.log("Start");
// fetchUser();
// console.log("End");

// // async function getData() {
// //     const result = await fetchUser();
// //     console.log("Result => ", result);
// // }

// // getData();














// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = "Hello Aditya";
//             if (data.includes('Depender')) {
//                 resolve(data);
//             } else {
//                 reject("Incorrect information");
//             }
//         })
//     })
// }

// fetchData()
//     .then((data) => {
//         console.log("Data mil gaya: ", data);
//     })
//     .catch((error) => {
//         console.log("Dhang se code kar bhai..", error);
        
//     })





/// Promise Chaining.
// function fetchUser() {
//     console.log("Hello User Function called.")
//     fetch("https://fake-json-api.mock.beeceptor.com/users")
//     .then((res) => {
//         console.log("First Then fucntion", res);
//     })
//     .then().then((data) => {
//         console.log("Second Then fucntion");
//         return data;
//     })
//     .then((data) => {
//         console.log("Third Then fucntion");
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error("Bhai sun..! Kuchh to fata...!", error);
//     })
//     console.log("Hello User Function Ended.")
// }


// fetchUser();















// function fetchUser(callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", "https://fake-json-api.mock.beeceptor.com/users");
    
//     xhr.onload = function () {
//         callback(JSON.parse(xhr.responseText));
//     }

//     xhr.send();
// }

// // Ye wala mera function hai.
// function readAPIText (res) {
//     console.log("response: ", res);
// }


// // Behaviour.
// console.log("Hello User");

// fetchUser(readAPIText);

// console.log("Hi User");








// // Call back functions.

// // This is our function.
// function howUser(userName) {
//     setTimeout(() => {
//         console.log(userName, "How are you?");
//     }, 2000);
// }

// // This is our function.
// function hiUser(userName) {
//     setTimeout(() => {
//         console.log(userName, "Hi");
//     }, 5000)
// }

// // this is team member's function.
// function getUser(callback) {
//     console.log("Get user detail function called.");
//     let userName = "Siddharth";
//     callback(userName);
// }

// getUser(hiUser);
// getUser(howUser);


