

// const navEl = document.querySelector('.site-nav');
// console.log(navEl);

// У каждого элемента есть свойство classList

// console.log(navEl.classList);

// Для того чтобы добавить класс силетору используеться classList

// navEl.classList.add('super-cool');

// Добвляем действие добаление класса на кнопку magic

// const magicBtn = document.querySelector('.js-magic-btn');
// magicBtn.addEventListener('click', () => {
//     const navEl = document.querySelector('.site-nav');
//     console.log(navEl.classList);

//     navEl.classList.add('super-cool');

// });

///////////////////////////////
// Для удаления класса

//     const navEl = document.querySelector('.site-nav');
//     console.log(navEl.classList);

// navEl.classList.add('super-cool');
// navEl.classList.remove('super-cool');

/////////////////////Toggle - переключение

// const magicBtn = document.querySelector('.js-magic-btn');
// magicBtn.addEventListener('click', () => {
//     const navEl = document.querySelector('.site-nav');
//     navEl.classList.toggle('icon-btn');
// })
/////////////////////////////
// Метод replace берет старый класс и заменяет его на новый

//

//////////////Соодержиться ли такое имя класса, возвращает true or false

// console.log(navEl.classList.contains('super-cool'));

//////////////////////// Добавление current

const currentPageUrl = '/portfolio';
const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);
console.log(linkEl);
linkEl.classList.add('site-nav__link--current');