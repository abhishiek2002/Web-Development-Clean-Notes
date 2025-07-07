# Watch the following video:

Independent Promises    https://www.youtube.com/embed/zgz8FungKFc?si=qpE-0BatmMjIqV87

### Note: Make sure you use Math.random() to mimic both the cases, i.e., resolution and rejection of Promise. Watch this video: Note - Use Math.random()    https://www.youtube.com/embed/NK0puimRyIU?si=n7FFAooEPIC-Z088

    A hollywood horror movie released last Friday. It has received great reviews from the audience. Since, you are a fan of horror movies and this one is from your favourite director you want to watch it. But, this time instead of going to the cinema hall you have some different plan.

    1. You have a white wall at your home, so you plan to rent a projector to watch movie at your home only.

    2. You have two best friends who are also fan of horror movies. So, you plan to invite them for night out this weekend and watch movie with them.

    3. You and your friends love munching pizzas while watching movies. So, you plan that you will order pizzas online the day you will watch movie.

    Now, for successful execution of the plan, all the following three conditions should fulfill:

    1. Renting of a Projector

    2. Delivery of Pizzas on time

    3. Attendance of both the best friends

    If anyone of the condition fails, then your plan fails.

## Deliverables:

    1. Create a promise called "projectorPromise" which resolves to "Projector rented successfully" or rejects to "Error: Projectors out of stock" after 1 second.

    2. Create a promise called "pizzasPromise" which resolves to "Pizzas delivered at time" or rejects to "Error: Pizzas not delivered on time" after 2 second.

    3. Create a promise called "friendsPromise" which resolves to "Both friends available" or rejects to "Error: Both friends not available" after 3 second.

    4. Use Promise.all to wait for all the three promises to resolve or reject. If all the promises resolve successfully then print the resulting array, else print the error.

```js
// Write your code at relevant places in the code below:
const projectorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = Math.random() > 0.5;
    if (success) {
      resolve("Projector rented successfully");
    } else {
      reject("Error: Projectors out of stock");
    }
  }, 1000);
});

const pizzasPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = Math.random() > 0.5;
    if (success) {
      resolve("Pizzas delivered at time");
    } else {
      reject("Error: Pizzas not delivered on time");
    }
  }, 2000);
});

const friendsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = Math.random() > 0.5;
    if (success) {
      resolve("Both friends available");
    } else {
      reject("Error: Both friends not available");
    }
  }, 3000);
});

Promise.all([projectorPromise, pizzasPromise, friendsPromise])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

// Do not touch the code below:
module.exports = { projectorPromise, pizzasPromise, friendsPromise };
```
