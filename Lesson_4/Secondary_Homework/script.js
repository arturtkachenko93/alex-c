"use strict";

// !ФУНКЦИИ

// ============== 1 =================

/* Function Declaration */

// function getMoney(userIncone = 5, userConsumpt = 10) {
//     return userIncone * userConsumpt;
// }

// console.log(getMoney(10, 20));

/* Function Expression */

// let getTemperature = function(averageWinterTemp = -5, averageSummerTemp = 20) {
//     return averageWinterTemp * averageSummerTemp;
// }

// console.log(getTemperature());

/* Arrow function */

// let getAge = (ageBoy = 5, ageGirl = 10) => ageBoy * ageGirl;
// console.log(getAge(20, 10));

// ============== 2 =================

/* С помощью function declaration, т.к для такого типа объявления функции возможен hoisting */

// console.log(nameUser("Артур"));

// function nameUser(nameUser) {
//    return `Привет, ${nameUser}, как у тебя делишки?`;
// }

// ============== 3 =================

// const arrNumber = [1, 2, 3, 4, 5, 6, 7];

// let getArr = (arrName, arrIndex, arrValue) => {
//   let newArr = arrName.slice();
//   newArr[arrIndex] = arrValue;
//   return newArr;
// };
// const newArr = getArr(arrNumber, 0, "-1");

// console.log(arrNumber);
// console.log(newArr);

// ============== END =================

// !Методы массивов

// ============== 1 =================

// let arr = [6, 10, 2, 3, 5, 20,];

// let result = arr.find(item => item > 8);
// console.log(result);

// ============== 2 =================

// const team = ["Virtus.pro", "NAVI", "LGD",];

// team.splice(1,1);

// console.log(team);

// ============== 3 =================

// let arr = [null, null, null,];

// arr.splice(0, 3, 2, 2, 2)
// console.log(arr);

// ============== 4 =================

// let arr = [6, 10, 2, 3, 5,];
// let arr2 = ["Алёшка"];

// console.log(arr.concat(arr, arr2));

// ============== 5 =================

// let arr = [6, 10, 2, 3, 5,];

// console.log(arr.length);

// ============== 6 =================

// let arr = [1, 10, 2, 3, 5,];

// console.log(arr.every(elem => elem > 1));

// ============== 7 =================

// const userName = ["Наташа", "Таня", "Артем", "Артур", "Ворфоломей"];

// console.log(userName.filter(element => element.length > 7));

// ============== 8 =================

// const animals = [
//     "BMW",
//     "MERSEDES",
//     "AUDI",
//     "OPEL",
//     "HAVAL",
// ]

// console.log(animals.slice(1, 4));

// ============== 9 =================

// const elements = [
//     "Я",
//     "Гуляю",
//     "По",
//     "Улице",
// ];

// let result = elements.join(" ");

// console.log(result=result.replace("Гуляю По Улице", "Гуляю По Улице".toLowerCase()));

// ============== 10 =================

// let getReverseString = string => {
//     let splitString = string.split("");
//     let reverseSplitString = splitString.reverse();
//     return reverseSplitString.join("");
// }

// console.log(getReverseString("Pidor"))

// ============== 11 =================

// let arr = [6, 10, 2, 3, 5,];
// let indexLessFive = arr.findIndex(index => index < 5);
// console.log(indexLessFive);

// ============== END =================
