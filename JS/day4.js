// day 4

// 7. ###  Type of data

// console.log(typeof null); // object
// console.log(typeof {}); // object
// console.log(typeof []);    // object
// console.log(typeof function(){});   // object

// 8. ### Type conversion
// &&& Explicit type conversion

let age = "24";
let age1 = Number(age);
// console.log(typeof age);    // string
// console.log(typeof age1);   //number

let num = 22;
// console.log(typeof num);    // number
let num1 = String(num);
// console.log(typeof num1)    // string

let str = "Pragya and seema";
// console.log(typeof str); // string
let bool = Boolean(str);
// console.log(typeof bool); // Boolean
// console.log(bool); // true

// &&&  Implicit type conversion
// console.log(5 + 5); // 10
// console.log("5" + 5); // 55
// console.log(5 - 5); // 0
// console.log("5" - 5); // 0
// console.log(true); // true
// console.log(false); // false
// console.log(true + 1); // 2
// console.log(false + 1); // 1
// console.log(null + 1); // 0 + 1 = 1
// console.log(undefined + 1); // NaN
// console.log("string" + 1); // string1
// console.log("trio" + "batch");  // trioBatch;
// console.log("5" + "5"); // 55
// console.log("5" - "5"); // 0
// console.log("5" * 3);   // 15
// console.log(5 * 2); // 10
// console.log("" - 3); // -3   // empty string value false = 0
// console.log("false" + 9); // false9
// console.log("false" * 10); // NaN   // string with some text value = 1
// console.log(undefined * 10); // NaN
// console.log([] + []);   // blank 
// console.log([] * 10); // 0
// console.log({} + []); // [object object]
// console.log({} * []); // NaN




/*

# JavaScript Day 4 – Homework 📝

Topics: `typeof`, explicit type conversion, implicit type conversion, and JavaScript operators.

Here are 5 homework questions based only on the concepts you taught in Day 4. Try to solve them independently.

## Question 1: Check the Data Type

Write a JavaScript program using `typeof` to check the data type of each value below.

```
console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof undefined);
console.log(typeof function() {});
```

Task: Predict the output of every statement before running the code.

## Question 2: Explicit Type Conversion

Create the following variables and convert them into the requested data types.

- Convert `"150"` from a string to a number.
- Convert `250` from a number to a string.
- Convert `"JavaScript"` into a boolean.
- Convert `0` into a boolean.
- Print each converted value and its data type using `console.log()` and `typeof`.

## Question 3: Predict the Output

Without running the code, predict the output of each statement. Then run the code and verify your answers.

```
console.log("10" + 5);
console.log("10" - 5);
console.log("4" * 3);
console.log("20" / 4);
console.log(true + 5);
console.log(false + 10);
console.log(null + 5);
console.log(undefined + 5);
```

## Question 4: String and Empty Value Conversion

Predict the output of the following statements and explain what happens in each case.

```
console.log("" + 10);
console.log("" - 10);
console.log("Hello" + 20);
console.log("Hello" * 2);
console.log("5" + "10");
console.log("5" - "10");
console.log([] + []);
console.log([] * 5);
```

## Question 5: Mixed Type Conversion Challenge

Write a JavaScript program to predict and explain the output of all the following statements.

```
console.log(true + 1);
console.log(false * 10);
console.log(null + 10);
console.log(undefined * 2);
console.log("false" + 5);
console.log("false" * 5);
console.log({} + []);
console.log({} * []);
```

Task: Identify which operations produce a number, a string, or `NaN` (Not a Number). Check your predictions by running the code.

Instructions for your friend

- Solve all 5 questions in VS Code.
- Predict the output before running the code.
- Use `console.log()` and `typeof` wherever required.
- Write a short explanation for each result.

Teacher's tip: Ask your friend to explain why `"5" + 5` behaves differently from `"5" - 5`. This will help check whether they understand implicit type conversion rather than just memorizing outputs.-

*/