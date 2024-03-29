/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика
 */

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

// function onClick(event) {
//     // console.log(event.target);
//     console.log(event.target.nodeName);
// }

// Для того чтобы событие сработало только при нажатии на кнопку
// Фильтер цели делигации

function onClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
    console.log(event.target.textContent);
}

// Код добавления кнопки

const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    const btn = document.createElement('button');
    btn.textContent = `Кнопка ${labelCounter}`;
    btn.type = 'button';

    container.appendChild(btn);
    labelCounter += 1;

}