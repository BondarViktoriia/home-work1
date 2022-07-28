// Дулаем slug в URL из названия статьи
// заголовок стати состоит только из букв и пробелов

// Нормализируем строку
// разбиваем по словам
// Сшиваем в строку с раздеоителями

const title = 'Top 10 benefits of React framework';
const normalizedTitle = title.toLowerCase();
const words = normalizedTitle.split(" ");
console.log(words);

const slug = words.join('-');
console.log(slug);

// декларативный код
const slug1 = title.toLowerCase().split(" ").join('-');
console.log(slug1);