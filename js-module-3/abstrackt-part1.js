// const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     isPublic: true,
//     rating: 8.38,
// };
// console.log(book);

// .................Вложенные свойства....................

// const user = {
//     name: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: {
//         country: 'Ukraine',
//         city: 'Kharkiv',
//     },
//     stats: {
//         followers: 5489,
//         views: 4869,
//         likes: 2569,
//     },
// };
// console.log(user);


// ..................Обращение к свойствам через точку..............

// const book = {
//     title: 'the Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['historical prose', 'adventure'],
//     isPublic: true,
//     rating: 8.38,
// };
// const bookTitle = book.title;
// console.log(bookTitle);
// const bookAuthor = book.author;
// console.log(bookAuthor);
// const bookGenres = book.genres;
// console.log(bookGenres);
// const bookPublic = book.isPublic;
// console.log(bookPublic);
// const bookRating = book.rating;
// console.log(bookRating);

//..................... Обращения к вложенным свойствам..................
// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location);
// const city = user.location.city;
// console.log(city);

// const hobbies = user.hobbies;
// console.log(hobbies);

// const ferstHobbies = user.hobbies[0];
// console.log(ferstHobbies);

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies);


//............. Обращение к свойствам через квадратные скобки..............
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book['title'];
// console.log(bookTitle);

// const bookGenres = book['genres'];
// console.log(bookGenres);

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor);


// .................Изменение значения свойства...............
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.rating = 7.6;
// console.log(book.rating);
// book.genres.push = "romantic";
// console.log(book);

// .................Добавление свойств.............
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 456;

// book.translation = ['ua', 'uk'];
// console.log(book);

// ..............Короткие свойства................
// Старый метод--------------------------
// const nameHero = "Генри Сибола";
// const age = 25;

// const user = {
//   name: nameHero,
//   age: age,
// };

// console.log(user);

// Новый метод-----------------------
// const nameHero = "Генри Сибола";
// const age = 25;

// const user = {
//     nameHero,
//     age,

// };
// console.log(user);

// ................Вычисляемые свойства................

// const ageHero = 'age';

// const user = {
//     nameHero : "Prokofiy"
// }
// user[ageHero] = 35;

// console.log(user);


// ...................Методы объекта.....................

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     console.log("Этот метод будет возвращать все книги - свойство books");
//   },
//   // Это метод объекта
//   addBook(newBook) {
//     console.log("Этот метод будет добавлять новую книгу в свойство books");
//   },
// };

// // Вызовы методов
// bookShelf.getBooks('');
// bookShelf.addBook("Новая книга");
// console.log(bookShelf.getBooks);

// .............Доступ к свойствам объекта в методах.......

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед точкой стоит объект bookShelf,
// // поэтому при вызове метода, this будет хранить ссылку на него.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']


// .......................Перебор объекта......................

// <<<<<<<<<<<<<<Цикл for...in>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//     console.log(key);
//     console.log(book[key]);
// }


// ...................Метод hasOwnProperty()....................

// const animal = {
//     legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(animal);
// console.log(dog);
// console.log(dog.name);
// console.log(dog.legs);

// console.log(dog.hasOwnProperty('legs'));
// console.log(dog.hasOwnProperty('name'));


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Если это собственное свойство - выполняем тело if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Если это не собственное свойство - ничего не делаем
// }

// ...............Метод Object.keys()...................

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const keys = Object.keys(book);
// console.log(keys);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// const keys = Object.keys(book);

// for (const key of keys) {
//     console.log(key);
//     console.log(book[key]);
// }

// ................Метод Object.values().................

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// const value = Object.values(book);
// console.log(value);

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods);
// console.log(values);

// let total = 0;

// for (const value of values) {
//     total += value;
// }
// console.log(total);


//................ Метод Object.entries()...............

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// const entries = Object.entries(book);
// console.log(entries);


//...................... Массив обьектов...............

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    rating: 8.51,
  },
  {
    title: "Сон смешного человека",
    author: "Федор Достоевский",
    rating: 7.75,
  },
];
// console.log(books);

// for (const book of books) {
//     // console.log(book);
//     console.log(book.title);
//     console.log(book.author);
// }

// const bookNames = [];
//     for (const book of books) {
//         bookNames.push(book.title);
// }
// console.log(bookNames);

// let totalRairing = 0;

// for (const book of books) {
//     totalRairing += book.rating;
// }
// const averageRaiting = (totalRairing / books.length).toFixed(1);
// console.log(totalRairing);
// console.log(averageRaiting);
