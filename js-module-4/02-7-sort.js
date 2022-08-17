const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
// console.log('number',numbers);

// numbers.sort((curEl, nexEl) => {
//     return curEl - nexEl;
// })

// console.log(numbers);

// numbers.sort((curEl, nexEl) => nexEl - curEl);
// console.log(numbers);

// const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letter',letters);


// const copy = [...numbers];
// copy.sort();
// console.log(copy);
// console.log(numbers);

// const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
// console.log('ascSortedNumbers:', ascSortedNumbers);
// const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// console.log('descSortedNumbers', descSortedNumbers);
// console.log('numbers', numbers);


const players = [
    { id: 'Player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'Player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'Player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'Player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'Player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    
];
// const sortedByBestplayers = [...players].sort((prewPlayer, nextPlayer) => {
//     return prewPlayer.timePlayed - nextPlayer.timePlayed;
// })
// console.table(sortedByBestplayers);
// const sortedByWorstPlayers = [...players].sort((prewPlayer, nextPlayer) =>
//     nextPlayer.timePlayed - prewPlayer.timePlayed
// );
// console.table(sortedByWorstPlayers);

// const sortByName = [...players].sort((a, b) => {
//     const result = a.name[0] > b.name[0];
//     if (result) {
//         return 1;
//     };
//     if (!result) {
//         return - 1;
//     }
// });
// console.table(sortByName);

