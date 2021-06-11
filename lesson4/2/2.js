function addProductBasket(a, name, price, quantity) {
    a.push({
        product: name,
        price: price,
        quantity: quantity,
        total: totalSum
    });
}

function totalSum() {
    return this.price * this.quantity;
}

var cart = [
    {
        product: "Холодильник",
        price: 50000,
        quantity: 1,
        total: totalSum
    },
    {
        product: "Стиральная машина",
        price: 25000,
        quantity: 1,
        total: totalSum
    },
    {
        product: "Утюг",
        price: 7000,
        quantity: 1,
        total: totalSum
    },
    {
        product: "Чайник",
        price: 2900,
        quantity: 2,
        total: totalSum
    },
]

function countBasketPrice(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].total();
    }
    return sum;
}

function descBasketPrice(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].quantity + ' = ' + (arr[i].total()) + '\n';
    }
    return str;
}

alert('В корзину добавлено:\n' + descBasketPrice(cart) + '\nСтоимость корзины: ' + countBasketPrice(cart));