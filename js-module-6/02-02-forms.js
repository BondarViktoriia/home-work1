/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

// const form = document.querySelector('.js-register-form');

// form.addEventListener('submit',onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     const formElements = event.currentTarget.elements;
//     // console.log(event.currentTarget.elements.subscription.value);
//     console.log('this is submit form');
//     console.log(formElements);

//     const mail = formElements.email.value;
//     const password = formElements.password.value;
//     const subscription = formElements.subscription.value;

//     const formData = {
//         mail,
//         password,
//         subscription,
//     }

//     console.log(formData);
// }

////////////////////////////Для того чтобы подучить всю  нфу из формы

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFocusSubmit);

function onFocusSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log(formData);

    formData.forEach((value,name) => {
        console.log('onForsSubmit -> value', value);
        console.log('onforsSubmit - > name', name);
   
    })
}