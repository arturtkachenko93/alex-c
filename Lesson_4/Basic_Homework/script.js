"use strict";

// =================================== MAIN ======================================

// let yourBudget,
//   yourStore,
//   price = 100;

// let myShop = {
//   budget: yourBudget,
//   nameStore: yourStore,
//   shopProduct: [],
//   personal: {},
//   open: false,
//   discount: true,
// };

// let startShop = () => {
//   yourStore = prompt("Название Вашего магазина", "");

//   while (yourStore === null || yourStore === "") {
//     yourStore = prompt("Введите корректное значение!", "");
//   }
//   yourStore = yourStore.toLowerCase();

//   yourBudget = prompt("Ваш бюджет?", "");

//   while (isNaN(yourBudget) || yourBudget === null || yourBudget === "") {
//     yourBudget = prompt("Введите корректное значение!", "");
//   }
// };

// startShop();

// let changeTypeProduct = () => {
//   for (let i = 0; i < 5; i++) {
//     let product = prompt("Что будем продавать?", "");
//     if (
//       product === null ||
//       product === "" ||
//       product.length > 10 ||
//       isNaN(product) === false
//     ) {
//       product = alert("Введите корректное значение!", "");
//       i--;
//     } else {
//       myShop.shopProduct[i] = product;
//     }
//   }
// };

// changeTypeProduct();

// let controlTimeWorking = (time) => {
//   if (time < 0) {
//     console.log("Такого не может быть!");
//   } else if (time > 8 && time < 20) {
//     console.log("Время работать!");
//   } else if (time < 24) {
//     console.log("Мы не работаем!");
//   } else {
//     console.log("В сутках только 24 часа!");
//   }
// };

// controlTimeWorking(8.2);

// let discontSystem = (discount) => {
//   if ((myShop.discount = discount)) {
//     price = price * 0.8;
//   }
// };

// discontSystem(true);

// let employee = {};

// let employers = () => {
//   for (let i = 0; i < 4; i++) {
//     let nameEmployee = prompt("Введите ваше имя:", "");
//     while (
//       nameEmployee === null ||
//       nameEmployee === "" ||
//       nameEmployee.length < 3 ||
//       !isNaN(nameEmployee)
//     ) {
//       nameEmployee = prompt("Введите корректное значение!", "");
//     }
//     let upNameEmployee =
//       nameEmployee[0].toUpperCase() +
//       nameEmployee.slice(
//         1
//       ); /* Делаем первую букву имени верхнего регистра на случай, если введено имя с маленькой */
//     employee[i + 1] = upNameEmployee;
//   }
// };

// employers();
// console.log(employee);

// ============ !УСЛОЖНЕННОЕ ПЕРВОЕ ====================================

// let str = "урок-был-слишком-легким";

// let newStr = str[0].toUpperCase() + str.slice(1);

// ============ !УСЛОЖНЕННОЕ ВТОРОЕ ====================================

// let newStrSpace = newStr.replace(/-/g, " ");

// ============ !УСЛОЖНЕННОЕ ТРЕТЬЕ ====================================

// let newStrSpaceCut = newStrSpace.slice(0, 16);

// let resultStr = newStrSpaceCut.substring(0, newStrSpaceCut.length - 2) + "оо";

// console.log(resultStr);

// ============ !УСЛОЖНЕННОЕ ЧЕТВЕРТОЕ ====================================

// let arr = [20, 33, 1, "Человек", 2, 3];
// let arrCubes = [];
// for (let i = 0; i < arr.length; i++) {
//   arrCubes[i] = Math.pow(arr[i], 3);
// }

// НЕДОДЕЛАЛ :-(
