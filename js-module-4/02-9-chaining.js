

// const numbers = [1, 5, 2, 4, 3];

// const greaterThentwo = numbers.filter((num) => num > 2);
// console.log(greaterThentwo);

// const multByThree = greaterThentwo.map((num) => num * 3);
// console.log(multByThree);

// const sorted = multByThree.sort((a, b) => a-b);
// console.log(sorted);

// // Цепочка предидущих трех
// const result = numbers
//     .filter((num) => num > 2)
//     .map((num) => num * 3)
//     .sort((a, b) => a - b);

// console.log(result);

// Сортируем тех кто онлайн по рангу
// --сначала фильтруем
// --потом сортируем


const players = [
    { id: 'Player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'Player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'Player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'Player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'Player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    
];
const onlineAndSorted = players
    .filter(player => player.online)
    .sort((a, b) => a.points - b.points);

console.table(onlineAndSorted);

// Chaining в методах обьекта как jquery

const element = {
    class: '',
    hovered: false,
    changeClass(cls) {
        this.class = cls;
        return this;
    },
    toggleHovered() {
        this.hovered = !this.hovered;
        return this;
    },
}
element.toggleHovered().changeClass('open').toggleHovered();
console.log(element);