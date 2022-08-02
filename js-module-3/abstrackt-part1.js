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




