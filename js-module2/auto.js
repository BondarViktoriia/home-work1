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

function checkStorage(available, ordered) {
  // Change code below this line
 

  if (ordered === 0) {
    return "Your order is empty!";
  } else if (ordered > available) {
    console.log("Your order is too large, not enough goods in stock!");
  } 
    return "The order is accepted, our manager will contact you";
  }



 