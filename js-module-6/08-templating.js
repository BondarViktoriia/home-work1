/*
 * Свойство innerHTML
 * - чтение
 * - запись
 */

const titleEl = document.querySelector('.title');
// console.log(titleEl.textContent);
// console.log(titleEl.innerHTML);

// titleEl.innerHTML = '<a href=""> Это ссылка </a>'; //+=делать нельзя!!!!!
// titleEl.innerHTML = '';

/*
 * Вставка разметки с insertAdjacentHTML()
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */
// titleEl.insertAdjacentHTML('beforebegin', '<a href=""> Это ссылка </a>');

// titleEl.insertAdjacentHTML('afterbegin', '<a href=""> Это ссылка </a>');

// titleEl.insertAdjacentHTML('afterend', '<a href=""> Это ссылка </a>');

titleEl.insertAdjacentHTML('beforeend', '<a href=""> Это ссылка </a>');

// Вставляет строку!!

