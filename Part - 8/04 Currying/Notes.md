# Currying in JavaScript (In Depth)

**Currying** is a functional programming technique where a function is transformed into a sequence of functions, each taking a single argument.

It helps in writing **modular**, **reusable**, and **cleaner** code.

---

## ✅ What is Currying?

Currying is the process of **converting a function with multiple arguments into a series of functions**, each taking one argument at a time.

### 🔹 Regular Function:

```js
function add(a, b) {
  return a + b;
}
add(2, 3); // 5
```

### 🔹 Curried Version:

```js
function add(a) {
  return function(b) {
    return a + b;
  }
}

add(2)(3); // 5
```

> ✅ First function takes `a`, returns another function that takes `b`.

---

## 🧠 Why Use Currying?

* **Reusability**: You can create customized functions.
* **Avoid Repetition**: Helps avoid passing the same arguments again and again.
* **Functional Programming**: It's a core concept in FP.

### Example: Customized Greeting

```js
function greet(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  }
}

const sayHello = greet("Hello");
console.log(sayHello("Abhishek")); // Hello, Abhishek!
console.log(sayHello("Ravi"));     // Hello, Ravi!
```

---

## 🔄 Manual Currying vs Auto Currying

### 🔹 Manual Currying:

Writing curried functions manually:

```js
function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    }
  }
}

console.log(multiply(2)(3)(4)); // 24
```

### 🔹 Auto Currying (Using Utility):

```js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...next) {
        return curried.apply(this, args.concat(next));
      }
    }
  }
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
```

---

## 🆚 Currying vs Partial Application

* **Currying** breaks down a function into one argument per function.
* **Partial Application** fixes some arguments but not necessarily one at a time.

### Currying:

```js
f(a)(b)(c)
```

### Partial:

```js
f(a, b)(c)
```

---

## 📌 Currying in Real Life Example

### Logging Example

```js
function log(level) {
  return function(message) {
    console.log(`[${level}]: ${message}`);
  }
}

const info = log("INFO");
const error = log("ERROR");

info("Server started");  // [INFO]: Server started
error("Server crashed"); // [ERROR]: Server crashed
```

---

## ✅ Advantages of Currying

* Cleaner and more modular code.
* Reusability of function logic.
* Useful in functional programming pipelines.

---

## ⚠️ Disadvantages

* May introduce unnecessary complexity for simple tasks.
* May reduce readability if overused.

---

## ✅ Summary Table

| Concept             | Description                               |
| ------------------- | ----------------------------------------- |
| Currying            | Breaks function into chain of single args |
| Partial Application | Fixes a few arguments                     |
| Reusability         | Easily create custom functions            |
| FP Use              | Core technique in functional programming  |

---

## ✅ Conclusion

Currying is a powerful concept in JavaScript that transforms multi-parameter functions into a series of unary (single parameter) functions. It's particularly useful in functional programming and for creating highly reusable and modular code.

---
