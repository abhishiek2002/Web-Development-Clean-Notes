In this question, your task is to create a callback hell and the callback functions. You have to create two functions. Use setTimeout function to add delay. The operations are as follows:

    Add 3 to the starting number.
    Multiply the result by 2.

Functions to Implement
add: Adds a 2-second delay, adds 3 to the value, prints “Added 3”, and calls the callback with the new value.
multiply: Adds a 1-second delay, multiplies the value by 2,prints “Multiplied by 2“ and calls the callback with the new value.

Example : Initial value is 2, after adding 3 becomes 5, then 5 \* 2 is 10

Expected Output

    Added 3

    Multiplied by 2

    Final result : 10

```js
function add(value, callback) {
  // complete this function
  setTimeout(() => {
    value += 3;
    console.log("Added 3");
    callback(value);
  }, 2000);
}

function multiply(value, callback) {
  // complete this function
  setTimeout(() => {
    value *= 2;
    console.log("Multiplied by 2");
    callback(value);
  }, 1000);
}

// don't change it
const initialValue = 2;

// create callback hell
add(initialValue, (value) => {
  multiply(value, (finalValue) => {
    console.log("Final Result: 10");
  });
});
```
