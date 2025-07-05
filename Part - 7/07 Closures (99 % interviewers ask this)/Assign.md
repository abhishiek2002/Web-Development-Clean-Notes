Watch this video to understand closures in depth.

Take Notes to prepare before interview!!!

https://www.youtube.com/watch?v=qikxEIxsXco

## Questions

### 1.

```js
function x() {
  let a = 10;

  function y() {
    console.log(a);
  }

  y();
}

x();
```

### 2.

```js
function x() {
  let a = 10;

  function y() {
    return a;
  }

  console.log(y());
}

x();
```

### 3.

```js
function x() {
  let a = 10;

  function y() {
    console.log(a);
  }

  return y;
}

console.log(x());
```

### 4.

```js
function x() {
  let a = 10;

  function y() {
    console.log(a);
  }

  return y;
}

const z = x();

console.log(z());
```

### 5.

```js
function x() {
  let a = 10;

  function y() {
    console.log(a);
  }

  a = 50;
  return y;
}

const z = x();

console.log(z());
```

(Do you know why the output is like that - Watch this video to understand)
