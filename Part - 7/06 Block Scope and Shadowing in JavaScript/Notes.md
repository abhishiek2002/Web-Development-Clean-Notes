# Block Scope and Shadowing in JavaScript

Understanding block scope and variable shadowing is essential in JavaScript to avoid unexpected behaviors and bugs. Let's dive into each concept in detail.

---

## ✅ Block Scope in JavaScript

### 🔹 What is Block Scope?

Block scope refers to the area within `{}` (curly braces) where variables declared using `let` and `const` are accessible. Variables defined inside a block cannot be accessed from outside that block.

```js
{
  let a = 10;
  const b = 20;
  console.log(a); // ✅ 10
  console.log(b); // ✅ 20
}

console.log(a); // ❌ ReferenceError: a is not defined
console.log(b); // ❌ ReferenceError: b is not defined
```

### 🔹 Why is Block Scope Useful?

* Helps avoid variable name collisions.
* Makes code easier to read and debug.
* Enhances modularity and encapsulation.

### 🔹 var vs let vs const Scope

| Keyword | Scope           | Can be Reassigned | Can be Redeclared |
| ------- | --------------- | ----------------- | ----------------- |
| var     | Function/global | Yes               | Yes               |
| let     | Block           | Yes               | No                |
| const   | Block           | No                | No                |

```js
{
  var x = 5;
  let y = 10;
  const z = 15;
}

console.log(x); // ✅ 5
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError
```

### 🔹 Nested Blocks

```js
let outer = 'outside';

{
  let outer = 'inside';
  console.log(outer); // ✅ 'inside'
}

console.log(outer); // ✅ 'outside'
```

---

## 🧠 Shadowing in JavaScript

### 🔹 What is Shadowing?

Shadowing occurs when a variable declared within a certain scope (e.g., block or function) has the same name as a variable in an outer scope. The inner variable *shadows* the outer one within its scope.

```js
let x = 100;

{
  let x = 200; // shadows outer x
  console.log(x); // ✅ 200
}

console.log(x); // ✅ 100
```

### 🔹 Shadowing with `var`, `let`, and `const`

```js
var a = 1;

{
  var a = 2; // redeclares and affects outer 'a'
  console.log(a); // ✅ 2
}

console.log(a); // ✅ 2 (outer 'a' is overwritten)
```

```js
let b = 10;

{
  let b = 20; // shadows outer 'b', does not affect it
  console.log(b); // ✅ 20
}

console.log(b); // ✅ 10
```

### ❌ Illegal Shadowing

You **cannot** shadow a variable declared with `let` or `const` using `var` in the same or inner scope.

```js
let x = 10;
{
  var x = 20; // ❌ SyntaxError: Identifier 'x' has already been declared
}
```

### ✅ Legal Shadowing

You **can** shadow `var` with `let` or `const` in a different block scope.

```js
var y = 5;
{
  let y = 15; // ✅ Legal shadowing
  console.log(y); // ✅ 15
}
console.log(y); // ✅ 5
```

---

## ⚠️ Key Takeaways

* Use `let` and `const` for block-scoped variables.
* Avoid using `var` to prevent unintentional overwrites.
* Shadowing is safe when done intentionally and carefully.
* Always be cautious of illegal shadowing between `var` and `let`/`const`.

---

## 💡 Tip for Developers

When in doubt, prefer `const` by default and switch to `let` only when reassignment is necessary. This promotes safer and cleaner code.

---

## 📌 Summary

| Concept           | Description                                             |
| ----------------- | ------------------------------------------------------- |
| Block Scope       | `let` and `const` are confined within `{}`              |
| Shadowing         | Inner variable hides outer variable with same name      |
| Illegal Shadowing | Cannot declare `var` after `let`/`const` with same name |

---
