// Задачки
// №1

// function findNextSquare(number) {
//   return Math.pow(Math.sqrt(number) + 1, 2) % 1 === 0
//     ? Math.pow(Math.sqrt(number) + 1, 2)
//     : -1;
// }

// console.log(findNextSquare(256)); // -1
// // findNextSquare(121); // 144
// // findNextSquare(144); // 169
// // findNextSquare(169); // 196
//№2
// function deleteVowels(str) {
//   return str
//     .split("")
//     .filter((item) => !"аоеиуыяэ".includes(item))
//     .join("");
// }

// console.log(deleteVowels("Ваш новый сериал полный отстой!")); //"Вш нвый срл плный тстй!"
// deleteVowels("Что за ужасное фото?!"); //"Чт з жсн фт?!"
// deleteVowels("Этот сайт для лузеров ЛОЛ!"); //"тт сйт дл лзрв ЛЛ!"
// №3
// function list(str) {
//   return [Math.min(...str.split(" ")), Math.max(...str.split(" "))]
//     .join(" ")
//     .split("");
// }

// console.log(list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6")); //"-123 666"
// list("-16 12 -100 5 100 12"); //"-100 100"
// list("-1 2 3 4 -6 66 10"); //"-100 100"
// №4
// function accum(str) {
//   return str
//     .split("")
//     .map((item, index) => item.toUpperCase() + item.repeat(index))
//     .join("-");
// }

// console.log(accum("cwAt")); //"C-Ww-Aaa-Tttt"
// accum("abc"); //"A-Bb-Ccc"
// accum("dog"); //"D-Oo-Ggg"
// №5
// function correctPin(str) {
//   let a = str.length;
//   if (a < 4 || a > 6 || a == 5 || isNaN(str)) {
//     return false;
//   }
//   return true;
// }

// console.log(correctPin("562w12")); //true
// correctPin("556711"); //true
// correctPin("12312312"); //false
// correctPin("qqqq"); //false
// №6
// function printerError(str) {
//   return `${
//     str
//       .split("")
//       .filter((item) => !"abcdefghijklm".includes(item.toLowerCase())).length
//   }/${str.length}`;
// }

// console.log(printerError("qqqTtssqdqwehwre")); // "12/16";
// printerError("qdqwdqdqqqqwdwwwdasda"); // "13/21";
// printerError("qaaawawweefffsssuuuu"); // "11/20";
// №7
// String.prototype.toJadenCase = function () {
//   let res = [];
//   for (i = 0; i <= this.length; i++) {
//     res.push(this[i]);
//   }
//   console.log(
//     res
//       .join("")
//       .split(" ")
//       .map((item) => item.slice(0, 1).toUpperCase() + item.slice(1))
//       .join(" ")
//   );
// };

// "The world is not what we think it is".toJadenCase(); // "The World Is Not What We Think It Is";
// "let it be".toJadenCase(); // "Let It Be";
// "is not what we think".toJadenCase(); // "Is Not What We Think";
// №8
// function compare(arr) {
//   return `[${Math.min(...arr)}, ${Math.max(...arr)}]`;
// }

// console.log(compare([1, 5, 8, 10, 35, 100, 333, -123, -2, 243])); // [-123, 333]
// compare([1, 2, 3, 4, -5, -10, -1, 123]); // [-10, 123]
// compare([-1, -2, 3, -4, 15, 66, -666]); // [-666, 66]
// №9
// function simple(str) {
//   return Math.min(...str.split(" ").map((item) => item.length));
// }

// console.log(simple("qwe q qq qq")); // 1
// simple("qwwwwe awdad asdasd wqdqw"); // 5
// simple("qwd ww qweqwe ww"); // 2
// №10
// function findNeedle(arr) {
//   return `Нашёо иголку на позиции ${arr
//     .map((item, index) => (item === "needle" ? index : ""))
//     .join("")}`;
// }

// console.log(
//   findNeedle(["bla", "wekmvever", "needle", "bntyn", "qwd", "rtbrtb"])
// ); // "Нашел иголку на позиции 2"

// findNeedle(["bla", "wekmvever", "bntyn", "needle", "qwd", "qfverv", "rtbrtb"]); // "Нашел иголку на позиции 3"

