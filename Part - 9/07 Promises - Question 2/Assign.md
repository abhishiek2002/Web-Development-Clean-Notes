In your college fest, there is a concert by your favourite singer, but you got late to arrange the passes for your entry. One of your friends knows the organizer of the fest and promises you to get the passes. Try to handle this situation using JavaScript promises.

Deliverable:

    Create a function "concertPassPromise" that returns a promise which after 3 seconds either resolves with message "Pass received" or gets rejected with message "Pass not received".
    Make use of Math.random() to mimic both the resolve and reject case.
    Handle the fulfillment of the promise with then block and print the resolve message to the console.
    Handle the rejection of the promise with catch block and print the reject message to the console.

```js
// Write your code at relevant places in the code below:
function concertPassPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random();
      if (success > 0.5) {
        resolve("Pass received");
      } else {
        reject("Pass not received");
      }
    }, 3000);
  });
}

concertPassPromise()
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

// Do not touch the code below:
module.exports = concertPassPromise;
```
