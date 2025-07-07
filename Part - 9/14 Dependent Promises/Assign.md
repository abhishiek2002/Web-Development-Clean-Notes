## Watch the following video:

Dependent Promises  https://www.youtube.com/embed/EQ8EvKpadQA?si=lbuvv3-4O-T2WhrT

## Deliverable:

Just code the way I have done in the above video.

```js
// Write your code at relevant places in the code below:
function orderFood() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let success = Math.random() > 0.5;
      if (success) {
        resolve("Food delivered");
      } else {
        reject("Food not delivered");
      }
    }, 1000);
  });
}

function orderDessert() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let success = Math.random() > 0.5;
      if (success) {
        resolve("Dessert delivered");
      } else {
        reject("Dessert not delivered");
      }
    }, 1000);
  });
}

orderFood()
  .then((res) => {
    console.log(res);
    orderDessert().then((res) => console.log(res));
  })
  .catch((error) => console.log(error));

// Do not touch the code below:
module.exports = {
  orderFood,
  orderDessert,
};
```
