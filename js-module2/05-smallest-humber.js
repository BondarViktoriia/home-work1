// Напиши скрипт поиска самаго маленького числа и массива,
// при условии что числа уникальные или не повторяются

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

// console.log(smallestNumber);

for (const number of numbers) {
    console.log(number);
    if (number < smallestNumber) {
    smallestNumber = number;
}
}

console.log('Smallest number', smallestNumber);

// Найти самое большое число в массиве
const coins = [45, 24, 65, 8, 9, 254];
let bigCoins = coins[0];

for (const coin of coins) {
    console.log(coin);
    if (coin > bigCoins) {
        bigCoins = coin;
    }
}
console.log('Big coins', bigCoins);