// Напиши функцию findLogin(allLogins, login) для поиска логина

const logins = ['mAngoDoge', 'kiwidab3st', 'poly1scute','ajx4xth3n4n' ];
// const loginToFind = 'poly1scute';

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`;
// console.log(message);

// const findLogin = function (allLogins, loginToFind) {
//     // console.log(allLogins);
//     // console.log(loginToFind);
//     // let message = `Пользователь ${loginToFind} не найден`;

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден`;
//         }

//     }
//     return `Пользователь ${loginToFind} не найден`;
// };

const findLogin = function (allLogins, loginToFind) {
    return logins.includes(loginToFind)
        ? `Пользователь ${loginToFind} найден`
        : `Пользователь ${loginToFind} не найден`;
    
};

console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'kiwidab3st'));
console.log(findLogin(logins, 'sycgjhcbhj'));
console.log(findLogin(logins, 'poly1scute'));