# Watch this video to understand javascript function in depth . Make Notes!!!!

https://www.youtube.com/watch?v=SHINoHxvTso

## Guess the output

## 1.

```js
a();

b();

function a() {
  console.log("inside a");
}

var b = function () {
  console.log("inside b");
};
```

## 2. Difference between function declaration and function expression

## 3.

```js
function a() {
  console.log("inside a");
}

var b = function abc() {
  console.log("inside b");
};

a();

abc();
```

## 4.

```js
function fun(a) {
  console.log(a);
}

var b = 10;

fun(b);
```

## 5.

Please go through this video and understand what is currying in javascript https://www.youtube.com/embed/qlOXWmv_srU.

If you didnt understand this video , then i have tried again to explain .Watch this new video

Guess the output

## 5a)

```js
function fun1() {
  console.log("a");

  return () => {
    console.log("b");
  };
}

fun1();
```

## 5b)

```js
function fun1() {
  var a = 10;

  return () => {
    a = 20;

    console.log(a);
  };
}

fun1()();
```

## 5c)

```js
function fun1(a) {
  return () => {
    a = a + 20;

    console.log(a);
  };
}

fun1(10)(20);
```

## 5d)

```js
function fun1(a) {
  return (b) => {
    a = a + b;

    console.log(a);
  };
}

fun1(10)(30);
```

## 5e)

```js
function fun1(a) {
  const fun2 = (b) => {
    a = a + b;

    console.log(a);
  };
}

fun1(10)(30);
```
