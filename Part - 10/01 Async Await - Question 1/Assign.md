# Watch the following video:

What is Async-Await? https://www.youtube.com/embed/yeYuVqNKRSI?si=9St3zwH7X_hp7iEZ

NOTE: Await is never used with setTimeout. Watch this video: https://youtu.be/y2WGeyAkfyA?si=ajjOIpIRcWp-TbB0

Now, convert the following code into Async-Await:

```js
function boardBusAt10() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const busArrivesAt10 = Math.random() > 0.5;

      if (busArrivesAt10) {
        resolve("Board the bus");
      } else {
        reject("Error: Bus is late.");
      }
    }, 3000);
  });
}

boardBusAt10()
  .then((result) => {
    console.log(result);
  })

  .catch((err) => {
    console.log(err);
  });
```

```js
// Write your code here:
function boardBusAt10() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const busArrivesAt10 = Math.random() > 0.5;
      if (busArrivesAt10) {
        resolve("Board the bus");
      } else {
        reject("Error: Bus is late");
      }
    }, 3000);
  });
}

async function boardingBus() {
  try {
    // Write your code here
    const res = await boardBusAt10();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

boardingBus();

// Do not touch the code below:
module.exports = { boardingBus };
```
