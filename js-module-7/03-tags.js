/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//     if (evt.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     const currentActiveBtn = document.querySelector('.tags__btn--active');

//     if (currentActiveBtn) {
//         currentActiveBtn.classList.remove('tags__btn--active');
//     }

//     // Заменяет if при доступе к свойству
//     //  currentActiveBtn?.classList.remove('tags__btn--active');
//     // console.log(evt.target);
//     const nextActiveBtn = evt.target;
//     nextActiveBtn.classList.add('tags__btn--active');
//     selectedTag = nextActiveBtn.dataset.value;

//     console.log(selectedTag);

// }

// Возможность выбора нескольких кнопок

const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;
// const selectedTag = [];

const selectedTag = new Set();

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }
    
    const btn = evt.target;
    const tag = btn.dataset.value;
    const isActive = btn.classList.contains('tags__btn--active');

    if (isActive) {
        selectedTag.delete(tag);
    } else {
        selectedTag.add(tag);

    }


    btn.classList.toggle('tags__btn--active');
console.log(selectedTag);
}