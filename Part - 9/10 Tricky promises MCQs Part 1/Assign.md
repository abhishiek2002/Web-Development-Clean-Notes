# Answer tricky interview questions related to promises given below:

For each of these questions, read the code and try to guess the output of it through dry run.

## QUESTION 1

What will be the output of the following: (Understand why, similar questions will be asked in interviews)

```js
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

console.log("end");
```

## QUESTION 2

What will be the output of the following: (Understand why, similar questions will be asked in interviews)

```js
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);

  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
```

## QUESTION 3

What will be the output of the following: (Understand why, similar questions will be asked in interviews)

```js
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);

  resolve(2);

  console.log(3);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
```

## QUESTION 4

What will be the output of the following: (Understand why, similar questions will be asked in interviews)

```js
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

promise1.then((res) => {
  console.log(2);
});

console.log("end");
```

## QUESTION 5

What will be the output of the following: (Understand why, similar questions will be asked in interviews)

```js
console.log("start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);

    resolve("success");
  });

console.log("middle");

fn().then((res) => {
  console.log(res);
});

console.log("end");
```
