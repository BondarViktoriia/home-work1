// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for(const key in apartment){
//   keys.push(key);
//   values.push(apartment[key]);
  
// }
// // Change code below this line

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//       keys.push(key);
//   values.push(apartment[key]);
// }


//   // Change code above this line
// }
// Напиши функцию countProps(object), которая считает и возвращает
//  количество собственных свойств объекта в параметре object.
//  Используй переменную propCount для хранения количества свойств объекта.
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for(const key in object){
//   if(object.hasOwnProperty(key)){
//     propCount +=1;
//   }
// }
//   // Change code above this line
//   return propCount;
// }

//////////////////////////////////////////////////////
// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значение свойства
//   console.log(book[key]);
// }
// Перебери объект apartment используя метод Object.keys()
// и цикл for...of.Запиши в переменную keys массив ключей собственных свойств
// объекта apartment,и добавь в массив values все значения его свойств.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for(const key of keys){
  
//   values.push(apartment[key]);
// }

///////////////////////////////////////////
// Выполни рефакторинг функции countProps(object) используя метод Object.keys()
// и, возможно, но необязательно, цикл for...of.

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// const keys = Object.keys(object)
//   for (const key of keys) {
    
//       propCount += 1;
    
//   }

// //   return propCount;
//   // Change code above this line
// }

////////////////////////////////////////////////////////////////

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values массив всех значений его свойств.
//  Используй методы Object.keys() и Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line

//  const keys =Object.keys(apartment);
// const values = Object.values(apartment);

// /////////////////////////////////////////////////////////////////
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат,
//     где имя свойства это имя сотрудника, а значение свойства это зарплата.
//     Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
// Используй переменную totalSalary для хранения общей суммы зарплаты.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
// const values = Object.values(salaries);
//   for(const value of values){
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

/////////////////////////////////////////////////////

// Перебери массив объектов colors используя цикл for...of.
// Добавь в массив hexColors значения свойств hex,
// а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (let color of colors) {
//   hexColors.push(color.hex) ;
//   rgbColors.push(color.rgb);
// }

///////////////////////////////////////////////////////
// Напиши функцию getProductPrice(productName) которая принимает один параметр
// productName - название продукта.
// Функция ищет объект продукта с таким именем(свойство name)
// в массиве products и возвращает его цену(свойство price).
// Если продукт с таким названием не найден,
//     функция должна возвращать null.



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//    }
//   }
// return null;

// }
// getProductPrice(products);

///////////////////////////////////////////////////////////////
// Напиши функцию getAllPropValues(propName) которая принимает один параметр
// propName - имя(ключ) свойства.Функция должна вернуть массив всех значений
//  свойства с таким именем из каждого объекта в массиве products.
//  Если в объектах нет свойства с таким именем,
//   функция должна вернуть пустой массив

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const arrProductValues = [];
//   for (let product of products) {
//     if(product[propName]){
//        arrProductValues.push(product[propName]);
//     }
//   }
// return arrProductValues;

//   // Change code above this line
// }

////////////////////////////////////////////////////////

// Напиши функцию calculateTotalPrice(productName) которая принимает
//  один параметр productName - название товара.
//  Функция должна вернуть общую стоимость(цена * количество) товара
//   с таким именем из массива products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
   
//         let total = 0;
//         for (const product of products) {
//           if(product.name === productName){
//             total += product.price * product.quantity;
             
//           }

//         }
     
// return total ;
//   // Пиши код выше этой строки
// }

/////////////////////////////////////////////////////////////
// Пришел трёхдневный прогноз максимальных температур
//  и мы считаем среднюю температуру за три дня(meanTemperature).
//  Замени объявления переменных yesterday, today и tomorrow одной операцией
//   деструктуризации свойств объекта highTemperatures.


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line


// const { yesterday, today, tomorrow } = highTemperatures;


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//////////////////////////////////////////////////////////////
// В прогнозе максимальных температур также может быть
// необязательное свойство icon - иконка погоды.
// Замени объявления переменных yesterday, today, tomorrow и icon
// одной операцией деструктуризации свойств объекта highTemperatures.
// Задай значение по умолчанию
// для icon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const { yesterday,
  today,
  tomorrow,
  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;

/////////////////////////////////////////////////////////////////
// Замени объявления переменных highYesterday, highToday,
//  highTomorrow и highIcon одной операцией деструктуризации свойств объекта
// highTemperatures.Задай значение по умолчанию для
// highIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday: highYesterday,
//   tomorrow: highTomorrow,
//   today: highToday,
//   icon: highIcon =  "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

/////////////////////////////////////////////////////////////////
// Выполни рефакторинг цикла for...of так,
//  чтобы в нём использовалась деструктуризация объекта..

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

/////////////////////////////////////////////////////////////////////

// Мы получили прогноз погоды на два дня, с минимальными и
// максимальными температурами, а также необязательными иконками.
// Замени объявления всех переменных одной операцией деструктуризации свойств
//  объекта forecast.Задай значение по умолчанию для иконок,
//   переменных todayIcon и tomorrowIcon -
//     строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Change code below this line
// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

//////////////////////////////////////////////////////////
// Функция calculateMeanTemperature(forecast) принимает один параметр forecast - объект температур на два дня следующего формата.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Замени объявления переменных todayLow, todayHigh,
//   tomorrowLow и tomorrowHigh одной операцией деструктуризации
//   свойств объекта forecast.
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: {
//       low: todayLow,
//       high : todayHigh,
//     },
//     tomorrow: {
//       low: tomorrowLow,
//       high: tomorrowHigh
//     },
// }=forecast

//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

//////////////////////////////////////////////////////////

// В переменной scores хранится массив результатов тестирования.
//  Используя распыление и методы Math.max() и Math.min()
//  дополни код так, чтобы в переменной bestScore был самый высокий балл,
//   а в worstScore самый низкий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

/////////////////////////////////////////////////////////

// В переменных firstGroupScores, secondGroupScores и
// thirdGroupScores хранятся результаты тестирования отдельных групп.
// Используя распыление дополни код так, чтобы:

// В переменной allScores хранился массив всех результатов от первой до третьей группы.
// В переменной bestScore был самый высокий общий балл.
// В переменной worstScore был самый низкий общий балл.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

////////////////////////////////////////////////////////////////

// В конструкторе можно создавать новые тесты, для которых есть настройки
//  по умолчанию которые хранятся в переменной defaultSettings.
//  Во время создания теста, все или часть настроек можно переопределить,
//   они хранятся в переменной overrideSettings.

// Для того чтобы получить финальные настройки теста,
//   необходимо взять настройки по умолчанию и поверх них применить
//    переопределённые настройки.Дополни код так, чтобы в переменной
//    finalSettings получился объект финальных настроек теста.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

///////////////////////////////////////////////////////////////////

// Напиши функцию makeTask(data) которая принимает один параметр data - объект
//  со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи,
// не изменяя напрямую параметр data.
// В новом объекте должно быть свойство completed,
//   значение которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text,
//   а остальные два, category и priority, могут отсутствовать.
//   Тогда, в новом объекте задачи, в свойствах category и priority
//      должны быть значения по умолчанию, хранящиеся в одноимённых локальных
// переменных.

// function makeTask(data) {
// const baseTask = {
//     completed : false,
//    category : "General",
//   priority :"Normal",
// }
// const finalTask = {...baseTask, ...data};
//   return finalTask;
// }

//////////////////////////////////////////////////////////////
// Используя операцию rest дополни код функции add() так,
//   чтобы она принимала любое количество аргументов,
//   считала и возвращала их сумму.
// Change code below this line
// function add(...args) {
//   // Change code above this linere
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;

// }
////////////////////////////////////////////////////////////

// Функция addOverNum() считает сумму всех аргументов.
// Измени параметры и тело функции addOverNum() так,
//   чтобы она считала сумму только тех аргументов,
//     которые больше чем заданное число.
//  Это число должно быть первым параметром функции.
// function addOverNum(...otherArgs) {
//   let total =0 ;

// for (let arg of otherArgs) {
//   if(arg> firstNumber){
//     total+=arg;
//   }
// }
//   return total;
 
//   // Change code above this line
// }
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);

//////////////////////////////////////////////////////////

// Функция findMatches() принимает произвольное количество аргументов.
//  Первым аргументом всегда будет массив чисел,
//   а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches,
//   в котором будут только те аргументы,
//     начиная со второго, которые есть в массиве первого аргумента.

//   Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)
//  должна вернуть массив[1, 2], потому что только они есть в
//  массиве первого аргумента.

// Change code below this line
// function findMatches(array,...args) {
//   const matches = []; // Don't change this line
// for (const arg of args) {
//   if (array.includes(arg)) {
//     matches.push(arg);
//   }
// }
//   // Change code above this line
//   return matches;
// }

//////////////////////////////////////////////////////////
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать
// просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени.
//  Возвращает строку "Deleting book <имя книги>",
//   где < имя книги > это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название
// книги на новое.Возвращает строку "Updating book <старое имя> to <новое имя>",
//   где < старое имя > и < новое имя > это значения параметров
//   oldName и newName соотвественно.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   // Change code above this line
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
// };

///////////////////////////////////////////////////////////////
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял
// название книги с oldName на newName в свойстве books.
// Используй indexOf() для того, чтобы найти нужный элемент массива,
//   и splice() для того чтобы заменить этот элемент

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line


  
//      this.books.splice(this.books.indexOf(oldName), 1, newName);
  

//     // Change code above this line
//   },
// };

/////////////////////////////////////////////////////////////////
// К нам обратилась владелица лавки зелий «У старой жабы»
// и заказала программу для ведения инвентаря -
//   добавления, удаления, поиска и обновления зелий.
//   Добавь объекту atTheOldToad свойство potions,
//   значением которого сделай пустой массив.
// const atTheOldToad = {
//   // Change code below this line

// potions: [],

//   // Change code above this line
// };

////////////////////////////////////////////////////////////////

// Добавь объекту atTheOldToad метод getPotions(),
//   который просто возвращает значение свойства potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   }
//   // Change code above this line
// };

///////////////////////////////////////////////////////////////

// Дополни метод addPotion(potionName) так, чтобы он добавлял
//  зелье potionName в конец массива зелий в свойстве potions.
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);


