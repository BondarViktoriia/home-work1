// Работаем с колекцией карточек в трелло
// Метод splicer()
// -Удалить
// -Добавить
// -Обновить

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5'
];
console.table(cards);

// Удаляем (по индексу) метод indexOf

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.log(cards);

// Добавление карточки
// const cardToInsert = 'Карточка-6';
// const index = 3;
// cards.splice(index,0, cardToInsert);

// console.log(cards);

// Обновление по индексу
const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);
console.log(index);

cards.splice(3, 1, "Обновленая каточка - 3");
console.log(cards);

// Метод splice - деструктивный
