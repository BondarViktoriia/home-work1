// function checkAge(age) {
//   if (age>=16) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line


//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
//     return "Access denied, wrong password!";
//   }

// function checkStorage(available, ordered) {
//   // Change code below this line
 

//   if (ordered === 0) {
//     return "Your order is empty!";
//   } else if (ordered > available) {
//     console.log("Your order is too large, not enough goods in stock!");
//   } 
//     return "The order is accepted, our manager will contact you";
//   }





// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//  for ( let i = min; i <= max; i += 1){
//    numbers.push(i);
//    console.log(numbers);
   
// }
//   // Change code above this line
//   return numbers;

  //////////////////////////////////////////
  // Напиши функцию filterArray(numbers, value),
  //   которая принимает массив чисел(параметр numbers) 
  //   и возвращает новый массив, в котором будут только те элементы массива
  // numbers, которые больше чем значение параметра value(число).
  
//   function filterArray(numbers, value) {
//    // Change code below this line

// let newArray = [];
// for (let i = 0; i < numbers.length; i += 1){
//   if(numbers[i] > value){
//      newArray.push(numbers[i]);
//   }
 
// }
// return newArray;

//   // Change code above this line
// }

//////////////////////////////////////////////

// Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.

// Дополни код функции так, что если:

// фрукт есть в массиве, то функция возвращает true;
// фрукта нет в массиве, то функция возвращает false.

// function checkFruit(fruit) {
// //   const fruits = ["apple", "plum", "pear", "orange"];

// //   return fruits.includes(fruit); // Change this line
// }

///////////////////////////////////////////////////

// Напиши функцию getCommonElements(array1, array2) которая получает два массива
//  произвольной длины в параметры array1 и array2, и возвращает новый массив,
  
//   состоящий из тех элементов,
//   которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line

// const arr = []
//   for (let i = 0; i< array1.length; i += 1) {
//  if(array2.includes(array1[i])){
//      arr.push(array1[i])
//  }
//    }
//    return arr
//  // Change code above this line
// }

function getEvenNumbers(start, end) {
   // Change code below this line
let numbers = [];
for (let i = start; i <= end; i +=1){
   if (numbers.length % 10 === 0 ){
      numbers = numbers.push;
   }
}
return numbers;

    // Change code above this line
}
  
console.log(getEvenNumbers(2, 5));