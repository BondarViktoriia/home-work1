// Работаем с коллекцией товаров в корзине

// { name: '🍏', price:50}
// { name: '🍇', price:70}
// { name: '🍋',price:60 }
// {name:'🍒', price:110}

const cart = {
    items: [],
    getItems() {

    },
    add(product) { },
    remove(productName) { },
    clear() { },
    countTotalPrice() { },
    increaseQuantity(productNme) { },
    decreaseQuantity(productName) { },
};
console.table(cart.getItems());
cart.add({ name: '🍏', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍒', price: 110 });
console.table(cart);