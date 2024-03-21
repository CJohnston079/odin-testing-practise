# The Odin Project | Testing Practise

https://www.theodinproject.com/lessons/node-path-javascript-testing-practice

### 1. Capitalise

Write a capitalize function that takes a string and returns it with the first character capitalized.

```javascript
const capitalisedStr = capitalise("string");

console.log(capitalisedStr); // "String";
```

### 2. Reverse String

Write a reverseString function that takes a string and returns it reversed.

```javascript
const reversedStr = reverseString("string");

console.log(reversedStr); // "gnirts";
```

### 3. Calculator

Write a calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
Each of these functions should take two numbers and return the correct calculation.

```javascript
const sum = calculator.add(12, 3);
const difference = calculator.subtract(12, 3);
const product = calculator.multiple(12, 3);
const quotient = calculator.divide(12, 3);

console.log(sum); // 15;
console.log(difference); // 9;
console.log(product); // 36;
console.log(quotient); // 4;
```

### 4. Caesar Cipher

Write a caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”.
Read more about how a Caesar cipher works on this website.
https://crypto.interactive-maths.com/caesar-shift-cipher.html

- Don’t forget to test wrapping from z to a.
- Don’t forget to test keeping the same case.
- Don’t forget to test punctuation!

For this one, you may want to split the final function into a few smaller functions.
One concept of testing is that you don’t need to explicitly test every function you write, just the public ones.
In this case you only need tests for the final caesarCipher function.
If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

```javascript
const encrypted = caesarCipher("Hello, World!", 5);

console.log(encrypted); // "Mjqqt, Btwqi!"
```

### 5. Analyse Array

Write an analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

```javascript
const object = analyzeArray([1, 8, 3, 4, 2, 6]);

console.log(object);
// {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// }
```
