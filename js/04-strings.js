const message = 'В этой строке 26 символов.';
console.log(message.length);

// Конкатенация строк
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName +" " + lastName;
console.log(fullName);


const room = 716;
const type = "vip";

console.log(`Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`);

// Нормализация пользовательского ввода

const brand = 'Samsung';
const normalizedBrand = brand.toLowerCase();
console.log(brand.slice(4));

console.log(normalizedBrand);
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// Поиск в строке
const blackList = 'спам';
const blacklist2 = 'распродажа';

const string1 = 'Это не спам!';
const string2 = 'Рады пригласить Вас на нашу РАСПРОДАЖА';
const string3 = 'Добро пожаловать на нашу ярмарку';

console.log(string1.includes(blackList));
console.log(string1.includes(blacklist2));

// const normalizedString2 = string2.toLowerCase();
console.log(string2.includes(blackList));
console.log(string2.toLowerCase().includes(blacklist2));

console.log(string3.includes(blackList));
console.log(string3.includes(blacklist2));