/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
};

// window.addEventListener('keydown', onKeypress);
window.addEventListener('keypress', onKeypress);
// window.addEventListener('keyup', onKeypress);

refs.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
    // console.log('event.key:', event.key);
    // console.log(event);
    // console.log('event.key:', event.key);
    // console.log('event.code', event.code);

    refs.output.textContent += event.key;

}

function onClearOutput() {
    refs.output.textContent = '';
}