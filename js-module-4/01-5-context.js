// Контекст стрелки

// Контекст внутри стрелки определяется местом ее обьявления , а не вызова
// и ссылается на контекст родительской функции

// const showThis = () => {
//     console.log('this in showThis', this);
// };
// showThis();

// const user = { name: 'Mango' };
// user.showContex = showThis;

// user.showContex();

////////////////////////////////////////

// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this', this);
//         console.log('this.fullname', this.fullName);

//         const inner = () => {
//             console.log('this in inner', this);
//         };

//         inner();
//     },
// };
// user.showName();

//////////////////////////

// Никогла не используйте стрелки как методы обьекта.

// showName:() => !!!!!не работает

// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this', this);
//         console.log('this.fullName', this.fullName);
//     },
// };

// user.showName();


///////////////////////////////////////////////////
// Стрелки -конструкторы

// const User = function (name) {
//     this.name = name;
// }

// console.log(new User ('Mango')); //////////////// User {name: 'Mango'}

// const User = name =>{
//     this.name = name;
// }

// console.log(new User ('Mango')); ///////////01-5-context.js:63 Uncaught TypeError: User is not a constructor


// const objA = {
//     x: 5,
//     showX() {
//         console.log(this.x);
//         const objB = {
//             y: 10,
//             // showThis:() => {
//             //     console.log('this on objB.showThis', this);
//             // },
//                         showThis() {
//                 console.log('this on objB.showThis', this);
//             },
//         };
//         objB.showThis();
//     },
// };
// objA.showX();