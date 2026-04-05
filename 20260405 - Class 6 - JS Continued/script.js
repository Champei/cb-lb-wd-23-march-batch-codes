// console.log("Hello World!");

// console.log("A" + 12);

// // to String
// var a = 12;
// var b = new String(a).valueOf();
// console.log("b -> ", b, typeof b);

// var c = 45;
// var d = "" + c;
// console.log("d -> ", d);


// // to Boolean
// var e = 0; // data type is number but value is falsy.
// var f = new Boolean(e).valueOf();
// console.log("f -> ", f, typeof f);

// var ee = 1; // data type is number but value is truthy.
// var ff = !!ee; // double negation to convert to boolean
// console.log("ff -> ", ff);


// // to Number
// var g = "-123.45";
// var h = new Number(g).valueOf();
// console.log("h -> ", h, typeof h);

// // object as a data structure.
// // object as an instance of a class. (class is a blueprint for creating objects.)
// var student1 = {
//     username: "John",
//     age: 0, // data type is number but value is falsy.
// }
// var student2 = {
//     apple: "Jane",
//     age: 20, // data type is number but value is truthy.
// }
// console.log("student1 -> ", student1['username']);
// console.log("student2 -> ", student2['apple']);


// var xyz = { KyaNaam : "Addy", Age: 20 };

// console.log("xyz -> ", xyz.KyaNaam);



// var age = 25;

// if (age == 25) {
//     console.log("You can vote.");
// } else if (age >= 18) {
//     console.log("You are not 25, but you are an adult.");
// } else {
//     console.log("You cannot vote.");
// }

// var isCloudy = false;
// var willRain = isCloudy ? "Yes, it will rain." : "No, it will not rain.";
// console.log(willRain);


// Array and its properties.
// var fruits = ["Apple", "Banana", "Cherry"];
// var numbers = new Array(1, 2, 3, 4, 5);

// console.log("fruits -> ", fruits);
// console.log("numbers -> ", numbers);

// console.log("First fruit -> ", fruits[0]);

// numbers[2] = 10; // Modifying the third element of the numbers array.
// console.log("Modified numbers -> ", numbers);

// var newArr = fruits;
// console.log("New Array: ", newArr);

// newArr[0] = 1;

// console.log("New Array after update: ", newArr);
// console.log('Fruits Array: ', fruits);

// var newArr2 = fruits.slice();
// var newArr3 = Array.from(numbers);

// console.log("new arr 2", newArr2);
// console.log("new arr 3", newArr3);

// newArr2[0] = "Guava";
// newArr3[0] = 77;

// console.log("new arr 2", newArr2);
// console.log("new arr 3", newArr3);

// console.log("fruits -> ", fruits);
// console.log("numbers -> ", numbers);

// // Using Spread operator

// console.log("fruits -> ", fruits);
// console.log("fruits -> ", ...fruits); // it unpacks any iterable.
// console.log("fruits -> ", "Apple", "Banana", "Cherry");


// var fruitsCopy = [...fruits];
// console.log("Fuits Copy: ", fruitsCopy);

// fruitsCopy[0] = "Grapes";

// console.log("Fruits Copy updated: ", fruitsCopy);
// console.log("Fruits Original: ", fruits);

// var cars = ["BMW", "Audi", "Merce", ["Suzuki", "Hyundai", "Honda"]];
// console.log("Cars Original: ", cars);

// // Because spread operator performs a shallow copy.
// // 'structuredClone(arr_name); creates deep copy of object.

// var carsCopy = [...cars];
// // var carsCopy = structuredClone(cars);

// carsCopy[0] = "Messarati";
// carsCopy[3][2] = "Renault";

// console.log("Cars Copy Updated: ", carsCopy);

// console.log("length of cars: ", cars.length);
// cars.push("ABC Cars");

// console.log("Cars Original: ", cars);
// cars.pop();

// console.log("Cars Original: ", cars);

// cars.unshift("First Car");
// console.log("Cars Original: ", cars);

// cars.shift();
// console.log("Cars Original: ", cars);


// var count = 5;

// while (count) {
//     console.log(count);
//     count--;
// }

// console.log("====================");

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// do {
//     console.log(count);
//     count--;
// } while (count)


// var colors = ["red", "blue", "green"];

// colors.forEach(color => {
//     console.log(color);
// });

// var object = {
//     sno: 1,
//     empName: "Raghav",
//     joiningYear: 2026
// }

// // for-in loop. => returns index
// for (index in object) {
//     console.log("Key: ", index, "| value: ", object[index]);
// }

// var objectsArr = [
//     {sno: 1, item: "item1"},
//     {sno: 2, item: "item2"}
// ]

// // for-of loop. --> to interate in array.
// for (obj of objectsArr) {
//     console.log("SNo: ", obj.sno, "| Item name: ", obj.item);
// }



// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3));

// // var addFunction = function (a,b) {
// //     return a+b;
// // };

// var addFunction = add;

// console.log("addFunction: ", addFunction(4, 5));

// function calculator (fnc, a, b) {
//     console.log("Calling from Calculator Function: ", fnc(a, b));
// }

// calculator(addFunction, 10, 20);


// function A () {
//     console.log("Inside function A");
//     return function B () {
//         console.log("Calling from function B");
//     }
// }

// var funcB = A();
// funcB();


function functionName (parm1, param2) {
    return false;
}

var arrowFunction = () => console.log("I am the fat arrow function.");
arrowFunction();

var func = a => console.log("here is a: ", a);
func(10);

