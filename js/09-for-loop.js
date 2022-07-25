// Цикл for

// for (let i = 0; i < 5; i = i + 1){
//     console.log(i)
    
// }
// console.log('Save');

// for (let i = 0; i < 100; i += 10){
//     console.log(i)
    
// }
// console.log('Save');

// for (let i = 10; i >= 0; i = i - 3){
//     console.log(i)
    
// }
// console.log('Save');

// Pre-increment and Post-increment
// i ++
// i+=1
// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// let a = 10;
// const b = a++;
// console.log(b);
// console.log(a);

// Напишите скрипт который подсчитывает общую зарплату работника
// Количество работников хранится в переменной employers
// Зарплата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary  и вывести в консоль

// 1 Сделать переменные
// 2 Перебрать работников в цикле
// 3 Сгенерить случайную зп
// 4 Добавить к тоталу
// 5 Вывести в лог
// const minSalary = 500;
// const maxSalary = 5000;

// const employers = 4;
// let totalSalary = 0;


// for (let i = 1; i <= employers; i += 1){
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Зарплата роботника ${i} - ${salary}`);
//     totalSalary += salary
// }

// console.log('Total Salary :', totalSalary);

// Напиши скрипт который полсчитывает сумму всех четных чисел
// который входят в диапазон чисел в переменных от min до max
// 1 Обьявить переменные
// 2 фор от мин до макс с швгом 1
// 3 проверяем остаток от деления 
// 4 пишем сумму
const min = 6;
const max = 13;
let total = 0;

// for (let i = min; i <= max; i += 1){
//     console.log(i);

//     if (i % 2 === 0) {
//         console.log('четное:', i);

//         total += i;

//     }
// }
// console.log('Total:', total);

for (let i = min; i <= max; i += 1){

    if (i % 2 !== 0) {
        console.log('Не четное:', i);
        continue;

    }
     console.log('четное:', i);

        total += i;
}
console.log('Total:', total);