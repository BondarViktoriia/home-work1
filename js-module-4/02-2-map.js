// const numbers = [5, 10, 15, 20, 25];
// const doubleNumbers = numbers.map(function (number) {
//     console.log(number);
//     return number * 2;
// })

// console.log('numbers',numbers);
// console.log('doubleNumbers',doubleNumbers);

const players = [
    { id: 'Player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'Player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'Player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'Player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'Player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    
];

// const playerNames = players.map(player => player.name)
// console.log('playerNames', playerNames);

// const playerId = players.map(player => player.id)
// console.log('playerId', playerId);

// Увеличиваем количество поинтов у каждого игрока на 10%

// const updatePlayers = players.map(player => {
//     return {
//         ...player,
//         points: player.points * 1.1,
//     }
// });

// console.log(updatePlayers);

///Увеличиваем кол-во часов игрока по id

// const playerIdToUbdate = 'Player-3';
// Example1
// const updatePlayers = players.map(player => {
//     if (playerIdToUbdate === player.id) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed+100,
//         }
//     }
//     return player;
// })
// Example2
// const updatePlayers = players.map(player => {
//     return playerIdToUbdate === player.id
//         ? {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         }
//         : player;
// })
// Example3
// const updatePlayers = players.map(player =>
//     playerIdToUbdate === player.id
//         ? {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         }
//         : player,
// );
// console.table(updatePlayers);