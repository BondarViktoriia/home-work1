// const objC = {
//     z: 5,
// };
// console.log('objC',objC);
// console.log(objC.hasOwnProperty('x'));//false
// console.log(objC.hasOwnProperty('z'));//true (собсвенное свойство=][[[[[gt=============================================a            )  IU*OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO81111111111111111111111111111111~*]]]]])

// const objB = Object.create(objC);
// objB.y = 2;
// console.log('objB',objB);
// console.log(objB.y);
// console.log(objB.z);

// const objA = Object.create(objB);
// objA.x = 1;
// console.log('objA', objA);
// Цепочка прототипов строиться с конца

// console.log(objA.z);
// Свойство объекта прототипа можно перезаписать
// objA.z = 26;
// console.log(objA.z);//26
// console.log(objC);//5
// console.log(objA);//{x: 1, z: 26}
// Значение свойства перезапишеться только для objA, для objC
// значение останеться тем же. Создаст этот объект как собственный

// Это собственгое свойство обьекта
// console.log(objB.hasOwnProperty('y'));//true
// Это свойсто на объекте прототипе
// console.log(objA.hasOwnProperty('y'));//false

/////////////////////////////
// console.log(objA.jfhhfh);//undefined
// Получает undefined потому что такого свойства нет на прототипе

//////////////////////////

// const dummyObj = {
//     message:'Это собственное свойство объекта'
// }

// console.log(dummyObj.message);

// const dummyObj = Object.create({ message: 'Это свойство объекта прототипа' });
// dummyObj.message = 'Это собственное свойство объекта';
// console.log('dummyObj',dummyObj);
// console.log(dummyObj.message);


// Алгоритм поиска свойства в цепочке прототипов:
// 1. Поиск начинается с собственного свойста
// 2. Если свойства нет в собственных, то поиск переходит к цепочке прототипов
// 3. Поиск прекращается при первом совпадении(найдено свойство)
// 4.Возвращается значение свойства.(undefined)
