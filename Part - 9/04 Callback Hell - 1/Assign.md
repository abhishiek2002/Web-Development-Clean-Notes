In this question, your task is to create a callback hell and the callback functions. You have to create two functions: step1, step2. Each function is using setTimeout to introduce a specified delay before executing the provided callback.

The objective is to call these functions in sequence using nested callbacks, ensuring that each step completes before the next one begins.

Functions to Implement
step1(callback):
task1 prints "Step 1 completed" after 2 seconds and then calls its callback.
step2(callback):
step2 prints "Step 2 completed" after 1 seconds and then calls its callback and this callback will print “All steps completed” .

Expected Output
Step 1 completed

    Step 2 completed

    All steps completed

```js
function step1(callback) {
  // complete this function
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 2000);
}

function step2(callback) {
  // complete this function
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}

// create callback hell here after completing the above function

function complete() {
  console.log("All steps completed");
}

step1(() => {
  step2(() => {
    complete();
  });
});
```
