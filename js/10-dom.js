const btnAdd = document.querySelector('button[data-add] ');
const resetBtn = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('[output] span');

let total = 0;

btnAdd.addEventListener('click', function () {
    console.log('click gss')
    const value = Number(valueInput.value);
    console.log(value);
    total += value;
    outputEl.textContent = total;
    console.log("total:", total);
    valueInput.value = '';
});

resetBtn.addEventListener('click', function () {
    total = 0;
    outputEl.textContent = total;
})