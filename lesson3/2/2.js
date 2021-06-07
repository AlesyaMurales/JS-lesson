var cart = [
    {
        product: "Холоильник",
        price: Number(50000)
    },
    {
        product: "Стиральная машина",
        price: Number(25000)
    },
    {
        product: "Утюг",
        price: Number(7000)
    },
    {
        product: "Чайник",
        price: Number(2900)
    }
];
var cartPrice = 0;

function countBasketPrice(cart) {
    let funCartPrice = 0;
    for (let prod of cart) {
        funCartPrice += prod.price;
    }
    return funCartPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(cart) + " рублей");