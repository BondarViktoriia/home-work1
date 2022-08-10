// const temps = [14, -4, 25, 8, 11];

// console.log(temps);
// console.log(Math.max(temps)); //NaN

// console.log(...temps); ///14 -4 25 8 11
// console.log(Math.max(...temps)); /// 25


////////////////////////////////////////////////////////

// spread: создание нового массива
// const temps = [14, -4, 25, 8, 11];
// const copyOfTemps = [...temps];
// console.log(copyOfTemps);



// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps);

//////////////////////////////////////////////////////

// spread: создание нового объекта
// const first = { propA: 5, propB: 10 };
// const second = { proptC: 15 };
// const third = { ...first, ...second };
// console.log(third);

// const first = { propA: 5, propB: 10 };
// const second = { propB: 50, propC: 20, propD: 25 };
// const third = { ...first, ...second };
// console.log(third); ///{propA: 5, propB: 50, propC: 20, propD: 25}
// const fourth = { ...second, ...first };
// console.log(fourth); ///{propB: 10, propC: 20, propD: 25, propA: 5}

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

/////////////////////////////////////////////////////////

// rest: сбор всех аргументов функции

// function multiply() {
//   // ...
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(...args) {
//     console.log(args);
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);


/////////////////////////////////////////////////////////////////

// rest: сбор части аргументов функции

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//     console.log(firstNumber);
//     console.log(secondNumber);
//     console.log(otherArgs);
// }
// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

////////////////////////////////////////////////////////

// Деструктуризация объектов

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? 'публичном' : 'закрытом';
// console.log(accessType);
// const message = `Книга ${book.title} автора ${book.author} с рейтингом ${book.rating} находится в ${accessType} доступею`

// console.log(message);

// const { title, author, genres, isPublic, rating, coverImage } = book;
// console.log(coverImage);

// const accessType = isPublic ? 'публичном' : 'закрытом';
// const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;

// console.log(message);

///////////////////////////////////////////////////////////////

// Значения по умолчанию

// const book = {
//     title: 'The Last Kingdom',
//     author : "Bernard Cornwell",
// }
// const { title,
//     author,
//     coverImage = "https://via.placeholder.com/640/480",
// } = book;
// console.log(title);
// console.log(coverImage);
// console.log(author);

//////////////////////////////////////////////////////////////

// Изменение имени переменной

// const firstBook = {
//     title: 'The last Kingdom',
//     coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
    
// };
// const {
//     title: firstTitle,
//     coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
// } = firstBook;

// console.log(firstTitle);
// console.log(firstCoverImage);

// const secondBook =  {
//     title: "Сон смешного человека",
// }
// const {
//     title: secondTitle,
//     coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
// } = secondBook;

// console.log(secondTitle);
// console.log(secondCoverImage);

//////////////////////////////////////////////////////////

// Деструктуризация в циклах

// const books = [{
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
// },
// {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
// },
// ];
// for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
//     console.log('/////////');
// }

// const books = [{
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
// },
// {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     rating: 8.51,
// },
// ];

// for (const book of books) {
//     const { title, author, rating } = book;
// console.log(title);
// console.log(author);
// console.log(rating);
// console.log('***********');
// }

// Example 2
// for (const {title, author, rating} of books) {
//     console.log(title);
// console.log(author);
// console.log(rating);
// }

////////////////////////////////////////////////////////////

// Глубокая деструктуризация

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//     name: userName,
//     tag,
//     stats:{followers, views:userViews, likes: userLikes}
// } = user;

// console.log(userName);
// console.log(tag);
// console.log(userViews);
// console.log(userLikes);

/////////////////////////////////////////////////////////////

// Деструктуризация массивов

// const rgb = [200, 255, 100]

// const [red, blue, green] = rgb;

// console.log(`R ${red}, B ${blue}, G ${green}`);

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// const rgb = [200, 255, 100];
// const [red, blue, green, alfa = 0.3] = rgb;
// console.log(`R: ${red}, B: ${blue}, G: ${green}, A: ${alfa}`);


// const rgb = [100, 200, 255];
// const [, , blue] = rgb;
// console.log(`Blue : ${blue}`);

/////////////////////////////////////////////////////////////////

// Паттерн «Объект параметров»

// doStuffWithBook({
//   title: "The Last Kingdom",
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
// });

// // function doStuffWithBook(book) {
// //   const { title, numberOfPages, downloads, rating, isPublic } = book;
// //   console.log(title);
// //   console.log(numberOfPages);
// //   // И так далее
// // }
// function doStuffWithBook({
//   title,
//   numberOfPages,
//   downloads,
//   rating,
//   isPublic,
// }) {
//   console.log(title);
//   console.log(numberOfPages);
//   // И так далее
// }