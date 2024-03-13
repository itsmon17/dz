////for in

// let user = {
//   name: "John",
//   age: 13,
//   isAmerican: true,
// };

// for (let key in user) {
//   console.log("key", key);
//   console.log("value", user[key]);
// }

// let cars = {
//   title: "toyota",
//   year: 2001,
// };

// for(let key in cars) {}

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// let sum = 0;

// for (let key in obj) {
//   sum += obj[key];
// }

// console.log(sum);

/////for of

// const teachers = ["Adilet", "Beka", "Tom"];
// for (let i = 0; i < teachers.length; i++) {
//   //   console.log(teachers[i]);
// }

// for (const teacher in teachers) {
//   console.log(teacher);
// }

// const mentor = "Jibek";

// for (const letter of mentor) {
//   console.log(letter);
// }

// const numbers = []; //10

// const evenNumbers = [];

// for (let i = 0; i <= 10; i++) {
//   numbers.push(i);
// }
// console.log(numbers);

// for (const item of numbers) {
//   if (item % 2 === 0) {
//     evenNumbers.push(item);
//   }
// }

// log(evenNumbers);

// const numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     // console.log(numbers[i]);
//   for (let j = 0; j < numbers[i].length; j++) {
//     sum += numbers[i][j];
//   }
// }

// console.log(sum);

// 1) У вас есть объект const obj = {
//     a: 10,
//     b: 20,
//     c: "string",
//     d: 30,
//     e: "another string"
//   };  Напишите программу, которая перебирает свойства объекта и суммирует числовые значения свойств.

//   2) Работаем с тем же объектом obj.  Напишите программу, чтобы она выводила только свойства объекта, значение которых является строкой.

//   3) Напишите программу, которая перебирает строки в массиве и выводит их на консоль.

//   4) Напишите программу, чтобы она выводила только строки с длиной больше 5 символов.

//   5) Задача: Вывести все ключи и значения объекта, содержащего списки студентов по классам.
//   const studentsByClass = {
//     "1A": ["Alice", "Bob", "Charlie"],
//     "2B": ["David", "Emily", "Frank"],
//     "3C": ["Grace", "Henry", "Ivy"]
//   }; Вывод: Class: 1A - Alice, Bob, Charkie и т.д

// ////1
// const obj = {
//   a: 10,
//   b: 20,
//   c: "string",
//   d: 30,
//   e: "another string",
// };

// let sum = 0;

// for (let key in obj) {
//   if (typeof obj[key] === "number") {
//     sum += obj[key];
//   }
// }
// console.log(sum);

// /////2

// for (let key in obj) {
//   if (typeof obj[key] === "string") {
//     console.log(obj[key]);
//   }
// }

// /////3

// let nameArray = ["Aimona", "Tariel", "ayana"];
// for (let name of nameArray) {
//   // console.log(name);
// }

// ////4

// for (let name of nameArray) {
//   // console.log(name);
//   if (name.length > 5) {
//     console.log(name);
//   }
// }

// ////5

// const studentsByClass = {
//   "1A": ["Alice", "Bob", "Charlie"],
//   "2B": ["David", "Emily", "Frank"],
//   "3C": ["Grace", "Henry", "Ivy"],
// };

// for (let key in studentsByClass) {
//     const students = studentsByClass[key].join(", ");
//   console.log(`Class: ${key} - ${students}`);
// }

/////////////////

// let user = {
//   name: "Robert",
//   age: 20,
// };

// console.log(user);

// //dobavlenie ili izmenenie u klucha

// user.name = "John";

// console.log(user);

// //udaleenie

// delete user.age;
// console.log(user);

// let user = {
//   name: "Ann",
//   age: 21,
//   isStudent: true,
// };

// console.log(user);

// user.isStudent = false;

// console.log(user["isStudent"]);
// let key = "name";

// let user = {
//   name: "Ann",
//   age: 21,
//   isStudent: true,
// };

// console.log(user[key]);
// let key = prompt("ifuhieruhgrieug", "name");

// let user = {
//   name: "Ann",
//   age: 21,
//   isStudent: true,
// };
// user[key] = null;
// console.log(user);

// let fruit = prompt("enter fruit");

// let bag = {
//   [fruit + "fruit"]: 5,
// };

// alert(bag);

//svoistvo iz peremennoi
// let userName = "Aimon";
// let userAge = 18;

// let user = {
//   userName,
//   userAge,
// };

// console.log(user);

//ограничение на имена свойств

// let numbers = {
//   0: "this is zero",
//   44: "this is a not zero",
// };

// console.log(numbers[0]);
// console.log(numbers["0"]);

//1-sposob proverki klucha
// let user = {
//   name: "Aimon",
// };

// console.log(!!user.age);
// console.log(!!user.name);

// if (user.name) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// //2-sposob
// let user = {
//   name: "Aimon",
// };

// console.log("name" in user);
// console.log("age" in user);

// // 3-sposob

// let user = {
//   name: "Aimon",
// };
// let chekKey = user.hasOwnProperty("name");

// console.log(chekKey);

//poradok kluchei

// let countries = {
//   50: "vashington",
//   49: "ottava",
//   52: "moscow",
// };

// for (let key in countries) {
//   console.log(countries[key]);
// }

