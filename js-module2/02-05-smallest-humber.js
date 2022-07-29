// Напиши функцию findSmallesNumber для поиска самого маленького числа в массиве
// При условии что все числа в массиве уникальные


// for (const number of numbers) {
//     console.log(number);
//     if (number < smallestNumber) {
//     smallestNumber = number;
// }
// }

// console.log('Smallest number', smallestNumber);

const findSmallesNumber  = function (numbers) {
    let smallestNumber = numbers[0];
    
    for (const number of numbers) {
    if (number < smallestNumber) {
    smallestNumber = number;
}
    }
    return smallestNumber;
}
console.log(findSmallesNumber([3, 8, 12, -2,15]));
console.log(findSmallesNumber([100, 54, 8, 12, 47]));
console.log(findSmallesNumber([7, 21, 84, 15, 4]));

