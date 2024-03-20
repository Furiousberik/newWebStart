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
// №21
// function createDreamTeam(arr) {
//   return arr
//     .filter((item) => isNaN(item))
//     .map((item) => item[0])
//     .sort()
//     .join("");
// }

// console.log(createDreamTeam(["Matt", "Ann", "Dmitry", "Max"])); // 'ADMM';
// console.log(createDreamTeam(["Olivia", 1111, "Lily", "Oscar", true, null])); // 'LOO';
// №22
// function transform(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error("Input is not an array");
//   }

//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     switch (arr[i]) {
//       case "--discard-next":
//         i++;
//         break;
//       case "--discard-prev":
//         if (i > 0 && arr[i - 2] !== "--discard-next") {
//           result.pop();
//         }
//         break;
//       case "--double-next":
//         if (i < arr.length - 1) {
//           result.push(arr[i + 1]);
//         }
//         break;
//       case "--double-prev":
//         if (i > 0 && arr[i - 2] !== "--discard-next") {
//           result.push(arr[i - 1]);
//         }
//         break;
//       default:
//         result.push(arr[i]);
//         break;
//     }
//   }

//   return result;
// }

// console.log(transform([1, 3, "--double-next", 4])); // [1, 3, 4,4];
// console.log(transform([1, 3, "--discard-prev", 4])); // [1, 4];
// console.log(
//   transform([
//     1,
//     3,
//     "--double-next",
//     4,
//     "--double-prev",
//     5,
//     "--discard-prev",
//     8,
//     "--double-next",
//     10,
//   ])
// ); // [ 1, 3,  4,  4, 4, 8, 10, 10];
// №23
// const chainMaker = {
//   chain: [],
//   addLink(value) {
//     this.chain.push(`(${value})`);
//     return this;
//   },
//   removeLink(value) {
//     this.chain.splice(value - 1, 1);
//     return this;
//   },
//   reverseChain() {
//     this.chain.reverse();
//     return this;
//   },
//   getLength() {
//     return this.chain.length;
//   },
//   finishChain() {
//     console.log(this.chain.join("~~"));
//   },
// };

// chainMaker.addLink(1).addLink(2).addLink(3).finishChain(); //=> '(1)~~(2)~~(3)'
// chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain(); //=> '(2)~~(3)'
// chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain(); //=> '(2)~~(1)~~(3)'
// №24
// function isUpperCase(str, character) {
//   return str.split("")[character] === str.split("")[character].toUpperCase();
// }

// console.log(isUpperCase("tasks JavaScript", 6)); // true
// console.log(isUpperCase("tasks JavaScript", 7)); // false
// console.log(isUpperCase("Tasks", 0)); // true
// №25
// function capitalizeFirstLetter(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(capitalizeFirstLetter("пример строки")); // Пример строки
// console.log(capitalizeFirstLetter("программирование")); // Программирование
// №26
// метод уже существует
// "пример строки".startsWith("пример"); // true
// "всё не по чем".startsWith("чем"); // false
// №27
// function replaceAll(find, replace, str) {
//   return str.replaceAll("abc", "x");
// }

// const str = "abc def def lom abc abc def";
// console.log(replaceAll("abc", "x", str)); // x def def lom x x def
// replaceAll("abc", "redev", str); // redev def def lom redev redev def
// №28
// function removeDuplicate(str) {
//   return [...new Set(str.split(","))].join(", ");
// }

// console.log(removeDuplicate("вишня, груша, слива, груша")); // "вишня, груша, слива"
// removeDuplicate("redev, redev, str"); // "redev, str"
// №29
// function unique_letters(str) {
//   return [...new Set(str.split(""))].join("");
// }

// console.log(unique_letters("anaconda")); // "ancod"
// removeDuplicate("redev"); // "redv"
// function alphabetize(str) {
//   return str.split("").sort().join("");
// }
// №30
// console.log(alphabetize("Europe")); // "Eeopru"
// alphabetize("redev"); // "deerv"
// №31
// function cutString(str, n) {
//   return str
//     .split(" ")
//     .filter((item, index) => index < n)
//     .join(" ");
// }

// let str = "Сила тяжести приложена к центру масс тела";
// console.log(cutString(str, 5)); // "Сила тяжести приложена к центру"
// cutString(str, 1); // "Сила"
// №32
// function strip(str) {
//   return str
//     .split(" ")
//     .filter((item) => isNaN(item))
//     .join(" ");
// }