//     // Change code above this line
//   },
// };

////////////////////////////////////////////////////////////////

// Дополни метод removePotion(potionName) так,
//   чтобы он удалял зелье potionName из массива зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(potionName), 1);


//     // Change code above this line
//   },
// };

/////////////////////////////////////////////////////////
// Дополни метод updatePotionName(oldName, newName) так,
//   чтобы он обновлял название зелья с oldName на newName,
//     в массиве зелий в свойстве potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line

// this.potions.splice(this.potions.indexOf(oldName), 1,newName );
//     // Change code above this line
//   },
// };

///////////////////////////////////////////////////////////////

// Заказчица хочет чтобы каждое зелье было представлено не только именем,
//   но и ценой, а в будущем может быть и другими характеристиками.
//   Поэтому теперь в свойстве potions будет храниться
//   массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так,
//   чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий.
// Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion(уже объект)
//  в массив в свойстве potions, но только если такого зелья еще нет
//   в инвентаре.В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName
//  из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name
// объекта - зелья с названием oldName на newName в массиве potions.

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
   
    return this.potions;
   
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (newPotion.name === potion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
   

    for (let i = 0; i < this.potions.length; i+=1) {
       const potion = this.potions[i];
       if (potionName === potion.name) {
         return this.potions.splice(this.potions.indexOf(potionName, 1));
      }
    }

      return `Potion ${potionName} is not in inventory!`;
   
  },
  updatePotionName(oldName, newName) {
    const {potions} = this;
    for (const potion of potions) {
      if (oldName === potion.name) 
      potion.name = newName;
      return newName;
      }
       return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

  