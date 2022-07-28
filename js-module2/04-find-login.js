// Напиши скрипт поиска логина ,
// --если логина нет выводиться сообщение "Пользователь [логин] не найден"
// ---Если логин есть вывести сообщени "Пользователь [логин] найден"

const logins = ['mAngoDoge', 'kiwidab3st', 'poly1scute','ajx4xth3n4n' ];
const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден`;

// 1 Самый простой метод перебрать через for и каждый метод сравнить
// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
// }
   
// }
// console.log(message);
 
// 2. for ...of
  
// for (const login of logins) {
//     console.log('Login', login);
//     console.log(`${login}===${loginToFind}:` , login === loginToFind);

//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//     }
// }
// console.log(message)

// 3. Метод includes () с тернарным оператором 
// Это метод массива который скрывает под капаотом его перебор, проверку на вхождение.
// И он возвращает да или нет.Это называется акбстракция

const message = logins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден`
    : `Пользователь ${loginToFind} не найден`;
console.log(message);
