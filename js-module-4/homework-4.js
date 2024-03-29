// Дополни код так, чтобы в переменной result был результат выполнения функции
// makePizza, а в переменной pointer была ссылка на функцию makePizza.

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

////////////////////////////////////////////////////////////////

// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром
//     (параметр callback) колбэк - функцию и возвращала ее вызов.
//     Функция deliverPizza или makePizza будет передаваться как колбэк
//      и ожидать аргументом имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
    
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
    
//     return callback (pizzaName);
    
// }

////////////////////////////////////////////////////////////////////
// Дополни второй вызов функции makePizza(pizzaName, callback),
//     передав вторым аргументом инлайн колбэк - функцию eatPizza(pizzaName),
//         которая логирует строку "Eating pizza <имя пиццы>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`)
// });

//////////////////////////////////////////////////////////////////////
// Функция calculateTotalPrice(orderedItems) принимает
//  один параметр orderedItems - массив чисел,
//     и рассчитывает общую сумму его элементов,
//     которая сохраняется в переменной totalPrice
//         и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она
//  использовала метод forEach.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (orderedItem,index) {
//     totalPrice += orderedItem;
//   })

//   // Change code above this line
//   return totalPrice;
// }

/////////////////////////////////////////////////////////////////////////

// Функция filterArray(numbers, value) принимает массив чисел numbers
// и возвращает новый массив, в котором будут только те элементы оригинального
// массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала
//  метод forEach.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//     numbers.forEach(function (number, index) {
//         if (number > value) {
//             filteredNumbers.push(number);
//       }
//   })

//   // Change code above this line
//   return filteredNumbers;
// }

//////////////////////////////////////////////////////

// Функция getCommonElements(firstArray, secondArray) принимает два массива
// произвольной длины в параметры firstArray и secondArray,
//     и возвращает новый массив их общих элементов,
//         то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она
// использовала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//     firstArray.forEach(function (firstArray, index) {
//         if (secondArray.includes(firstArray)) {
//             commonElements.push(firstArray);
//     }
// })

//   return commonElements;
//   // Change code above this line
// }

///////////////////////////////////////////////////////////////

// Выполни рефакторинг функции calculateTotalPrice() так,
//     чтобы она была объявлена как стрелочная.

// const calculateTotalPrice=(quantity, pricePerItem)=> {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

//////////////////////////////////////////////

// Выполни рефакторинг функции calculateTotalPrice()
// так, чтобы она использовала неявный возврат.

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

///////////////////////////////////////////////////////

// Выполни рефакторинг функции calculateTotalPrice(orderedItems)
//  заменив её объявление на стрелочную функцию.Замени коллбек - функцию
// передаваемую в метод forEach() на стрелочную функцию.

// Change code below this line
// const calculateTotalPrice =orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item=> {
//     totalPrice += item;
//   });

//   return totalPrice;
// }

// Change code above this line

/////////////////////////////////////////////////////////////////

// Замени объявление функции filterArray() и коллбек для метода
// forEach() на стрелочные функции.

// const filterArray = (numbers, value)=> {
//   const filteredNumbers = [];

//   numbers.forEach(number=> {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

////////////////////////////////////////////////////////////////////////

// Замени объявление функции getCommonElements() и коллбек для метода forEach()
// на стрелочные функции.

// const getCommonElements =(firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element=> {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

//////////////////////////////////////////////////////////////////////

// Функция changeEven(numbers, value) принимает массив чисел numbers
// и обновляет каждый элемент, значение которого это чётное число,
//     добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой -
//     не изменяла массив чисел numbers, а создавала,
//         наполняла и возвращала новый массив с обновлёнными значениями.

// function changeEven(numbers, value) {
//   // Change code below this line
//     let newArray = [];
//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//            newArray.push(number+value);
//     } else{
//           newArray.push(number);
//     }
// })
//     return newArray;
//   // Change code above this line
// }

//////////////////////////////////////////////////////////////////////

// Дополни код так, чтобы в переменной planetsLengths получился массив
// длин названий планет.
//  Обязательно используй метод map().
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

///////////////////////////////////////////////////////////////////////
// спользуя метод map() сделай так, чтобы в переменной titles получился массив
// названий книг(свойство title) из всех объектов массива books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles);

//////////////////////////////////////////////////////////////////

