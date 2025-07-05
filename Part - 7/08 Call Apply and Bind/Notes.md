# Call, Apply, and Bind in JavaScript

`call()`, `apply()`, and `bind()` are **methods available to all functions in JavaScript**, and they are used to control the **`this` context** of function execution.

They are part of **Function.prototype** and are especially useful when borrowing functions or invoking functions with a specific context.

---

## 🔍 Understanding `this`

Before diving into these methods, it's important to understand what `this` means in JavaScript.

* `this` refers to the object that is **executing the current function**.
* In the global scope, `this` refers to the **global object** (e.g., `window` in browsers).
* Inside an object method, `this` refers to the object itself.

---

## 🧠 `call()` Method

### 📌 Syntax:

```js
function.call(thisArg, arg1, arg2, ...)
```

### ✅ Use Case:

Calls the function **immediately** with a specific `this` value and arguments passed **individually**.

### 🧪 Example:

```js
function greet(greeting, name) {
  console.log(`${greeting}, ${name}! I am ${this.role}`);
}

const obj = { role: "Developer" };

greet.call(obj, "Hello", "Alice"); // Hello, Alice! I am Developer
```

### 🔑 Key Points:

* Invokes function **instantly**.
* Arguments are passed **one by one**.

---

## 🧠 `apply()` Method

### 📌 Syntax:

```js
function.apply(thisArg, [argsArray])
```

### ✅ Use Case:

Calls the function **immediately** with a specific `this` value and arguments passed as an **array**.

### 🧪 Example:

```js
function greet(greeting, name) {
  console.log(`${greeting}, ${name}! I am ${this.role}`);
}

const obj = { role: "Designer" };

greet.apply(obj, ["Hi", "Bob"]); // Hi, Bob! I am Designer
```

### 🔑 Key Points:

* Invokes function **instantly**.
* Arguments are passed **as an array**.

---

## 🧠 `bind()` Method

### 📌 Syntax:

```js
const newFunc = function.bind(thisArg, arg1, arg2, ...)
```

### ✅ Use Case:

Returns a **new function** with a specific `this` value and optional arguments **pre-set**. It does **not call** the function immediately.

### 🧪 Example:

```js
function greet(greeting, name) {
  console.log(`${greeting}, ${name}! I am ${this.role}`);
}

const obj = { role: "Manager" };

const greetManager = greet.bind(obj, "Welcome");
greetManager("Charlie"); // Welcome, Charlie! I am Manager
```

### 🔑 Key Points:

* Returns a **new function**.
* Function is **not executed immediately**.
* Useful for **event handlers**, **callbacks**, and **function currying**.

---

## 🔄 Difference Table

| Feature   | `call()`        | `apply()`       | `bind()`                |
| --------- | --------------- | --------------- | ----------------------- |
| Execution | Immediate       | Immediate       | Returns a new function  |
| Arguments | Individually    | As array        | Individually or partial |
| Returns   | Function result | Function result | New bound function      |

---

## 🎯 Real-Life Example

### HTML:

```html
<button id="clickMe">Click Me</button>
```

### JavaScript:

```js
const user = {
  name: "Abhishek",
  sayHi: function () {
    console.log(`Hello, ${this.name}`);
  }
};

const btn = document.getElementById("clickMe");

btn.addEventListener("click", user.sayHi.bind(user));
```

Without `.bind(user)`, `this.name` would be `undefined` because `this` would refer to the button, not the `user` object.

---

## ✅ When to Use What?

| Situation                               | Method    |
| --------------------------------------- | --------- |
| Call function immediately with args     | `call()`  |
| Call function immediately with arg list | `apply()` |
| Delay call with preset context          | `bind()`  |

---

## 🧾 Summary

* Use `call()` for immediate invocation with individual arguments.
* Use `apply()` for immediate invocation with arguments as an array.
* Use `bind()` when you need to create a new function with a specific `this` value.

Closely understanding these three methods helps in mastering `this` and writing more flexible, reusable functions in JavaScript.

---
