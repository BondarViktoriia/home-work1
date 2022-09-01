// const magicBtn = document.querySelector('.js-magic-btn')
// console.log(magicBtn);

// const imageEl = document.querySelector('.hero__image')
// console.log('imageEl', imageEl);
// console.log(imageEl.src);
// Можно как посмотреть свойство(прочитать), так и перезаписать его
//  * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
//  */

// imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';

//  Для того чтобы изображение котика минялось по клику

const magicBtn = document.querySelector('.js-magic-btn');
magicBtn.addEventListener('click', () => {
    const imageEl = document.querySelector('.hero__image')
console.log('imageEl', imageEl);
    console.log(imageEl.src);
    imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
    imageEl.alt = 'Это новый котик';
})

const heroTitleEl = document.querySelector('.hero__title');
console.log(heroTitleEl);
console.log(heroTitleEl.textContent); //Всё про меня
// Можно заменить текстові контент
heroTitleEl.textContent = 'Новый котик';


/////////////////////атрибуты
const imageEl = document.querySelector('.hero__image')
console.log(imageEl.getAttribute('src')); // стандартизированый
//  интрефейс для работы с любым аттрибутом

// Для удаления аттрибута
// imageEl.removeAttribute('src');

///Можно проверить есть ли у него определеный аттрибут возвращает true or false

console.log(imageEl.hasAttribute('alt'));
////////////////////////////////DATA -ATTRIBUTE
const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
console.log(actions[0].dataset);
console.log(actions[1].dataset.action);

////////////
magicBtn.addEventListener('click', () => {
  const  inputEl = document.querySelector('.js-input');
    console.log(inputEl);
    console.log(inputEl.value);
    inputEl.value = 'Hello';
})