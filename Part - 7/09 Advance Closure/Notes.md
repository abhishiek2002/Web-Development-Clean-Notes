# Advanced Closures in JavaScript

Closures are a powerful and deep concept in JavaScript. Beyond basic usage, closures enable advanced patterns like function factories, memoization, currying, partial application, and more. This document dives deep into advanced use cases of closures.

---

## 🔁 Recap: What is a Closure?

A closure gives you access to an outer function’s scope from an inner function, even after the outer function has returned.

```js
function outer() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

const increment = outer();
console.log(increment()); // 1
console.log(increment()); // 2
```

---

## 🔍 1. Closures for Data Encapsulation (Private Variables)

Closures simulate private variables and methods in JavaScript.

```js
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2
```

---

## 🏭 2. Function Factories (Dynamic Function Creation)

Closures allow generating customized functions.

```js
function multiplier(factor) {
  return function (number) {
    return number * factor;
  }
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

---

## 🧠 3. Memoization using Closures

Closures help cache previous results to improve performance.

```js
function memoizedAdd() {
  const cache = {};
  return function (n) {
    if (cache[n]) {
      console.log("Fetching from cache");
      return cache[n];
    } else {
      console.log("Calculating result");
      cache[n] = n + 10;
      return cache[n];
    }
  };
}

const add = memoizedAdd();
console.log(add(5)); // Calculating result → 15
console.log(add(5)); // Fetching from cache → 15
```

---

## 🔗 4. Currying

Currying is transforming a function with multiple arguments into a sequence of functions, each with a single argument.

```js
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3)); // 6
```

Closures allow each function to "remember" the argument passed to it.

---

## ⌛ 5. Closures with Asynchronous Code

Closures help maintain state in async code such as `setTimeout` or `setInterval`.

```js
for (var i = 1; i <= 3; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, x * 1000);
  })(i);
}
// Output: 1 (after 1s), 2 (after 2s), 3 (after 3s)
```

Without the closure (IIFE), all `console.log(x)` would output `4`.

---

## 🧮 6. Partial Application

Creating a new function by pre-filling some arguments.

```js
function calculate(a, b, c) {
  return a + b + c;
}

function partial(fn, a) {
  return function (b, c) {
    return fn(a, b, c);
  }
}

const partialAdd = partial(calculate, 10);
console.log(partialAdd(20, 30)); // 60
```

Closures allow the inner function to remember the pre-filled values.

---

## 🧷 7. Module Pattern Using Closures

Closures are commonly used to implement the module pattern.

```js
const CounterModule = (function () {
  let count = 0;

  function increment() {
    count++;
    return count;
  }

  function reset() {
    count = 0;
  }

  return {
    increment,
    reset
  };
})();

console.log(CounterModule.increment()); // 1
console.log(CounterModule.increment()); // 2
CounterModule.reset();
console.log(CounterModule.increment()); // 1
```

---

## 📌 Key Takeaways

| Concept             | Description                                |
| ------------------- | ------------------------------------------ |
| Private Variables   | Create data privacy using closures         |
| Function Factories  | Dynamically create functions               |
| Memoization         | Cache results for efficiency               |
| Currying            | Transform functions for composition        |
| Async Closures      | Preserve variables in loops or async calls |
| Partial Application | Pre-fill arguments using closures          |
| Module Pattern      | Encapsulate logic using IIFE + closures    |

---

## 🚫 Common Pitfalls

* Retaining large objects inside closures can cause memory leaks
* Overusing closures can make code harder to read
* Using `var` inside loops without closures can lead to bugs

---

## ✅ Best Practices

* Prefer `let`/`const` to avoid scope issues
* Use closures intentionally for encapsulation and performance
* Clean up closures that are no longer needed to avoid memory issues

---
