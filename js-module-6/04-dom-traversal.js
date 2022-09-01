const navEl = document.querySelector('.site-nav');

// первый вариант
// const firstNavElement = navEl.querySelector('.site-nav__item');
// console.log(firstNavElement);

// второй вариант
const firstNavElement = navEl.firstElementChild;
console.log(firstNavElement);

// Для получения ссылки на крайний элемент коллекции

const lastNavElement = navEl.lastElementChild;
console.log(lastNavElement);

// Для того чтобы выбрать конктетного ребенка

const secondNavEl = navEl.children[1];
console.log(secondNavEl);

// Для навигации по этой иерархии у элементов есть следующие свойства.

// elem.parentNode - выберет родителя elem.
// elem.childNodes - псевдомассив, хранит все дочерние элементы, включая текстовые.
// elem.children - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
// elem.firstChild - выберет первый дочерний элемент внутри elem, включая текстовые узлы.
// elem.firstElementChild - выберет первый дочерний узел-элемент внутри elem.
// elem.lastChild - выберет последний дочерний элемент внутри elem, включая текстовые узлы.
// elem.lastElementChild - выберет последний дочерний узел-элемент внутри elem.
// elem.previousSibling - выберет элемент «слева» от elem (его предыдущего соседа).
// elem.previousElementSibling - выберет узел-элемент «слева» от elem (его предыдущего соседа).
// elem.nextSibling - выберет элемент «справа» от elem (его следующего соседа)
// elem.nextElementSibling - выберет узел-элемент «справа» от elem (его следующего соседа).