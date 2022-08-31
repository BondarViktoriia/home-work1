// call and apply

// const showThis = function () {
//     console.log('showThis-> this',this); //showThis-> this {a: 5, b: 10}
// }
// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };
// showThis.call(objA);
// showThis.apply(objA, [1, 2, 3]);

const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
}

const hat = {
    color: 'black',
};
// changeColor.call(hat, "orange")
// console.log(hat);


const sweater = {
    color: 'green',
};
// changeColor.call(sweater, 'blue');
// console.log(sweater);

//////////////////////////////////////
// bind

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);
// changeHatColor('pink');
// console.log(hat);
// changeSweaterColor('blue');
// console.log(sweater);

////////////////////////////////////////////////

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);//increment -> this undefined

        this.value += value
    },
    decrement(value) {
        console.log('decrement -> this', this);//decrement -> this undefined
        this.value -= value;
    },
};
const updateCounter = function (value, operation) {
    operation(value);
};
// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);