// Напиши скрипт выбора отеля по количеству звезд
// 1-20$ 2-30$ 3-50$ 4-70$ 5-120$
// Если в переменной stars что то кроме 1-5, выведи строку
// Такого количества звезд нет

// const stars = 4;
// let price

// if (stars === 1) {
    
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// }
//  else if (stars === 3) {
//     price = 50;
// }
//  else if (stars === 4) {
//     price = 70;
// }
//  else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого количества звезд нет');
// }
// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//      case 3:
//         price = 50;
//         break;
//      case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого количества звезд нет');
// }

// console.log(price);

// Напиши скрипт для выбора отеля 1,2 = 20$ 3,4 =70$ 5= 120$

// const stars = 5;
// let price

// if (stars === 1 || stars === 2) {
//         price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого количества звезд нет');
// }
// console.log(price);
// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;

//     case 3:
//      case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;
//     default:
//         console.log('Такого количества звезд нет');
// }

// console.log(price);


// Напиши скрипт выбора оптиции доставки товара
// Опции храняться в пересенной option: 1 - самовывоз 2- курьер 3 - почта

// В переменную  message записать сообщение в зависимости от опции
//  - "Вы сможете забрать товар завтра с 12:00 в нашем офисе"
//   - "Курьер доставит заказ завтра с 09:00-18:00"
//  - "Посылка будет отправлена сегодня"
//    - "Вам перезвонит менеджер"

// 1 Сделать переменные
// 2 Сделать switch 1 2 3
// 3 В каждом кейсе записать в сообщении строку
// 4 Сделать лог меседж
 
const option = 1;
let message = "";

switch (option) {
    case 1:
        message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
        break;
    case 2:
        message = 'Курьер доставит заказ завтра с 09:00-18:00';
        break;
    case 3:
        message = 'Посылка будет отправлена сегодня';
        break;
    
    default:
        message ='Вам перезвонит менеджер'
}
console.log(message);