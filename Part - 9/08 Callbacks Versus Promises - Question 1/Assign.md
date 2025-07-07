## Watch the following videos:

Problem with Callbacks | Callback Hell  https://www.youtube.com/embed/cHc37j_OeSY?si=rN7a6BG-TiDfGY4u
Promises to Rescue  https://www.youtube.com/embed/xjjSUrP2OPA?si=tidRzU2_IYstU2R8

## See the code below:

```js
function buyBike(callback1, callback2, callback3) {
  setTimeout(function () {
    console.log("Bought Royal Enfield Himalayan");

    callback1(callback2, callback3);
  }, 2000);
}

function planTrip(callback1, callback2) {
  setTimeout(function () {
    console.log("Trip to Ladakh planned");

    callback1(callback2);
  }, 1000);
}

function reachLadakh(callback) {
  setTimeout(function () {
    console.log("Reached Ladakh");

    callback();
  }, 1000);
}

function visitPangongLake() {
  setTimeout(function () {
    console.log("Visited Pangong Lake");
  }, 500);
}

buyBike(planTrip, reachLadakh, visitPangongLake);
```

### This code makes use of callbacks to print messages to the console in the following order:

    "Bought Royal Enfield Himalayan"

    "Trip to Ladakh planned"

    "Reached Ladakh"

    "Visited Pangong Lake"

## Deliverable:

Your task is to use promises instead of callbacks to print messages in the same order to the console.

```js
// Write your code at relevant places in the code below:
function buyBike() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Bought Royal Enfield Himalayan");
    }, 2000);
  });
}

function planTrip() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Trip to Ladakh planned");
    }, 1000);
  });
}

function reachLadakh() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Reached Ladakh");
    }, 1000);
  });
}

function visitPangongLake() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Visited Pangong Lake");
    }, 500);
  });
}

buyBike().then((res) => {
  console.log(res);
  planTrip().then((res) => {
    console.log(res);
    reachLadakh().then((res) => {
      console.log(res);
      visitPangongLake().then((res) => {
        console.log(res);
      });
    });
  });
});

// Do not touch the code below:
module.exports = {
  buyBike,
  planTrip,
  reachLadakh,
  visitPangongLake,
};
```
