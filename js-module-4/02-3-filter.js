const numbers = [5, 10, 15, 20, 25];

const fileredNumbers = numbers.filter(number => {
    console.log(number);
    return number > 15;
});
console.log(fileredNumbers);


const players = [
    { id: 'Player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'Player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'Player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'Player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'Player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    
];
// Получаем массив все онлайн игроков

const onlinePlayers = players.filter(player => player.online)
console.table(onlinePlayers);

// const offlinePlayers = players.filter(player => player.online === false);
const offlinePlayers = players.filter(player => !player.online);
console.table(offlinePlayers);

// Получаем массив хардкорных инроков с временем больше 250

const hightPlayer = players.filter(player => player.timePlayed > 250);

console.table(hightPlayer);