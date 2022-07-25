

const salary = 3500;
if (salary < 500) {
    console.log('Уровень 1');
}
else if (salary>500 && salary < 1500) {
    console.log("Уровень 2");
}
else if (salary > 1500 && salary < 2500) {
    console.log("Уровень 3");
} else {
    console.log("Уровень 4");
}
// Тернарный оператор
const balance = 1000;
// let message;

// if (balance >= 0) {
//     message = 'Позитивный баланс';
// } else {
//     message = 'Негативный баланс';
// }
const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

console.log(message);