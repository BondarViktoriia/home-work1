// Посчитать общую сумму покупок в корзине
const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;
// // 1)Перебрать массив по элементам
// for (let i = 0; i <= cart.length - 1; i += 1){
//     console.log(cart[i]);
//     total += cart[i];
    
// }
// // 2) создать перепенную тотал до цикла

// // 3) Каждый элемент приплюсовать к тоталу
// console.log(total);

// for (const value of cart) {
//     total += value;
// }
// console.log("Total:", total);

// Добавить такс

for (let i = 0; i < cart.length - 1; i += 1){
    cart[i] = Math.round(cart[i] * 20/100+cart[i]);
    total += cart[i];
}
console.log(cart);