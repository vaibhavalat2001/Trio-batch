// day 6

// 10. String method:

// ' ', " ", ` `

// console.log("Hello"); // single quote
// console.log("Hello"); // double quote
// console.log(`Hello`); // backtick

let age = 24;
let course = "js";
// console.log(`My name is Vaibhav my age is ${age} I am doing ${course}` )

// ### String Methods
// upperCase, lowerCase, include, chatAt, slice.
// indexOf, replace, startWith, endWith, split, length,
// substring, trim, repeat,

let str = " He-llo, world! ";
// console.log(str.length); // 13
// console.log(str.toLowerCase()); // hello, world!
// console.log(str.toUpperCase()); // HELLO, WORLD!
// console.log(str.includes("age")); // false
// console.log(str.includes("Hello")); // true
// console.log(str.charAt(5)); // ,
// console.log(str.slice(0, 4)); // Hell
// console.log(str.slice(-3)); // d!
// console.log(str.split(",")); // ["Hello", "world!"];
// console.log(str.split(" ")); // ["Hello,", "world!"]
// console.log(str.split("-"));    // ["He", "llo, world!"]
// console.log(str.split("l"));  // ["He-", "", "o, wor", "d!"];
// console.log(str.indexOf("o"));  // 5
// console.log(str.startsWith("He")); // true
// console.log(str.endsWith("rld!"));  // true
// console.log(str.replace("He", "Hi"));   // Hi-llo, world!
// console.log(str);  // " He-llo, world! ";
// console.log(str.trim()) // "He-llo, world!"
// console.log(str.repeat(2)); // He-llo, world! He-llo, world!
// console.log(str.substring(4, 0)); // He-
// console.log(str.substring(-3)); // He-llo, world!
// console.log(str[9]); // w

let user = "Vaibhav Gajanan Alat";
console.log(user.split(" ")); // ["Vaibhav", "Gajanan", "Alat"];
console.log(user.split(" ")[0]); // Vaibhav
console.log(`Hello, ${user.split(" ")[0]}`); // Hello, Vaibhav

/*

# JavaScript Day 6 – Homework 📝

Topics: Template literals, string properties, string methods, indexing, slicing, splitting, searching, replacing, and trimming.

Here are 5 homework questions based on the string concepts you taught in Day 6. You can share these directly with your friend.

## Question 1: Template Literals

Create three variables:

- `name` — your name
- `age` — your age
- `course` — `"JavaScript"`

Using a template literal (backticks), print this type of message by inserting the variable values:

`Hello, my name is Amit. I am 22 years old and I am learning JavaScript.`

Replace the example details with your own variable values.

## Question 2: String Methods

Consider this string:

```
let str = "  Welcome to JavaScript  ";
```

Use string methods to perform these tasks:

1. Print the length of the string.
2. Convert it to uppercase.
3. Convert it to lowercase.
4. Check whether it includes `"JavaScript"`.
5. Remove the extra spaces from the beginning and end.
6. Check whether the original string starts with `"Welcome"`.

Print the result of every operation.

## Question 3: Slice, Substring, and Character Access

Given the following string:

```
let language = "JavaScript";
```

Write code to:

1. Print the first four characters.
2. Print the last three characters using a negative index with `slice()`.
3. Print the character at index `4` using `charAt()`.
4. Print the substring from index `0` to index `4` using `substring()`.
5. Print the character at index `6` using bracket notation (`[]`).

## Question 4: Search and Replace

Consider this string:

```
let sentence = "I love learning JavaScript";
```

Use string methods to:

1. Find the index of `"learning"`.
2. Check whether the sentence includes `"Python"`.
3. Check whether the sentence ends with `"JavaScript"`.
4. Replace `"JavaScript"` with `"React"`.
5. Repeat the original sentence two times.

Print all the results and check whether the original string changes after using `replace()`.

## Question 5: Split and String Challenge

You are given this variable:

```
let fullName = "Pragya Sharma Patil";
```

Complete the following tasks:

1. Split the full name into an array of words.
2. Print only the first name.
3. Print only the middle name.
4. Print only the last name.
5. Using a template literal, print a greeting such as `Hello, Pragya!`.

Challenge: Try the same program with a different full name containing three words, without changing the logic.

Instructions for your friend

- Solve all 5 questions in VS Code.
- Use the string methods taught in class.
- Print every result using `console.log()`.
- Try to solve the questions without looking at solutions.

Teacher's tip: Pay special attention to the difference between `slice()` and `substring()`, and remember that methods such as `trim()`, `replace()`, and `toUpperCase()` return new strings rather than modifying the original string.

*/
