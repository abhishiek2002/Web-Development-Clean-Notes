# FAT ARROW FUNCTIONS - [MOST WIDELY USED ]

Go through this video to understand fat arrow functions in depth

https://www.youtube.com/watch?v=_pfXEv9cFGE

# Guess the output of the following

## 1.

```js
var fun = (a) => a;

var a = 10;

console.log(fun(a));
```

## 2.

```js
var fun = (a) => a;

console.log(fun(a));

var a = 10;
```

## 3.

```js
var fun = (a) => {
  a;
};

var a = 10;

console.log(fun(a));
```

## 4.

```js
var fun = (a, b) => {
  var sum = a + b;

  return sum;
};

var a = 10;

var b = 20;

console.log(fun(a, b));
```

## 5.

```js
var fun =( a, b) =>

var sum = a + b

return sum

var a =10;

var b = 20

console.log(fun(a, b))
```

## 6.

Main problem solved by fat arrow function

```js
var student = function (name) {
  this.name = name;

  function printName() {
    console.log(this.name);
  }

  printName();
};

var yash = new student("yash");
```

## 7.

Beautifully solved by fat arrow function. Always remember this.[Favorite interview question]

```js
var student = function (name) {
  this.name = name;

  var printName = () => {
    console.log(this.name);
  };

  printName();
};

var yash = new student("yash");
```
