Is javascript single threaded or multithreaded?

Watch this video to understand how callback functions work

https://www.youtube.com/watch?v=btj35dh3_U8

## Questions

What will be the output of the following

## 1.

```js
setTimeout(() => console.log("timer expired"), 1000);

function x(y) {
  console.log("inside x");

  y();
}

x(function y() {
  console.log("inside y");
});
```

## 2.

```js
setTimeout(() => console.log("timer1 expired"), 1000);

setTimeout(() => console.log("timer2 expired"), 0);

function x(y) {
  console.log("inside x");

  y();
}

x(function y() {
  console.log("inside y");
});
```

## 3.

```js
setTimeout(() => console.log("timer1 expired"), 1000);

setTimeout(() => console.log("timer2 expired"), 0);

function x(y) {
  console.log("inside x");

  y();
}

x(function y() {
  setTimeout(() => console.log("inside y"), 0);
});
```

## 4.

How does the browser go about execution of the above program.Check the hint if you are not sure. The above questions are very important.

## 5.

Add an event listener called DOMCONTENTLOADED , inside this add a call back function which consoles "DOM has loaded"

## 6.

What is garbage collection . Why do we need to free up memory , any idea
