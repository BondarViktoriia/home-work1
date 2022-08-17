
const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];

console.log(array.flat(3));
// 3 глубина вложености. Больше чем нужно лучше не ставить


const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

// const tags = tweets.map(tweet => tweet.tags).flat();
const tags = tweets.flatMap(tweet => tweet.tags);
console.log(tags);

