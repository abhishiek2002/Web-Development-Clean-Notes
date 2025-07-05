Watch this video to understand the getElementsByClassName Method:

getElementsByClassName Method

https://drive.google.com/file/d/1qLwHpBUmCAzOHnHboC9I8chG3N4B5BUM/view?usp=drive_link

Deliverable:

1. Make the 3rd element in the list have yellow background color.

2. Make all the elements in the list have bold font.



Final output should be as shown below:

![image](https://github.com/user-attachments/assets/8cd48704-17b0-4b77-98c4-2e102a5b461a)


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
// Write your code below:
const fruits = document.getElementsByClassName('fruit');

fruits[2].style.background = "yellow";

for (const fruit of fruits) {
    fruit.style.fontWeight = "bold";
}
```
