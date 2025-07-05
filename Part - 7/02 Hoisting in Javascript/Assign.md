## Go through the following video to understand hoisting in depth

https://www.youtube.com/watch?v=Fnlnw8uY6jo

## Guess the Output (No reason means no marks)

## QUESTION 1

```js
var a = 3;

function printName(name) {
  console.log(name);
}

printName("YAVTECH");

console.log(a);
```

## QUESTION 2

```js
printName("YAVTECH");

console.log(a);

var a = 3;

function printName(name) {
  console.log(name);
}
```

## QUESTION 3

```js
console.log(printName);

console.log(a);

var a = 3;

var printName = (name) => {
  console.log(name);
};
```

Watch this video to understand some tricky hoisting question answers

https://www.youtube.com/watch?v=pHoVr2591zc

## QUESTION 4

```js
console.log(printName);

console.log(a);

var a = 3;

var printName = function (name) {
  console.log(name);
};
```
