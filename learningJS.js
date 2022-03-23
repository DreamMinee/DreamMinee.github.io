let {log}=console;
// 1.Переменные//
// 2.Операторы сравнения
// 3.Циклы
// 4.Функции
// 5.Массивы
// 6.Обьекты
// 7.Dom
//   const number = 8;
//   const price = 10;
//   const total = 200;
//   const resulSumNambers = 300;
//   let a = 3; //number
//   let b = "Moscow"; //string
//   let c = true; //boolean
//   let d = null; //null
//   let e; //undefined
//   let f = {
//       lastName: "Semenov"
//       name: "Ivan"} //object
//
// true/false

// const a = 3;
// const b = 4;
// console.log(a);
// console.log(b);
// console.log(a < b);
// console.log(a > b);
// console.log(a == b);
// console.log(a <= b);
// console.log(a != b);
//
// let a = 5;
// if (a > 4) {
//     console.log(1);
// }else if (a < 4) {
//     console.log(2);
// } else if (a == 5) {
//     console.log(3);
// } else {
//     console.log(4);
// }
// &&
// ||
// !
// let candies = 10;
//
// while(candies > 0) { //While-условие пока, проходим итерацию
//     console.log("Открыть коробку");
//     console.log("Достать конфету");
//     console.log("Положить ее в рот");
//     console.log("Закрыть коробку");
//     candies--;
// //     console.log(candies);
// // }
// // for (let i = 0; i < 5; i++) {
// //     console.log(i)
//

// const firstName = "Dmitriy";
// const age = 22;
// if (age > 18) {
//     console.log(firstName + " идет в армию");
//     }
// else {
//    console.log(firstName + " не идет в армию");
// }

// function checkAge(name, age) {
//     if (age >=18) {
//         console.log(name + " идет в армию");
//     }
//     else
//         console.log(name + " продолжает ходить на дискотеки");
// }
// checkAge("Дмитрий", 33)
// checkAge("Николай", 23)
// checkAge("Алексей", 15)
// checkAge("Миша", 17)

// const students = ["Alecsey Volkov", "Petya Petushkov", "Ivan Avankin"];
// const cities = ["Samara", "Orenburg", "London", "Belgorod"];
// const booleans = [true, false, true, false];
// console.log(cities[2]);
// console.log(students[0]);

// const carBmw = {
//     model: "BMW",
//     country: "Germany",
//     year: "2009",
//     color: "red",
//     wheels: {
//         type: "",
//         year: [2001,2002,2009]
//     }
//
// }
// console.log(carBmw.wheels.year[1]);

// var user1 = {
//     firstName: 'Вано',
//     age: 23,
//     sayHello: function(){
//         console.log('Всем привет, от ' + user1.firstName);
//     }
// }
// let user2 = {
//     firstName: 'Марина',
//     age: 26,
//     sayHello: function(){
//         console.log('Всем привет, от ' , this.firstName);
//     }
// }
// user1.sayHello();
// user2.sayHello();
//
// let a1 = 5+3;
// let a2 = 5-3;

// console.log(a1)
// let height = 23;
// let width =  10;
// console.log(height*width)
// let heightc = 10;
// let dC = 4;
// let v = heightc * dC * Math.PI;
// console.log(v)
//
// let programmer = true;
// let name;
// if (programmer) {
//     name = "Max";
// } else {
//     name = "Nekit";
//     }
// log(name)

// let city1 = {
//     name: 'ГородN',
//     population: 10e6,
//     getName: function (){
//         return this.name
//     }
// }
// log(city1.getName())
// let city2 = {
//     name: 'ГородM',
//     population: 1e6,
//     getName: function () {
//         return this.name
//
//     }
// }
// log(city2.getName());
//
//
// const condition = true;
// const person = {
//     id: 1,
//     name: 'John Doe',
//     ...(condition && { age: 16 }),
// };

// const stringInt = "40"
// const stringFloat = "40.42"
// log(Number.parseInt(stringInt) + 2);
// log(+stringInt +2);

// const jayObject = {
//     name: 'Nekit',
//
//
// }
// const temp = JSON.stringify(jayObject)
// log(temp)
// log(JSON.parse(temp))


// const stringInt = '2'
// log(Number.parseInt(stringInt))
// log(1.97 + 2.36)
// log(parseFloat(1.97 + 2.36).toFixed(1))
//
// const name = 'Vlad'
// const age = 26
// function getAge() {
//     return age
// }
// const output = `Привет меня зовут ${name}, и мне ${getAge()} лет`
// log(output)

// const name ="Vlad"
// log(name.length)
// log(name.toLowerCase())
// log(name.toUpperCase())
// let fruits = ["melon", "apple", "pineapple"]
// let index = fruits.indexOf("pineapple")
// log(index)

// function logPerson (string, name, age, widthHead,lengthFoot) {
//     log(string, name, age,widthHead,lengthFoot)
//     return `${string[0]}${name}${string[1]}${age}${string[2]}${widthHead}${string[3]}${lengthFoot}`
// }
// const personName = 'Владилен'
// const personAge = 26
// const widthHead = 150
// const output = logPerson`Имя: ${personName}, прожил ${26}!, ширина головы ${150}, а длина ноги ${42}`
// log(output)
//
//
// let n = String([1, 2,null,true])
// log(n)

// let unit = "Привет, всем"
// log(unit.split("е"))

//
// function createLastName () {
//     log("Ivanov")
// }
// function createName() {
//     log("Ivan")
// }
// function createFullName (fName, fLastName) {
//
//     fLastName()
//     fName()
// }
// createFullName(function (){
//     log("Karl")
// }, createLastName)

let createLastName = () => log("Ivanov")
let createName = () => log("Karl")
let createFullName = (fName, fLastName) => {
    fLastName()
    fName()
}
createFullName (createName, createLastName)



let selectNumbers = (...numbers) => {
    let simpleNumbers = []
    for (let simpleNumber of numbers ) {
        for (let i=0; i<3; i++) {
           if (simpleNumber%i>0 || simpleNumber !== i) {
               simpleNumbers.push(simpleNumber)
           }
        }
    }
    log(simpleNumbers)
}
selectNumbers(0, 1, 5, 8, 6, 7, 9, 36, 21, 78, 181, 163, 167,199)