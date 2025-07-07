## Watch the following video:

Promises & Error Handling https://www.youtube.com/embed/hy9l2N6ebUw?si=ryIn2B0M2M5soUPI

This Sunday, you have planned to go on a picnic with your family, but you will go only when weather is sunny and not cloudy. Use a promise to simulate this.

## Deliverables:

    1. Create a function called "checkWeather" that returns a promises which gets resolved or rejected after 3 seconds.

    2. If weather is sunny resolve the promise with message "Let us go for picnic".

    3. If weather is cloudy reject the promise with error message "Error: It is cloudy".

### NOTE: Use Math.random() to simulate the chance of weather being sunny or not.

```js
// Write your code at relevant places in the code below::
function checkWeather() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let sunny = Math.random() > 0.5;
      if (sunny) {
        resolve("Let us go for picnic");
      } else {
        reject("Error: It is cloudy");
      }
    }, 3000);
  });
}

// Do not touch the code below:
module.exports = checkWeather;
```
