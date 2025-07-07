# JavaScript Event Loop (In Depth)

The **Event Loop** is the heart of asynchronous programming in JavaScript. It enables **non-blocking behavior** even though JavaScript is **single-threaded**.

---

## 🧠 Why Do We Need the Event Loop?

JavaScript can only do **one thing at a time** because it has a single call stack. However, we often want to perform tasks like:

* Waiting for a timer (e.g., `setTimeout`)
* Responding to user input
* Fetching data from an API

The **event loop** allows these tasks to happen without **blocking** the main thread.

---

## 🏗️ Components of the JavaScript Runtime

1. **Call Stack** – Where functions are executed.
2. **Web APIs** – Browser-provided APIs like `setTimeout`, `fetch`, `DOM events`.
3. **Callback Queue (Task Queue)** – Stores callback functions to be executed.
4. **Event Loop** – The system that checks whether the call stack is empty and pushes tasks from the queue.
5. **Microtask Queue** – For Promises and MutationObservers (higher priority than Callback Queue).

---

## 🔄 How the Event Loop Works (Step-by-step)

1. JavaScript starts executing from the **Call Stack**.
2. When it hits `setTimeout` or `fetch`, the task is **offloaded to Web APIs**.
3. After the timer or fetch is complete, the callback is moved to the **Callback Queue**.
4. The **Event Loop** checks if the **Call Stack is empty**.
5. If empty, it **pushes the next callback** from the Callback Queue or Microtask Queue into the Call Stack.

---

## 🔍 Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0);

console.log("End");
```

### Output:

```
Start
End
Inside setTimeout
```

Even though `setTimeout` is set for 0 ms, it runs **after** the synchronous code because it's handled by the **Web API and Callback Queue**.

---

## 📦 Microtask vs Callback Queue

### 🔹 Microtasks:

* Promise `.then()`
* `queueMicrotask()`

### 🔹 Macrotasks:

* `setTimeout`
* `setInterval`
* `setImmediate` (Node.js)

### 🔹 Example:

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

### Output:

```
Start
End
Promise
Timeout
```

> ✅ Microtasks are executed **before** macrotasks.

---

## 🧠 Visual Flow:

1. Run synchronous code on **Call Stack**
2. Async tasks handled by **Web APIs**
3. Completed async tasks -> Callback or Microtask Queue
4. **Event Loop** picks Microtasks first, then Macrotasks

---

## 📌 Event Loop in Node.js

In Node.js, the Event Loop has additional phases like:

* timers
* pending callbacks
* idle/prepare
* poll
* check
* close callbacks

But the **core concept** remains the same: **non-blocking single-threaded execution**.

---

## ✅ Summary Table

| Component       | Description                                |
| --------------- | ------------------------------------------ |
| Call Stack      | Executes functions one-by-one              |
| Web APIs        | Browser/Node features like timers, fetch   |
| Callback Queue  | Stores macrotask callbacks                 |
| Microtask Queue | Stores promise and mutation callbacks      |
| Event Loop      | Manages task flow between queues and stack |

---

## ✅ Conclusion

The **Event Loop** is what makes JavaScript asynchronous, efficient, and powerful. Understanding it helps you write **non-blocking code**, debug delays, and optimize performance.

---

# 🔄 Event Loop in JavaScript (In Depth)

JavaScript is **single-threaded**, meaning it can only do one thing at a time. However, it manages asynchronous operations like `setTimeout`, `Promises`, and `DOM events` efficiently using something called the **Event Loop**.

---

## 🧠 What is the Event Loop?

> The **Event Loop** is the mechanism that JavaScript uses to manage execution of **synchronous** and **asynchronous** code.

It continuously checks the **call stack** and the **task queues** to decide what to execute next.

---

## 📦 Call Stack

* Executes all **synchronous** code (top to bottom).
* If a function is called, it is pushed onto the stack.
* When the function returns, it is popped off.

---

## 🕓 Web APIs (Provided by Browser)

Asynchronous operations like:

* `setTimeout`
* `DOM events`
* `fetch()`
* `XMLHttpRequest`

are handled by the browser’s Web APIs, **not JavaScript itself**.

---

## 🧾 Task Queues

JavaScript has **two main types of queues**:

### 1. 📋 **Macrotask Queue**

* Also called the **Callback Queue**.
* Includes: `setTimeout`, `setInterval`, `setImmediate`, `requestAnimationFrame`, etc.

### 2. 🧬 **Microtask Queue**

* Includes: `Promise.then`, `Promise.catch`, `Promise.finally`, `queueMicrotask`
* **Higher priority** than macrotasks!

---

## 🔄 Priority: Microtask vs Macrotask

| Queue Type | Examples                                 | Priority |
| ---------- | ---------------------------------------- | -------- |
| Microtask  | `.then()`, `catch()`, `queueMicrotask()` | ✅ High   |
| Macrotask  | `setTimeout`, `setInterval`              | ⏳ Low    |

* After the call stack is empty, **all microtasks are run first** before moving on to macrotasks.

---

## ✅ Real Example

```js
console.log('start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('resolve');
});

console.log('end');
```

### 🧾 Output:

```
start
end
resolve
setTimeout
```

### 🔍 Step-by-Step:

1. `'start'` printed immediately.
2. `setTimeout` callback added to **macrotask queue**.
3. `Promise.then()` added to **microtask queue**.
4. `'end'` printed.
5. Microtask queue runs → `'resolve'` printed.
6. Macrotask queue runs → `'setTimeout'` printed.

---

## 🧠 Visual Diagram

```mermaid
graph TD
  A[Main Thread: Call Stack Empty] --> B[Run Microtasks Queue]
  B --> C[Run .then() / catch()]
  C --> D[Then Run Macrotask Queue]
  D --> E[setTimeout / setInterval]
```

---

## ⚠️ Common Misconceptions

* `setTimeout(..., 0)` does **not run immediately** — it's deferred to the macrotask queue.
* `Promise.then()` will always run **before** any `setTimeout` callback.
* Even if you resolve a promise immediately, its `.then()` will wait for the call stack to be empty.

---

## 🏁 Summary

| Concept         | Role                                     |
| --------------- | ---------------------------------------- |
| Call Stack      | Executes synchronous JS code             |
| Web APIs        | Handle async tasks in browser            |
| Microtask Queue | Handles Promises and has higher priority |
| Macrotask Queue | Handles timers like setTimeout           |
| Event Loop      | Manages what runs next (stack or queue)  |

---

## ✅ Conclusion

The Event Loop is the **core engine** behind JavaScript's non-blocking behavior. Understanding how it works — especially the **priority of microtasks over macrotasks** — is key to writing efficient and predictable asynchronous code.

Let me know if you'd like advanced examples or real debugging techniques for async code!
