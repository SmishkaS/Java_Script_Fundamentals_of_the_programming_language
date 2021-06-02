// 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// a. Пустая корзина должна выводить строку «Корзина пуста»;
// b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
// 3. * Сделать так, чтобы товары в каталоге выводились при помощи JS:
// a. Создать массив товаров (сущность Product);
// b. При загрузке страницы на базе данного массива генерировать вывод из него.
// HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
let basket = [
    {product:"bag", count:5, price:10},
    {product:"belt", count:4, price:20},
    {product:"scarf", count:3, price:30},
    {product:"clock", count:2, price:40},
    {product:"wallet", count:1, price:50}];

let cart = document.getElementById('cart');
let catalog = document.getElementById('catalog');
let resSum = 0;
let resCount = 0;
let resName = ' ';

function fillingCart(product) {
    product.forEach(el => resSum += el.count * el.price);
    product.forEach(el => resCount += el.count);
    product.forEach(el => resName += el.product + ' ');
    console.log(resCount)
    if (resSum === 0 && resCount === 0) {
        cart.textContent = "Корзина пуста"
    }
    cart.textContent = `В корзине: ${resCount} товаров на сумму ${resSum} рублей`
    catalog.textContent = `По каталогу вы набрали: ${resName}`

// document.querySelector('.detailedInformation').innerHTML = `<table class="basket"></table>`
//     for (key in basket) {
//         let row = document.createElement('tr')
//         row.innerHTML = `<td colspan="2">${key}</td>`
//         document.querySelector('.basket').appendChild(row)
//         for( let i=0; i<basket.length; i++) {
//             let row = document.createElement('tr')
//             row.innerHTML = `
//             <td>${basket[key][i][0]}</td>
//             <td>${basket[key][i][1]}</td>
//             <td>${basket[key][i][3]}</td>
//                         `
//             document.querySelector('.basket').appendChild(row)
//         }
//     }
// Хотел по красивому сортировку сделать не вышло.
}

fillingCart(basket)