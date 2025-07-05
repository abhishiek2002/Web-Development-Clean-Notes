## Session Storage in JavaScript

`sessionStorage` is a type of web storage that allows you to store key/value pairs **within a single session**. The data is **cleared when the page session ends** (e.g., when the browser/tab is closed).

---

### 🔹 Syntax

```js
// Set item
sessionStorage.setItem("key", "value");

// Get item
let value = sessionStorage.getItem("key");

// Remove item
sessionStorage.removeItem("key");

// Clear all items
sessionStorage.clear();

// Get number of stored items
let count = sessionStorage.length;
```

---

### 🔹 Example

```js
// Storing a user name
sessionStorage.setItem("username", "Abhishek");

// Retrieving
console.log(sessionStorage.getItem("username")); // "Abhishek"

// Removing
sessionStorage.removeItem("username");
```

---

### 🔹 Characteristics

* Storage limit: \~5MB per domain
* Data stored as strings (objects need JSON.stringify)
* Data accessible only within the **same tab**
* Automatically cleared on tab/browser close

---

### 🔹 Use Cases

* Temporary form data
* One-time messages or flags during a session
* Tab-specific user state

---

### 🔹 JSON Example

```js
const user = {
  name: "Abhishek",
  age: 22
};

// Save object
sessionStorage.setItem("user", JSON.stringify(user));

// Retrieve object
const userData = JSON.parse(sessionStorage.getItem("user"));
console.log(userData.name); // "Abhishek"
```

---

### 🔹 sessionStorage vs localStorage

| Feature                   | sessionStorage          | localStorage           |
| ------------------------- | ----------------------- | ---------------------- |
| Lifetime                  | Until tab/browser close | Until manually cleared |
| Accessible in other tabs? | ❌ No                    | ✅ Yes                  |
| Capacity                  | \~5MB                   | \~5MB                  |

---

Use `sessionStorage` when you want to store data **just for the current browsing session** without affecting other tabs or permanent storage.
