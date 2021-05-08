// !Переменные

// ============== 1 =================

// let city = "Chelyabinsk";
// console.log(city);
// city = "Moscow";
// console.log(city);

// ============== 2 =================

// const BLUE_COLOR = "blue";
// console.log(BLUE_COLOR);

// ============== 3 =================

// let camalCase = "true";
// let PascalCase = "true";
// let snake_case = "true";

// console.log(camalCase, PascalCase, snake_case);

// ============== 4 =================

// let color = "blue";
// console.log(color);

// {
//   let color = "red";
//   console.log(color);
// }

// ============== 5 =================

// let color = "blue",
//     size = "M";
//     secondHand = "true";

// console.log(color, size, secondHand);

// ============== 6 =================

// let firstNumber = 16.4;
// console.log(firstNumber);

// ============== END =================



// !Типы данных

// ============== 1 =================

// let stroke = "25";
// console.log(stroke);

// ============== 2 =================

// let myNumberHouse = 25;
// console.log(myNumberHouse);

// ============== 3 =================

/* Булево значение - примитивный (простой) тип данных, имеющее всего два значения - истина (true) и ложь (false) */

// ============== 4 =================

// let a;
// console.log(a);

// ============== 5,6 =================

// let car = {
//   age: 25,
//   color: "blue",
//   brand: "Opel",
// }

// console.log(car.age);

// ============== 7 =================

// car.color = "red";
// console.log(car);

// ============== 8 =================

// let arrData = [true, false, 25, "String", "NaN"];
// console.log(arrData[0]);
// console.log(arrData[2]);

// ============== 9 =================

// arrData[0] = "maksim";
// arrData[3] = "oleg";
// console.log(arrData)

// ============== 10 =================

// let a = 1, b;
// console.log(a - b);

// ============== 11 =================

// let obj = {
//   name: "Artur",
// }

// obj.name = "Vasiliy";
// console.log(obj)

// ============== 12 =================

/* Типы данных в обьекте могут быть как примитивными, так и сложными. */

// let obj = {
//   name: "Artur",
//   age: 25,
//   getero: true,
//   arr: arr = [1,2,3,4,5,6],
// }

// console.log(typeof obj.name, typeof obj.age, typeof obj.arr);

// ============== 13 =================

/* Number, String, Boolean, undefined, null, bigint, Symbol, object */

// ============== 14 =================

/* null используется в том случае, если не нужно совершать какие-либо действия. */
/* undefined появляется в том случае, когда js не может определить значение. */

// ============== 15 =================

/* Строку можно заключать как в одинарные (''), так и в двойные ("") кавычки */

// ============== 16 =================

/* Индекс массива - это порядковый номер элемента в массиве. Индексация элементов в массиве начинается с 0.*/

// ============== 17 =================

/* В обеих случая значение будет являться NaN; */


// ============== 18 =================

// undefined

// obj = {
//   name: "Artur",
//   age: 27,
//   getero: true,
// }

// console.log(obj.b);

// ============== END =================



// !Взаимодействие с пользователем

// ============== 1 =================

// let question = confirm("Поддерживаешь ли ты партию зеленых человечков?");
// console.log(question);

// ============== 2 =================

// let howOldAreYou = +prompt("Сколько Вам лет?");
// console.log(howOldAreYou);

// ============== 3 =================

// let enterNumber = prompt("Введите число") * "a";
// console.log(enterNumber);

// ============== 4 =================

/* Унарный оператор "+" предназначен для преобразования строки в число */

// ============== END =================


// !Операторы и приведения типов

// ============== 1 =================

// console.log(2**3);

// ============== 2 =================

// let a = "Привет ",
//     b = "Мир!",
//     c = a + b;
// console.log(c);

// ============== 3 =================

// /* (27) */ console.log("" + 2 + "2" + 4 + true);
// /* NaN */ console.log("2" * 1 + 0 + "");
// /* 1NaN */ console.log(true + false + ""+ NaN);
// /* Nan */ console.log(12 / "2");
// /* 37 */ console.log("2" * "3" * "6" + 1);
// /* 9px122 */ console.log(4 + 5 + "px" + 12 + "2");
// /* $45NaN */ console.log("$" + 4 +5 +"px" *4);
// /* 30 */ console.log("42" - 12);
// /* NaN */ console.log("17px" - 222);
// /* Infinity */ console.log(12 / 0);
// /* 0 */ console.log("-12" + 12); - почему не нуль?
// /* -4-6 */ console.log("-4" - 6);
// /* 1 */ console.log(null + 1);
// /* NaN */ console.log(undefined + 1);
// /* NaN */ console.log("" + NaN);
// /* 1288 */ console.log(true + false + "2" + 22 * 4);
// /* 0 */ console.log(null + null);

// ============== 4 =================

// let numberOne = 3;
// let numberSecond = numberOne--;
// console.log(numberOne, numberSecond); /* console.log(3,2) */

// let numberOne = 12;
// let numberSecond = ++numberOne;
// console.log(numberOne, numberSecond); /* console.log(13,13) */

// let numberOne = 44;
// let numberSecond = --numberOne;
// console.log(numberOne, numberSecond); /* console.log(43,43) */

// let numberOne = 33;
// let numberSecond = numberOne++;
// console.log(numberOne, numberSecond); /* console.log(34,33) */

// ============== 5 =================

// var a = 1,
//     b = 1,
//     c,
//     d;
// c=++a; alert(c); /* Ответ 2*/
// d=b++; alert(d); /* Ответ 2*/
// с = (2 + ++a); alert(c); /* Ответ 4 */
// d = (2 + b++); alert(d); /* Ответ 2 */
// alert(a); /* Ответ 1 */
// alert(b); /* Ответ 1 */

// ============== 6 =================

// Во всех случаях % = 2

// ============== 7 =================

console.log(true + +"2");
console.log(true + false + +"2" + 22*4);

// ============== 8 =================

// console.log(false + false * 2 + "21" - 4);
// Потому что до строки "21" false + false * 2 = 0,
// тем самым, строка "21" была приведена к числу, т.к. перед ней стоял
// унарный оператор "+"

// ============== 9 =================

true == true; /* true */
true == false; /* false */
true === true;  /* true */
true === false;  /* true */
null === null; /* true */
1 == "1";  /* true */
1 === "1"; /* false */
2 == 2; /* true */
2 === 2; /* true */

// ============== 10 =================

false && true; /* false */
false || true; /* true */
true && false; /* false */
true && true; /* true */
"" || 1; /* "" */
null || true; /* true */
undefined && "0"; /* 0 */
"0" || false; /* false */
"" && 2; /* "" */

// ============== 11 =================

Число

// ============== 12 =================
// "=" знак присваивания;
// "== ===" - знаки сравнения;
// a = b; /* переменной a присваиваем значение b*/
// 1 == 2; /* знак нестрогого равенства, мы сравниваем
//             число 1 и 2, на выходе получаем false,
//             т.к. число 1 не равно числу 2 */
// 1 === true /* знак строгого равенства, мы сравниваем
//             число 1 и булев тип данных, на выходе
//             получаем false, т.к. тип данных у операндов
//             разный */

// ============== 13 =================
"A" < "a";
"ab" < "c";
// ============== END =================