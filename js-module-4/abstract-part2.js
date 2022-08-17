// Функция с побочными эффектами
// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {
//         array[i] = array[i] * value;
//     }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// console.log(numbers);

// Чистая функция (pure function)

// const pureMultiply = (array, value) => {
//     const newArray = [];
//     array.forEach(element => {
//         newArray.push(element * value);
//     });
//     return newArray;
// };

// const numbers = [1, 2, 3, 4, 5]
// const doubledNumbers = pureMultiply(numbers, 2);

// console.log(numbers);
// console.log(doubledNumbers);
//////////////////////////////////////////////////////////////////////

// Метод  map

// const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase);

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase);
// console.log(planets);

////////////////////////////////////////////////////////////////////////
// Массив объектов

// const students = [
//       { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];
// const names = students.map(student => student.name);
// console.log(names);

/////////////////////////////////////////////////////////////////////////
// Метод flatMap()

// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const studentsOfMap = students.map(student => student.courses);
// console.log(studentsOfMap);
// const studentFlatMap = students.flatMap(student => student.courses);
// console.log(studentFlatMap);

/////////////////////////////////////////////////////////////////////

// Массив filter

// const values = [51, -3, 27, 21, -68, 42, -37];

// const positivValues = values.filter(value => value > 0);
// console.log(positivValues);
// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues);
// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues);


// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// console.log(allCourses);

// const uniqiCourses = allCourses.filter
//     ((course, index, array) => array.indexOf(course) === index);
//     console.log(uniqiCourses);


///////////////////////////////////////////////////////////////////

// Массив объектов

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;

// const students = [
//     { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const bestStudents = students.filter(student => student.score >= HIGH_SCORE);
// console.log(bestStudents);

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst);

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );

// console.log(average);

///////////////////////////////////////////////////////////////////////

// Метод find()

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.find(option => option.label === "red"));
// console.log(colorPickerOptions.find(option=>option.label === 'white'));

///////////////////////////////////////////////////////////////////////

// Метод findIndex()

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.findIndex(option => option.label === 'red'));
// console.log(colorPickerOptions.findIndex(option => option.label === 'pink'));
// console.log(colorPickerOptions.findIndex(option=>option.label === 'white'));


//////////////////////////////////////////////////////////////////////

// Методы every() и some()

// console.log([1, 2, 3, 4, 5].every(value => value >= 0)); /// true
// console.log([1, 2, 3, 5, -10, 6].every(value => value >= 0)); //false

// console.log([1, 2, 3, 4, 5, 6].some(value => value >= 0)); ///true
// console.log([1, 2, 3, -10, 6, 7].some(value => value >= 0));//true
// console.log([-10, -7, 2, -5, -65].some(value => value >= 0)); //true
// console.log([1, 2, 3, 4, 5].some(value => value <= 0));//false

// const fruits = [
//   { name: "apples", amount: 100 },
//   { name: "bananas", amount: 0 },
//   { name: "grapes", amount: 50 },
// ];

// const allAvailable = fruits.every(fruit => fruit.amount > 0);
// console.log(allAvailable); //false

// const anyAvailable = fruits.some(fruit => fruit.amount > 0);
// console.log(anyAvailable);//true

///////////////////////////////////////////////////////////////////////

// Метод reduce()

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  
//   return previousValue + number;
// }, 0);
// console.log( total);

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

/////////////////////////////////////////////////////////////////////

// Продвинутый reduce
//  const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes); //32

// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// }
// console.log(countLikes(tweets)); //32

// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);
// console.log(tags);

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);
// console.log(getTags(tweets));
// const tags = getTags(tweets);

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag] = 1;
//   return acc;
// };

// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

////////////////////////////////////////////////////////////////////

// Метод sort()

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores);

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// //////

// const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];
// students.sort();
// console.log(students);// ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// ///////

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters);//['A', 'B', 'C', 'a', 'b', 'c']

///////

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); //[61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); //[19, 35, 56, 61, 74, 92]

////////////////////////////////////////////////////////////////

// Свой порядок сортировки чисел

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);

// console.log(scores);
// console.log(ascendingScores);
///////////
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => b - a);

// console.log(scores);
// console.log(ascendingScores);

///////////////////////////////////////////////////////////////////////////

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.table(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.table(inDescendingScoreOrder);

// const inAlhabeticalOrder = students.sort(
//   (firstStudent, secondStudent) =>
//     firstStudent.name.localeCompare(secondStudent.name)
// );
// console.table(inAlhabeticalOrder);

////////////////////////////////////////////////////////////////////////

// Цепочки методов

const students = [
  { name: "Манго", score: 83, courses: ["математика", "физика"] },
  { name: "Поли", score: 59, courses: ["информатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["физика", "биология"] },
  { name: "Киви", score: 94, courses: ["литература", "информатика"] },
];
// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map(student => student.name);
// console.log(names);

// Избавиться от таких «мёртвых» переменных можно группируя вызовы
// методов в цепочки.
// Каждый следующий метод будет выполняться на результате работы предыдущего.

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map(student => student.name);

console.log(names);
  
// Получим сортированный по алфавиту массив уникальных посещаемых предметов.

const uniqueScoreCourses = students
  .flatMap(student => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));
  console.log(uniqueScoreCourses);