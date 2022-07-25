// Напиши скрипт подсчета от суммы покупки со скидкой в зависимости
// от  потраченной суммы за все время (партнерская программа)

// Общая сумма потраченого хранится в перемнной totalSpent
// Сумма текущего платежа хранится в переменной payment

// -если потрачено от(100 - 1000) - бронзовый партнер скидка 2 %
//     -если потрачено(от 1000 до 5000) - серебряный партнер, скидка 5 %
//     -если потрачено(от 5000) - золотой партнер, скидка 10 %
//     -если потрачено меньше 100, не партнер скидка 0%

let totalSpent = 10000;
let payment = 300;
let discount = 0;

 if (totalSpent >= 100 && totalSpent < 1000) {
    console.log('бронзовый партнер скидка 2 %');
    discount = 0.02;

} else if (totalSpent >= 1000 && totalSpent < 5000) {
    console.log('серебряный партнер, скидка 5 %');
    discount = 0.05;
} else if (totalSpent>5000) {
    console.log('золотой партнер, скидка 10 %');
    discount = 0.1;
} else  {
    console.log('не партнер скидка 0%')
}
// payment = payment - payment * discount;
payment -= payment * discount

console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

totalSpent += payment;
console.log(`Общая сумма потраченная в магазине: ${totalSpent}`);