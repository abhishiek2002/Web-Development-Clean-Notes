# Answer tricky interview questions related to promises given below:

For each of these questions, read the code and try to guess the output of it through dry run.

## QUESTION 1

What will be the output of the following: (Understand why, similar questions will be asked in interviews)

```js
console.log("start");

Promise.resolve(1).then((res) => {
  console.log(res);
});

Promise.resolve(2).then((res) => {
  console.log(res);
});

console.log("end");
```

## QUESTION 2

What will be the output of the following: (Understand why, similar questions will be asked in interviews)

```js
console.log('start')

setTimeout(() => {

console.log('setTimeout')

})

Promise.resolve().then(() => {

console.log('resolve')

})

console.log('end')

If you are not sure, check the hint.
```

## QUESTION 3

What will be the output of the following: (Understand why, similar questions will be asked in interviews)

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);

  setTimeout(() => {
    console.log("timerStart");

    resolve("success");

    console.log("timerEnd");
  }, 0);

  console.log(2);
});

promise.then((res) => {
  console.log(res);
});

console.log(4);
```

## QUESTION 4

What will be the output of the following: (Understand why, similar questions will be asked in interviews)

```js
const timer1 = setTimeout(() => {
  console.log("timer1");

  const promise1 = Promise.resolve().then(() => {
    console.log("promise1");
  });
}, 0);

const timer2 = setTimeout(() => {
  console.log("timer2");
}, 0);
```

## QUESTION 5

What will be the output of the following: (Understand why, similar questions will be asked in interviews)

```js
console.log("start");

const promise1 = Promise.resolve().then(() => {
  console.log("promise1");

  const timer2 = setTimeout(() => {
    console.log("timer2");
  }, 0);
});

const timer1 = setTimeout(() => {
  console.log("timer1");

  const promise2 = Promise.resolve().then(() => {
    console.log("promise2");
  });
}, 0);

console.log("end");
```
