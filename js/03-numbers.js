let elementWidth = '50px';
 
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth:', elementWidth)

// const result = Number.parseInt(elementWidth);
// console.log(result);

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight:', elementHeight);

let salary = 1300.16472;
salary = Number(salary.toFixed(2));
console.log(salary);

let quantity = '30';
let value = 'Эту строку невозможно привести к числу.';

console.log(Number(value));
console.log(quantity);

const base = 2;
const power = 5;
const result = Math.pow(base, power);
console.log(2 ** 5);
console.log(base ** power);
console.log(result);



let number = prompt("Введите число");
number = Number(number);
console.log(number);

let extent = prompt('Введите степень');
extent = Number(extent);
console.log(extent);

const answer = number ** extent ;
console.log(answer);

// Генерация псевдослучайных чисел
console.log(Math.random());

const max = 50;
const min = 30;
// Math.random() * (max - min) + min;
const derivation = Math.round(Math.random() * (max - min) + min)
console.log(derivation);



