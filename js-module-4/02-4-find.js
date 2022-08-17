
const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number > 10);
console.log(number);
// Если не найдет совпадение то вернет underfined

const players = [
    { id: 'Player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'Player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'Player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'Player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'Player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    
];
const playerToFind = 'Player-3';
const playerWithId = players.find(player => player.id === playerToFind);
console.log(playerWithId);

// Ишем игрока по имени

const playerNameToFind = 'Ajax';
const playerWithName = players.find(player => player.name === playerNameToFind);
console.log(playerWithName);

// const findPlayerById = (allplayer, playerId) => allplayer.find(player => player.id === playerId);
// Example 2 
const findPlayerById = (allplayer, playerId) =>
    allplayer.find(({id}) => id === playerId);

console.log(findPlayerById(players, 'Player-1'));
console.log(findPlayerById(players, 'Player-5'));