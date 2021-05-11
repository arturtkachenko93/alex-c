// !ЦИКЛЫ, УСЛОВИЯ

// ============== 1 =================

// let counter = 0;
// while (counter < 33 ) {
//   counter++;
//     if (counter < 2) {
//       continue;
//   }
//   console.log(counter);
// }

/* Вопрос: Корректно ли использовать в данном случае условие? 
лучше использовать ">, <" или ">=. <=" ? */


// ============== 2 =================

// for (let i = 59; i >= 0; i--) console.log(i);

// ============== 3 =================

// for (let i = 1; i <= 200; i++) {
//   if (i % 2) {
//     continue;
//   }
//   console.log(i);
// }


// ============== 4 =================

// let arr = [];
// for (i = 0; i <= 19; i++) {
//   arr[i] = i;
// }
// console.log(arr);

/* Числовые значения - значит 20 элементов в массиве? */


// ============== 5 =================

// arr = ["Анастасия", "Алексей", "Аркаша", "Эммануил", "Сергей", "Семен", "Светлана", "Олег",];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === "Анастасия") {
//     console.log(arr[i]);
//     break;
//   }
// }

// ============== 6 =================


// arr = ["Анастасия", "Алексей", "Аркаша", "Эммануил", "Сергей", "Семен", "Светлана", "Олег",];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === "Сергей") {
//     continue;
//   }
//   console.log(arr[i]);
// }

// /* Какое равенство лучше использовать? */


// ============== 7 =================

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let result = 0;

// for (i = 0; i < arr.length; i++) {
//   result += arr[i];
// }

// console.log(result);

// ============== 8 =================

// let numberDayWeek = +prompt("Какой сегодня день недели?", "");
// let arr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",];
// let result = 0;
//   if (numberDayWeek == 1) {
//     console.log("День " + numberDayWeek + " день недели " + arr[0]);
//   } else if (numberDayWeek == 2) {
//     console.log("День " + numberDayWeek + " день недели " + arr[1]);
//   } else if (numberDayWeek == 3) {
//     console.log("День " + numberDayWeek + " день недели " + arr[2]);
//   } else if (numberDayWeek == 4) {
//     console.log("День " + numberDayWeek + " день недели " + arr[3]);
//   } else if (numberDayWeek == 5) {
//     console.log("День " + numberDayWeek + " день недели " + arr[4]);
//   } else if (numberDayWeek == 6) {
//     console.log("День " + numberDayWeek + " день недели " + arr[5]);
//   } else if (numberDayWeek == 7) {
//     console.log("День " + numberDayWeek + " день недели " + arr[6]);
//   } else {
//     console.log("В неделе 7 дней!");
//   }

// ============== 9 =================

// let arr = [2, 3, 5, 7, 11, 26, 55, 32, 102, 234, 33, 13, 17, 19, 23, 29, 31, 37];

// for (let i = 0; i < arr.length; i++) {
//   let primeNumber = true;
//   for (let j = 2; j < i; j++) {
//       if (arr[i] % j == 0) {
//         primeNumber = false;
//         break;
//       }
//   }

//   if (primeNumber) {
//     console.log(arr[i]);
//  }
// }