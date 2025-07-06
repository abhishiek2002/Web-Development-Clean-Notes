Guess the output with reason stating why you chose the answer

## 1.

```js
console.log("a");

console.log("b");

setTimeout(() => console.log("c"), 1000);

console.log("d");
```

## 2.

```js
console.log("a");

console.log("b");

setTimeout(() => console.log("c"), 0);

console.log("d");
```

## 3.

```js
console.log("a");

console.log("b");

setTimeout(() => console.log("e"), 1000);

setTimeout(() => console.log("c"), 0);

console.log("d");
```

## 4.

Watch this video and answer the following

### 4a)

What is the use of spread operator?

### 4b)

```js
const obj1 = {
  key1: "value1",

  key2: "value2",

  key3: "value3",
};

const obj2 = { ...obj1 };

console.log(obj2);
```

### 4c)

```js
const obj1 = {
  key1: "value1",

  key2: "value2",

  key3: "value3",
};

const obj2 = { ...obj1, key3: "new value" };
```

### 4d)

```js
const obj1 = {
  key1: "value1",

  key2: "value2",

  key3: "value3",
};

const obj2 = { ...obj1, key3: "new value", key1: "new val" };
```

### 4e)

```js
const obj = {
  key1: "value1",

  key2: "value2",

  key3: "value3",
};

const obj2 = { ...obj };

console.log(obj2 === obj);
```

### 4f)

```js
const arr1 = [1, 2, 3];

const arr2 = [3, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);
```
