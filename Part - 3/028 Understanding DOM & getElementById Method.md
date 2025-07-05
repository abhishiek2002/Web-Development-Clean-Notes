Watch this video to understand DOM:

What is DOM?  https://drive.google.com/file/d/19L6q5XDOPEWaiguC-M4cvDBPYhazH5Hh/view?usp=drive_link



Watch this video to understand the getElementById Method:

getElementById Method  https://drive.google.com/file/d/17RBMgVJv29WF36asgIb71A3LM5-p-SnP/view?usp=drive_link



Deliverable:

1. Change the main heading 'Fruit Shop' to 'Fruit World'

2. Change the font color of 'Fruit World' from black to orange

3. Change background color of div with id = "header" to green color

4. Add a bottom border of orange color to div with id = "header"

5. Change the font color of 'Fruits In Basket' from black to green

6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"



Final output is as shown below:

![image](https://github.com/user-attachments/assets/4e575405-825a-4b57-886e-622b8c545f8b)


Push the code to GitHub.

NOTE: How to push new code to same repository? Watch this video - https://www.youtube.com/watch?v=13MYyMTdRxE

NOTE: What is commit ID? Watch this video to understand it better.

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
const head = document.getElementById('main-heading');

head.innerHTML = "Fruit World";

head.style.color = "orange";

const header = document.getElementById('header');

header.style.backgroundColor = "green";

header.style.borderBottom = "2px solid orange";

const basketHeading = document.getElementById('basket-heading');

basketHeading.style.color = 'green';

const div = document.getElementById('thanks');

const p = document.createElement("p");

p.textContent = "Please visit us again";

div.appendChild(p);
```
