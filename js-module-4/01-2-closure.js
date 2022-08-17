
// Функция результатом своей работы может вернуть другую функцию
const fnA = function (parameter) {
    const innerVariable = "значение внутренней переменной функции fnA";

    const innerFuncton = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Это вызов  innerFunction');
    };
    return innerFuncton;
};
// const fnB = fnA(555);
// fnB();
// console.log(fnB);
///////////////////////////////////////////////////////
// Поваренок

// const makeDish = function (shefName, dish) {
//     console.log(`${shefName} готовит ${dish}`);
// };
// makeDish('Mango', "пирожок");
// makeDish('Mango', "омлет");
// makeDish('Mango', "чай");

// makeDish('Poly', "котлеты");
// makeDish('Poly', "суп");
// makeDish('Poly', "кофе");

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     };
//     return makeDish;
// };
// const mango = makeSheff('Mango');
// // console.log(mango);

// mango('пирожок');
// mango('омлет');

// const poly = makeSheff('Poly');

// poly('котлеты');
// poly('суп');



//////////////////////////////////////////////
// Округлятор

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDemicimals = Number(floatingPoint.toFixed(2));

// console.log(floatingPoint);
// console.log(someInt);
// console.log(withDemicimals);
// const number1 = 3.6678;
// const number2 = 4.1234;
// console.log(Number(number1.toFixed(3)));
// console.log(Number(number2.toFixed(4)));

// const rounder = function (number, piaces) {
//     return Number(number.toFixed(piaces));
// };
// console.log(rounder(3.4869, 2));
// console.log(rounder(5.6987, 3));
// console.log(rounder(45.6597, 1));

// const rounder = function (piaces) {
//     return function (number) {
//         return Number(number.toFixed(piaces));
//     }
// }
// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.4869));
// console.log(rounder3(5.6987));
// console.log(rounder2(45.6597));


///////////////////////////////////////////////////////

// Приватные данные

// const salaryManagerFactory = function (employeeName, baseSalary) {
//     let salary = baseSalary;

//     const changeBy = function (amount) {
//         salary += amount;
//     }
//     return {
//     raise(amount) {
//         changeBy(amount);
//     },
//     lower(amount) {
//         changeBy(amount);
//     },
//     current() {
//         return `Текущая зарплата ${employeeName} - ${salary}`
//     },
// };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager.current());