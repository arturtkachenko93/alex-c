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

// ============================= 5 ==========================================

// function sumPrimes(lower, upper) {
//   let result = 0;
//   nextPrime: for (let i = lower; i <= upper; i++) {
//     if (i === 1) {
//       i++;
//     }
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         continue nextPrime;
//       }
//     }
//     result += i;
//   }
//   console.log(result);
// }

// sumPrimes(4, 20);
// sumPrimes(20, 4);
// sumPrimes(2, 7);
// sumPrimes(1, 30);

// ============================= 7 ==========================================

/* Дан массив положительных целых чисел и дополнительное целое число n.
Вычислите сумму значения в массиве, возведя каждое число в степень n, а затем вычтите сумму исходного массива.
Пример: {1, 2, 3}, 3 --> (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3) --> 36 - 6 --> 30.
Пример кода:
modifiedSum([1, 2, 3], 3) => 30 */

// function solve(arr) {
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
// }

// console.log(solve([15, 11, 10, 7, 12]));

// ============================= 9 ==========================================

/* Дан массив положительных целых чисел и дополнительное целое число n.
Вычислите сумму значения в массиве, возведя каждое число в степень n,
а затем вычтите сумму исходного массива.
Пример: {1, 2, 3}, 3 --> (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3) --> 36 - 6 --> 30.
Пример кода:
•	modifiedSum([1, 2, 3], 3) => 30 */

// function modifiedSum(arr, sqrt) {
//   let resultArr = [];

//   resultArr = arr.map((item) => Math.pow(item, sqrt));
//   resultArr = resultArr.reduce(function (sum, elem) {
//     return sum + elem;
//   }, 0);

//   arr = arr.reduce(function (sum, elem) {
//     return sum + elem;
//   }, 0);

//   return (resultArr -= arr);
// }

// console.log(modifiedSum([1, 2, 3], 3));
