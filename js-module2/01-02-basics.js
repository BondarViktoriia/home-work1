// const add = function (a, b) {
//     console.log(a);
//     console.log(b);
//     // const result = a + b;
//     // console.log('a+b:', result);
//     console.log('Выполняется функция add');

//     return a + b;
// }
// // Для того что бы вызвать функцию ====>
// const r1 = add(5, 3);
// console.log('r1: ',r1)
// const r2 = add(10, 15);
// console.log('r2:', r2);
// Для того чтобы что то вернуть из функции используется return

// const fn = function (value) {
    
//     console.log(1);
//     console.log(2);
//     // return 54;
//     // console.log(3);
//     // return 55;
//     if (value < 50) {
//         return "Меньше чем 50";
//     }
//         return "Больше чем 50";
    
// }
// console.log('Результат функции', fn(5));
// console.log('Результат функции', fn(200));

//////////////////////////////////////////.
// Стек вызовов
const fnA = function () {
    console.log("Выполняется функция А");
}
const fnB = function () {
    console.log("Выполняется функция B");
}
const fnС = function () {
    console.log("Выполняется функция С");
}
fnA();
fnB();
fnС();


