"use strict";
/*function mondHello() { // function létrehozása
    console.log("Hello");
}
let func = mondHello; // -> funkció MÁSOLÁSA!
func(); // a másolt példányt hívom meg!
mondHello(); // az eredetit hívom meg!
*/
/*
// functionök:
// 1. felírás:
function szum(a, b) {
    return a + b;
}
console.log(szum(2,3));
// 2.felírás:
let sum = function (a,b) {
    return a+b;
};
console.log(sum(2,3));

// 3.felírás - arrow function:

let osszeg = (a, b) => a + b;
alert ( osszeg(1, 2) );

let double = n => n * 2;
// let double = function (n) {return n * 2}
console.log(double(3)); // 6
*/
/*
let mondHello = () => alert("Hello");
mondHello();
*/
/*
let age = prompt("Hány éves vagy? ");

let Hello = (age < 18) ?
 () => alert('hello') :
 () => alert("Üdvözlöm!");

 Hello();
*/

 let osszeg = (a,b) => {
    let eredmeny = a + b;
    return eredmeny;
 }
 console.log( osszeg( 1, 2));
