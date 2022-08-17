// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//      console.log('number',number);
//     console.log('acc:', acc);
   
//     return acc+number;
// },0)
// console.log(total);


// Считаем общую зарплату

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax:150,
// }
// const totalSalary = Object.values(salary).reduce((total, value) =>
//     total + value,
//     0);
// console.log(totalSalary);



// Считаем общее количесвто часов

// const players = [
//     { id: 'Player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//     { id: 'Player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'Player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     { id: 'Player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//     { id: 'Player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    
// ];

// const totalTime = players.reduce((total, player) => total + player.timePlayed, 0);
// console.log(totalTime);

// Считаем общую сумму товаров в корзине

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { labe: 'Bannanas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
];

// const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
// Example2
// const totalPrice = cart.reduce((total, {price,quantity}) => total + price * quantity, 0);

// console.log(totalPrice);

// Собираем все теги из твитов

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const allTags = tweets.reduce((tags,tweet) => {
//     // tags.push(...tweet.tags)
//     // return tags;
//     // example2
//     return[...tags,...tweet.tags]
// } , []);

// Example3

const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

console.log(allTags);

// Ведем статистику тегов

// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);
//     if (acc[tag]) {
//         acc[tag] += 1;
//         return acc;
//     }
//     acc[tag] = 1
//     return acc;
// }, {});
// console.log(tagsStats);

// Если свойство с ключем тег есть увеличить его значение на один
// Если свойства нет с таким ключем тег ничего не делать и записать один

// Example2


// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);
//     if (acc[tag]) {
//         return {
//             ...acc,
//             [tag]: acc.tag + 1,
//         }
//     }
//     acc[tag] = 1
//     return {
//         ...acc,
//         [tag]:1,
//     }
// }, {});
// console.log(tagsStats);

// Example3

// const tagsStats = allTags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});
// console.log(tagsStats);

// Example5

// const tagsStats = allTags.reduce((acc, tag) => ({
//     ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
// }), {});
// console.log(tagsStats);

// const user = {
//     name: 'Mango'
// };
// const key = 'name';
// console.log(user[key]);