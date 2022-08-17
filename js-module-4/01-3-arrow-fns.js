
// .Синтакис стрелочных функций

// const add = function (a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// };
// // add(20, 5, 6);
// console.log(add(20, 5, 6));

// const add = (a, b, c) => {
//        console.log(a, b, c);
//     return a + b + c;
// }
// console.log(add(5, 9, 10));

// const add = (a, b, c) => a + b + c;

// console.log(add(5, 10, 15));

// У стреллочной функции нет аргументов!!!!!

// const add = (...args) => console.log(args);

// console.log(add(5,10,20));

/////////////////////////////////////////////////
// const fnA = () => ({ arrowA: 5, });

// console.log(fnA());

// const oneGetPositionSuccess = (position) =>{
//     console.log(position);
// };
// const oneGetPositionError =(error) =>{
//     console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//     oneGetPositionSuccess,
//     oneGetPositionError);
/////////////////////////////////////////////////////

const filter =  (array, test) =>{ 
    const filteredArray = [];
    for (const el of array) {
        console.log(el);
        const passed = test(el);
        if (passed) {
            filteredArray.push(el);
        }
    }
    return filteredArray;
};

const callback1 = value=> value >= 3;

const r1 = filter([1, 2, 3, 4, 5],callback1);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7], value => value <= 4);
console.log(r2);

///////////////////////////////////////////////////////////

const fruits = [
    { name: 'apple', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: false },
    { name: 'bananas', quantity: 100, isFresh: true },
];


const r3 = filter(fruits, fruit => fruit.quantity >= 120);
console.log(r3);
