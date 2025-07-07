You have given three functions which returns the promises , you have to resolve the promises in sequential order to get the expected output



  increment: This function should take an integer value, increment it by 1, and pass the new value to the next step.
  double: This function should take the incremented value, double it, and pass the result to the next step.
  square: This function should take the doubled value, square it, and pass the final result to a logging function.


### Expected Output: 
If the initial value is 2, the output should be: 36

(Explanation: 2 incremented by 1 is 3, 3 doubled is 6, and 6 square is 36.)


```js
function increment(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newValue = value + 1;
      resolve(newValue);
    }, 1200);
  });
}

function double(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newValue = value * 2;
      resolve(newValue);
    }, 500);
  });
}

function square(value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newValue = value * value;
      resolve(newValue);
    }, 1000);
  });
}

// Starting value
const startValue = 2;

// Execute functions in sequence using promises

increment(startValue)
  .then((res) => {
    return double(res);
  })
  .then((res) => {
    return square(res);
  })
  .then((res) => console.log(res))
  .catch((error) => error);
```
