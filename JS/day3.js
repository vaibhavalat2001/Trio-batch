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


/*

# JavaScript Day 3 – Homework 📝

Topics: var, let, const, variable naming rules, primitive and non-primitive data types, and Symbol.

These 5 questions are based on the coding concepts taught in Day 3. Try to solve them without looking at the answers.

## Question 1: Variable Declaration

Declare three variables using `var`, `let`, and `const`, respectively.

- Store your name in the first variable.
- Store your age in the second variable.
- Store your favourite number in the third variable.
- Try to reassign a new value to each variable and observe what happens.

## Question 2: Re-declaration

Write a program using `var` and `let`.

- Declare a variable named `marks` using `var` and assign it `75`.
- Declare `marks` again using `var` and assign it `90`.
- Print the value of `marks`.
- Now try declaring a variable named `score` twice using `let`. Observe the result.

## Question 3: Variable Naming Rules

Identify which variable names are valid and which are invalid in JavaScript. Write your answers in comments and explain why.

```
let studentName = "Amit";
let 2marks = 85;
let _price = 100;
let $total = 500;
let user-age = 20;
let const = 10;
```

## Question 4: Data Types

Create one variable for each of the following data types and print each variable using `console.log()`.

- String
- Number
- Boolean
- Null
- Undefined
- BigInt
- Symbol



## Question 5: Equality and Symbol

Predict the output of the following code before running it. Then execute the program and check your answers.

```
let a = 50;
let b = 50;

let id1 = Symbol(100);
let id2 = Symbol(100);

console.log(a == b);
console.log(id1 == id2);

let x = "JavaScript";
let y = "JavaScript";

console.log(x == y);
```

Explain why each comparison returns `true` or `false`.

Instructions for your friend

- Solve all 5 questions in JavaScript.
- Write and run your code in VS Code.
- Don't copy answers from the internet.
- Be ready to explain your code in the next class.

Good luck! 💻

*/

