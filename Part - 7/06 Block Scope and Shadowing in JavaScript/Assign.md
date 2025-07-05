Watch this video

https://www.youtube.com/watch?v=lW_erSjyMeM

What will be the output of the following?

## 1.

```js
var a = 50;

{
  var a = 30;

  let b = 20;

  let c = 30;
}

console.log(a);
```

## 2.

```js
const a = 50;

{
  var a = 30;

  let b = 20;

  let c = 30;
}

console.log(a);
```

## 3.

```js
let a = 50;

{
  var a = 30;

  let b = 20;

  let c = 30;
}

console.log(a);
```

## 4. (THINK SMARTLY BEFORE ANSWERING THIS)

```js
var a = 50;

function fun() {
  var a = 30;

  let b = 20;

  let c = 30;
}

fun();

console.log(a);
```

## 5.

```js
let a = 50;

function fun() {
  var a = 30;

  let b = 20;

  let c = 30;
}

fun();

console.log(a);
```

## 6.

```js
const a = 10;

{
  var a = 100;
}

console.log(a);
```

## 7.

```js
const a = 10;

{
  const a = 20;

  {
    const a = 50;

    console.log(a);
  }

  console.log(a);
}

console.log(a);
```

## 8.

```js
const a = 10;

{
  const a = 20;

  {
    console.log(a);
  }

  console.log(a);
}

console.log(a);
```

## 9.

Explain what did you understand by lexical scope in your own words