// Используя метод flatMap() сделай так, чтобы в переменной genres получился
//  массив всех жанров книг(свойство genres) из массива книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);

// console.log(genres);

////////////////////////////////////////////////////////////////

// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён
// пользователей (свойство name) из массива объектов в параметре users.
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUserName = users.map(user => user.name);
// console.log(getUserName);

// const getUserNames = users => {
//   return users.map(user=> user.name)

//   };

////////////////////////////////////////////////////////////////
// Дополни функцию getUserEmails(users) так, чтобы она возвращала массив
// почтовых адресов пользователей
//     (свойство email) из массива объектов в параметре users.

// const getUserEmails = users => {
//     return users.map(user=>user.email)

//   };
///////////////////////////////////////////////////////////////////

// Дополни код так, чтобы в переменной evenNumbers получился
//  массив чётных чисел из массива numbers,
//   а в переменной oddNumbers массив нечётных.
//  Обязательно используй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number=>number%2 === 0);
// const oddNumbers = numbers.filter(number=>number%2!==0);

// console.log(evenNumbers);
// console.log(oddNumbers);

////////////////////////////////////////////////////////////////////

// Дополни код так, чтобы в переменной allGenres был массив всех жанров
// книг(свойство genres) из массива books,
//   а в переменной uniqueGenres массив уникальных жанров - без повторений.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// const allGenres = books.flatMap(book=>book.genres);
// const uniqueGenres = allGenres.filter((genre,index,array)=> array.indexOf(genre)===index);

// console.log(allGenres);
// console.log(uniqueGenres);
////////////////////////////////////////////////////////////////

// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых
//   (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором
// с именем(свойство author) которое совпадает со значением в переменной AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book=>book.rating>=MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

////////////////////////////////////////////////////////////////////

// Дополни функцию getUsersWithEyeColor(users, color) так,
//   чтобы она возвращала массив пользователей у которых цвет
// .глаз(свойство eyeColor) совпадает со значением параметра color.
// const getUsersWithEyeColor = (users, color) => {
//  return users.filter(user=>user.eyeColor === color)

// };
// console.log(getUsersWithEyeColor(users,'blue'));

/////////////////////////////////////////////////////////////////
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так,
//   чтобы она возвращала массив пользователей, возраст которых
//     (свойство age) попадает в промежуток от minAge до maxAge.

// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(user=>user.age >= minAge && user.age<=maxAge)

// };
// // Change code above this line

//////////////////////////////////////////////////////////////////

// Дополни функцию getUsersWithFriend(users, friendName) так,
//   чтобы она возвращала массив пользователей у которых есть
//   друг с именем в параметре friendName.
//  Массив друзей пользователя хранится в свойстве friends.

// const getUsersWithFriend = (users, friendName) => {
//    return users.filter(
//      user => user.friends.includes(friendName))
// };

///////////////////////////////////////////////////////////////////////

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей
//  всех пользователей(свойство friends).У нескольких пользователей могут быть
//   одинаковые друзья,
//   сделай так чтобы возвращаемый массив не содержал повторений.

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39
  }
];
// const getFriends = (users) => {
  
//    const friendsGet=users.flatMap(user => user.friends);
//    return friendsGet.filter((friend, index, array) => array.indexOf(friend) === index)

// }

///////////////////////////////////////////////////////

// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив
// активных пользователей,
//     значение свойства isActive которых true.
// const getActiveUsers = (users) => {
//    return users.filter(user => user.isActive);
// };

//////////////////////////////////////////////////////
// Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив
// неактивных пользователей, значение свойства isActive которых false.

// const getInactiveUsers = (users) => {
//     return users.filter(user => !user.isActive);
// };


// ///////////////////////////////////////////////////////////

// Используя метод find() дополни код так, чтобы:

// В переменной bookWithTitle получился объект книги название которой
//     (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который
//     (свойство author) совпадает со значением переменной AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book=>book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book=>book.author===AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);

////////////////////////////////////////////////////////////////////

// Дополни функцию getUserWithEmail(users, email) так, чтобы она
// возвращала объект пользователя, почта которого
//     (свойство email) совпадает со значением параметра email.

// const getUserWithEmail = (users, email) => {
//     return users.find(user => user.email === email);
// };


///////////////////////////////////////////////////////////////
// Используя метод every() дополни код так, чтобы:

