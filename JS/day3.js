// day 3

// type of variable declaration in js
// var, let, const

// 1. re-assign
var num1 = 25; // yes
let num2 = 25;  // yes
const pi = 3.14; //  no
// console.log(num2);

// 2. re-declare
var age = 22;
var age = 34;
// console.log(age);   // 34

// let num3 = 45;
// console.log(age);   // 22

// let num3 = 24;
// console.log(num3);

const age1 = 23;
// console.log(age1);   // 23


// ### 3. name rule
let $age34afda = 45;
// console.log($age34afda);


// ### 4. Data type in js
// Primitive data type (immutable)
// String, number, boolean, null, undefined, bigint, symbol
let str = "students";   // string
let num = 23;
let boolean = true;
let trio = null;
let number = 234234234234345454345245n;
let id1 = Symbol(23); // unique define values
let id2 = Symbol(23);
let age2 = 23;
let age3 = 23;
console.log(age2 == age3);  // true
console.log(id1 == id2);    // false


// non-primitive data (mutable)
// function, object, array