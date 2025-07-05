# 🌐 Window Object, `this` Keyword, and Lexical Scoping in JavaScript

In JavaScript, understanding how the **`window` object**, **`this` keyword**, and **lexical scoping** work is crucial to mastering how variables, context, and scopes behave.

---

## 🌍 1. Window Object

### 🔸 What is the Window Object?

The **`window` object** is the global object in the browser environment. It represents an open window in a browser.

Every global variable or function declared using `var` becomes a property of the window object.

### 🔹 Example:

```js
var name = "Abhishek";
console.log(window.name); // Abhishek

function greet() {
  console.log("Hello");
}

console.log(window.greet); // [Function: greet]
```

### 🔸 Features:

* Global scope = `window` scope in browser
* Has built-in methods like `alert()`, `confirm()`, `setTimeout()`, etc.
* In browsers: `window === globalThis` (mostly true in latest standards)

---

## 🧠 2. `this` Keyword

### 🔸 What is `this`?

`this` refers to the **execution context's object**. Its value depends on **how a function is called**, not where it is defined.

### 🔹 In Global Context:

```js
console.log(this);      // window (in browser)
console.log(this === window); // true
```

### 🔹 In Object Method:

```js
const person = {
  name: "Abhi",
  greet: function () {
    console.log(this.name); // refers to `person`
  },
};

person.greet(); // Abhi
```

### 🔹 In Regular Function:

```js
function test() {
  console.log(this);
}
test(); // window (in non-strict mode), undefined (in strict mode)
```

### 🔹 In Arrow Function:

Arrow functions **do not have their own `this`**. They inherit `this` from the lexical scope.

```js
const obj = {
  value: 100,
  arrowFunc: () => {
    console.log(this.value);
  },
};
obj.arrowFunc(); // undefined (inherits `this` from global, not `obj`)
```

---

## 🔁 Difference: Regular vs Arrow Function `this`

| Context                 | Regular Function | Arrow Function |
| ----------------------- | ---------------- | -------------- |
| Global                  | `window`         | `window`       |
| Inside object           | The object       | Outer scope    |
| Bind-able via `.bind()` | Yes              | No             |

---

## 🧱 3. Lexical Scoping

### 🔸 What is Lexical Scope?

**Lexical scope** means the scope of a variable is determined by **where it is written in the code**. It is **static** and **does not depend on how the function is called**.

### 🔹 Example:

```js
function outer() {
  var name = "Outer";

  function inner() {
    console.log(name); // has access to outer's variable
  }

  inner();
}

outer(); // Outer
```

### 🔸 Scope Chain

Functions look for variables in their **local scope**, then outer scope, then global scope.

```js
var a = 10;

function first() {
  var b = 20;

  function second() {
    var c = 30;
    console.log(a, b, c); // 10 20 30
  }

  second();
}

first();
```

This is called the **scope chain**: `second()` → `first()` → global

---

## 🧠 Lexical vs Dynamic Scoping

| Feature    | Lexical Scope        | Dynamic Scope         |
| ---------- | -------------------- | --------------------- |
| Defined By | Code location        | Call stack at runtime |
| Used In    | JavaScript, C        | Bash, older Lisp      |
| Example    | `inner` sees `outer` | `caller`'s context    |

JavaScript uses **lexical scope**.

---

## ✅ Summary Table

| Concept       | Key Idea                                                                          |
| ------------- | --------------------------------------------------------------------------------- |
| `window`      | Global object in browser, contains all global `var` variables and functions       |
| `this`        | Refers to execution context object, changes depending on how a function is called |
| Lexical Scope | Scope defined at code definition time, not call time                              |

---

## 🔚 Conclusion

Understanding the **window object**, the **`this` keyword**, and **lexical scope** is crucial for mastering JavaScript. These form the foundation of how code is structured, executed, and how variables and context are accessed across functions.

Master these, and you’ll level up your JS skills dramatically 🚀
