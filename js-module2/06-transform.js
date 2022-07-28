// Написать скрипт, который объединяет все элементы массива в одно строковое значение

// Элементов может быть произвольное количество
// Пусть элементы массива будут разделены запятой
// --сначала через for
// --потом через join()

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//     string += friend+',';
// }
// string = string.slice(0, string.length - 1);
// console.log(string);
// Метод слайз не деструктивный , он не изменяет строку, а возвращает новую копию

const string = friends.join(", ");
console.log(friends);
console.log(string);