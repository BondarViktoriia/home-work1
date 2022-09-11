// Поиск элементов

// const magicBtn = document.querySelector('.js-magic-btn');

// console.log(magicBtn);

// // console.dir(document);

const navEl = document.querySelector('ul');
console.log(navEl);

// const navItemEl = document.querySelector('.site-nav__item');
// console.log(navItemEl); ///Находит первое совпадение с верха документа, если
// // не нашло то возвращает null

// // Для того чтобы найти все однотипные элементы используется querySelectorAll

// // const navLinks = document.querySelectorAll('.site-nav__link');
// // console.log(navLinks);  // Если находит возвращает массив элементов,
// // если не нашло, возвращает пустой масив NodeList []

// // QuerySelector можно вызывать на элементе.
// const navLinks = navItemEl.querySelectorAll('.site-nav__link');
// console.log(navLinks);


/////////////////////////////////////

//  Код ввыполняеться после того как постороенно DOM- дерево HTML
// Делаем магию
// const magicBtn = document.querySelector('.js-magic-btn');
// magicBtn.addEventListener('click', () => {
//     const navItemEl = document.querySelector('.site-nav__item');
//     console.log(navItemEl);
//     const navLinks = document.querySelectorAll('.site-nav__link');
// console.log(navLinks);
// })