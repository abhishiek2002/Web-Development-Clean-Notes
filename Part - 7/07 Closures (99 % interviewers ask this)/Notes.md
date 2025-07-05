# Closures in JavaScript

Closures are a fundamental and powerful concept in JavaScript. They allow functions to access variables from an outer scope, even after that scope has closed.

---

## 🔍 What is a Closure?

A **closure** is formed when a function is defined **inside another function**, and the inner function **retains access to the outer function's variables** even after the outer function has returned.

```js
function outer() {
  let outerVar = "I am from outer";

  function inner() {
    console.log(outerVar); // Can access outerVar
  }

  return inner;
}

const closureFunc = outer();
closureFunc(); // Output: I am from outer
```

> ✅ `inner()` retains access to `outerVar` even after `outer()` has finished execution — this is closure.

---

## 📦 How Closures Work Internally

When a function is created in JavaScript, it carries a **scope chain** with it:

* The current function’s scope
* Its outer function’s scope
* All the way up to the global scope

This entire chain is preserved thanks to closures.

---

## 🔄 Real-Life Analogy

Imagine a backpack 🎒 (closure) that a child (inner function) carries. The backpack has supplies (outer function's variables). Even after the parent (outer function) leaves, the child still has access to the supplies.

---

## 💡 Use Cases of Closures

### ✅ 1. Data Privacy / Encapsulation

Closures allow us to hide data from the outside world:

```js
function secretHolder() {
  let secret = "Hidden Message";

  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (newSecret) {
      secret = newSecret;
    }
  };
}

const holder = secretHolder();
console.log(holder.getSecret()); // Hidden Message
holder.setSecret("New Secret");
console.log(holder.getSecret()); // New Secret
```

### ✅ 2. Function Factories

Create specialized functions dynamically:

```js
function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  }
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

### ✅ 3. Maintaining State in Asynchronous Code

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  }
}

const increment = counter();
increment(); // 1
increment(); // 2
increment(); // 3
```

Each call to `counter()` creates a new scope, and `increment` retains access to its own `count` variable.

---

## 🧠 Common Interview Closure Pattern: Loop + setTimeout

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Output: 4 4 4 (after 1s, 2s, 3s)
```

### Why? Because `var` is function scoped. All callbacks share the same `i`.

### Fix it using closure:

```js
for (var i = 1; i <= 3; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  })(i);
}
// Output: 1 2 3
```

Or use `let` which is block scoped:

```js
for (let i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
```

---

## ⚠️ Things to Watch Out For

* Be careful when using closures in loops (due to scope).
* Closures can **consume memory** if not handled properly.
* Avoid retaining references to large objects inside closures unless necessary.

---

## 🧾 Summary Table

| Concept       | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Closure       | Inner function remembers variables from its outer scope      |
| Use Cases     | Data hiding, function factories, async state management      |
| Key Features  | Persistent access to outer scope, even after return          |
| Memory Impact | Variables are retained in memory as long as closure is alive |

---

## ✅ Best Practices

* Use closures to create **private variables**.
* Prefer `let`/`const` to avoid loop-related bugs.
* Avoid overusing closures in performance-critical code due to memory retention.

---
