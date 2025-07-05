## 🌀 Hoisting in Execution Context

During the **creation phase**, variables and functions are hoisted:

* Variables: hoisted but set to `undefined`
* Functions: hoisted with entire definition

```js
console.log(x); // undefined
var x = 10;

foo(); // works
function foo() {
  console.log("Function called");
}
```