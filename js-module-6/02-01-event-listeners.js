/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', () => {
//     console.log('Click');
// });

///////////////////////////Через callback function

// targetBtn.addEventListener('click',handleTargetBtnClick);

// function handleTargetBtnClick() {
//     console.log('Клик');
// }

////////////////////////  Именование колбеков для слушателей
// function clickHandle() {
//     console.log('Клик');
// }
///////////

// function targetBtnClickHandle() {
//     console.log('Клик');
// }
//////////////////

// function onClick() {
//     console.log('Клик');
// }

////////////////////

// function onTargetBtnClick() {
//     console.log('Клик');
// }

///////////////////////////////////////////////////////////////

// addListenerBtn.addEventListener('click', () => {
//     console.log('вешаем слушателя события на целнвую кнопку');
//     targetBtn.addEventListener('click', () => {
//         console.log('Клик по целевой кнопке');
//     })
// })

// removeListenerBtn.addEventListener('click', () => {
//     console.log('снимаем слушателя события с целевой кнопки');
//     targetBtn.removeEventListener('click', () => {
//          console.log('Клик по целевой кнопке');
//     })
// })
////.............Так как целевые функуии не равны

addListenerBtn.addEventListener('click', () => {
    console.log('вешаем слушателя события на целнвую кнопку');
    targetBtn.addEventListener('click', onTargetBtnClick)
})

removeListenerBtn.addEventListener('click', () => {
    console.log('снимаем слушателя события с целевой кнопки');
    targetBtn.removeEventListener('click', onTargetBtnClick)
})

function onTargetBtnClick() {
    console.log('Клик по целевой кнопке');
}





















