// Функция обратного вызова

// const fnA = function (message,callback) {
//     console.log(message);

//     // console.log(callback);
//     callback(50);
// };

// const fnB = function (number) {
//     console.log('это лог при вызове fnB',number);
// };
// fnA('hello',fnB);

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// };
// const add = function (x, y) {
//     return x + y;
// };
// const sub = function (x, y) {
//     return x - y;
// };
// doMath(2, 3, add);
// doMath(20, 10,sub);

// Анонимная функция (литерал функции) Инлайн функция,
// когда функция во внешнем коде не нужна
// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// };
// doMath(10, 5, function (x, y) {
//     return x + y;
// });
// doMath(80, 52, function (x, y) {
//     return x - y;
// });

// Отложеный вызов - регистрация событий

// const buttonRef = document.querySelector('.js-button');
// const handleButtonxClick = function () {
//     console.log('Клик по кнопке' + Date.now());
// }

// buttonRef.addEventListener('click', handleButtonxClick);

// //////////////////////////////////////

// const oneGetPositionSuccess = function (position) {
//     console.log(position);
// };
// const oneGetPositionError = function (error) {
//     console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(oneGetPositionSuccess, oneGetPositionError);

///////////////////////////////////////////////////////////////////

// Отложеный вызов: интервалы

// const callback = function () {
//     console.log('Через три секунда внутри колбека в таймауте');
// }
// console.log('В коде перед таймаутом');
// setTimeout(callback, 3000);
// console.log('В коде после таймауйта');

/////////////////////////////////////////////////////////////////////
// Фильтры

const filter = function (array, test) { 
    const filteredArray = [];
    for (const el of array) {
        console.log(el);
        const passed = test(el);
        if (passed) {
            filteredArray.push(el);
        }
    }
    return filteredArray;
};
// // 1Нужно передать фуекцию
// // 2 Функция получает элемент массива
// // 3 Если єлемент массива удовлетворяет условию, то функция вернет тру
// // 4Если єлемент массива не удовлетворяет условию, то функция вернет фалс

// const callback1 = function (value) {
//     return value >= 3;
// }
// const r1 = filter([1, 2, 3, 4, 5],callback1);
// console.log(r1);

// const r2 = filter([1, 2, 3, 4, 5, 6, 7], function (value) {
//     return value <= 4;
// });
// console.log(r2);

/////////////////////////////////////////////////////////////

// const fruits = [
//     { name: 'apple', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };
// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);