// В переменной eachElementInFirstIsEven был результат проверки
//  всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки
// всех элементов массива firstArray на нечётность.
// В переменной eachElementInSecondIsEven был результат проверки
//  всех элементов массива secondArray на чётность.
// В переменной eachElementInSecondIsOdd был результат проверки
// всех элементов массива secondArray на нечётность.
// В переменной eachElementInThirdIsEven был результат проверки
// всех элементов массива thirdArray на чётность.
// В переменной eachElementInThirdIsOdd был результат проверки
// всех элементов массива thirdArray на нечётность.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value=>value%3===0);

// const eachElementInSecondIsEven = secondArray.every(value=>value%2===0);
// const eachElementInSecondIsOdd = secondArray.every(value=>!value%2===0);

// const eachElementInThirdIsEven = thirdArray.every(value=>value%2===0);
// const eachElementInThirdIsOdd = thirdArray.every(value=>value%3===0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);

// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);

// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);


//////////////////////////////////////////////////////////////////////
// Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все
// ли пользователи сейчас активны
//     (свойство isActive) и возвращала true или false.


// const isEveryUserActive = (users) => {
//    return users.every(user=> user.isActive === true)
// };

//////////////////////////////////////////////////////

// Используя метод some() дополни код так, чтобы:

// В переменной anyElementInFirstIsEven был результат проверки
//  наличия чётных элементов в массиве firstArray.
// В переменной anyElementInFirstIsOdd был результат проверки
// наличия нечётных элементов в массиве firstArray.
// В переменной anyElementInSecondIsEven был результат проверки
// наличия чётных элементов в массиве secondArray.
// В переменной anyElementInSecondIsOdd был результат проверки
// наличия нечётных элементов в массиве secondArray.
// В переменной anyElementInThirdIsEven был результат проверки
// наличия чётных элементов в массиве thirdArray.
// В переменной anyElementInThirdIsOdd был результат проверки
// наличия нечётных элементов в массиве thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(value=>value%2===0);
// const anyElementInFirstIsOdd = firstArray.some(value=>value%5 === 0);

// const anyElementInSecondIsEven = secondArray.some(value=>value%2===0);
// const anyElementInSecondIsOdd = secondArray.some(value=>!value%2===0);

// const anyElementInThirdIsEven = thirdArray.some(value=>value%2===0);
// const anyElementInThirdIsOdd = thirdArray.some(value=>!value%2===0);

// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);

// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);

// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);

//////////////////////////////////////////////////////////////////
// Дополни функцию isAnyUserActive(users) так, чтобы она проверяла
//  наличие активных пользователей(свойство isActive) и возвращала
// true или false.

// const isAnyUserActive = users => {
//     return users.some(user => user.isActive === true);
// };

//////////////////////////////////////////////////////////////////
// Игровому сервису необходим функционал подсчёта среднего времени проведённого
//  в играх.Дополни код так, чтобы в переменной totalPlayTime
//  получилось общее игровое время из массива playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((firstPlayer, nextPlayer) => {
//     return firstPlayer + nextPlayer;
// },0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);

// console.log(averagePlayTime);

/////////////////////////////////////////////////////////////////////

// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре
//  для каждого игрока, и получить общую сумму этих времён.
//  Рассчитать время для каждого из игроков, можно разделив
//  его время(свойство playtime) на количество игр(свойство gamesPlayed).

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total,player) => {
//  return   total +player.playtime/ player.gamesPlayed;
// },0);


////////////////////////////////////////////////////////////////////////

// Дополни функцию calculateTotalBalance(users) так, чтобы она считала
//  и возвращала сумму всех средств(свойство balance) которые хранят
//  пользователи из массива users.

// const calculateTotalBalance = users => {
//     return users.reduce((total,user)=> total + user.balance,0)
   
// };
// console.log(calculateTotalBalance(users,users.length));

///////////////////////////////////////////////////////////////////

// Дополни функцию getTotalFriendCount(users) так, чтобы она считала
// и возвращала общее количество друзей
//     (свойство friends) всех пользователей из массива users.

// const getTotalFriendCount = users => {
//    return users.reduce((total,user)=> total + user.friends.length,0)
// };
  
// console.log(getTotalFriendCount(users,users.length));

///////////////////////////////////////////////////////////////////

// Дополни код так, чтобы в переменной ascendingReleaseDates получилась
//  отсортированная по возрастанию копия массива releaseDates,
//     а в переменной alphabeticalAuthors копия массива имён
//     авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

////////////////////////////////////////////////////////////////
// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания,
//   по её возрастанию или убыванию.Дополни код так, чтобы в переменной
//   ascendingReleaseDates получилась отсортированная по возрастанию
//    копия массива releaseDates, а в переменной descendingReleaseDates
//    копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=>a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b)=>b-a);

/////////////////////////////////////////////////////////////

// Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания,
//   по её возрастанию или убыванию.Дополни код так, чтобы в переменной
//    ascendingReleaseDates получилась отсортированная
//     по возрастанию копия массива releaseDates,
//   а в переменной descendingReleaseDates копия отсортированная по убыванию.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a,b)=>a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b)=>b-a);

////////////////////////////////////////////////////////////////

// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору,
//   в алфавитном и обратном алфавитном порядке.Дополни код так,
//   чтобы в переменной authorsInAlphabetOrder получилась отсортированная
//      по алфавиту копия массива authors,
//   а в переменной authorsInReversedOrder копия отсортированная
//   в обратном алфавитном порядке.

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a,b)=>a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a,b)=>b.localeCompare(a));

