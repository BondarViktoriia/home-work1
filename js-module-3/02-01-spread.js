// Операция spread (распыление)
// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];
// console.log(numbers);

// Поиск самой маленькой или большой температуры (числа)

// const temps = [18, 14, 12, 21, 17, 29, 24];
// console.log(Math.max(1, 4, 17, 5, 6));
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

////////////////////////////////////////////////////////
// СШиваем несколько массивов в один через concat( ) и spread
// const LastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// // const allTempsConcat = [LastWeekTemps.concat(currentTemps, nextWeekTemps)];
// // console.log(allTempsConcat);
// const allTemps = [...LastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);

///////////////////////////////////////////////////

// Распыление объектов
// Object.prototype.assign() and spread

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
// const c = {
//     userName: 'Mango',
//     x:10,
//     ...b,
//     ...a,
//     y: 20,
// };
// console.log(c);

// const defaultSettings = {
//     theme: 'light',
//     showNotification: true,
//     hideSidebar: false,
// };
// const userSettings = {
//     showNotification: false,
//     hideSidebar: true,
// }
// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings,
// }
// console.log(finalSettings);