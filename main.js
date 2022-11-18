// // створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function s(a,b) {
//     let result= a*b ;
//     return result;
// }
// let x = s(10,20);
// console.log(x)
// //
// // // - створити функцію яка обчислює та повертає площу кола з радіусом r
// //
// function sk(P,r) {
//     let result= P*r**2;
//     return result
// }
// let k = sk(3.14,20);
// console.log(k)


// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// //
//  function sc (P,r,h) {
//     let result= 2*P*r*h;
//     return result
// }
// let y = sc (3.14, 10, 10)
// console.log(y)
// //
// // - створити функцію яка приймає масив та виводить кожен його елемент
// function array(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// }
// array([10,20,30])
// // // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function asd(text){
//     document.write(`<p>${text}</p>`)
//
// }
// asd('sdv')

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function sdf(text){
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//
//     </ul>`)
// }
// sdf('kfc')


// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
//
// function asd(text, num){
//     document.write(`<ul>`)
//        for(let i=0; i<num; i++){
//            document.write(`<li>${text}</li>`)
//        }
//     document.write(`</ul>`)
// }
// asd('cdv',3)
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function x(array){
//     document.write(`<ul>`)
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
// let arr=[10,20,'dvd', true, false];
// x(arr)
//


//
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let users= [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},]
// let user=function (array) {
//     for (const item of array){
//     document.write(`<div>${item.name} ${item.age}  ${item.status}</div>`)
// }
// }
// user(users)


// // - створити функцію яка повертає найменьше число з масиву
//
// let arr=[55,1,2,3,4,5,6,7,8,9]
// function f(array) {
//     let min = array[0];
//     for (const minElement of array) {
//         if (minElement<min){
//             min = minElement
//         }
//
//     }
//     return min
// }
//
// console.log(f(arr));

//
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let arr =[1,2,10]
function f(array) {
    let sum = 0;
    for (const arrayElement of array) {
        sum+=arrayElement;

    }
return sum
}
let num = f(arr)
console.log(num)