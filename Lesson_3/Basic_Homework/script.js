"use strict"

// =================================== MAIN ======================================

let yourBudget = +prompt("Ваш бюджет?", "");
let yourStore = prompt("Название Вашего магазина");
let myShop = {
  budget: yourBudget,
  nameStore: yourStore,
  shopProduct: [],
  personal: {},
  open: false,
}

myShop.shopProduct[0] = prompt("Что будем продавать?");
myShop.shopProduct[1] = prompt("Что будем продавать?");
myShop.shopProduct[2] = prompt("Что будем продавать?");

console.log(myShop);



// =================================== COMPLICATED ======================================

// let yourAge = +prompt("Сколько тебе лет?");
// console.log(yourAge || "Пользователь ответил неверно!")