
// Работа с коллекцией (массивом обьектов)
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
];
// console.table(friends);
// for (const friend of friends) {
//     console.log(friend);
//     console.log(friend.online);
//     friend.newprop = 454;
// }
// console.table(friends);

// // Найти друга по имени
// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         // console.log(friend.name);
//         // console.log(friend);
//         if (friend.name === friendName) {
//             return `${friend.name} - 'Find friend'`;
//         }
        
//     }
//     return `${friendName} -'No find friend'`;
// };
// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends,"Chelsy"));


// ////////////////////////////////////////////////////////
// Найти имена всех друзей

// const getAllNames = function (allFriends) {
//     const names = [];
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         names.push(friend.name);
//     }
//     // console.log(names);

//     return names;
// };
// console.log(getAllNames(friends));

// Получить имена друзей которые отнлайн
// const getOnlineFriends = function (allFriends) {
//     const friendsOnline = [];
//     for (const friend of friends) {
//         console.log(friend);
//         console.log(friend.online);
//         if (friend.online) {
//             friendsOnline.push(friend);
//         }
//     }
//     return friendsOnline;
// }
// console.log(getOnlineFriends(friends));

/////////////////////////////////////////////
// Поличить имена друзей оффлайн

const getOfflineFriends = function (allFriends) {
    const friendsOffline = [];
    for (const friend of allFriends) {
        console.log(friend);
        console.log(friend.online);
        if (!friend.online) {
            friendsOffline.push(friend);
        }
    } 
    
    return friendsOffline;
}
console.log(getOfflineFriends(friends));