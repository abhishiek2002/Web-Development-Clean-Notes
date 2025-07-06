# 🚦 Throttling in JavaScript (In Depth)

**Throttling** is a performance optimization technique used to control how often a function is executed. It ensures a function is called **at most once every specified time interval**, regardless of how many times the event is triggered.

---

## 📘 What is Throttling?

> **Throttling** ensures a function is executed **at regular intervals** even if it’s triggered multiple times during that period.

It helps avoid overwhelming your application with too many function calls in a short span of time.

---

## 🧠 Real-World Examples

### Example 1: Scroll Event

Without throttling:

* The function gets called **hundreds of times per second** as you scroll.

With throttling:

* The function gets called only once every few milliseconds.

### Example 2: Resizing Window

```js
window.addEventListener('resize', () => {
  console.log('Window is resizing...');
});
```

This fires continuously. With **throttling**, you reduce the number of executions.

---

## 🛠️ How to Implement Throttle Function

### ✅ Basic Throttle Function

```js
function throttle(func, interval) {
  let lastCall = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - lastCall >= interval) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}
```

### ✅ Simple Usage Example: Scroll Event

```js
function handleScroll() {
  console.log("Scroll event fired");
}

const throttledScroll = throttle(handleScroll, 1000);

window.addEventListener("scroll", throttledScroll);
```

🔍 **Explanation:**

* `handleScroll` will only run **once every 1000ms**, even if the scroll event fires continuously.

---

## ⚙️ How Throttle Works

1. The function is called.
2. If it's been more than `interval` milliseconds since the last call, it executes.
3. Otherwise, it ignores the call until time passes.

---

## ✅ Benefits of Throttling

* Improves performance by reducing the number of function executions
* Prevents browser crashes or slowdowns
* Maintains responsiveness during intensive UI interactions

---

## ❗When Not to Use Throttling

* When **you want the function to run only after the last event** (in that case, use **debounce**)
* For **text input** or **API search** where you don’t want to send incomplete data

---

## 🔄 Throttle vs Debounce

| Feature   | Throttle                       | Debounce                             |
| --------- | ------------------------------ | ------------------------------------ |
| Purpose   | Limit function calls over time | Delay function call after last event |
| Use Case  | Scroll, resize, mouse move     | Search box, input, auto-save         |
| Execution | Every fixed time interval      | Once after delay                     |

---

## 🧾 Summary

| Feature   | Description                       |
| --------- | --------------------------------- |
| Technique | Performance Optimization          |
| Core Idea | Run once per interval             |
| Benefit   | Avoid excessive function calls    |
| Used For  | Scroll, mouse move, resize events |

---

## ✅ Conclusion

**Throttling** is a must-know technique for JavaScript developers. It helps in managing **performance-heavy events** like scrolling and resizing by **limiting execution frequency**.

Use **throttle** when you need **regular updates** (like tracking scroll position), and pair it with **debounce** where necessary for optimized UI performance.

---
