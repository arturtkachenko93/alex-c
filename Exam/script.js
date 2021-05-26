"use strict";

// ===================================== 1 =================================
/* Есть массив целых чисел.
    Верните новый массив, содержащий последние четные числа
    из исходного массива (в том же порядке). */

// let evenNumbers = (arr, index) => {
//   let newArr = [];
//   arr.forEach((element) => {
//     if (element % 2 === 0) {
//       newArr.push(element);
//     }
//   });
//   let value = newArr.length - index;
//   for (let i = 0; i < value; i++) {
//     newArr.shift();
//   }
//   return newArr;
// };

// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
// console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));

// ===================================== 3 =================================

/* Напишите функцию, которая берет массив слов, объединяет их и возвращает предложение. В массиве, слова и символы будут идти всегда по-порядку. Обратите внимание на то, что в массиве могут быть пустые строки - их необходимо удалить. Если после слова идет запятая, то после запятой должен быть пробел до следующего слова, например: Привет, как твои дела? Из символов во входном массиве будут только '?', ',' '!'
•	example(['hello', 'world', 'this', 'is', 'great']) => 'hello world this is great'*/

// let arr = ["Oh", "god", " ", " what", "this", " ", "?"];
// let example = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].trim();
//     console.log(arr);
//   }
//   arr = arr.filter(Boolean);
//   let string = arr.join(" ");
//   string = string
//     .split(" ,")
//     .join(",")
//     .split(" !")
//     .join("!")
//     .split(" ?")
//     .join("?");
//   return string;
// };

// console.log(example(["Oh", "god", " ", " what", "this", " ", "?"]));
// console.log(example(["Oh", "god", " ", " what", "this", " ", "?"]));
// console.log(example(["Oh", "god", " ", " what", "this", " ", "?"]));
// console.log(example(["Oh", "god", " ", " what", "this", " ", "?"]));
// console.log(example(["Oh", "god", " ", " what", "this", " ", "?"]));

// ===================================== 7 =================================

/* Вам будет предоставлен массив уникальных элементов.
Ваша задача состоит в том, чтобы переставить значения так,
чтобы за первым максимальным значением следовало первое минимальное значение,
за которым следовало второе максимальное значение,
затем второе минимальное значение и т.д.
Например: solve([15,11,10,7,12]) = [15,7,12,10,11] => Первый максимум 15, первый минимум 7. Второй максимум, 12 второй минимум 10 и так далее.
Пример кода:
•	solve([15,11,10,7,12]) => [15,7,12,10,11] */

// let solve = (arr) => {
//   const resultArr = [];
//   const sorted = [...arr].sort((a, b) => b - a);

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2) {
//       resultArr.push(sorted.pop());
//     } else {
//       resultArr.push(sorted.shift());
//     }
//   }
//   return resultArr;
// };

// console.log(solve([15, 11, 10, 7, 12]));

// ===================================== 9 =================================

/* Дан массив положительных целых чисел и дополнительное целое число n.
Вычислите сумму значения в массиве,
возведя каждое число в степень n,
а затем вычтите сумму исходного массива.
Пример: {1, 2, 3}, 3 --> (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3) --> 36 - 6 --> 30.
Пример кода:
•	modifiedSum([1, 2, 3], 3) => 30
 */

// let modifieldSum = (arr, sqrt) => {
//   let result = [];
//   result = arr.map((item) => Math.pow(item, sqrt));
//   result = result.reduce(function (sum, current) {
//     return sum + current;
//   }, 0);

//   arr = arr.reduce(function (sum, current) {
//     return sum + current;
//   });

//   return (result -= arr);
// };

// console.log(modifieldSum([1, 2, 3], 3));
// console.log(modifieldSum([1, 2], 5));
// console.log(modifieldSum([5, 6, 8], 3));
// console.log(modifieldSum([2, 2, 2], 2));
// console.log(modifieldSum([3, 5], 3));
