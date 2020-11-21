"use strict"
////////////////////////////////////////// Begin 23
let a = 3, b = 4, c = 5, d = a;
a = c, c = b, b = d;

console.log(a);
console.log(b);
console.log(c);

////////////////////////////////////////// Begin 26
let x = 6;
console.log(4 * (x ** 6 - 3 ** 6) - 7 * (x ** 3 - 3 ** 3) + 2);

///////////////////////////////////////// Integer 3
let someNumber = 1939090;
const KILOBITE = 1024;

console.log(Math.trunc(someNumber/KILOBITE));

///////////////////////////////////////// Integer 7 - підглянула, костильно.
let someAnotherNum = 88;
let secondPart = someAnotherNum % 10;
let firstPart = Math.trunc(someAnotherNum/10);
console.log(firstPart + secondPart);
console.log(firstPart * secondPart);

// console.log(secondPart);
// console.log(firstPart);

///////////////////////////////////////// Integer 15 - Як ввивести число без пробілів???

let number3 = 357;
let firstPart3 = Math.trunc(number3/100);
// let thirdPart3 = number3 - (firstPart3 * 100);
let secondPart3 = Math.trunc((number3 % 100) / 10);
let thirdPart3 = (number3 % 100) % 10;
console.log(thirdPart3, secondPart3, firstPart3);
console.log(`${secondPart3}${thirdPart3}${firstPart3}`); //думаю це не вірно

// console.log(firstPart3);
// console.log(secondPart3);
// console.log(thirdPart3);















// let user = "John"
// let age = 25;
// let bigNumber = 1000200030004000500060007000n;
// let trueAge = true;
// let ageTrue = null;
// let place;


// console.log(`string - ${user}, boolean - ${trueAge}, number - ${age}` + ", bigint - " + bigNumber + ", \"underfined\" - " + place + ", \'null\' - " + ageTrue);

// alert("Hello World");
///////////////////////////////////////////////////
// let massage;
// massage = 'Hi';
// massage = 'Hi again!';
// massage = 'Doh';

// console.log(massage);
// //////////////////////////////////////////////////
// let one = 'Hou';
// let two;
// two = one;

// console.log(one);
// console.log(two);
// //////////////////////////////////////////////////
// let admin;
// let name = 'John';

// admin = name;
// console.log(admin);

// String ////////////////////////////////////////////////////
// let name = "Kate";
// console.log(`hi, ${name}`);

// // Boolean ///////////////////////////////////////////////
// let age = 3>4;
// console.log(age);

// let age = prompt('Сколько тебе лет?', 100);
// alert(`Тебе ${age} лет!`); // Тебе 100 лет!

//prompt("How old are you?");

// let age1 = prompt('How old are you', 18);
// alert(`WOW, you are ${age1} age`);

// let isBoss = confirm("Ты здесь главный?");
// alert( isBoss );

// let value = true;
// console.log(typeof value);

// console.log(4%3);