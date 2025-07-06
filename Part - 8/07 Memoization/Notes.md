# 🧠 Memoization in JavaScript (In Depth)

Memoization is a powerful **optimization technique** in programming, especially useful when dealing with **expensive function calls** like recursive calculations.

---

## 📘 What is Memoization?

> **Memoization** is a technique where the results of expensive function calls are **cached** so that future calls with the same inputs can return the cached result **instantly**, without recalculating.

This reduces **time complexity** and avoids **redundant calculations**.

---

## 🧮 Real-World Example Without Memoization

Let’s consider the Fibonacci sequence:

```js
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(35)); // Very slow
```

* This has **exponential time complexity**: `O(2^n)`
* Recalculates the same values **many times**

---

## ✅ Optimizing with Memoization

```js
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(35)); // Much faster
```

### 🟢 How It Works:

* `memo` stores results for inputs like `fib(5)` → `5`.
* If the function is called again with `5`, it just returns the memoized value.

---

## ⚙️ When to Use Memoization

* Recursive algorithms like **Fibonacci**, **Factorial**, **Dynamic Programming** problems.
* Expensive **API calls** (in frontend caching).
* **Pure functions** (same input always gives same output).

---

## 🚫 When Memoization Doesn't Help

* When input data **always changes**.
* When memory usage is a concern (too many cached values).
* For **non-deterministic** functions (like those using randomness or external state).

---

## 🧪 Example: Factorial with Memoization

```js
function factorial(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 1;

  memo[n] = n * factorial(n - 1, memo);
  return memo[n];
}

console.log(factorial(5)); // 120
```

---

## 💡 Alternative: Closure-based Memoization

```js
const memoizedAdd = () => {
  const cache = {};
  return (num) => {
    if (num in cache) return cache[num];
    console.log("Calculating...");
    cache[num] = num + 20;
    return cache[num];
  };
};

const add = memoizedAdd();
console.log(add(10)); // Calculates
console.log(add(10)); // Returns from cache
```

---

## 🧾 Summary Table

| Feature  | Memoization                             |
| -------- | --------------------------------------- |
| Purpose  | Avoid recalculating results             |
| Type     | Optimization technique                  |
| Uses     | Recursion, caching, expensive functions |
| Benefit  | Faster execution, lower time complexity |
| Downside | Higher memory usage                     |

---

## ✅ Conclusion

Memoization is a **smart way to speed up** your JavaScript programs by caching the result of function calls. It is especially helpful for **recursive problems** or where the **same inputs are used repeatedly**.

Use it wisely when performance matters and memory is not a big constraint.

---
