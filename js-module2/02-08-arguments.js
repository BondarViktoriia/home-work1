// Пседомассив arguments и Array, from .....

// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments);

//         console.log(args);
    
// }
// fn(1, 2, 3, 4, 5, 6, 7);
// fn(5, 3, 2);
// fn(10, 11, 12);

//Получить доступ

// const fn = function (...args) {
//     console.log(args);
// }
// fn(1, 2, 3, 4, 5, 6, 7);
// fn(5, 3, 2);
// fn(10, 11, 12);


////////////////////////////////////////////
//Напиши функцию add для сложения произвольного количества аргументов (чисел)

// const add = function (... args) {
//     console.log(args);
//     let total = 0;
//     for (const arg of args) {
//         total += arg;

//     }
//     return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6));


/////////////////////////////////////////////
// Напиши функцию filterNumbers(array[,number1......]) которая
// первым аргументом принимает массив чисел
// почле первого аргумента может быть произвольное количество других аргументов которые будут числами
// Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго
// для которых есть аналог  в оригинальном массиве

const filterNumbers = function (array, ...args) {
    console.log('array', array);
    console.log('args', args);
    const uniqueElement = [];

    for (const element of array) {
        if (args.includes(element)) {
            uniqueElement.push(element);
            console.log(`${element} есть везде!!`);
  }
    }
    return uniqueElement;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15));
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));