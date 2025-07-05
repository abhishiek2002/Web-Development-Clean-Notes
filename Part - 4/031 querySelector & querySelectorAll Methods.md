Watch this video to understand the querySelector & querySelectorAll Methods:

querySelector & querySelectorAll Methods

https://drive.google.com/file/d/1_UeoMSHGKOHUSYkikhn1JF5Gpyho4bQ-/view?usp=drive_link

Deliverable:

1. Implement the code as shown in the video.

2. Use id as query to select the basket heading and set its color to brown.

3. Change the background color of even fruit items to red and change their text color to white.



Note: Use only querySelector and querySelectorAll to select DOM elements, and not use any other methods.



Final output should be as shown below:

![image](https://github.com/user-attachments/assets/60768b18-3e50-478f-891c-308b7b8ebea7)


Push the code to GitHub.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>

<body style="margin: 0">
  <div id="header" style="padding: 1rem 0; background-color: lightblue">
    <h1 id="main-heading" style="margin: 0">Fruit Shop</h1>
  </div>
  <div>
    <h2 id="basket-heading">Fruits In Basket</h2>
    <ul class="fruits">
      <li class="fruit">Banana</li>
      <li class="fruit">Apple</li>
      <li class="fruit">Orange</li>
      <li class="fruit">Kiwi</li>
    </ul>
  </div>
  <div id="thanks"></div>
</body>
<script src="index.js"></script>

</html>
```

```css
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}
```

```js
// Write the code as shown in the video below:
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';
// Write answer to the questions asked below:
const basketHeading = document.querySelector('#basket-heading');

basketHeading.style.color = "brown";

const fruits = document.querySelectorAll('.fruit');

for (var i = 0; i < fruits.length; i++) {
    if (i & 1) {
        // odd
        fruits[i].style.background = "brown";
        fruits[i].style.color = "white";
    }
    else {
        // even
        fruits[i].style.background = "red";
        fruits[i].style.color = "white";
    }
}

// const fruitsBox = document.querySelector('.fruits');

// fruitsBox.style.background = "gray";
```
