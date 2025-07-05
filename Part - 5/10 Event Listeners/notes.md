# 📘 JavaScript Event Listeners - Complete Guide

In JavaScript, **event listeners** allow you to run code when a specific event occurs on a web page (like clicks, key presses, mouse moves, form submissions, etc.).

---

## 🔹 What is an Event Listener?

An event listener is a procedure in JavaScript that waits for an event to occur. You can attach event listeners to HTML elements, and they will respond when a specific interaction (event) happens.

---

## 🔹 Syntax

```js
element.addEventListener(event, callback, useCapture);
```

### Parameters:

* **event**: A string that specifies the name of the event (e.g., `'click'`, `'submit'`, `'mouseover'`).
* **callback**: The function to run when the event occurs.
* **useCapture** (optional): A boolean indicating whether to use event capturing (`true`) or bubbling (`false`). Default is `false`.

---

## 🔹 Basic Example

```html
<button id="myBtn">Click Me</button>
```

```js
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Button clicked!");
});
```

---

## 🔹 Types of Events

| Event Type  | Description             |
| ----------- | ----------------------- |
| `click`     | Mouse click             |
| `dblclick`  | Double mouse click      |
| `mouseover` | Mouse enters an element |
| `mouseout`  | Mouse leaves an element |
| `keydown`   | Key pressed             |
| `keyup`     | Key released            |
| `submit`    | Form submission         |
| `change`    | Input value change      |
| `load`      | Page fully loaded       |
| `scroll`    | User scrolls            |

---

## 🔹 Named vs Anonymous Functions

### Anonymous Function:

```js
button.addEventListener('click', function() {
  console.log("Clicked");
});
```

### Named Function:

```js
function handleClick() {
  console.log("Clicked");
}

button.addEventListener('click', handleClick);
```

✅ Named functions are easier to remove later and help with debugging.

---

## 🔹 Removing Event Listeners

You can remove an event listener using `removeEventListener`, but only if the function is named:

```js
button.removeEventListener('click', handleClick);
```

❗ You cannot remove anonymous functions because there's no reference to them.

---

## 🔹 Event Object

When an event is triggered, an **event object** is automatically passed to the callback function.

```js
document.addEventListener('click', function(event) {
  console.log(event.type);     // click
  console.log(event.target);   // element that triggered the event
});
```

Useful properties of `event` object:

* `event.type`
* `event.target`
* `event.currentTarget`
* `event.preventDefault()`
* `event.stopPropagation()`

---

## 🔹 Event Bubbling vs Capturing

### Bubbling (default)

* Events start from the target element and bubble up to the root.

### Capturing

* Events start from the root and go down to the target.

```js
element.addEventListener('click', handler, true);  // capturing
```

```js
element.addEventListener('click', handler, false); // bubbling (default)
```

---

## 🔹 addEventListener vs onEvent

```js
// Using onEvent
button.onclick = function() {
  console.log("clicked");
};

// Using addEventListener
button.addEventListener('click', function() {
  console.log("clicked");
});
```

### Difference:

* `onclick` overwrites any previous click handlers.
* `addEventListener` can add **multiple listeners** for the same event.

---

## 🔹 Once Option

You can make an event listener execute **only once** using the `once` option:

```js
button.addEventListener('click', () => {
  console.log("Clicked once!");
}, { once: true });
```

---

## 🔹 Delegated Event Listeners

Attach the event listener to a **common parent**, and handle child events via `event.target`:

```js
document.querySelector("ul").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("List item clicked:", e.target.textContent);
  }
});
```

✅ Improves performance when dealing with many dynamic elements.

---

## 📝 Conclusion

* `addEventListener` is a powerful way to handle events.
* Use named functions for better management and removal.
* Understand bubbling, capturing, and event delegation for complex apps.
* The event object gives detailed info about the interaction.

Mastering event listeners is essential for building interactive web applications!

---
