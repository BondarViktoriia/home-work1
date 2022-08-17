// Колбэк -функции

// function greet(name) {
//     return `Welcome ${name}`;
// }
// console.log(greet('Mango')); // Выводиться результат выполнения ф - ции
// console.log(greet);// Выводиться ссылка на ф-цию

// //////////////////////////////////////////////////////
// /Callback function
// function greet(name) {
//     console.log(`Welcome ${name}.`);
// }
// // Higher order function
// function regisretGuest(name, callback) {
//     console.log(`Check in guest ${name}.`);
//     callback(name);
// }
// regisretGuest('Poly', greet);

//////////////////////////////////////////////////////

// Инлайн колбэки

// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}`);
//     callback(name);
// };
// // Передаём инлайн функцию greet как колбэк
// registerGuest('Mango', function greet(name) {
//     console.log(`Добро пожаловать ${name}`);
// });
// // Передаём инлайн функцию notify как колбэк.
// registerGuest('Poly', function notify(name) {
//     console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

/////////////////////////////////////////////////////

// Несколько колбэков

// function processCall(recipient) {
//     // Имитируем доступность абонента случайным числом
//     const isRecipientAvaliable = Math.random() > 0.5;

//     if (!isRecipientAvaliable) {
//         console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//         // Логика активации автоответчика
//     } else {
//         console.log(`Соединяем с ${recipient}, ожидайте...`);
//         // Логика принятия звонка
//     }

// }
// processCall('Poly');


// function processCall(recipient, onAvailable, onNotAvailable) {
//          // Имитируем доступность абонента случайным числом
//     const isRecipientAvaliable = Math.random() > 0.5;

//     if (!isRecipientAvaliable) {
//         onNotAvailable(recipient);
//         return;
//     }
//     onAvailable(recipient);

// }

// function takeCall(name) {
//     console.log(`Соединяем с ${name}, ожидайте...`);
//     // Логика принятия звонка
// }
// function activateAnsweringMachine(name) {
//     console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//     console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//       // Логика записи голограммы
// }

// processCall('Mango', takeCall, activateAnsweringMachine);
// processCall('Poly', takeCall, leaveHoloMessage);

////////////////////////////////////////////////////////////

// Необходимо написать логику обработки заказа пиццы.
//  Выполни рефакторинг метода order так, чтобы он принимал вторым
//  и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName,
//     метод order должен возвращать результат вызова колбэка onError,
//     передавая ему аргументом строку
// "There is no pizza with a name <имя пиццы> in the assortment."

// Если в свойстве pizzas есть пицца с названием из параметра pizzaName,
//     метод order должен возвращать результат вызова колбэка onSuccess,
//         передавая ему аргументом имя заказанной пиццы.

// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов.
//  Пожалуйста ничего там не меняй.

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName,makePizza,onOrderError) {
//     if(this.pizzas.includes(pizzaName)){
//       return console.log(makePizza(pizzaName));;
//     }
//     return console.log(onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
// );  },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

///////////////////////////////////////////////////////////////

// Абстрагирование повторения
// function repeatLog(n) {
//     for (let i = 0; i < n; i+=1) {
//         console.log(i);
//     }
// };
// repeatLog(8);

// function printValue(value) {
//     console.log(value);
// }
// function prettyPrint(value) {
//     console.log('Logging value:', value);
// }
// function repeat(n,action) {
  
//     for (let i = 0; i < n; i+=1) {
//         action[i];
        
//     }
// }
// repeat(3, printValue);
// repeat(3, prettyPrint);

/////////////////////////////////////////////////////////////////////
// Метод forEach

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i+=1) {
//    console.log(`Индекс ${i}, значение ${numbers[i]}`);
// };

// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//     console.log(number);
//    console.log(`Индекс ${index}, значение ${number}`);
// });

// Стрелочные функции

// const arrowAdd = (a, b, c) => {
//     return a + b + c;
// }

// Если параметр один, его объявление может быть без круглых скобок.

// const add = a => {
//     return a + 5;
// }

// const greet = () => {
//     console.log("Hello");
// }

////////////////////////////////////////////////////////////////////

// Неявный возврат

// явный возврат (explicit return)

// const add = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// }
// неявный возврат (implicit return)

// const add = (a, b, c) => a + b + c;

//////////////////////////////////////////////////////////////////

// Псевдомассив arguments

// const add = (...args) => {
//     console.log(args);
// };
// add(1, 2, 3);

//////////////////////////////////////////////////////////////////

// Стрелочные функции как коллбеки

// const numbers = [5, 10, 15, 20, 25];
// // Объявление функции
// // numbers.forEach(function (number, index) {
// //     console.log(`Индекс ${index}, значение ${number}`);
// // }
// // );

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//     console.log(`Индекс ${index}, значение ${number}`);
// })

// const numbers = [5, 10, 15, 20, 25];
// const logMessage = (number, index) => {
//     console.log(`Индекс ${index}, значение ${number}`);
// }
// numbers.forEach(logMessage);

///////////////////////////////////////////////////////////////

// Императивный vs декларативный

// Императивный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i+=1) {
//     if (numbers[i] > 3) {
//         filteredNumbers.push(numbers[i]);
//    }
    
// }
// console.log(filteredNumbers);

// / Декларативный подход

// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers);