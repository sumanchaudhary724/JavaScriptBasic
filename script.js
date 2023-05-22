// console.log("hello world");

/*
multi 
line 
comment
*/

//Variable (container to store data so that we can use it in future)
//var, let
//const

// var name = "Sam Smith";
// let age = 44;
// const dob = "20-02-2021";
// let old = age;

// console.log(name);
// console.log(old);
// console.log(age, dob);

// name = "Suman Chaudhary";
// age = 20;
// console.log(name);
// console.log(age);

// =====JS-Operators=====
// Arithmetic
// + Addition
// - Subtraction
// * Multiplication
// ** Exponentiation (ES2016)
// / Division
// % Modulus (Division Remainder)
// ++ Increment
// -- Decrement

// let a = 5;
// let b = 4;

// const ans = a + b;
// const ans = a - b;
// const ans = a * b;
// const ans = a ** b;
// const ans = a / b;
// const ans = a % b;

// a++
// a--
// ++a
// --a

// console.log(ans);

// =======Comparison
// ==
// ===

// const v1 = 5;
// const v2 = 4;

// const result = v1 == v2;
// const result = v1 === v2;
// const result = v1 <= v2;
// const result = v1 >= v2;
// console.log(result);

// ===== Data types
// Primitives
// String  // "Suman Chaudhary"
// Number // 123
//Boolean //True or False
//Undefined // not defined in system memory
//Null

// const dt = "skldfjs"; //String
// const dt = 87897; //number
// const dt = false; //Boolean
// const dt = undefined;
// const dt = null; //null;
// console.log(typeof dt1);

// // ====Reference Types
// // Object //{key: "value"}
// // Array // ["data", 1234, {}, []]
// // Function // fucntion()
// // ES6

// // Object
// // const obj = {
// //   name: "Suman",
// // };

// // Math
// const MATHEMATICS = {
//   PI: 3.14,
// };

// console.log(MATHEMATICS.PI);
// console.log(Math.PI);
// //round
// //function

// function addTwoNumbers(num1, num2) {
//   //   let a = 2;
//   //   let b = 3;
//   //   console.log(num2);
//   //   console.log(a + b);
//   console.log(num1 + num2);
// }

// //calling function
// addTwoNumbers(12, 13);

// console.log(Math.round(5.8));

// console.log(Math.pow(2, 3));

// console.log(Math.sqrt(64));

// console.log(Math.ceil(4.1));

// console.log(Math.floor(7.9));

// console.log(Math.min(1, 4, 5, -77, 0));

// console.log(Math.max(1, 4, 5, -78));

// console.log(Math.random());

// console.log(Math.round(Math.random() * 20));

// a = 5;
// if (a == 5) {
//   console.log("I am inside the if");
// } else if (a == 4) {
//   console.log("I am inside the else if");
// } else {
//   console.log("I am inside the else");
// }

//=====Switch=======
// let a = 3;
// switch (a) {
//   case 3:
//     console.log("I am inside the case 1");
//     break;

//   case "case-2":
//     console.log("I am inside the case 2");
//     break;
//   default:
//     console.log("I am inside the default");
// }

//=====Error handling=======

// try {
//   const x = 5;
//   x = 7;
//   console.log(x);
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("I am inside the finally");
// }

//-----setTimeout---------
// function hello() {
//   console.log("Something");
// }

// setTimeout(hello, 5000);

// function hello() {
//   console.log("Something");
// }

// let output = setTimeout(hello, 5000);
// clearTimeout(output);

// let i = 0;
// const interval = setInterval(function fName() {
//   console.log("inside the interval", i++);
//   if (i == 11) {
//     clearInterval(interval);
//   }
// }, 1000);

// Example
// let i = 0;
// const interval = setInterval(function fName() {
//   alert("inside the interval", i++);
//   if (i == 11) {
//     clearInterval(interval);
//   }
// }, 5000);

// Arrow function
// function addTwoNumbers(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// console.log(addTwoNumbers(2, 4));

