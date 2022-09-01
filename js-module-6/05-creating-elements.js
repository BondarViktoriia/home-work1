// * - Создание элементов
//  * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
//  */

// Создадим заголовок

const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Это заголовок страницы'
console.log(titleEl);

// console.log(document.body);
// document.body.appendChild(titleEl); //Добавит заголовок в конец страницы
// перед  закрывающемя тегом body

//  * Создаём изображение
//  * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
//  * valais-alpine-mountains-glacier
//  */

const imageEl = document.createElement('img');
imageEl.src =
    'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
imageEl.width = 240;
console.log(imageEl);
document.body.appendChild(imageEl);

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

heroEl.append(titleEl, imageEl);

// Создадим и добавим новый пункт в меню
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link"');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile'

// console.log(navItemEl);
// console.log(navLinkEl);

// Присоединяем а к li
navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav');
// navEl.appendChild(navItemEl); //добавили в конец ul  крайним элементом
///
// navEl.insertBefore(navItemEl, navEl.firstElementChild); //поставили первым

// navEl.insertBefore(navItemEl, navEl.lastElementChild); //перед крайним

navEl.insertBefore(navItemEl, navEl.children[1]);

