Go through this video to understand how the windows object and this works

https://www.youtube.com/watch?v=QCRpVw2KXf8

## QUESTION 1

What will be the output of the following (Also write the reason for the answer)

```js
var a = 2;
var c = 2;

function b() {
  var x = 2;
  var c = 4;
  console.log(c);
}

console.log(a);
console.log(this.a);
console.log(this.c);
console.log(this.x);
console.log(window.a);
console.log(window.x);
console.log(b());
```

If you are not sure about how the output is coming, watch hint 1.

## QUESTION 2

For solving the following questions, first understand how lexical scoping works

Watch this video

https://www.youtube.com/watch?v=uH-tVP8MUs8

Find the output

```js
function abc() {
  console.log(a);
}

var a = 7;

abc();
```

## QUESTION 3

Find the output

```js
function abc() {
  console.log(a);
}

abc();

var a = 7;
```

## QUESTION 4

Find the output

```js
function outerfunction() {
  console.log(a);

  var c = 10;

  innerfunction();

  function innerfunction() {
    console.log(b);

    console.log(c);
  }
}

var a = 7;
var b = 3;

outerfunction();
```

## QUESTION 5

Find the output

```js
function outerfunction() {
  console.log(a);
  var a = 10;

  innerfunction();

  function innerfunction() {
    console.log(a);
    console.log(window.a);
    console.log(this.a);
  }
}

var a = 7;
var b = 3;

outerfunction();
```

This question is a little tricky, please go through this video to understand how things work https://www.youtube.com/watch?v=pKHgi3sgk4Q