// const addTwoNumbers1 = (num1, num2) => console.log(num1 + num2);
// addTwoNumbers1(5, 5);

// const addTwoNumbers2 = (num1) => console.log(num1);
// addTwoNumbers2(4);

// const addTwoNumbers2 = (num1, num2) => num1 + num2;
// console.log(addTwoNumbers2(3, 6));

// //=====For loop=====
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// while loop
// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
//   continue;
// }

//do while loop
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < l0);

// Number
// ParseInt, folat
// Safe number -2^53-1 to 2^53-1
// const num = "23455";

// console.log(typeof num);

// const str = 'Hi there, "I am there" is Suman, and I live in Sydney';

//Length
// console.log(str.length);
// const val = str.length;
// const val = str.toUpperCase();

// const val = str.toLowerCase();
// const val = str[49];
// const val = str.indexOf("i");
// const val = str.lastIndexOf("i", "you");
// const val = str.replace("i", "you");
// const val = str.replaceAll("i", "you");
// const val = str.substring(3, 5);
// const val = str.substring(4);
// const val = str.slice(1, 5);
// const val = str.slice(-5);
// const val = str.includes("Suman");
// const val = str.charAt(3);
// const val = str.charCodeAt(1);
// const val = str.search("Suman");
// const val = str.split(",");
// const val = str.trim();

// console.log(val.length);
// console.log(str.length);

// console.log(typeof str, str);

// const bio = (name, address) => {
//   return;
//   //   (
//   //     "Today, we will learn about a person call " +
//   //     name +
//   //     ". Well his name is" +
//   //     name +
//   //     " and he lives in " +
//   //     address
//   //   );
//   `Today, we will learn about a person call ${name}. Well his name is ${name} and he lives in ${address}`;
// };

// const sam = bio("Sam", "Sydney");
// console.log(sam);

// ======= Array
// const fruits = ["banana", "apple", "grapes", "mango", "1-3-2023", "4-9-2023"];

// const val = fruits[0];
// const val = fruits.length;

//add item to the end of the list
// fruits.push("watermelon");

//add item to the beginning of the list
// fruits.unshift("mango");

//remove item from the end of the list
// const item = fruits.pop();

//remove item from the beginning of the list
// const item = fruits.shift();

// console.log(item);

// const data = fruits.slice(1, 3);
// const data = fruits.splice(1, 3);
// const data = fruits.splice(2, 2, "New item");

// console.log(data);
// fruits.sort();
// fruits.sort((a, b) => a - b);
// console.log(fruits);

// console.log(fruits.toString().split(","));

// const dt = fruits.join("|");
// console.log(dt);

//===== Array loops
//fruits.reverse();
//console.log(fruits);

// const fruits = ["banana", "apple", "grapes", "mango"];

// fruits.forEach((item, index) => {
//   console.log(index, item);
// });

// const newArg = fruits.map((item, index) => {
//   console.log(index, item);
//   return "ITM-" + item.toUpperCase();
// });

// const newArg = fruits.filter(
//   (item) => item.includes.("p")
//   // return true, it will push item to newArg, return
// );

// const newArg = fruits.find((item) => item.includes("p"));
// const newArg = fruits.every((item) => item.includes("p"));
// console.log(fruits, newArg);

// const val = "suman";
// //truthy values "suman",
// //falsey values Nan, null, undefined

// if (val) {
//   console.log(val + " is truthy value");
// } else {
//   console.log(val + " is falsy value");
// }
// console.log(val);

// const banks = [23, 343, 45345, 345346, 54454];
// // const totalMoney = banks.reduce((subTtl, item) => {
// //   return subTtl + item;
// // }, 0);
// const totalMoney = banks.reduce((subTtl, item) => subTtl + item, 0);

//Challenge #1
// 1. Create an array of 50 random number range between 1 and 100 programmatically.
// 2. sort the array in descending order
// 3. get the total value of the array
// 4. Divide original array in to 2 arrays that contains even number or odd numbers only
// 5. Remove the duplicate number from the original array.

