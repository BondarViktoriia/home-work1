// class Car {

//     static description = 'Класс описывающий автомобиль';
//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     };

//     // #test = 'test';
// // mySuperPablicField = 555;
//     constructor({brand,modal,price}={}) {
//         // console.log('Выполняеться конструктор автоматически');
//         // console.log(this);
//         this.brand = brand;
//         this.modal = modal;
//         this.price = price;
   
//     }
//     changePrice(newPrice) {
//         this.price = newPrice;
//         // console.log(this.#test);
//     }
//     updateModel(newModel) {
//         this.model = newModel;
// }
// }
// Car.a = 5;
// console.log(Car.description);
// console.dir(Car);


// const carInstance = new Car({
//     brand: 'Audi',
//     modal: 'Q3',
//     price: 35000,
// });
// console.log(carInstance);


// console.log(Object.getPrototypeOf(carInstance));
// console.log(Object.getPrototypeOf(carInstance)=== Car.prototype); ///true

// Car.logInfo(carInstance);

//  Приватные свойства
// #test = test;
// carInstance.changePrice(65842);
// console.log(carInstance);

// Приватные свойста идут на экземпяр, а статические на само свойство
//////////////////////////////
//Публичные свойства и методы класса
// mySuperPablicField = 555;


/////////////////////////////////////////////

// Геттеры и сеттеры

class Car {

    static description = 'Класс описывающий автомобиль';
    static logInfo(carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    };

    constructor({brand,model,price}={}) {

        this.brand = brand;
        this._model = model;
        this._price = price;
   
    }
   set price(newPrice) {
        this._price = newPrice;
    }

    get price() {
        return this._price;
    }

    set model(newModel) {
        this._model = newModel;
    }

    get model() {
        return this._model;
    }
   
}

const car1 = new Car({
    brand: 'Audi',
    model: 'Q3',
    price: 35000,
})
    
// console.log(car1.getModel());
// car1.setModel('Q4');
// console.log(car1.getModel());


// Геттер и сеттере не могут называться так же как свойство которое они описывают
//  model !== model model === _model

console.log(car1.model);
car1.model = "Q4";
console.log(car1.model);

console.log(car1.price);
car1.price = 59846;
console.log(car1.price);

console.log(car1);

// Геттеры и сеттеры попадают на каждый экземпляр

const obj = {
    _a: 100,
    get a() {
        return this._a
    },
    set a(x) {
        this._a = x
    },
}

console.log(obj);