/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
}

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);

refs.backdrop.addEventListener('click', onBackDropClick);



function onOpenModal() {
    window.addEventListener('keydown', onEscapeKeypressCloss);
    document.body.classList.add('show-modal');
}
function onCloseModal() {
    window.removeEventListener('keydown', onEscapeKeypressCloss);
    document.body.classList.remove('show-modal');
}



function onBackDropClick(event) {
    // console.log('Клик по backdrop');
    // console.log(event.currentTarget);
    // console.log(event.target);
    if (event.currentTarget === event.target) {
        console.log('Кликнули именно в backdrop');
        onCloseModal();
        }
}

function onEscapeKeypressCloss(event) {
    const ESC_KEY_CODE = "Escape";

    if (event.code === ESC_KEY_CODE) {
          onCloseModal();
    }
  
    console.log(event.code);
}
