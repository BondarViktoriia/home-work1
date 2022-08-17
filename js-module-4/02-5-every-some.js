
const players = [
    { id: 'Player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'Player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'Player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'Player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'Player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    
];

const isAllOnline = players.every(player => player.online);
console.log(isAllOnline);


const isAnyOnline = players.some(player => player.online)
console.log(isAnyOnline, "isAnyOnline");

const isAneHardckorePlayer = players.some(player => player.timePlayed > 400);
console.log(isAneHardckorePlayer);