// console.log(strip("    Pasha is  a   good   boy")); // "Pasha is a good boy"
// №33
// function comparison(str1, str2) {
//   return str1.toLowerCase() === str2.toLowerCase();
// }
// console.log(comparison("STrinG", "string")); // true
// console.log(comparison("ALfA", "alpha")); // false
// №34
// String.prototype.endsWith = function (substring) {
//   let res = [];
//   for (key in this) {
//     res.push(this[key]);
//   }

//   console.log(res.join("").split(" ").reverse()[0] === substring);
// };
// №34

// const str = "Каждый охотник желает знать";
// str.endsWith("желает"); // false
// str.endsWith("охотник"); // false
// str.endsWith("знать"); // true
// №35
// function arrayClone(arr) {
//   return structuredClone(arr);
// }

// const vegetables = ["Капуста", "Репа", "Редиска"];
// const copy = arrayClone(vegetables);

// copy; // ['Капуста', 'Репа', 'Редиска'];
// vegetables; // ['Капуста', 'Репа', 'Редиска'];

// console.log(vegetables === copy); // false
// №36
// function colonOdd(num) {
//   return num
//     .toString()
//     .split("")
//     .map((item, index, arr) =>
//       arr[index] % 2 === 1 && arr[index - 1] % 2 === 1 ? ":" + item : item
//     )
//     .join("");
// }

