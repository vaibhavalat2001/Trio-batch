// day 7

// ### Numbers
// toFixed, isInteger, Number, isNaN, parseInt, parseFloat,
// let n = 3.14134;

// console.log(n.toFixed(4)); // 3.1413
// console.log(Number.isInteger(n)); // false
// console.log(isNaN(323)); // false
// console.log(isNaN("hello")); // true
// console.log(parseInt(n)); // 3
// console.log(parseFloat(n)) // 3.14134
// console.log(Number(n)); // 3.14134
// console.log(Number("hello")); // NaN

// ### Math methods:
// round, ceil, floor, sqrt, pow, abs, min, max, random, pi, e,

// console.log(Math.round(4.4));   // 4    num < 4  = down value
// console.log(Math.round(4.5));   // 5    num > 4 = up value
// console.log(Math.ceil(5.1));    // 6    up value
// console.log(Math.ceil(4)); // 4
// console.log(Math.floor(8.4));   // 8    // down value
// console.log(Math.floor(8.9));   // 8
// console.log(Math.sqrt(49)); // 7
// console.log(Math.pow(7, 2));   // 49
// console.log(Math.abs(-589)); // 589
// console.log(Math.min(3, 2, 0)); // 0
// console.log(Math.max(232, 23, 235)); // 235
// console.log(Math.PI.toFixed(2)); // 3.14159
// console.log(Math.random()); // 0, 0.99
// console.log(Math.E);


// 1 to 31
// console.log(Math.floor(Math.random()*31+1));




/*

# JavaScript Day 7 – Homework 📝

Topics: Number methods, type conversion, parseInt, parseFloat, isNaN, Math methods, rounding, random numbers, and mathematical constants.

Here are 5 homework questions based on the concepts taught in Day 7.

Question 1: Number Methods

Create the following variable:

```
let price = 459.6789;
```

Perform these tasks:

1. Print the price with 2 decimal places using `toFixed()`.
2. Check whether the price is an integer using `Number.isInteger()`.
3. Convert `"250"` into a number using `Number()`.
4. Convert `"Hello123"` into a number and check the result.
5. Check whether `"JavaScript"` is NaN using `isNaN()`.

Question 2: parseInt and parseFloat

Given the following values:

```
let a = "123.456";
let b = "89.75";
let c = 45.987;
```

Predict and print the output of:

1. `parseInt(a)`
2. `parseFloat(a)`
3. `parseInt(b)`
4. `parseFloat(b)`
5. `Number(c)`
6. `c.toFixed(2)`

Also explain the difference between `parseInt()` and `parseFloat()`.

Question 3: Math Methods

Write a JavaScript program using the following numbers:

```
let num1 = 25.7;
let num2 = -49;
let num3 = 16;
```

Perform these operations:

1. Round `num1` using `Math.round()`.
2. Round `num1` upward using `Math.ceil()`.
3. Round `num1` downward using `Math.floor()`.
4. Find the square root of `num3`.
5. Find the absolute value of `num2`.
6. Calculate `5` raised to the power of `3` using `Math.pow()`.

Question 4: Min, Max and Random Numbers

Complete the following tasks:

1. Find the smallest number from `45, 12, 89, 3, 67` using `Math.min()`.
2. Find the largest number from the same values using `Math.max()`.
3. Generate a random number between `1` and `10`.
4. Generate a random number between `50` and `100`.
5. Generate a random integer between `1` and `31`.

Condition: Random numbers must be integers, not decimal values.

Question 5: Math Challenge

Create a program to perform the following tasks:

1. Store your circle's radius in a variable.
2. Calculate the area of the circle using `Math.PI`.
3. Display the area rounded to 2 decimal places using `toFixed()`.
4. Calculate the square of the radius using `Math.pow()`.
5. Print the value of `Math.E` using `console.log()`.

Formula:

\\[ Area = \pi \times radius^2 \\]

Instructions for your friend

- Solve all 5 questions in VS Code.
- Predict outputs before executing the code.
- Use `console.log()` to display results.
- Don't copy solutions from the internet.

Teacher's tip: Give extra attention to Question 4. Make sure your friend understands this formula:

```
Math.floor(Math.random() * (max - min + 1) + min);
```

This formula is useful for generating random integers within any given range.

*/