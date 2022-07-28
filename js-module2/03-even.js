// Напиши скрипт который подсчитывает сумму всех четных чисел в массиве

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// 1) переменная тотал
let total = 0;
// 2)перебрать массив
// for (let i = 0; i < numbers.length - 1; i += 1){
//     console.log(numbers[i]);
//     // 3)на каждой итерации проверить элемент на четнось
//     if (numbers[i] % 2 === 0) {
//         console.log('Четное');
//  // 4)если четное плючуем к тоталу
//         total += numbers[i];
//     }

// }

// console.log("Total:",total);
for (const number of numbers) {
    // console.log(number);

    if (number % 2 === 0) {
        console.log(`${number}--Четное`);
        total+=number;

    }
}
console.log('Total:', total);