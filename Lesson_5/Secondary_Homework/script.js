"use strict";

// !ОБЪЕКТЫ

// ============== 1 =================

// const user = {
//   nameUser: "Pavel",
//   age: 25,
//   access: true,
// };

// let keyUser = Object.keys(user);
// console.log(keyUser);

// ============== 2  =================

// const user = {
//   nameUser: "Pavel",
//   age: 25,
//   access: true,
// };

// let valueUser = Object.values(user);
// console.log(valueUser);

// ============== 3  =================

// const user = {
//   nameUser: "Pavel",
//   age: 25,
//   access: true,
// };

// for (let key in user) {
//   if (typeof user[key] === "boolean") {
//     console.log(key);
//   }
// }

// ============== 4 =================

// "full-name" - потому что синтаксис не позволяет использовать
// в именовании ключа знак "-".

// ============== 5 =================

// let people = {};
// people.name;
// people.secondName;
// people.age;
// console.log(people);

// ============== 6 =================

// Через точку - key.password

// ============== 7 =================

// let key = {
//   password: true,
//   user: "lynard22",
//   age: 33,
// };

// delete key.user;
// console.log(key);

// ============== 8 =================

// let obj = {
//   names: "Dmitriy",
//   color2: "blue",
// };

// if (Object.keys(obj) == 0) {
//   console.log("В обьекте отсутствуют свойства!");
// } else {
//   console.log("Обьект не пустой!");
// }

// !ПЕРЕДАЧА ПО ССЫЛКЕ

// ============== 1 =================

// "Maksim", "Petr", "Sergey" =>
/* Так как мы ссылаемся на исходный массив arrName;
у нас по-прежнему один массив, от того, что мы присвоили
ему другую переменную, он не скопировался как новый. */

// ============== 2 =================

/* Будет ошибка, т.к. мы переназначили переменную newArr,
присвоив ей String, а после этого пытаемся записать в нее элемент
как в массив */

// ============== 3 =================

// "Maksim", 2, 3;

// ============== 4 =================

// "Maks", 2, "Sergey";

// ============== END =================
