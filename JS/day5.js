// day 5

// 9. Operator:
// ### Arithematic operators:

let a = 10,
  b = 3;

// console.log(a + b);   // 13   addition
// console.log(a - b);   // 7    subtraction
// console.log(a * b);   // 30   multiplication
// console.log(a / b);   // 3.333... division
// console.log(a % b);   // 1    modulus (remainder)
// console.log(a ** b);  // 1000 exponentiation (10^3)

// ### increment and decrement operator:
// x++;    // post increment
// ++x;    // pre increment
let x = 10;
// console.log(x++); // 10
// console.log(x); // 11
// console.log(x--);   // 11
// console.log(--x); // 9

// ### Assignment Operator

let y = 10;
// console.log(y += 5); // y = y + 5 = 15
// console.log(y *= 2); // 30
// console.log(y -= 10); // 20
// console.log(y /= 2);    // 10
// console.log(y %= 2);    // 0
// console.log(y ** 2);    // 0

// ### Comparison Operator
// 5 == 5  output: true
// "5" == 5  output: true
// "5" === 5 output: false

// console.log(5 == 5); // true
// console.log(5 === 5); // true
// console.log("5" == 5); // true
// console.log("5" === 5); // false
// console.log(5 != 5); // false
// console.log(5 != 6); // true
// console.log(5 !== 5); // false
// console.log(5 !== 6); // true
// console.log("5" !== 7); // true
// console.log(0 == false); // true
// console.log(0 === false); // false
// console.log(1 == true); // true
// console.log(1 === true); // false
// console.log(null == 0); // false
// console.log(null === 0);    // false
// console.log(undefined == 0);    // false
// console.log(undefined === 0);    // false
// console.log("" == 0); // true
// console.log("" === 0); // false
// console.log(null == undefined); // true
// console.log(null === undefined); // false
// console.log(5 > 5); // false
// console.log(5 > 6); // false
// console.log(5 > 3); // true
// console.log(5 < 2); // false
// console.log(5 < 8); // true
// console.log(7 >= 3); // true
// console.log(5 >= 8); // false

// ### Logical Operator
// &&, ||
// T && T = T
// F && T = F
// F && F = F

// T || T = T
// T || F = T
// F || T = T
// F || F = F

// @@ && and 
// console.log("seema" && "pragya"); // pragya
// console.log(0 && "seema");  // 0

// @@ || or
// console.log("seema" || "pragya"); // seema
// console.log(0 || "seema");  // seema


// ternary operator: ?
let age = 14;
age >= 18? console.log("Eligible for vote") : console.log("Not eligible for vote")




/*
# JavaScript Day 5 – Homework 📝

Topics: Arithmetic operators, increment/decrement, assignment operators, comparison operators, and strict vs. loose equality.

Here are 5 homework questions based on the code you taught in Day 5. Share these questions directly with your friend.

## Question 1: Arithmetic Operators

Create two variables, `a = 15` and `b = 4`.

Write a program to calculate and print:

- Addition
- Subtraction
- Multiplication
- Division
- Modulus (remainder)
- Exponentiation (`a` raised to the power of `b`)

## Question 2: Increment and Decrement

Predict the output of the following code before running it.

```
let x = 5;

console.log(x++);
console.log(x);
console.log(++x);
console.log(x--);
console.log(--x);
```

Explain the difference between pre-increment (`++x`) and post-increment (`x++`). Also explain pre-decrement and post-decrement.

## Question 3: Assignment Operators

Create a variable `num = 20` and perform these operations one by one, printing the value after each operation.

1. Add `10` using `+=`.
2. Multiply the result by `2` using `*=`.
3. Subtract `15` using `-=`.
4. Divide the result by `5` using `/=`.
5. Find the remainder after dividing by `3` using `%=`.

Challenge: Predict the final value without running the code.

## Question 4: Equality Operators

Predict whether each statement returns `true` or `false`. Then verify your answers using `console.log()`.

```
console.log(10 == "10");
console.log(10 === "10");
console.log(5 != "5");
console.log(5 !== "5");
console.log(0 == false);
console.log(0 === false);
console.log(null == undefined);
console.log(null === undefined);
```

Explain the difference between `==` and `===`, and between `!=` and `!==`.

## Question 5: Comparison Operators Challenge

Write a JavaScript program to predict and print the output of these comparisons.

```
console.log(12 > 8);
console.log(7 < 3);
console.log(10 >= 10);
console.log(15 <= 12);
console.log(8 != 9);
console.log(6 === 6);
console.log("20" > 5);
console.log("10" < "2");
```

Identify which statements return `true` and which return `false`. Explain why the last comparison gives its result.

Instructions for your friend

- Solve all 5 questions in VS Code.
- Predict the output before executing your code.
- Use `console.log()` to display results.
- Write short explanations for Questions 2, 4, and 5.

Teacher's tip: Pay special attention to `==` versus `===`, and `x++` versus `++x`. These concepts are important for understanding JavaScript logic.

*/
