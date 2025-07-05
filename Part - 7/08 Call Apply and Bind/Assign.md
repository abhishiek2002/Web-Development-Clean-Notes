Understand Call Apply and Bind

https://www.youtube.com/watch?v=c0mLRpw-9rI

## Guess the output

### 1.

```js
var obj = {
  val: 100,
};

function fun() {
  console.log(this.val);
}

fun();
```

### 2.

```js
var obj = {
  val: 100,
};

function fun() {
  console.log(this.val);
}

obj.fun();
```

### 3.

```js
var obj = {
  val: 100,
};

function fun() {
  console.log(this.val);
}

fun.call(obj);
```

### 4.

```js
var obj = {
  val: 100,
};

function fun(a) {
  console.log(this.val + a);
}

fun.call(obj);
```

### 5.

```js
var obj = {
  val: 100,
};

function fun(a) {
  console.log(this.val + a);
}

fun.call(obj, 3);
```

### 6.

```js
var obj = {
  val: 100,
};

function fun(a, b, c) {
  console.log(this.val + a + b + c);
}

fun.call(obj, 3, 4, 5);
```

### 7.

```js
var obj = {
  val: 100,
};

function fun(a, b, c) {
  console.log(a);

  console.log(b);

  console.log(c);
}

fun.call(obj, [3, 4, 5]);
```

### 8.

```js
var obj = {
  val: 100,
};

function fun(a, b, c) {
  console.log(this.val + a + b + c);
}

fun.apply(obj, [3, 4, 5]);
```

### 9.

```js
var obj = {
  val: 100,
};

function fun(a, b, c) {
  console.log(this.val + a + b + c);
}

const fun2 = fun.bind(obj);

fun2(1, 2, 3);
```

Call Apply and bind are very powerful and useful keywords.

Watch this video to know where you can use them

https://www.youtube.com/embed/AYVYxezrMWA