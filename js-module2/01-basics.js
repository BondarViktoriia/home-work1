// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax', 'Viki'];
// console.table(friends);

// console.log(friends[1]);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// Для замены в массиве
// friends[2] = 'Petr';
// friends[3] = 6080;
// console.log(friends);

// Примитивы и сложные типы
// 1Передача по значению
// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;
// console.log(a);
// console.log(b);

// 2Передача по ссылке (лежит ссыдка на одно и тоже место в памяти 500 присвоиться и а и в)
// const a = [1, 2, 3];
// const b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;
// console.log('a', a);
// console.log('b', b);

// console.log(a === b);
// console.log([1, 2, 3] === [1, 2, 3]);



// Перебор (итрация) массива
// -for если нужен индекс или нужно изменить элемент массива
// -for ... of -если индекс не нужен и в массиве ничего менять не нужно

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
console.table(friends);

// for (let i = 0; i <= friends.length - 1; i += 1) {
//     console.log(friends[i]);
// }

// for (let i = 0; i <= friends.length - 1; i += 1){
//     friends[i] += 'name';
// }
// console.table(friends);

for (const friend of friends) {
    // iterable = friends  variable = локальная переменная доступная только в этих скобках
    console.log(friend);

}