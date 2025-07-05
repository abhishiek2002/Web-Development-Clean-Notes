# 📦 JavaScript LocalStorage – In-Depth Guide

## 🧠 What is LocalStorage?

**LocalStorage** is a part of the **Web Storage API** that allows you to store key-value pairs in a user's browser **with no expiration date**.

* Data stored in localStorage **persists even after the browser is closed**.
* It's accessible only from the **same origin** (protocol + domain + port).
* It stores data as **strings**.

---

## 📌 Syntax Overview

```js
// Save data
localStorage.setItem("key", "value");

// Retrieve data
let data = localStorage.getItem("key");

// Remove specific item
localStorage.removeItem("key");

// Clear all localStorage data
localStorage.clear();
```

---

## 📏 Storage Limit

* Approximately **5 to 10 MB** depending on the browser.
* Only **string values** can be stored. If you're storing objects, you need to use `JSON.stringify()` and `JSON.parse()`.

---

## 💡 Key Characteristics

| Feature             | Value                         |
| ------------------- | ----------------------------- |
| Storage limit       | \~5–10MB                      |
| Expiration          | ❌ No expiry                   |
| Accessibility       | Same-origin only              |
| Type of data stored | String (manual JSON required) |
| Synchronous         | ✅ Yes (Blocking, not async)   |

---

## 🧪 Example Usage

### 🔹 Storing a string

```js
localStorage.setItem("username", "abhishek");
```

### 🔹 Getting the stored string

```js
let name = localStorage.getItem("username");
console.log(name); // Output: abhishek
```

### 🔹 Storing an object

```js
const user = {
  name: "Abhishek",
  age: 25,
  isAdmin: true
};

localStorage.setItem("user", JSON.stringify(user));
```

### 🔹 Getting and parsing the object

```js
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name); // Output: Abhishek
```

---

## 🧹 Deleting Data

### 🔸 Remove a specific key

```js
localStorage.removeItem("username");
```

### 🔸 Clear all localStorage data

```js
localStorage.clear();
```

---

## 🚫 Common Pitfalls

1. **Data is stored as strings** – even numbers and booleans are converted to strings.

   ```js
   localStorage.setItem("age", 25);
   console.log(typeof localStorage.getItem("age")); // string
   ```

2. **Data is synchronous** – heavy usage can block the main thread.

3. **Cross-domain access not allowed** – `localStorage` works only with the same protocol and domain.

4. **Exceeding quota** – trying to store more than the allowed quota will throw a `QuotaExceededError`.

---

## 🔐 Is LocalStorage Secure?

No. LocalStorage is **not encrypted**.

* Anyone with access to the browser (including malicious scripts via XSS) can read it.
* Never store sensitive information like passwords or tokens.

---

## 🕵️‍♀️ When to Use LocalStorage?

✅ Good for:

* Theme preferences
* Language selection
* App UI state (collapsed panels, etc.)
* User settings that don't require security

❌ Avoid for:

* Auth tokens
* Private or sensitive data

---

## 📦 Alternative: sessionStorage vs localStorage

| Feature            | `localStorage`         | `sessionStorage`        |
| ------------------ | ---------------------- | ----------------------- |
| Persistence        | Until manually deleted | Until tab/window closes |
| Storage Size       | \~5–10MB               | \~5MB                   |
| Shared Across Tabs | ✅ Yes                  | ❌ No                    |

---

## 🛠 Real-life Use Case Example

### Storing a theme preference

```js
// Save preference
function setTheme(theme) {
  localStorage.setItem("theme", theme);
}

// Apply theme
function applyTheme() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    document.body.className = theme;
  }
}
```

---

## 🧪 Check for LocalStorage Availability

```js
function isLocalStorageAvailable() {
  try {
    const test = "__test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}
```

---

## ✅ Summary

* LocalStorage is great for **storing non-sensitive, persistent data**.
* Data survives **page reloads and browser restarts**.
* Always **convert objects to JSON** when storing and parse them when retrieving.
* Avoid using it for **authentication or private information**.

---
