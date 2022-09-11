/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove и throttle
 */

const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

const throttledOnMouseMove = _.throttle(onMouseMove,500)
window.addEventListener('mousemove', throttledOnMouseMove);

function onMouseMove(event) {
    mouseMoveCbInvocationCounter += 1;

    coordsOutputRef.textContent = `
    Количество вызовов onMouseMove :${mouseMoveCbInvocationCounter},
    x: ${event.clientX},
    y: ${event.clientY}`;
}


////Input and debounce

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocayionCounter = 0;

inputRef.addEventListener('input',_.debounce(onInputChange,300) );

function onInputChange(event) {
    inputCbInvocayionCounter += 1;

    outputRef.textContent = `
    Количество вызовов onInputChange :  ${inputCbInvocayionCounter},
    Значение : ${event.target.value}`;
}