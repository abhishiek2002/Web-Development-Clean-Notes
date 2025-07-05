# Find the output of the following function along with reasons. There are no videos to watch in this task.

## QUESTION 1

```js
console.log("a");

console.log("b");

setTimeout(() => console.log("c"), 1000);

console.log("d");
```

## QUESTION 2

```js
console.log("a");

console.log("b");

setTimeout(() => console.log("c"), 1000);

setTimeout(() => console.log("d"), 0);

console.log("e");
```

## QUESTION 3

Write down the 10 new features introduced in ES6 along with what they mean and where they could be used

## QUESTION 4

What is array.map function . Array.map is used a lot in javascript (Please understand the use case properly) ---> 99% interviewers will ask you this.

Watch this video to understand it in depth and guess the following output

https://www.youtube.com/embed/zfkFIj-Nt0E

### 4a)

```js
var arr = [1, 2, 3, 5];

var newArr = arr.forEach((item, i) => {
  console.log(item + "index" + i);

  return item + i;
});

console.log(newArr);
```

### 4b)

```js
var arr = [1, 2, 3, 5];

var newArr = arr.map((item, i) => {
  console.log(item + "index" + i);

  return item + i;
});

console.log(newArr);
```

### 4c) What is the main difference between forEach and map function? [Favourite Interview Question]
