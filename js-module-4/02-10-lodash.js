// lodash.com  -это библиотека методов

// console.dir(_); //Вызов всех доступных методов
/////////////////////////////////////////
// isEmpty()

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({a:1}));
////////////////////////////////
// get()

// user&&user.location && obj.location.city
// user&.location?.city

const user = {
    name: 'mango',
    location: {
        coords: [1, 2],
        city: 'Kharkiv',
    },
};

console.log(_.get(user, "location.city"));

// if (user && user.location) {
//     console.log(user.location.city);
// }

// if (user && user.location && user.location.city) {
//     console.log(user.location.city);
// }

console.log(user?.location?.city);
///////////////////////////////////////////

// union()
console.log(_.union([1, 2, 3], [3, 4, 5]));
//обьединяет два массива с уникальными значениями



////////////////////////////////////////////

// range()

console.log(_.range(5));

// _.range([start=0], end, [step=1])


//////////////////////////////////////////////

// sortBy

// _.sortBy(collection, [iteratees=[_.identity]])

// /,/ const users = [,
    //   { 'user': 'fred',   'age': 48 },
    //   { 'user': 'barney', 'age': 36 },
    //   { 'user': 'fred',   'age': 40 },
    //   { 'user': 'barney', 'age': 34 }
    // ];

    // console.log(_.sortBy(users,user=>user.age));
    /////////////////////////////////////////////

    // sum() and sumBy()

    // console.log(_.sum([1,2,4,5]));


    //////////////////////////////////////////////

    // uniq() and uniqBy()

    // _.uniqBy(array, [iteratee=_.identity])



    //////////////////////////////////////////////

    // random()



    //////////////////


    // min() and max()
    // minBy() and maxBy()

// console.log(Math.min(...[10, 6, 65, 8]));
//     console.log(_.min([10, 6, 65, 8]));

/////////////////////////////////

// camelCase(), capitalixe(), kebebCase(), lowerCase(), upperCase()

console.log(_.kebabCase('a b c'));