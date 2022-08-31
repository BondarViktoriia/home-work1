// const petya = {
//     username: 'Petya',
//     showName() {
//         console.log(petya.username);
//     }
// }
// petya.showName();

// const petya = {
//     username: 'Petya',
//     showName() {
//         console.log(this.username);
//     }
// }
// petya.showName();

//////////////////////////////////////////////////////

// const bookShelf = {
//     authors: ["Бернард Корнуэлл", "Роберт Шекли"],
//     getAuthors() {
//         return this.authors;
//     },
//     addAuthor(authorName) {
//         this.authors.push(authorName);
//     },
// };

// console.log(bookShelf.getAuthors());
// bookShelf.addAuthor("Ли Танит");
// console.log(bookShelf.getAuthors());


///////////////////////////////////////////////////////
// this в глобальной области видимости

// function foo() {
//     console.log(this);
// }
// foo();

///////////////////////////////////////////////////////////

// this в методе объекта

// const petya = {
//     username: 'Petya',
//     showThis() {
//         console.log(this);
//     },
//     showName() {
//         console.log(this.username);
//     },
// };
// petya.showThis();
// petya.showName();

////////

// function showThis() {
//     console.log('this in showThis:', this);
// }
// showThis();

// const user = {
//     username: 'Mango',
// };
// user.showContext = showThis;
// user.showContext();

/////////////////////////////////////////////////////////////

// this в callback-функциях

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//     console.log('Обрабатываем заявку от ${callback()}.');
// }
// makeMessage(customer.getFullName);

/////////////////////////////////////////////////////////////

// this в стрелочных функциях
// const showThis = () => {
//     console.log('this in showThis:', this);
// };
// showThis();

// const user = {
//     username:'Mango',
// }
// user.showContex = showThis;
// user.showContex();

/////////////////////////////////////

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрелки запоминают контекст во время объявления,
//       // из родительской области видимости
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();

/////////////////////////////////////////////////////////////////////////////

// Метод call()

// function greetGuest(gretting) {
//     console.log(`${gretting}, ${this.username}`);
// }
// const mango = {
//     username: 'Mango',
// };
// const poly = {
//     username: 'Poly'
// }
// greetGuest.call(mango, 'Welcome');
// greetGuest.call(poly, 'Welcome');

///////////////////////////////////////////

// Метод apply

// function greetGuest(gretting) {
//     console.log(`${gretting},${this.username}`);
// }
// const mango = {
//     username: 'Mango'
// };
// const poly = {
//     username: 'Poly'
// };

// greetGuest.apply(mango, ['Welcome']);
// greetGuest.apply(poly, ['Welcome']);

/////////////////////////////////////////////////

// Метод bind()

// function greet(clientName) {
//     return console.log(`${clientName}, welcome in <<${this.service}>>.`);
// }
// const steam = {
//     service: 'Steam',
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter('Poly');

// const gmail = {
//     service: 'Gmail',
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter('Mango');


//////////////////////////////////////////////////////////
// bind() и методы объекта

// const customer = {
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };

// function makeMessage(callback) {
//     console.log(`Обрабатываем заявку от ${callback()}`);
// }
// makeMessage(customer.getFullName.bind(customer));