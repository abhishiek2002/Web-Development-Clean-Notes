# Watch this video for reference and answer the following questions

https://www.youtube.com/watch?v=eBTBG4nda2A

## Questions

### 1.

```js
function y() {
  setTimeout(() => console.log("a"), 1000);

  console.log("Done Coding");
}

y();
```

Explain how you got the answer

### 2.

```js
function y() {
  setTimeout(() => console.log("a"), 0);

  console.log("Done Coding");
}

y();
```

Explain how you got the answer

### 3.

```js
function y(){

for(var i=1;i<6;i++){

setTimeout(() => console.log(i ), i \* 1000)

}

console.log('Done Coding')

}

y();
```

Explain how you got the answer

### 4.

```js
function y(){

for(let i=1;i<6;i++){

setTimeout(() => console.log(i ), i \* 1000)

}

console.log('Done Coding')

}

y();
```

Explain how you got the answer

### 5.

Can you complete the following function "name" so that it prints as per the comments.

```js
Const name = (arr)=>{

}

let fun = name(["Ram","Shyam"]);

fun()// Print Hello Ram

fun()//print Hello Shyam
```

#### Answer Of 5

```js
const name = (arr) => {
  let index = 0;
  return function () {
    if (index < arr.length) {
      console.log(arr[index]);
      index++;
    } else {
      console.log("No more left");
    }
  };
};

const fun = name(["Abhishek", "Kuntal"]);

fun();

fun();
```

Try by yourself first , if stuck check the hints.
