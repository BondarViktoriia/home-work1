const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};
// console.log(document);

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valuEl = document.querySelector('.js-value');


console.log(decrementBtn);
console.log(incrementBtn);
console.log(valuEl);

decrementBtn.addEventListener('click', function () {
    console.log('Кликнули на декременты');
    counter.decrement();
    console.log(counter);
    valuEl.textContent = counter.value;
})

incrementBtn.addEventListener('click', function () {
    console.log('Кликнулм на инкремент');
    counter.increment();
    console.log(counter);
    valuEl.textContent = counter.value;
}) 