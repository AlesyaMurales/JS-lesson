var number;
var object = { единицы: 0, десятки: 0, сотни: 0 };

number = prompt("Введите число от 0 до 999!", 0);
if (number > 999) {
    object = {};
    console.log("Число превышает 999", object);
}
else if (number >= 0 && number.length > 0) {
    switch (number.length) {
        case 3:
            object.сотни = parseInt(number[number.length - 3]);
        case 2:
            object.десятки = parseInt(number[number.length - 2]);
        case 1:
            object.единицы = parseInt(number[number.length - 1]);
            break;
        default:
            object.единицы = parseInt(number[2]);
            object.десятки = parseInt(number[1]);
            object.сотни = parseInt(number[0]);
    }
    console.log("Объект", object);
}
else
    console.log("Неверно введено число");