// var arr = [];
// while (arr.length < 50) {
//   var r = Math.floor(Math.random() * 100) + 1;
//   if (arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);

// const arr_des = arr.sort((a, b) => b - a);
// console.log(arr_des);

// const total = arr.reduce((subTtl, item) => {
//   return subTtl + item;
// }, 0);

// console.log(total);

// const even = arr.filter((item) => item % 2 === 0);
// console.log(even);

// const odd = arr.filter((item) => item % 2 !== 0);
// console.log(odd);

// let uni_arr = [];
// for (i = 0; i < arr.length; i++) {
//   if (uni_arr.indexOf(arr[i]) === -1) {
//     uni_arr.push(arr[i]);
//   }
// }
// console.log(uni_arr);

//Challenge #2
// 1. create  unique array of 50 number range between 1 to 100 programmatically
// let uniqueArg = [];
// let i = 0;
// while (uniqueArg.length < 50) {
//   i++;
//   const num = Math.floor(Math.random() * 100 + 1);

//   if (!uniqueArg.includes(num)) {
//     uniqueArg.push(num);
//   }
// }

// console.log(uniqueArg);
// console.log(i);

// for (const item of arr) {
//   console.log(item);
// }

//==========Object=====
const person = {
  name: "Sammy",
  age: 22,
  add: "Sydney",
  gender: "male",
  father: "Harry",
  mother: "Lisa",
};

// const p2 = Oject.assign({}, person);
// const p2 = { ...person}; // spread
// const val = person.age;
// person.name = "Ravi";
// person.add = "Sydney";
// delete person.age;

// const val = person["name"];
// console.log(val);

// const { name, ...rest } = person;
// //destructuring
// console.log(name, rest);
// console.log(person);

//========== Arrow function ===============
//========== Destructuring ================
//========== Default + Rest + Spread =========

// const bio = (obj) => {
//     console.log(obj);
//     return`
//     The person called ${obj.name} age ${obj.age} lives in ${obj.add}
//     `;
// };

// const bio = ({ name, age, add }) => {
//   return `
//     The person called ${name} age ${age} lives in ${add}
//     `;
// };
// const str = bio(person);
// console.log(str);

// const p2 = {
//   name: "Sammy",
//   age: 22,
//   add: "Sydney",
//   gender: "male",
//   father: "Harry",
//   mother: "Lisa",
// };

// const obj1 = {
//   fName: "Sam",
//   add: "Sydney",
// };

// const obj2 = {
//   position: "CEO",
//   comapny: "Org",
// };

// const combo = { ...obj1, ...obj2 };
// console.log(combo);

//Date()
// const date = Date();
// const date = Date.now();
// const date = new Date("2020-02-03");
// // const val = date.getDate();
// // const val = date.getMinutes();
// // const val = date.getFullYear();
// // const val = date.toISOString();
// // const val = date.toLocaleDateString();
// date.setDate(date.getDate() + 5);
// console.log(date);

//Challenge
//create a function that takes food name and expire date and returns like
//-- if expired: zyx is expired by 4 days
//-- else zyx is not expired. you have 10 days to use this product
//task:
//1. Create an object of a product with name and expire date
//2. Write function to do the challenge 1 solution and return the string.

// const food = {
//    name: "milk",
// }
// const today = new Date();
// const expiry = new Date(year, month);
//     if (today.getTime() > expiry.getTime())

//     return false;
// else
//     return true;

const foods = [
  {
    name: "Milk",
    expiry: "2023-04-13",
  },
  {
    name: "Cream Milk",
    expiry: "2023-06-13",
  },
];

const today = Date.now(); //time stamp
const chechExpiry = ({ name, expiry }) => {
  const expTs = new Date(expiry).getTime();
  if (today > expTs) {
    console.log(`${name} has not expired`);
  } else {
    console.log(`${name} has not expired yet`);
  }
  console.log(name, expiry);
};

foods.forEach((item) => {
  console.log(item);
});

console.log("1. log");

// setTimeout(()=>)
