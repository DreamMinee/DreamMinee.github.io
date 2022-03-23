//
// //let num1 = prompt('Введите первое число:')
// // let opp = prompt('Введите операцию:')
// // let num2 = prompt('Введите второе число:')
// // num1 = new Number(num1)
// // num2 = new Number(num2)
// // if (opp === '-') console.log(num1-num2)
// // if (opp === '+') console.log(num1+num2)
// // if (opp === '*') console.log(num1*num2)
// // if (opp === '/') console.log(num1/num2)
// function calculateAge (year) {
//     return 2022 - year
// }
// const myAge = calculateAge(1983)
// console.log(myAge)
//
// function calculateDays (year) {
//     const days = 365
//     const myAge = calculateAge(year)
//     return days * myAge
// }
// console.log('Прожитых дней ',calculateDays(1983))
// function calculateToiletDays (year) {
//     const toiletMinutes = 15
//     const days = 365
//     const toiletDays = (days * toiletMinutes / 60 * myAge / 24)
//     return toiletDays
// }
// console.log('Просижено дней в туалете' ,calculateToiletDays(1983))
// function calculateTualetDais (year) {
//     const time = 15;
//     const days = calculateDays(year);
//     const allMin = days * time;
//     return (allMin / 60) / 24;
// }
// console.log('Прожитых дней в туалете по версии Максима' , calculateTualetDais(1983))
//logic operators
// const cars = ['Mazda' ,'Ziguli']
// cars.push('Hynsai')
// console.log(cars)
// console.log(cars[2])
// const numbers = [1, 2, 3]
// const lastIndex = numbers.length - 1
// console.log(numbers[lastIndex]+10)

const fruits = ["apple", "plum", "nuts"]
for (let fruit of fruits) {
    console.log(fruit)

}

for (let i=0; i<fruits.length; i++){

    console.log(fruits[i])

}

const person1 = {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 26,
    languages: ["ru", "de", "fr"],
}
const person2 = {
    firstName: "Semen",
    lastName: "Semenov",
    age: 27,
    languages: ["ch", "ja", "sp"],
    log: function (text) {
        console.log(text)
    }
}
function search (person) {
    for (let item of person.languages) {
        if (item === "de") {

            console.log(person.firstName, person.lastName)


        }

    }

}
search(person1)
search(person2)

person2.log("text")






