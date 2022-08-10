//
// Деструктуризация обьекта

// const playlist = {
//     listName : 'My super playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track -3'],
//     trackCount: 3,
// }
// console.log(playlist.listName, playlist.rating, playlist.tracks, playlist.trackCount);

// const { listName,
//     rating,
//     tracks: numberOftracks = 0,
//     trackCount,
// } = playlist;

// console.log(rating);
// console.log(numberOftracks);

/////////////////////////////////////////////////////
// Глубокая деструктуризация

// const profile = {
//     userName: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://devdocs.io/',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes:1300,
//     },
// };

// const { userName,
//     tag,
//     location,
//     avatar,
//     stats:{ followers, views, likes } } = profile;
// // const { followers, views, likes } = stats;
// // console.log(stats);
// console.log(userName,
//     tag,
//     location,
//     avatar,
//     followers,
//     views,
//     likes
// );

////////////////////////////////////////
// Деструктуризация массива

// const rgb = [255, 100, 80];
// // const [red, green, blue] = rgb;
// const [red, , blue] = rgb;


// console.log(red, blue);

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };

// // const ratings = Object.values(authors);
// // console.log(Math.max(...ratings));

// // const keys = Object.keys(authors);
// // for (const key of keys) {
// //     console.log(key);
// //     console.log(authors[key]);
// // }

// const entries = Object.entries(authors);
// for (const [name, rating] of entries) {
//     // const [name, rating] = entry;
// }
// console.log(name,rating);

////////////////////////////////////////

// Операция rest (сбор)

// const profile = {
//     userName: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://devdocs.io/',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes:1300,
//     },
// };

// const { userName, tag, location, ...restProps } = profile;

// console.log(restProps);
// console.log(userName,tag,location);
//////////////////////////////////////////////////

// Паттерн "объект настроек"
// -деструктуризация параметра - объекта в подписи функции
//  -rest  при деструктуризации подписи



// const showProfileInfo = function (userProfile) {
//     console.log(userProfile);
//     const {
//         userName,
//         tag,
//         location,
//         avatar,
//         stats:{followers,views,likes},
//     } = userProfile;
    
//     console.log(userName,
//         tag,
//         location,
//         avatar,
//         followers,
//         views,
//     likes);
// };

// const profile = {
//     userName: 'Jacques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jamaica',
//     avatar: 'https://devdocs.io/',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes:1300,
//     },
// };

// showProfileInfo(profile);

///////////////////////////////////////////////
// Example 2

const showProfileInfo = function ({userName,
        tag,
        location,
        avatar,
        stats:{followers,views,likes},}) {
   
    
    console.log(userName,
        tag,
        location,
        avatar,
        followers,
        views,
    likes);
};

const profile = {
    userName: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://devdocs.io/',
    stats: {
        followers: 5603,
        views: 4827,
        likes:1300,
    },
};

showProfileInfo(profile);