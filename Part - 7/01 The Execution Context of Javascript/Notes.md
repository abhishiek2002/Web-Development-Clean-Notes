# 📘 JavaScript Execution Context - Detailed Explanation

Understanding the **Execution Context** in JavaScript is essential to mastering how JavaScript code runs under the hood. Let's break this concept down in-depth.

---

## 🔍 What is an Execution Context?

An **Execution Context** is an environment where JavaScript code is evaluated and executed. It is like a wrapper that helps manage the code execution.

Whenever any JavaScript code runs, it’s run inside an execution context.

There are mainly **three types of execution contexts**:

1. **Global Execution Context (GEC)**
2. **Functional Execution Context (FEC)**
3. **Eval Execution Context** (rarely used)

---

## 🌍 1. Global Execution Context (GEC)

This is the default or base context where any JS code runs initially. When the JavaScript engine starts interpreting your code, it creates a global execution context.

### It does two main things:

* Creates a global object (`window` in browsers, `global` in Node.js)
* Creates a special object called `this`

```js
var name = "Abhishek";
function greet() {
    console.log("Hello");
}
```

In the above code, the global execution context is created first.

---

## 🧠 2. Functional Execution Context (FEC)

Every time a function is invoked, a new execution context is created for that function.

```js
function greet() {
  var message = "Hello";
  console.log(message);
}

greet();
```

Here:

* One GEC is created
* One FEC is created when `greet()` is called

Each FEC has its own variables, scope, and `this`.

---

## ⚙️ The Execution Context Creation Phases

Every execution context has **two major phases**:

### 1. Creation Phase

* The `this` keyword is determined
* Memory is allocated for variables and functions
* Variables are initialized with `undefined`
* Functions are stored in memory

### 2. Execution Phase

* Code is executed line by line
* Variable values are assigned
* Functions are invoked

---

## 🧱 Inside the Execution Context: The Components

Each execution context has three components:

### 1. **Variable Environment**

* Stores function arguments, inner variable declarations

### 2. **Lexical Environment**

* Includes VariableEnvironment
* Refers to its outer environment (for closures)

### 3. **`this` Binding**

* Depends on how the function is called

---

## 🧮 JavaScript Call Stack

The **Call Stack** is a data structure that keeps track of execution contexts.

### Example:

```js
function one() {
  two();
  console.log("one");
}

function two() {
  console.log("two");
}

one();
```

### Call Stack Flow:

1. GEC is created and pushed
2. `one()` → FEC is pushed
3. `two()` → FEC is pushed
4. `two()` is popped
5. `one()` is popped
6. GEC is popped when the program ends

---

## 🌀 Hoisting in Execution Context

During the **creation phase**, variables and functions are hoisted:

* Variables: hoisted but set to `undefined`
* Functions: hoisted with entire definition

```js
console.log(x); // undefined
var x = 10;

foo(); // works
function foo() {
  console.log("Function called");
}
```

---

## 📦 Summary

| Context Type | Created When       | Purpose                     |
| ------------ | ------------------ | --------------------------- |
| GEC          | Code first runs    | Set up global object & this |
| FEC          | Function called    | Execute function code       |
| Eval         | `eval()` is called | Execute eval code           |

### Key Concepts:

* Execution Context controls code execution
* GEC is always the first context
* FECs are stacked on the Call Stack
* Hoisting happens in the creation phase

---

## 🔁 Related Concepts

* **Closures**: Functions remember their lexical scope
* **Scope Chain**: Determined by lexical environment
* **Hoisting**: A behavior of moving declarations to the top
* **`this` keyword**: Depends on how a function is called

---

## 🔚 Conclusion

Execution Contexts are the **heart of JavaScript runtime behavior**. Understanding them gives you deep insights into how variables, functions, scope, and `this` work in JavaScript.

Mastering this will take your JS skills to the next level 🚀
