"use strict";

// =================================== MAIN ======================================

let yourBudget, yourStore, price;

let myShop = {
  budget: yourBudget,
  nameStore: yourStore,
  shopProduct: [],
  shopProductItem: [],
  personal: {},
  open: false,
  discount: true,
  startShop: function () {
    this.nameStore = prompt("Название Вашего магазина", "");
    while (!this.nameStore) {
      this.nameStore = prompt("Введите корректное значение!", "");
    }
    this.nameStore = this.nameStore.toLowerCase();
    this.budget = prompt("Ваш бюджет?", "");
    while (isNaN(this.budget) || !this.budget) {
      this.budget = prompt("Введите корректное значение!", "");
    }
  },
  changeTypeProduct: () => {
    for (let i = 0; i < 5; i++) {
      let product = prompt("Какой тип товаров будем продавать?", "");
      if (!product || !isNaN(product)) {
        product = alert("Введите корректное значение!", "");
        i--;
      } else {
        myShop.shopProduct[i] = product;
      }
    }
  },
  discontSystem: () => {
    if (myShop.discount) {
      price = price * 0.8;
    }
  },
  employers: () => {
    for (let i = 0; i < 4; i++) {
      let nameEmployee = prompt("Введите ваше имя:", "");
      while (!nameEmployee || nameEmployee.length < 3 || !isNaN(nameEmployee)) {
        nameEmployee = prompt("Введите корректное значение!", "");
      }

      let upNameEmployee =
        nameEmployee[0].toUpperCase() +
        nameEmployee.slice(
          1
        ); /* Делаем первую букву имени верхнего регистра на случай, если введено имя с маленькой */
      myShop.personal[i + 1] = upNameEmployee;
    }
  },
  shopProductItemChange: () => {
    let items = prompt(
      "Перечислите товары через запятую",
      "фрукты,овощи,мясо..."
    );
    while (!items || !isNaN(items)) {
      items = prompt("Введите корректные значения", "");
    }
    myShop.shopProductItem = items.split(",");
    myShop.shopProductItem.push(prompt("Что-то еще?", ""));
    myShop.shopProductItem = myShop.shopProductItem.filter((item) => item);

    myShop.shopProductItem = myShop.shopProductItem.map((word) => {
      return word[0].toLowerCase() + word.slice(1);
    });
    myShop.shopProductItem.sort();
  },
  listProduct: () => {
    if (myShop.shopProductItem.length > 0) {
      myShop.shopProductItem.forEach((elem) => console.log(elem));
    } else {
      console.log("пусто!");
    }
  },
  controlTimeWorking: (time) => {
    if (time < 0) {
      console.log("Такого не может быть!");
    } else if (time > 8 && time < 20) {
      console.log("Время работать!");
    } else if (time < 24) {
      console.log("Мы не работаем!");
    } else {
      console.log("В сутках только 24 часа!");
    }
  },
};

myShop.shopProductItemChange();
myShop.listProduct();
console.log(myShop);
