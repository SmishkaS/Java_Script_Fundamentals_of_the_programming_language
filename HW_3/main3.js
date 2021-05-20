'use strict'
/*
// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Число 2 — первое наименьшее простое, единственное четное. Все остальные — нечетные.
let number = 1;
nextPrime:
while (number < 100) {
    number++
    // let j = 2;
    // while (j < number) {
    // j++
    // if (number % j === 0) continue nextPrime;
    // }
    // Странно почему через вложенный цикл while - не пашет.
    // а трансформирую в цикл for - пашет.
    for (let j = 2; j < number; j++) {
        if (number % j === 0) continue nextPrime;
    }
    console.log(number);
}
*/

/*
// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть
// сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в
// зависимости от находящихся в ней товаров.
let basket=[
    {product:"bag", price:1},
    {product:"belt",price:2},
    {product:"scarf",price:3},
    {product:"clock",price:4},
    {product:"wallet",price:5}];
let basketPrice=0;
for(let prod of basket)
{basketPrice+=prod.price;
    console.log("Стоимость "+prod.product+" : "+prod.price+" у.е." )}
console.log("Стоимость корзины: "+basketPrice+" у.е.");
*/

/*
// 3. Товары в корзине хранятся в массиве. Задачи:
// a. Организовать такой массив для хранения товаров в корзине;
// b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(...all) {  // (...оператор rest собирает в all все цены создавая массив)
    let result = 0
    for (let prices of all) { // с помощью цикла for для всех цен в массиве all
        result += prices // сложить их в переменную result
    }
    return result // верни результат цикла
}

let basketPrices = countBasketPrice(1, 2, 3, 4, 5) // создаем переменную в которую передадим цены для функции
console.log(`Cтоимость корзины 1: ${basketPrices} у.е.`)  // вызывая переменную включаем функцию
// Если нужно добавить что-то в корзину создадим новый массив all в другую переменную
let newBasketPrices = countBasketPrice(6, 7, 8)
console.log(`Cтоимость корзины 2: ${newBasketPrices} у.е.`)
// если нужно объединим корзины
console.log(`Обшая стоимость в 2-х корзинах ${newBasketPrices + basketPrices} у.е.`)
*/

/*
// 4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это
// должно так: for(...){// здесь пусто}
for (let i = 0; i < 10; i++)
    console.log(i)
*/

/*
// 5. * Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
// x
// xx
// xxx
// xxxx
// xxxxx

// через for
let pyramid = 'x';
for (let i = 0; i <= 20; i++){
    console.log(pyramid)
    pyramid += 'x'
}

// через while
// let pyramid = 'x' , i = 0;
// while (i <= 20) {
//    i++
//    console.log(pyramid)
//    pyramid += 'x'
// }
*/