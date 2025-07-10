# 🐞 Debugging and Error Types in Node.js with VS Code

---

## ⚠️ Types of Errors in Node.js

Node.js programs can run into various types of errors during development or runtime. Understanding these helps in effective debugging.

### 1. **Syntax Errors**

* These occur when code is not written according to JavaScript rules.
* Detected at compile time (before execution).

📌 Example:

```js
console.log("Missing quote);
```

### 2. **Runtime Errors**

* Occur while the application is running.
* Often result from invalid operations like accessing undefined variables or file system errors.

📌 Example:

```js
fs.readFile('nonexistent.txt', (err, data) => {
  if (err) throw err;
});
```

### 3. **Logical Errors**

* These are the hardest to detect.
* The code runs without crashing but gives incorrect output due to flawed logic.

📌 Example:

```js
function add(a, b) {
  return a - b; // logic error
}
```

### 4. **Asynchronous Errors**

* Common in Node.js due to its async nature.
* Occur in callbacks, promises, or async/await.

📌 Example:

```js
async function fetchData() {
  try {
    const res = await fetch('wrong-url');
  } catch (err) {
    console.error(err);
  }
}
```

---

## 🛠️ Debugging in Node.js

### ✅ Why Debug?

* To inspect what your code is doing at various points.
* To understand and fix bugs by examining variable values, call stacks, and flow control.

---

## 🧩 Debugging in Visual Studio Code (VS Code)

VS Code offers powerful built-in debugging tools for Node.js.

### 🔹 Setting Up Debugging

1. **Open your Node.js project in VS Code.**
2. Go to the **Run & Debug** icon (▶️) in the Activity Bar.
3. Click on **"create a launch.json file"** if not already created.
4. Select **Node.js** as the environment.

### 🔧 Sample `launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Node App",
      "program": "${workspaceFolder}/index.js"
    }
  ]
}
```

### 🧪 Functionality Provided:

* ✅ **Breakpoints**: Pause execution at specific lines.
* ✅ **Step Over**: Executes the current line and moves to the next, without stepping into function calls.
* ✅ **Step Into**: Moves into the called function to debug it line by line.
* ✅ **Step Out**: Completes the current function and exits back to the caller.
* ✅ **Restart**: Restarts debugging from the beginning.
* ✅ **Continue (▶️)**: Resumes code execution until the next breakpoint.
* ✅ **Watch Variables**: Add expressions to monitor during debugging.
* ✅ **Call Stack**: Shows the chain of function calls.
* ✅ **Debug Console**: Run commands and evaluate expressions in the current context.
* ✅ **Variable Inspection**: Hover over variables to inspect their values in real-time.
* ✅ **Modify at Runtime**: Change variable values mid-debug to test fixes instantly.

---

## 📌 Summary (As Seen in the Image)

* Debugging is essential for fixing issues in code, just like solving problems in real life.
* In Node.js debugging, we used:

  * **Breakpoints** to pause and inspect code in real-time.
  * **Step Over** to trace function flow line-by-line.
  * **Modifying values mid-debug** to confirm fixes instantly.
* These techniques help us identify and fix errors efficiently, ensuring smooth execution.

---

Let me know if you'd like to see a visual representation of the debugging workflow!
