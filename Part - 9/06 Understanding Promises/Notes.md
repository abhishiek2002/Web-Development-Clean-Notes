# 📦 Promises in JavaScript (In Depth)

JavaScript is single-threaded and asynchronous by nature. Promises help us **manage asynchronous operations** in a more elegant and readable way compared to callbacks.

---

## 📘 What is a Promise?

> A **Promise** is a JavaScript object that represents the **eventual completion** or **failure** of an asynchronous operation and its resulting value.

It is like a **placeholder** for a value that will be available **later**.

---

## 🧠 What is an Executor Function?

When you write:

```js
const promise = new Promise((resolve, reject) => {
  // This function is the executor
  // It runs IMMEDIATELY when the promise is created
});
```

The function passed into `new Promise(...)` is called the **executor function**.

* It runs **synchronously** when the Promise is created.
* It receives `resolve` and `reject` as arguments.
* It is responsible for determining whether the promise gets **fulfilled** or **rejected**.

### ✅ Example:

```js
const p = new Promise((resolve, reject) => {
  console.log("Running executor...");
  resolve("Done");
});
```

Output:

```
Running executor...
```

### ⚠️ Common Gotcha:

```js
const fn = () => new Promise((resolve, reject) => {
  console.log("executor running");
  resolve("Done");
});

console.log("Before fn call");
fn().then(res => console.log(res));
console.log("After fn call");
```

**Output:**

```
Before fn call
executor running
After fn call
Done
```

> The executor doesn’t run when the function `fn` is defined — only when it's **called**.

---

## ⏳ States of a Promise

| State         | Description                           |
| ------------- | ------------------------------------- |
| **Pending**   | Initial state, not fulfilled/rejected |
| **Fulfilled** | Operation completed successfully      |
| **Rejected**  | Operation failed                      |

---

## 🧐 Basic Syntax

```js
let promise = new Promise((resolve, reject) => {
  // async task
  if (success) {
    resolve("Success result");
  } else {
    reject("Error occurred");
  }
});
```

* `resolve()` — called when the operation is successful
* `reject()` — called when there is an error

---

## ✅ Consuming Promises

```js
promise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Always runs");
  });
```

* `.then()` handles resolved values
* `.catch()` handles errors
* `.finally()` runs whether resolved or rejected

---

## 📋 Example: Simulating an API Call

```js
function fakeAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) resolve("Data received!");
      else reject("Failed to fetch data.");
    }, 2000);
  });
}

fakeAPI()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("Request complete"));
```

---

## ⛂️ Chaining Promises

```js
getUser()
  .then(getOrders)
  .then(showOrders)
  .catch(handleError);
```

Each `.then()` returns a **new promise**, allowing clean chaining.

---

## 🧬 Real-World Use Cases

* Fetching data from a server using `fetch()`
* Loading resources (images, scripts)
* Handling complex async flows

```js
fetch("https://api.example.com/data")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("Error:", err));
```

---

## 🔄 Promise Utility Methods

### `Promise.all()`

Runs multiple promises **in parallel** and waits for all of them to finish.

```js
Promise.all([promise1, promise2])
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
```

### `Promise.race()`

Returns result of the **first promise** to resolve or reject.

```js
Promise.race([promise1, promise2])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

### `Promise.allSettled()`

Waits for **all promises** to settle (either resolve or reject).

```js
Promise.allSettled([promise1, promise2])
  .then((results) => console.log(results));
```

### `Promise.any()`

Resolves as soon as **any one** promise is fulfilled.

```js
Promise.any([promise1, promise2])
  .then((result) => console.log(result))
  .catch((error) => console.log("All promises rejected"));
```

---

## ⚖️ Callbacks vs Promises

| Feature        | Callbacks                    | Promises                |
| -------------- | ---------------------------- | ----------------------- |
| Syntax         | Nested, messy                | Chainable, cleaner      |
| Error Handling | Requires separate checks     | Unified with `.catch()` |
| Flow Control   | Hard to manage               | Easy chaining           |
| Readability    | Hard to read (callback hell) | Much more readable      |

---

## 📟 Summary Table

| Concept     | Description                               |
| ----------- | ----------------------------------------- |
| Object      | Represents future result of async task    |
| States      | pending → fulfilled / rejected            |
| Methods     | then(), catch(), finally()                |
| Common Uses | API calls, file reading, async processing |

---

## ✅ Conclusion

**Promises** are the backbone of asynchronous programming in JavaScript. They provide a clean, chainable, and more maintainable way to handle async code without falling into **callback hell**.

You can use Promises with `.then()` / `.catch()` or combine them with utility methods like `Promise.all()` and `Promise.race()` to manage multiple async operations efficiently.

Let me know if you’d like to explore `async/await` next!
