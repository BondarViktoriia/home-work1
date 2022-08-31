const CounterPlagin = function ({ rootSelector, initialValue = 0, step = 1 } = {}) {
    this.rootSelector = rootSelector;
    this._value = initialValue;
    this._step = step;
    this._ref = this._getRefs(rootSelector);
    this._bindEvents();
    this._updateValueUi();
};
CounterPlagin.prototype._getRefs = function (rootSelector) {

    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.incrementBtn = refs.container.querySelector('[data-increment]');
    refs.decrementBtn = refs.container.querySelector('[data-decrement]');
    refs.value = refs.container.querySelector(['data-value']);

    return refs;
}
CounterPlagin.prototype._bindEvents = function () {
    this.refs.incrementBtn.addEventListener('click', () => {
        this.increment();
    });
    this.refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
    });
};
CounterPlagin.prototype.updateValueUI = function () {
    this.refs.value.textContent = this._value;
}
CounterPlagin.prototype.increment = function () {
    this._value += this._step
};
CounterPlagin.prototype.decrement = function () {
    this._value -= this._step
};
const counter1 = new CounterPlagin({ rootSelector: '#counter-1', step: 5 });
console.log('counter- 1:', counter1);
const counter2 = new CounterPlagin({ rootSelector: '#counter-2', step: 10 });
console.log('counter- 2:', counter2);
const counter3 = new CounterPlagin({ rootSelector: '#counter-3', step: 1 });
console.log('counter- 3:', counter3);

