// Основы ООП : класс, экземпляр(объект) , интерфейс

// console.log([]);
// Интерфейс набор доступных свойст и методов

// Функция -конструктор
// -Именнование (с большой буквы и имя существительное в единсвенном числе)
//  - Оператор NEW
//  - Свойство Function.prototype

// const Car = function (brand,model,price) {
//     // 2. Функция вызывается в контекте созданого объекта,
//     // т.е. в this записывается ссылка на него
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
    
//     // this.a = value;
// // 4. Ссылка на объект возвращается вместо вызова  new Car
//  };
// // 1. Если функия вызывается через new создается пустой объект
// const myCar = new Car('Audi',"Q3",35000);
// console.log(myCar);

// const myCar2 = new Car();
// console.log(myCar2);

// // 3. В свойство this __proto__ записывается ссылка на объект Car.prototype
// // т.е Car.prototype это ПРОТОТИП будущего объекта(экземпляра)

// const Car = function (config ={}) {
//     console.log(config);
//     this.brand = config.brand;
//     this.model = config.model;
//     this.price = config.price;
// }
// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// console.log(myCar);

// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'X6',
//     price: 50000,
// });

// console.log(myCar2);

// const myCar3 = new Car();

// console.log(myCar3);

///////////////////////////////////////////////////////////////
// Деструктуризируем


// const Car = function ({ brand, model, price } = {}) {
    
//     // const { brand, model, price } = config; ///////
//     this.brand = brand;
//     this.model = model;
//     this.price = price;

//     this.changePrice = function (newPrice) {
//         this.price = newPrice;
//     }
// }
// console.log(Car.prototype);

// const myCar = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// console.log(myCar);


// const myCar2 = new Car({
//     brand: 'BMW',
//     model: 'X6',
//     price: 50000,
// });

// console.log(myCar2);

// const myCar3 = new Car({
//        brand: 'Audi',
//     model: 'A6',
//     price: 65000,
// });

// console.log(myCar3);

// Car.prototype  можно использовать чтобы добавить общие методы

// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('hello =)');
// }
// console.log(Car.prototype);
// myCar.sayHi();

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// }
// console.log(Car.prototype);

// myCar.changePrice(56895);

// Свойство PROTOTIPE есть только у ФУНКЦИЙ, у объектов есть только __proto__

///////////////////////////////////////////////////////////

const User = function ({ email, password }={}) {
    this.email = email;
    this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
    this.email = newEmail;
}

const mango = new User({
    email: 'mango@gmail.com',
    password: 5468985,
});
mango.changeEmail("new-mail-mango@gmail.com");
console.log(mango);
const poly = new User();
poly.changeEmail('poly@gmail.com');
console.log(poly);


// Итог:
// 1. У каждого объекта есть свойство __proto__
// 2. В этом свойсте лежит сссылка на его протип т.е другой объект
// 3. При создании литерала объекта в свойство __proto__ записывается
// ссылка на Функия.prototype

// const objA = {
//     x: 5,
// };
// console.log(objA.__proto__ === Object.prototype); //true

// 4. Функция - конструктор єто просто функция.
// 5. Благодаря оператора new  происходить вся магия.
// 6. Если функция вызывается через new создается пустой объект.
// 7.Функция вызываеться в контексте созданого объекта.
// 8. В свойство this.__proto__ записываеться ссылка на объект Функция.prototype
// 9. Ссылка на объект вохвращаеться в место вызова new Функция()


//////////////////////////////////////////////////////

// Статические свойства и методы
//   - Статические мвойства и методы доступны только на самом конструкторе
//  - В статических методах не нужен this
 User.message = 'Я статическое свойство, меня нет на экземлярах или в прототипе'
User.logInfo = function (obj) {
    console.log('User.logInfo -> obj', obj);
    console.log("Почта:", obj.email);
    console.log("Пароль",  obj.password);
};
User.logInfo(mango);

// console.dir(User);
// console.log(mango);

///////////////////////////////////////////

// Object.keys()
// Object.values()
// Это статические методы Object