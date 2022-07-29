// Напиши функцию calculateTotalPrice(items)
// которая принимает массив цкен(чисел) и возвращает их сумму

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }
// console.log("Total:", total);

const calculateTotalPrice = function (items) {
    console.log("Items внутри функции:", items);
    let total = 0;

    for (const item of items) {
        total += item;
    }
    return total;
}
console.log(calculateTotalPrice([54, 28, 105, 70, 92, 17, 120, 12, 25, 90]));
console.log(calculateTotalPrice([10, 56, 156, 85, 96]));