# Callback Functions in JavaScript (In Depth)

A **callback function** is a function that is **passed as an argument to another function**, and is executed after some operation has been completed. Callback functions are a powerful tool for managing asynchronous behavior, event handling, and functional programming.

---

## 🧾 What is a Callback Function?

A **callback** is simply a function that is passed into another function as an argument and is **invoked inside the outer function** to complete some kind of routine or action.

### 🔹 Basic Syntax:

```js
function outerFunction(callback) {
  // do something
  callback(); // invoke the callback
}

function sayHello() {
  console.log("Hello!");
}

outerFunction(sayHello); // Output: Hello!
```

---

## 🧠 Why Use Callback Functions?

* **Asynchronous Execution:** Useful for tasks like API requests, reading files, timers, etc.
* **Event Handling:** DOM events in web development use callbacks.
* **Functional Programming:** Used to create flexible, composable functions.

---

## 🔍 Real-life Analogy

> You order food at a restaurant (main function).
> You give your phone number (callback function).
> Once food is ready (operation completed), you get a call (callback gets executed).

---

## 📌 Synchronous vs Asynchronous Callback

### ✅ Synchronous Callback Example:

```js
function greetUser(name, callback) {
  console.log("Hi " + name);
  callback();
}

greetUser("Ram", function() {
  console.log("Welcome!");
});
```

### ✅ Asynchronous Callback Example:

```js
console.log("Start");

setTimeout(function () {
  console.log("Executed after 2 seconds");
}, 2000);

console.log("End");
```

**Output:**

```
Start
End
Executed after 2 seconds
```

---

## ✅ Callback with Parameters

```js
function processUserInput(callback) {
  const name = "Shyam";
  callback(name);
}

processUserInput(function (name) {
  console.log("Welcome, " + name);
});
```

---

## 🧩 Callback in Array Methods

Many JavaScript array methods use callbacks:

```js
const numbers = [1, 2, 3];

numbers.forEach(function(num) {
  console.log(num * 2);
});
```

---

## ⚠️ Callback Hell

When callbacks are nested within callbacks, it creates code that is hard to read and maintain:

```js
setTimeout(() => {
  console.log("1st Task");
  setTimeout(() => {
    console.log("2nd Task");
    setTimeout(() => {
      console.log("3rd Task");
    }, 1000);
  }, 1000);
}, 1000);
```

> This is often referred to as **"callback hell"** and is one reason why **Promises** and **async/await** were introduced.

---

## ✅ Named vs Anonymous Callbacks

### Named:

```js
function logGreeting(name) {
  console.log("Hello, " + name);
}

function greet(callback) {
  const user = "Aman";
  callback(user);
}

greet(logGreeting);
```

### Anonymous:

```js
greet(function(name) {
  console.log("Hello, " + name);
});
```

---

## 🔁 Summary Table

| Type           | Description                         |
| -------------- | ----------------------------------- |
| Synchronous    | Callback executes immediately       |
| Asynchronous   | Callback waits for task to finish   |
| Named Callback | Defined separately with a name      |
| Anonymous      | Defined inline, no name             |
| Used In        | Events, APIs, array methods, timers |

---

## ✅ Best Practices

* Avoid deeply nested callbacks (callback hell).
* Use named functions for readability.
* Use Promises or async/await for better async flow.
* Always handle errors in asynchronous callbacks.

---

## ✅ Conclusion

Callback functions are essential to writing non-blocking, responsive JavaScript applications. They allow flexibility in defining custom behavior after a task is complete and form the foundation of asynchronous JavaScript programming.

---
