const heading = document.querySelector("#top-heading");
console.log(heading);

heading.innerHTML = "This is the new text for the HTML";


const body = heading.parentNode;
console.log(body);


const html = body.parentNode;
console.log(html);



const pTag = document.createElement('p');
const pTagContent = document.createTextNode("This is the new p tag");

pTag.appendChild(pTagContent);
body.appendChild(pTag);


body.removeChild(pTag);




















































// class Accounts {
//     #custormerName;
//     #accountBalance;
//     #accountNumber;
//     constructor(custormerName, accountBalance=0) {
//         this.#custormerName = custormerName;
//         this.#accountBalance = accountBalance;
//         this.#accountNumber = Math.round(Math.random() * 10000000000);
//     }

//     set balance (balance) {
//         console.log("Setter")
//         this.#accountBalance = balance;
//     }
    
//     get balance () {
//         console.log("Getter")
//         return this.#accountBalance;
//     }

//     credit(amt) {
//         console.log("Using Getter start");
//         let currentBalance = this.balance; // getter
//         console.log("Using Getter end");
//         let newBalance = currentBalance + amt;
//         console.log("Using Setter start");
//         this.balance = newBalance; // setter
//         console.log("Using Setter end");
//     }

//     debit(amt) {
//         this.#accountBalance -= amt;
//     }
// }


// class SavingsAccount extends Accounts {
//     constructor(cusotmerName, accountBalance, interestRate){
//         super(cusotmerName, accountBalance);
//         this.interestRate = interestRate;
//     }
// }


// const sohamAccount = new SavingsAccount("Soham", 2000, 0.6);
// sohamAccount.credit(5000);
// sohamAccount.debit(1000);
// // sohamAccount.#setBalance(100000);
// console.log("My Balance: ", sohamAccount.balance);
// console.log(sohamAccount);



// const sidAccount = new Accounts("Siddharth", 2000);
// const riaAccount = new Accounts("Ria", 10000);

// sidAccount.credit(1000000);
// sidAccount.debit(400000);

// console.log(sidAccount);
// console.log(riaAccount);















// Array.prototype.myMap = function (callback) {
//     const result = [];

//     for (let i = 0; i < this.length; i++) {
//         result.push(callback(this[i]));
//     }

//     return result;
// }


// let arr = [1, 2, 3];
// console.log(arr);

// const square = arr.myMap((num) => {
//     return num*num;
// })

// console.log("Square: ", square);















// const arr1 = [1,2,3];
// console.log(arr1);

// arr1.__proto__.MyVal = function() {
//     console.log("My value");
// }


// const arr2 = [4,5,6];
// console.log(arr2);


// console.log(arr1.prototype === arr2.prototype);



// Constructor Functions

// function Accounts (custormerName, accountBalance = 0) {
//     this.custormerName = custormerName;
//     this.accountNumber = Math.round(Math.random()*1000000000);
//     this.accountBalance = accountBalance;

//     // this.credit = function (amt) {
//     //     this.accountBalance += amt;
//     // }

//     // this.debit = function (amt) {
//     //     this.accountBalance -= amt;
//     // }
// }

// Accounts.prototype.credit = function(amt) {
//     this.accountBalance += amt;
// }

// Accounts.prototype.debit = function(amt) {
//     this.accountBalance -= amt;
// }




// const siddharthAccount = new Accounts("Siddharth", 4000);
// const riaAccount = new Accounts("Ria", 3000);
// const sarikaAccount = new Accounts("Sarika", 2000);
// const dhruvAccount = new Accounts("Dhruv", 5000);

// dhruvAccount.__proto__.checkBalance = function () {
//     return this.accountBalance;
// }

// siddharthAccount.debit(1000);
// riaAccount.debit(1000);
// sarikaAccount.debit(1000);

// console.log(siddharthAccount);
// console.log(riaAccount);
// console.log(sarikaAccount);
// console.log(dhruvAccount);

















// // Pure functions
// // Functions which give same O/p for same I/p


// function SUM (arr) {
//     let s = 0;
//     arr.forEach((num) => {
//         s = s + num;
//     })
//     return s;
// }


// let numbers = [1, 2, 3];
// console.log(SUM(numbers));











// Map function (self created)

// function myMap(arr, callback) {
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]));
//     }

//     return result;
// }


// const inputs = ['1', '2', '3', '4'];
// console.log(inputs);

// const numbers = myMap(inputs, (input) => {
//     return Number(input);
// })

// console.log("💵", numbers);

// const squares = myMap(numbers, (num) => {
//     return num*num;
// })

// console.log("💵💵", squares);
















// Reduce function

// const inputs = ['1', '2', '3', '4'];

// console.log(inputs);

// const numbers = inputs.map((input) => {
//     return Number(input);
// })

// console.log(numbers);

// const Prod = numbers.reduce((acc, curr) => {
//     return acc * curr;
// }, 1);

// console.log("Prod through for loop: ", Prod);


// function prod (numbers) {
//     let  output = 1; // accumulator
//     for(let i = 0; i < numbers.length; i++) {
//         output = output * numbers[i]
//     }
//     return output;
// }

// console.log("Prod through for loop: ", prod(numbers));












// Filter function

// const inputs = ['1', '2', '3', '4'];

// console.log(inputs);

// const numbers = inputs.map((input) => {
//     return Number(input);
// })

// console.log(numbers);

// // Comparison of map with forEach.
// // const numbers = [];

// // inputs.forEach((input) => {
// //     numbers.push(Number(input));
// // })


// const evens = numbers.filter((number) => {
//     return number % 2 == 0; // true / false
// })

// console.log(evens);

















// Map function


// const inputs = ['1', '2', '3', '4'];
// console.log(inputs);

// const numbers = inputs.map((input) => {
//     return Number(input);
// })

// console.log(numbers);

// const squares = numbers.map((num) => {
//     return num*num;
// })

// console.log(squares);






// console.log("Hey, its class 11 in Mern Dev..!")