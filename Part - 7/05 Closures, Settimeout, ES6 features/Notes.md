# 🔐 Closures, ⏲️ setTimeout, and 🚀 ES6 Features in JavaScript

JavaScript is known for its flexible and powerful behavior due to features like **closures**, **asynchronous operations** like `setTimeout`, and **modern improvements** introduced in ES6 (ECMAScript 2015). This document covers these concepts in **depth**.

---

## 🔐 Closures in JavaScript

### ✅ What is a Closure?

A **closure** is a function that **remembers its lexical scope** even when it is executed outside of that scope.

Closures allow functions to access variables from an **outer function**, even after the outer function has finished execution.

### 🔹 Example:

```js
function outerFunction() {
  let outerVar = 'I am outside!';

  function innerFunction() {
    console.log(outerVar); // Accesses outerVar
  }

  return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // I am outside!
```

### 🔸 Why Are Closures Useful?

* Data encapsulation (private variables)
* Callback functions
* Maintaining state in async operations

### 🔹 Closure with Private State:

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
```

---

## ⏲️ setTimeout and Asynchronous Execution

### ✅ What is `setTimeout()`?

`setTimeout()` is a built-in JavaScript function that **executes a function after a specified delay** (in milliseconds).

```js
setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);
```

### 🔹 How it Works:

* `setTimeout` is non-blocking
* The delay timer is managed by the browser (Web API)
* The callback is queued in the **Event Queue** and waits for the **Call Stack** to be empty

### 🔸 Common Interview Question:

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Output: 4, 4, 4
```

### ✅ Fix Using Closure:

```js
for (var i = 1; i <= 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(i);
}
// Output: 1, 2, 3
```

Or use `let` for block scoping:

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), i * 1000);
}
```

---

## 🚀 ES6 (ECMAScript 2015) Features

### 🔹 1. `let` and `const`

Block-scoped variable declarations.

```js
let x = 10;
const y = 20;
```

### 🔹 2. Arrow Functions

Shorter syntax and lexical `this` binding.

```js
const greet = name => console.log("Hello " + name);
```

### 🔹 3. Template Literals

Use backticks and `${}` for interpolation.

```js
const name = "Abhi";
console.log(`Hello, ${name}`);
```

### 🔹 4. Default Parameters

Set default values for function parameters.

```js
function greet(name = "Guest") {
  console.log("Hello, " + name);
}
```

### 🔹 5. Destructuring

Extract values from arrays or objects.

```js
const user = { name: "Abhi", age: 25 };
const { name, age } = user;
```

### 🔹 6. Spread and Rest Operators

```js
// Spread
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];

// Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
```

### 🔹 7. Classes

Syntactic sugar for prototype-based inheritance.

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hi, I’m " + this.name);
  }
}
```

### 🔹 8. Promises

For handling asynchronous operations.

```js
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

fetchData.then(res => console.log(res));
```

---

## ✅ Summary Table

| Feature           | Purpose                                      |
| ----------------- | -------------------------------------------- |
| Closure           | Maintain lexical scope and private variables |
| setTimeout        | Asynchronous function call after delay       |
| let/const         | Block-scoped declarations                    |
| Arrow Function    | Shorter syntax, no own `this`                |
| Template Literals | Cleaner string interpolation                 |
| Default Params    | Function parameter defaults                  |
| Destructuring     | Simplify data extraction                     |
| Spread/Rest       | Array/object manipulation and flexible args  |
| Classes           | OOP in JS                                    |
| Promises          | Handle async flow                            |

---

## 🔚 Conclusion

Closures provide powerful control over scope, `setTimeout` enables asynchronous scheduling, and ES6 brought modern, cleaner syntax to JavaScript. Mastering these makes you a confident and effective JavaScript developer 💪🚀
