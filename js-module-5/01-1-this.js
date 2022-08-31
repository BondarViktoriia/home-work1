// Функция эта частный случай объекта - ссылочный тип!

// console.log('[] === []', [] === []);
// console.log('{} === {}', {} === {});

// console.log(
//     'function(){} === function(){}',
//     function(){}===function(){}
// );

// const fnA = function () {
//     console.log('Hello');
// };
// const fnB = fnA;
// console.log('fnB === fnA', fnB === fnA);

//////////////////////////////////////////
// Как метод обьекта. В контексте обьекта

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag ->this', this);
//     },
// };

// user.showTag();


////////////////////////////////////////////
// Вызов без контекста
// -в строгом режиме  -underfined
// -не в строгом режиме -window

const foo = function () {
    console.log('foo -> this', this);
};
// foo();



//////////////////////////////////////////

// Как метод объекта, но обьявлена как внешняя функция.
// В контексте объекта.

// const showTag = function () {
//     console.log('showTag->this', this);
//     console.log('showTag->this.tag', this.tag);
// };
// // showTag();

// const user = {
//     tag: 'Mango',
// };
// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();


/////////////////////////////////////////////////////
// вызов без контекста, но объявлена как метод обьекта

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag ->this.tag', this.tag);
//     },
// };
// user.showTag();
// const outerShowTag = user.showTag;
// outerShowTag();

/////////////////////////////////////////////////////////

// Контекст в callback - функциях

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//         console.log('showTag ->this.tag', this.tag);
//     },
// };

// // user.showTag();

// const invokeAction = function (action) {
//     console.log(action);
//     action();
// };

// invokeAction(user.showTag);

////////////////////////////////////////////

// const fn = function () {
//     console.log('fn->this', this);
// }
// fn(); ////fn->this undefined

/////////

// const book = {
//     title: 'Reackt for beginners',
//     showThis() {
//         console.log('showthis -> this', this);
//     },
//     showTitle() {
//         console.log('showTitle -> this.title', this.title);
//     }
// }
// book.showThis();//ссылается на весь объект book
// book.showTitle();///showTitle -> this.title Reackt for beginners

// const otherShowThis = book.showThis
// otherShowThis();//showthis -> this undefined

// const otherShowTitle = book.showTitle
// otherShowTitle()/// ошибка

/////////////////////////////////////////////////

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };

//     // changeColor();///changeColor -> this undefined

//     const sweater = {
//         color: 'teal',
    
//     };

//     sweater.updateColor = changeColor;
//     // sweater.updateColor('red');

//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor();
// swapColor('blue');////changeColor -> this undefined


/////////////////////////////////////////////////////

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//     //
//     };
//     return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor('yellow'); //changeColor -> this undefined

// const hat = {
//     color: 'blue',
//     updateColor,
// };
// console.log(hat.updateColor); // f(color){ console.log ('changeColor -> this', this)}
// hat.updateColor('orange');//changeColor -> this {color: 'blue', updateColor: ƒ}

/////////////////////////////////////////////////////

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);//increment -> this undefined

        // this.value += value
    },
    decrement(value) {
        console.log('decrement -> this', this);//decrement -> this undefined
        // this.value += value;
    },
};
const updateCounter = function (value, operation) {
    operation(value);
};
updateCounter(10, counter.increment);
updateCounter(5, counter.decrement);