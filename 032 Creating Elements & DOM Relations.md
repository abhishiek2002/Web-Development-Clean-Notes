Watch this video to understand how to create new elements:

Creating Elements  https://drive.google.com/file/d/14sJweyYk_DZbdfXrI4BLAYE3Bc0ETNiy/view?usp=drive_link



Watch this video to understand DOM relations:

DOM Relations  https://drive.google.com/file/d/1rLd0pZd31HIxsQKWanApwKGMYi31aMOS/view?usp=drive_link



Deliverables:

1. Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".

2. Make the sub-heading text italic.

2. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".

3. On this paragraph tag set an id of "fruits-total".



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
const header = document.querySelector('#header');

// create h3 tag

const h3 = document.createElement('h3');

h3.textContent = "Buy high quality organic fruits online";
h3.style.fontStyle = "italic";

// inserting h3
header.appendChild(h3);

// create p tag

const p = document.createElement('p');

p.textContent = "Total fruits: 4";
p.id = "fruits-total";

// inserting p
const list = document.querySelector('.fruits');

list.prepend(p);
```
