# Functions in JavaScript (In Depth)

Functions are one of the core building blocks in JavaScript. They allow you to encapsulate logic, perform tasks, and return results. Let's explore JavaScript functions in depth, including types, syntax, execution, scope, and advanced topics.

---

## 🧾 What is a Function?

A **function** is a reusable block of code designed to perform a particular task.

### 🔹 Syntax:

```js
function functionName(parameters) {
  // code to execute
  return value;
}
```

### 🔹 Example:

```js
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Alice")); // Hello, Alice
```

---

## 📦 Function Types in JavaScript

### 1. **Function Declaration** (a.k.a Function Statement)

```js
function sayHello() {
  console.log("Hello");
}
```

* Hoisted to the top of their scope.

### 2. **Function Expression**

```js
const sayHi = function() {
  console.log("Hi");
};
```

* Not hoisted.

### 3. **Arrow Function** (ES6+)

```js
const add = (a, b) => a + b;
```

* Shorter syntax.
* No `this`, `arguments`, or `super` binding.

### 4. **Anonymous Function**

```js
setTimeout(function() {
  console.log("Executed");
}, 1000);
```

* Functions without a name.

### 5. **Immediately Invoked Function Expression (IIFE)**

```js
(function() {
  console.log("IIFE called");
})();
```

* Runs as soon as it is defined.

---

## 🔄 Function Parameters and Arguments

### 🔹 Parameters

* Variables listed in the function definition.

### 🔹 Arguments

* Values passed to the function during invocation.

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet(); // Hello, Guest
```

### 🔹 Rest Parameters

```js
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

sum(1, 2, 3); // 6
```

### 🔹 Arguments Object

```js
function showArgs() {
  console.log(arguments);
}

showArgs(1, 2, 3); // [1, 2, 3] (in array-like object)
```

> 🚫 Note: `arguments` object is not available in arrow functions.

---

## 🔁 Return Statement

```js
function getMessage() {
  return "Hello World";
}

console.log(getMessage()); // Hello World
```

* Ends function execution and returns a value.

---

## 🧠 Hoisting in Functions

* **Function Declarations** are hoisted:

```js
sayHi(); // ✅ Works
function sayHi() {
  console.log("Hi");
}
```

* **Function Expressions** are not:

```js
sayHello(); // ❌ Error
const sayHello = function() {
  console.log("Hello");
};
```

---

## 🔗 Scope & Closures

### 🔹 Lexical Scope:

Functions form closures and have access to variables defined in their outer scope.

```js
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  return inner;
}

const func = outer();
func(); // 10
```

### 🔹 Closure:

A closure is when a function remembers its lexical scope even when the function is executed outside that scope.

---

## 🧰 Advanced Topics

### ✅ Callback Functions

```js
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

greet("John", function() {
  console.log("Callback called");
});
```

### ✅ Higher-Order Functions

* Functions that take other functions as arguments or return them.

```js
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

### ✅ Recursion

A function that calls itself.

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

### ✅ Arrow Function `this` Behavior

* Arrow functions don’t have their own `this`. They inherit `this` from their lexical context.

```js
const person = {
  name: "Alice",
  greet: () => {
    console.log("Hi " + this.name);
  }
};

person.greet(); // Hi undefined
```

---

## ⭐ First-Class Functions

JavaScript supports **first-class functions**, meaning:

* Functions can be **assigned to variables**
* Functions can be **passed as arguments**
* Functions can be **returned from other functions**

```js
const greet = function() {
  console.log("Hello");
};

function execute(fn) {
  fn();
}

execute(greet); // Hello
```

```js
function outer() {
  return function() {
    console.log("Returned from outer");
  };
}

const inner = outer();
inner(); // Returned from outer
```

First-class functions make JavaScript a **functional programming**-friendly language.

---

## 🧾 Summary Table

| Feature              | Description                                   |
| -------------------- | --------------------------------------------- |
| Function Declaration | Normal named function (hoisted)               |
| Function Expression  | Function assigned to a variable (not hoisted) |
| Arrow Function       | Concise syntax, lexical `this`                |
| Parameters vs Args   | Declared vs passed values                     |
| IIFE                 | Self-executing anonymous function             |
| Closures             | Functions remember outer scope                |
| HOF                  | Accepts/returns other functions               |
| Recursion            | Function calls itself                         |
| First-Class Function | Treated like values (assign, pass, return)    |

---

## ✅ Best Practices

* Use meaningful function names.
* Keep functions small and focused.
* Prefer pure functions in functional programming.
* Use arrow functions for short callbacks.
* Avoid modifying outer scope variables.

---