//////////////////////////////////////////////////////////////////////


// Дополни код так, чтобы:

// В переменной sortedByAuthorName получился массив книг отсортированный
//  по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг
//  отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный
// по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный
// по убыванию рейтинга.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//   firstAuthor.author.localeCompare(secondAuthor.author));

// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
// secondAuthor.author.localeCompare(firstAuthor.author));

// const sortedByAscendingRating = [...books].sort((firstReiting, secondReiting) =>
// firstReiting.rating - secondReiting.rating);

// const sortedByDescentingRating = [...books].sort((firstReiting, secondReiting) =>
// secondReiting.rating- firstReiting.rating);



// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);

//////////////////////////////////////////////////////////////////////
// Дополни функцию sortByAscendingBalance(users) так, чтобы она
// возвращала массив пользователей отсортированный по возрастанию
//  их баланса(свойство balance).

// const sortByAscendingBalance = users => {
//   return [...users].sort((firstBalance, secondBalance) => firstBalance.balance - secondBalance.balance);
// };

////////////////////////////////////////////////////////////////////

// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она
// возвращала массив пользователей отсортированный по убыванию
//  количества их друзей(свойство friends).
// Change code below this line
// const sortByDescendingFriendCount = users => {
//     return [...users].sort((a, b) => b.friends.length-a.friends.length);

// };

// console.table(sortByDescendingFriendCount (users,users.friends));


/////////////////////////////////////////////////////////////////////

// Дополни функцию sortByName(users) так, чтобы она возвращала массив
// пользователей отсортированный по их имени(свойство name)
// в алфавитном порядке.
// const sortByName = users => {
//    return [...users].sort((a,b)=>a.name.localeCompare(b.name))
// };

////////////////////////////////////////////////////////////////

// Дополни код так, чтобы в переменной names получился массив
//  имён авторов в алфавитном порядке, рейтинг книг которых больше
//  значения переменной MIN_BOOK_RATING.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books

//  .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a, b) => a.localeCompare(b));
  
// console.log(names);

//////////////////////////////////////////////////////////////////
// Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она
// возвращала массив имён пользователей отсортированный по возрастанию
// количества их друзей(свойство friends).

// const getNamesSortedByFriendCount = users => {
//      return [...users]
//   .sort((a,b)=>a.friends.length - b.friends.length)
//   .map(({name})=>name)

// };

//////////////////////////////////////////////////////////////////
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала
//  массив уникальных имён друзей(свойство friends) отсортированный
//   по алфавиту

// const getSortedFriends = users => {
//   return [...users]
//      .flatMap(user=>user.friends)
//     .filter((user, index, array) => array.indexOf(user) === index)
// .sort((a,b)=>a.localeCompare(b))
// };

// console.log(getSortedFriends(users,users.friends));

//////////////////////////////////////////////////////////////////

// Дополни функцию getTotalBalanceByGender(users, gender) так,
//   чтобы она возвращала общий баланс пользователей(свойство balance),
//     пол которых(свойство gender) совпадает со значением параметра gender.

const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter(user => user.balance)
    .reduce((previousValue, number)=>previousValue.gender+number)
  
  
};
console.log(getTotalBalanceByGender(users));