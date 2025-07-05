Watch this video to understand the getElementsByTagName Method:

getElementsByTagName Method

https://drive.google.com/file/d/1BOo5iGmN1Wczg7k_2WZ-HwwYTjsTSpPh/view?usp=drive_link

Deliverable:

1. Change the color of 5th "li" tag (one with "Mango" written inside it) to blue.

2. Make all the "li" tags italic.



Final output should be as shown below:


![image](https://github.com/user-attachments/assets/701deea8-8832-4e3a-8ef3-1911aad5d54d)


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
        <li>Mango</li>
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
const liEl = document.getElementsByTagName('li');

liEl[4].style.color = "blue";

for (const li of liEl) {
    li.style.fontStyle = "italic";
}
```
