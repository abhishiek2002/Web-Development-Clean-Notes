# Convert the following code into Async-Await:

```js
function checkCar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const carReady = Math.random() > 0.5;

      if (carReady) {
        resolve("Car is ready");
      } else {
        reject("Error: Car needs maintenance");
      }
    }, 2000);
  });
}

function packForPicnic() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemsPacked = Math.random() > 0.5;

      if (itemsPacked) {
        resolve("Packed everything for picnic");
      } else {
        reject("Error: Not have some essentials");
      }
    }, 1000);
  });
}

checkCar()
  .then((result) => {
    console.log(result);

    return packForPicnic();
  })

  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  });
```

## Output

```js
function checkCar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const carReady = Math.random() > 0.5;

      if (carReady) {
        resolve("Car is ready");
      } else {
        reject("Error: Car needs maintenance");
      }
    }, 2000);
  });
}

function packForPicnic() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemsPacked = Math.random() > 0.5;

      if (itemsPacked) {
        resolve("Packed everything for picnic");
      } else {
        reject("Error: Not have some essentials");
      }
    }, 1000);
  });
}

async function picnicReady() {
  // Write your code here
  try {
    const res1 = await checkCar();
    console.log(res1);
    const res2 = await packForPicnic();
    console.log(res2);
  } catch (error) {
    console.log(error);
  }
}

picnicReady();

// Do not touch the code below:
module.exports = { picnicReady };
```