// console.log(colonOdd(55639217)); // "5:563:921:7"
// console.log(colonOdd(13565484647897518)); // "1:3:56548464789:7:5:18
// №37
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(
//   removeDuplicates([
//     "php",
//     "php",
//     "css",
//     "css",
//     "script",
//     "script",
//     "html",
//     "html",
//     "java",
//   ])
// ); // [ "php", "css", "script", "html", "java" ]
// console.log(removeDuplicates(["a", "a", "b", "c"])); // ["a", "b", "c"]
// №38
// function func(arr1, arr2) {
//   return arr1.length > arr2.length
//     ? arr1.map((item, index) => item + arr2[index] || item)
//     : arr2.map((item, index) => item + arr1[index] || item);
// }

// console.log(func([1, 2, 3], [2, 1])); // [3, 3, 3]
// console.log(func([5, 2, 1], [2, 1, 3, 4])); // [7, 3, 4, 4]
// №39
// function expand(arr) {
//   return arr.flat(Infinity);
// }

// console.log(expand([1, [2, [3, [4]]]])); // "1,2,3,4"
// console.log(expand([1, [2], [3, [[4]]], [5, 6]])); // "1,2,3,4,5,6"
// №40
// function find(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   const frequencyMap = {};
//   let maxElement = arr[0];
//   let maxCount = 1;
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (frequencyMap[element] == null) {
//       frequencyMap[element] = 1;
//     } else {
//       frequencyMap[element]++;
//     }
//     if (frequencyMap[element] > maxCount) {
//       maxElement = element;
//       maxCount = frequencyMap[element];
//     }
//   }
//   return maxElement;
// }

// console.log(find([7, "z", "z", "z", 3, 7, "z", 7, "z", 3, 5, 7])); // "z"
// console.log(find([1, 1, 2, 2, 1, 7, 4, 7, 1, 3, 1, 7, 1, 1])); // 1
// №41
// function sum(a, b, c) {
//   return a + b + c;
// }

// const currySum = (fn, ...args) => {
//   return (...newArgs) => {
//     const allArgs = [...args, ...newArgs];
//     if (allArgs.length >= fn.length) {
//       return fn(...allArgs);
//     } else {
//       return currySum(fn, ...allArgs);
//     }
//   };
// };
// const curiedSum = currySum(sum);

// console.log(curiedSum(1)(2)(3)); // 6
// curiedSum(3)(3)(3); // 9

// №42
// function theSame(arr) {
//   return [...new Set(arr.map((item) => item.split("").sort().join("")))]
//     .length > 1
//     ? false
//     : true;
// }

// console.log(theSame(["кот", "ток", "кто"])); // true
// console.log(theSame(["кот", "тк", "кто"])); // false
// №43
// function maskify(str) {
//   return (
//     str
//       .split("")
//       .slice(0, -4)
//       .map((item) => (item = "#"))
//       .join("") + str.slice(-4)
//   );
// }

// console.log(maskify("4556364607935616")); // "############5616"
// №44
// function squareDigits(num) {
//   return num
//     .toString()
//     .split("")
//     .map((item) => item ** 2)
//     .join("");
// }

// console.log(squareDigits(9119)); // 811181
// console.log(squareDigits(123)); // 149
// №45
// function longest(str1, str2) {
//   return [...new Set(str1.split("").concat(str2.split("")))].sort().join("");
// }

// console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")); // "abcdefklmopqxy"
// console.log(longest("qwdqqwdqwdwqe", "qwwwacsfdsf")); // "acdefqsw"
// №46
// function busStops(array) {
//   return array.flat().reduce((acc, item, index, arr) => {
//     if (index % 2 === 0) {
//       return acc + item;
//     } else {
//       return acc - item;
//     }
//   }, 0);
// }

// console.log(
//   busStops([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ])
// ); // 17
// console.log(
//   busStops([
//     [5, 0],
//     [9, 2],
//     [2, 10],
//     [1, 2],
//     [6, 1],
//     [16, 10],
//   ])
// ); // 14
// №47
// function anagrams(str, array) {
//   return array.filter(
//     (item) => item.split("").sort().join("") === str.split("").sort().join("")
//   );
// }

// console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])); // ['aabb', 'bbaa']
// console.log(anagrams("cat", ["tac", "cta", "act", "dada"])); // [ 'tac', 'cta', 'act' ]
// №48
// function likes(array) {
//   switch (array.length) {
//     case 0:
//       console.log("no one likes this");
//       break;
//     case 1:
//       console.log(`${array.join("")} likes this`);
//       break;
//     case 2:
//       console.log(`${array.join(" and ")} like this`);
//       break;
//     case 3:
//       console.log(`${array[0]}, ${array[1]} and ${array[2]} like this`);
//       break;
//     default:
//       console.log(
//         `${array[0]}, ${array[1]} and ${array.length - 2} others like this`
//       );
//   }
// }

// likes([]); //'no one likes this'
// likes(["Peter"]); // 'Peter likes this'
// likes(["Jacob", "Alex"]); //'Jacob and Alex like this'
// likes(["Max", "John", "Mark"]); // 'Max, John and Mark like this'
// likes(["Alex", "Jacob", "Mark", "Max"]); //'Alex, Jacob and 2 others like this'
// №49
// function findMissingLetter(array) {
//   return String.fromCharCode(
//     array
//       .map((item, index, arr) => item.charCodeAt())
//       .filter((item, index, arr) => arr[index + 1] - arr[index] === 2)
//       .map((item) => item + 1)
//       .join("")
//   );
// }

// console.log(findMissingLetter(["a", "b", "c", "e"])); // 'e'
// console.log(findMissingLetter(["a", "b", "d"])); // 'c'

//№50
// function moveZeros(array) {
//   return array
//     .filter((item) => item !== 0)
//     .concat(array.filter((item) => item === 0));
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false,1,1,2,1,3,"a",0,0]
// console.log(moveZeros(["a", 0, "b", 0, "d"])); // ['a','b','d',0,0]

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   method() {
//     return this.name;
//   }
// }
// class User2 extends User {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
//   method() {
//     return super.method() + " " + this.age;
//   }
// }

// const obj2 = new User2("Igor", 23);

// console.log(obj2.method());
// class Nein {
//   name = "ewr";
//   #method() {
//     return this.name;
//   }
//   meth() {
// //     return this.#method();
// //   }
// // }

// // let obj = new Nein();
// // console.log(obj.meth());
// class Parent {
//   method() {
//     console.log("Это метод родительского класса");
//   }
// }

// class Child extends Parent {
//   method() {
//     console.log("Это переопределенный метод дочернего класса");
//   }
// }

// let child = new Child();
// let par = new Parent();
// child.method(); // выводит 'Это переопределенный метод дочернего класса'

// class Staticlink {
//   constructor(name) {
//     this.name = name;
//   }
//   static method() {
//     return 24;
//   }
// }

// class Newstat extends Staticlink {
//   constructor() {
//     super();
//   }
//   method() {
//     return "31";
//   }
//   static name = 24;
// }
// let b = new Newstat();
// console.log(b.method());
// console.log(b instanceof Newstat);

// class Berik {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   game = "football";
// }

// let redev = new Berik("Igor", 24);
// console.log(redev);
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Employee extends Person {
//   constructor(name, title) {
//     super(name);
//     this.title = title;
//   }
// }

// const john = new Employee("Developer", "erw"); // ошибка

// console.log(john.name);

// class Person {
//   constructor(name) {
//     this._name = name; // _name - это "приватное" свойство
//   }

//   // Геттер для имени
//   get name() {
//     console.log("Getting name");
//     return this._name;
//   }

//   // Сеттер для имени
//   set name(value) {
//     this._name = value;
//   }
// }
// let person = new Person("John");
// // console.log(person.name); // Получаем имя, выводит "Getting name" и "John"

// person.name = "Bob"; // Устанавливаем имя, выводит "Setting name to Bob"
// console.log(person.name); // Получаем имя, выводит "Getting name" и "Bob"

// ==========================================
// КОлбэки

// Напиши функцию sumNumbers, которая принимает два числа a и b и callback-функцию.
// Функция должна сложить числа a и b и передать результат в callback-функцию которая выведет результат в консоль.

// function sumNumbers(a, b, callback) {
//   let res = a + b;
//   callback(res);
// }

// function aCallback(res) {
//   console.log(res);
// }

// sumNumbers(2, 5, aCallback);

// Напиши функцию, которая принимает массив и callback-функцию,
// а затем проходит по каждому элементу массива и вызывает переданную callback-функцию для каждого элемента.
// Callback-функция должна принимать один аргумент - текущий элемент массива - и выводить его в консоль.

// function call(a, callback) {
//   for (i = 0; i < a.length; i++) {
//     callback(a[i]);
//   }
// }
// function callbackFunc(a) {
//   console.log(a + 2);
// }

// call([1, 2, 3, 4, 5], callbackFunc);

// Напиши функцию, которая принимает массив строк и callback-функцию, а затем вызывает переданную callback-функцию для каждой строки в массиве.
// Сallback-функция должна преобразовывать строку в верхний регистр и выводить ее в консоль.

let strings = [
  "Всем привет, вы на канале Митер Макс!",
  "Ну а я Коннор, и я проверю, работает ли это на самом деле",
];

// function call(a, callback) {
//   for (i = 0; i < a.length; i++) {
//     callback(a[i]);
//   }
// }
// function callbackFunc(b) {
//   console.log(b.toUpperCase());
// }

// call(strings, callbackFunc);

// Напиши функцию, которая принимает массив чисел и callback-функцию, а затем вызывает переданную callback-функцию для каждого элемента в массиве.
// Сallback-функция должна проверять, является ли число четным, и выводить его в консоль, если это так.

// let numbers = [4, 23, 52, 1, 35, 2, 3];
// function call(a, callback) {
//   for (i = 0; i < a.length; i++) {
//     if (i % 2 === 0) {
//       callback(a[i]);
//     }
//   }
// }
// function callbackFunc(b) {
//   console.log(b);
// }

// call(numbers, callbackFunc);

// Напиши функцию, которая принимает массив объектов и callback-функцию, а затем вызывает переданную callback-функцию для каждого объекта
// в массиве. Сallback-функция должна проверять, есть ли у объекта свойство "age" и выводить его значение в консоль, если это так.
// let obj = [
//   {
//     name: "Igor",
//     age: 24,
//   },
//   {
//     name: "Max",
//   },
//   { age: 35 },
// ];
// function call(a, callback) {
//   for (let key in a) {
//     callback(a[key]);
//   }
// }
// function aCall(b) {
//   if ("age" in b) {
//     console.log(b.age);
//   }
// }

// call(obj, aCall);

// =================================
// Промисы

// Напиши функцию, которая получает на вход два числа и возвращает Promise,
// который разрешается через 1 секунду с результатом суммы этих чисел.
// Если одно из чисел не является числом, Promise должен быть отклонен с ошибкой.

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1 + "f2"), 1000);
// });

// promise
//   .then((data) => {
//     if (isNaN(data)) {
//       return reject();
//     }
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Напиши функцию getUser(id), которая возвращает промис, который разрешается (resolve)
// пользователем с заданным идентификатором, или отклоняется с ошибкой, если пользователь не найден.
// const users = [
//   { id: 1, name: "Nastya" },
//   { id: 2, name: "Ivan" },
//   { id: 4, name: "Pavel" },
// ];

// const getUser = (users, id) => {
//   const promise = new Promise((resolve, reject) => {
//     const find = users.find((item) => item.id === id);
//     return find ? resolve(find) : reject("Пользователь не найден");
//   });
//   promise
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// getUser(users, 2); // { id: 2, name: "Ivan" }
// getUser(users, 3); // "Пользователь не найден"

// Напиши функцию sum(numbers), которая возвращает промис, который разрешается (resolve) суммой чисел в массиве,
// или отклоняется с ошибкой, если массив пуст

// const sum = (numbers) => {
//   return new Promise((resolve, reject) => {
//     const reduce = numbers.reduce((acc, item) => acc + item, 0);
//     return reduce ? resolve(reduce) : reject("Массив пуст");
//   });
// };

// sum([1, 2, 3, 4, 5]).then((sum) => console.log(sum)); // 15
// sum([]).catch((err) => console.log(err)); // "Массив пуст"

// Напиши функцию delayedGreeting(name, delay), которая будет возвращать Promise, который будет разрешаться (resolve)
// через заданный промежуток времени delay и выводить на экран приветствие Hello, ${name}!.

// function delayedGreeting(name, delay) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`Hello, ${name}!`), delay);
//   });
//   promise.then((data) => console.log(data)).catch((err) => console.log(err));
// }

// delayedGreeting("PAsha", 1000);
// delayedGreeting("Vlad", 2000);
// delayedGreeting("Angelina", 3000);

// Напиши функцию waitForAll(promises), которая будет принимать массив Promise и возвращать новый Promise,
// который разрешится (resolve), когда все Promise из массива promises будут выполнены.
// Результатом выполнения нового Promise будет массив результатов выполнения каждого из Promise из исходного массива.

// const prom = [
//   Promise.resolve("Promise 1 resolved"),
//   Promise.reject("Promise 1 rejected"),
//   Promise.resolve("Promise 1 resolved"),
// ];

// function waitForAll(promises) {
//   Promise.allSettled(promises).then((results) => {
//     return Promise.resolve(results).then((result) => {
//       console.log(result.map((item) => item.value || item.reason));
//     });
//   });
// }

// waitForAll(prom);
// Promise.reject("a")
//   .catch((p) => p + "b")
//   .catch((p) => p + "c")
//   .then((p) => p + "d")
//   .finally((p) => p + "e")
//   .then((p) => console.log(p));

// ========================================================

// await/async

// Напиши функцию, которая принимает на вход строку и возвращает промис,
// который разрешается через указанное количество миллисекунд, где
// количество миллисекунд равно длине строки.

// async function asyncFunc(str) {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => console.log(str), str.length * 1000);
//   });
//   return await promise;
// }

// asyncFunc("REdev");

// Напиши функцию, которая получает на вход число и возвращает промис,
//  который будет разрешен только после того, как будет вычислено факториал этого числа.

// async function asyncFunc(num) {
//   function asyncFac(n) {
//     return n ? n * asyncFac(n - 1) : 1;
//   }
//   return await new Promise((resolve, reject) => {
//     try {
//       resolve(asyncFac(num));
//     } catch (err) {
//       reject(err);
//     }
//   });
// }
// asyncFunc(5)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// В задаче нужно написать 2 промиса. Первый вернет твое имя. Второй вернет твой возраст.
// Через асинхронную функцию обработать промисы и вернуть промис, который завершается успешно со значением строки.
// Пример строки: "Имя - возраст" "Паша - 26"
// Полученую строку вывести в консоль...
// Если хотя бы один из промисов завершается с отклонением, функция должна вернуть промис со строкой "плохой запрос"

// async function asyncFunc(name, age) {
//   const promise1 = new Promise((resolve, reject) => {
//     if (typeof name === "string") {
//       resolve(name);
//     }
//     reject(new Error("Имя введено неправильно"));
//   });
//   const promise2 = new Promise((resolve, reject) => {
//     if (typeof age === "number") {
//       resolve(age);
//     }
//     reject(new Error("Не число"));
//   });
//   try {
//     console.log(`${await promise1} - ${await promise2}`);
//   } catch (error) {
//     console.log("Плохой запрос");
//   }
// }

// asyncFunc("Igor", 24);

// Напиши функцию, которая получает на вход два аргумента: строку и число. Функция должна возвращать промис,
// который будет разрешен только после того, как введенная строка будет выведена в консоль указанное количество раз.
// Например, если функции переданы аргументы "hello" и 3, то промис должен разрешиться только после того, как строка
// "hello" будет выведена в консоль 3 раза.

// async function asyncFunc(str, num) {
//   function strNum(s, n) {
//     for (i = 1; i <= n; i++) {
//       console.log(s);
//     }
//   }
//   return await new Promise((resolve) => {
//     resolve(strNum(str, num));
//   });
// }
// asyncFunc("hello!", 3);

// Напиши функцию, которая принимает 2 промиса (оба успешно завершенных).
// Первый возвращает твое имя, второй твою фамилию.
// Функция должна вернуть успешно завершенный промис с имя + фамилия
// const name = "Igor";
// const lastName = "Borisenko";

// const promise1 = new Promise((resolve) => resolve(name));
// const promise2 = new Promise((resolve) => resolve(lastName));

// async function asyncFunc(prom1, prom2) {
//   console.log(`${await prom1} ${await prom2}`);
// }

// asyncFunc(promise1, promise2);

// console.log(1);
// setTimeout(() => console.log(2), 1000);

// console.log(3);
// new Promise((res) => res(4)).then((data) => console.log(data));
// setTimeout(() => console.log(5), 2000);
// Promise.resolve(6).then((data) => console.log(data));
// new Promise((res) => setTimeout(() => res(7), 3000)).then((data) =>
//   console.log(data)
// );
// 1, 3, 4, 6, 2, 5, 7

// setTimeout(() => console.log(5), 0);
// new Promise((res) => res(1)).then((data) => console.log(data));
// setTimeout(() => console.log(2), 1000);
// Promise.resolve(3).then((data) => console.log(data));
// console.log(4);
// new Promise((res) => setTimeout(() => res(7), 2000)).then((data) =>
//   console.log(data)
// );
// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }

// function prepareCelebration(participants) {
//   return participants < 10
//     ? "Флаги, баннеры, закуски"
//     : participants < 50
//     ? "Флаги, баннеры, закуски, столы, стулья, места для отдыха"
//     : "Флаги, баннеры, закуски, столы, стулья, места для отдыха, аренд";
// }

// console.log(prepareCelebration(10));
// // Для 5 участников: "Флаги, баннеры, закуски"

// console.log(prepareCelebration(20));
// // Для 20 участников: "Флаги, баннеры, закуски, столы, стулья, места для отдыха"

// console.log(prepareCelebration(100));
// // Для 100 участников: "Флаги, баннеры, закуски, столы, стулья, места для отдыха, аренд"

// ==========================================
// Fetch

const register = {
  username: "berwawwik",
  email: "pr1oao@gmail.com",
  password: "b1goer_Smile",
  gender: "male",
  age: 24,
};
async function registration() {
  try {
    const response = await fetch(
      "https://todo-redev.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      }
    );
    const data = await response.json();
    console.log("data: ", data);
  } catch (error) {
    console.log("error: ", error);
  }
}

const log = {
  email: "pr1oao@gmail.com",
  password: "b1goer_Smile",
};

async function login() {
  try {
    const response = await fetch(
      "https://todo-redev.herokuapp.com/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(log),
      }
    );
    const data = await response.json();
    // console.log("data: ", data);
    return data.token;
  } catch (error) {
    console.log("error: ", error);
  }
}

async function createTask(task, token) {
  try {
    const response = await fetch("https://todo-redev.herokuapp.com/api/todos", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: task }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

async function getTasks(token) {
  try {
    const response = await fetch("https://todo-redev.herokuapp.com/api/todos", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });
    const data = await response.json();
    console.log("data:", data);
  } catch (error) {
    console.log(error);
  }
}
async function editTask(task, id, token) {
  try {
    const response = await fetch(
      `https://todo-redev.herokuapp.com/api/todos/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: task }),
      }
    );
    const data = await response.json();
    console.log("data:", data);
  } catch (error) {
    console.log(error);
  }
}
async function deleteTask(id, token) {
  try {
    const response = await fetch(
      `https://todo-redev.herokuapp.com/api/todos/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      }
    );
    const data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
}
async function main() {
  // зарегистрировать пользователя
  // await registration();

  // авторизоваться
  const token = await login();
  // // создать таску
  const id = await createTask("Купить рыбу", token);

  // // список всех тасок
  const tasks = await getTasks(token);

  // // изменить таску
  await editTask("Поймать муху", 3593, token);

  // // удалить таску
  await deleteTask(3593, token);
}

main();
