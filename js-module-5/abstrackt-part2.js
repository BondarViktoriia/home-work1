///Процедурное программирование//////

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//     return baseSalary + overtime * rate;
// };
// console.log(getWage(baseSalary, overtime, rate));

///////Объектно-ориентированное программирование (ООП)///////

// const employee = {
//     baseSalary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage() {
//         return this.baseSalary + this.overtime * this.rate;
//     },
// };
// console.log(employee.getWage());

///////////////////////////////////////////////////////////////////

// Прототип объекта

// const animal = {
//     legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog);
// console.log(animal.isPrototypeOf(dog));

//////////////////////////

// console.log(dog.hasOwnProperty('name')); //true
// console.log(dog.name); //Mango

// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.legs); //4


///////////////////////////////////////////////////////////////
// Метод hasOwnProperty()

// const animal = {
//     eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//     console.log(key); /// barks, eats
// }

///////////////////////////

// obj.hasOwnProperty(prop)

// const animal = { eats: true, };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//     if (!dog.hasOwnProperty(key))
//         continue;
//     console.log(key); /// barks
// }

////////////////////////////////////////

// Object.keys(obj)

// const animal = { eats: true, };
// const dog = Object.create(animal);
// dog.barks = true;
// const dogKeys = Object.keys(dog);
// console.log(dogKeys); //['barks']

/////////////////////////////////////////////////////////////////////

// Объявление класса

// class User{

// }
// const mango = new User();
// console.log(mango); ///User {}

// const poly = new User();
// console.log(poly); /// User {}

////////////////////////////////////////////////////////////////

// Конструктор класса

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
// }

// const mango = new User('Mango', 'mango@gmail.com');
// console.log(mango);

// const poly = new User('Poly', 'poly@gmail.com');
// console.log(poly);

/////////////////////////////////////////////////////////

// Объект параметров

// class User{
//     constructor({ name, email }) {
//         this.name = name;
//         this.email = email;
//     }
// }

// const mango = new User({
//     name: 'Mango',
//     email: ' mango@gmail.com',
// });
// console.log(mango);

// const poly = new User({
//     name: 'Poly',
//     email: 'poly@gmail.com',
// });
// console.log(poly);

///////////////////////////////////////////////////////////////
// Методы класса

// class User{
//     constructor({ name, email }) {
//         this.name = name;
//         this.email = email;
//     }
//     getEmail() {
//     return this.email;
//     }
//     changeEmail(newEmail) {
//         this.email = newEmail;
//     }
// }

////////////////////////////////////////////////////////////
// Приватные свойства

// class User{
//     name;
//     #email;
//     constructor({ name, email }) {
//         this.name = name;
//         this.#email = email;
//     }
//     getEmail() {
//         return this.#email;
//     }
//     changeEmail(newEmail) {
//         this.#email = newEmail;
//     }
// }
// const mango = new User({
//     name: 'Mango',
//     emeil: 'mango@gmail.com',
// });
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); //mango@supermail.com
// // console.log(mango.#email); // ошибка

//////////////////////////////////////////////////////////////////

// Геттеры и сеттеры

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mango = new User({
//     name: 'Mango',
//     emeil:'mango@gmail.com',
// })
// console.log(mango.email); // undefined
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com

// set email(newEmail) {
//   if(newEmail === "") {
//     console.error("Ошибка! Почта не может быть пустой строкой!");
//     return;
//   }

//   this.#email = newEmail;
// }

/////////////////////////////////////////////////////////

// Статические свойства

// class User{
//     static Roles = {
//         ADMIN: 'admin',
//         EDITOR: 'editor',
//     };
//     #email;
//     #role;
//     constructor({ email, role }) {
//         this.#email = email;
//         this.#role = role;
//     }
//     get role() {
//         return this.#role;
//     }
//     set role(newRole) {
//         this.#role = newRole;
//     }
// }
// const mango = new User({
//     email: 'mango@mail.com',
//     role: User.Roles.ADMIN,
// });
// console.log(mango.Roles);//undefined
// console.log(User.Roles); //{ADMIN: 'admin', EDITOR: 'editor'}

// console.log(mango.role);// admin
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); //editor

//////////////////////////////////////////////////////////////////
// Статические методы

// class User{
//     static #takenEmails = [];
//     static isEmailTaken(email) {
//         return User.#takenEmails.includes(email);
//     }
//     #email;
//     constructor({ email }) {
//         this.#email = email;
//         User.#takenEmails.push(email);
//     }
// }
// const mango = new User({
//     email:'mango@gmail.com',
// })
// console.log(User.isEmailTaken('poly@gmail.com'));// false
// console.log(User.isEmailTaken("mango@gmail.com")); //true


/////////////////////////////////////////////////////////////////
// Наследование классов

// class User{
//     #email;
//     constructor(email) {
//         this.#email = email;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }
// class ContentEditor extends User{

// }
// const editor = new ContentEditor('mango@gmail.com');
// console.log(editor);//{#email: 'mango@gmail.com'}
// console.log(editor.email); //mango@gmail.com

/////////////////////////////////////////////////////////////////
// Конструктор дочернего класса

// class User{
//     #email;
//     constructor(email) {
//         this.#email = email;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }
// class ContentEditor extends User{
//     constructor({ email, posts }) {
//         super(email);
//         this.posts = posts;
//     }
// }

// const editor = new ContentEditor({
//     email: 'mango@gmail.com',
//     posts: [],
// });
// console.log(editor);//{posts: Array(0), #email: 'mango@gmail.com'}
// console.log(editor.email);//mango@gmail.com
// console.log(editor.posts);

///////////////////////////////////////////////////////////////////
// Методы дочернего класса
// class User{
//     #email;
//     constructor(email) {
//         this.#email = email;
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }
// class ContentEditor extends User{
//     constructor({ email, posts }) {
//         super(email);
//         this.posts = posts;
//     }
//     addPost(post) {
//         this.posts.push(post);
//     }
// }
// const editor = new ContentEditor({
//     email: 'mango@gmail.com',
//     posts: [],
// });
// console.log(editor);//{posts: Array(0), #email: 'mango@gmail.com'}
// editor.addPost('post-1');
// console.log(editor.posts); //['post-1']