// findNeedle(["bla", "wekmvever", "bntyn", "rtbrtb", "qwd", "qfverv", "needle"]); // "Нашел иголку на позиции 6"
// № 11
// function invert(arr) {
//   return arr.map((item) => -item);
// }

// console.log(invert([1, 2, 3, 4, -5])); // [-1, -2, -3, -4, 5]
// invert([2, -3, 4, 10, -10]); // [-2, 3, -4, -10, 10]
// invert([11, -3, -1, 10, -110]); // [-11, 3, 1, -10, 110]
// №12
// function arrayDiff(originalArray, deleteArray) {
//   return originalArray.filter((item) => !deleteArray.includes(item));
// }

// console.log(arrayDiff([1, 2], [1])); //[2]
// console.log(arrayDiff([1, 2, 3, 4], [3, 4])); //[1,2]
// arrayDiff([1, 2, 3, 4], [1, 2, 3, 4]); // []
// №13
// function prevNumbers(num) {
//   let res = "";
//   for (let i = num; i > 0; i--) {
//     res += i;
//   }
//   return res.split("").join();
// }

// console.log(prevNumbers(5)); // "5,4,3,2,1"
// prevNumbers(1); // "1"
// №14
// function sumMin(array) {
//   return array.filter((item) => item > 0).length > 3
//     ? array
//         .sort((a, b) => a - b)
//         .reduce((acc, item, index, arr) => arr[0] + arr[1])
//     : "Мало положительных чисел!";
// }

// console.log(sumMin([12, 423, 54, 1235, 3, 15, 2, 52])); // 5
// console.log(sumMin([12, 1, 2, -2])); // Мало положительных чисел!
// sumMin([12, 12, 13, 1, 2]); // 3
// №15
// function sortedStr(str) {
//   return str
//     .split(" ")
//     .sort(
//       (a, b) =>
//         a.split("").filter((item) => "1,2,3,4,5,6,7,8,9".includes(item)) -
//         b.split("").filter((item) => "1,2,3,4,5,6,7,8,9".includes(item))
//     )
//     .join(" ");
// }

// console.log(sortedStr("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
// console.log(sortedStr("1q 3d 2w 7g d6 qwe5")); // "1q 2w 3d qwe5 d6 7w"
// №16
// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map((item) => item.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseWords("This is an example!")); // "sihT si na !elpmaxe"
// reverseWords("emocleW ot vedeR"); // "Welcome to Redev"
// №17
// function toSnakeCase(str) {
//   return str
//     .split("")
//     .map((item) => item.replace(item.toUpperCase(), `_` + item.toLowerCase()))
//     .join("");
// }

// console.log(toSnakeCase("redevCourses")); // "redev_courses"
// console.log(toSnakeCase("yellowStoneField")); // "yellow_stone_field"
// №18
// function isPalindrom(str) {
//   return (
//     str
//       .split("")
//       .reverse()
//       .map((item) => item.toLowerCase())
//       .join("")
//       .replaceAll(" ", "") ===
//     str
//       .split("")
//       .map((item) => item.toLowerCase())
//       .join("")
//       .replaceAll(" ", "")
//   );
// }

// isPalindrom("10101"); //true
// console.log(isPalindrom("Аргентина манит негра")); //true
// console.log(isPalindrom("Авада кедавра")); //false
// №19
// function countCats(arr) {
//   let res = 0;
//   arr.map((item) => item.map((item) => (item === "^^" ? res++ : res + 0)));
//   return res;
// }

// console.log(
//   countCats([
//     [0, 1, "^^"],
//     [9, "^^", 2],
//     ["^^", 8, 7],
//   ])
// ); //3
// console.log(
//   countCats([
//     [0, 1],
//     [9, 2],
//     ["^^", 8, 7],
//   ])
// ); //1
// countCats([
//   [0, 1],
//   [9, 2],
//   [8, 7],
// ]); //0
// №20
// function factorial(num) {
//   return num ? num * factorial(num - 1) : 1;
// }

// console.log(factorial(3)); // 6;
// console.log(factorial(5)); // 120;
