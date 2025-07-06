https://www.youtube.com/watch?v=8zKuNo4ay8E.Watch uptill the 27th min from the beging. Skip remaining for now.

This is one of the most important topics for interview purpose.

## Deliverable

### 1.

which function would get in the call stack first

```js
function fun1() {
  console.log(a);
}

function fun2() {
  console.log(b);
}

fun2();

fun1();
```

### 2.

Which function would be picked by the Global Execution Context first ?

```js
function fun1() {
  console.log(a);
}

function fun2() {
  console.log(b);
}

fun2();

fun1();
```

### 3)

```
What all things are not a part of javascript?
fetch
setTimeOut
LocalStorage
document.getElementById
var
function
```

### 4)

```
If so many things are not a part of javacript then how do we get to access them in browser? Write in your own words.
```

### 5.

```
 If window object would not have been a global object which of the following statements would not work? More than one correct answer.
```

### 6.

```js
function fun1() {
  console.log("a");
}

function fun2() {
  console.log("b");
}

setTimeout(fun2, 1000);

fun1();
```

### 7.

```js
function fun1() {
  console.log("a");
}

function fun2() {
  console.log("b");
}

document.getElementById("some button").addEventListener("click", fun1);

fun2();
```

Love the way event loop iis explained by this restaurant example https://www.youtube.com/watch?v=EI7sN1dDwcY and answer the following.

Why is a callback queue used and not a callback stack?
Explain how does event loop handle async code? why does it not wait for async function ?

Want to know how event loop scales the backend of sharpener - Watch this video https://www.youtube.com/embed/owljjaVP4YQ
