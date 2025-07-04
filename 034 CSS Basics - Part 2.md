Go through these videos:

Other ways to apply styles - Linking External CSS File  https://drive.google.com/file/d/1izjyHqq8UkJRVsftmcncZu9dRuchCIMj/view?usp=drive_link

How to select elements when using external CSS - CSS Selectors  https://drive.google.com/file/d/1n13Dpt21SZdwR10O3LrWAD191ZzdtepX/view?usp=drive_link


Deliverables:

```md
  You are given a form in the HTML file. You task is to:
  
  Use form element's tag name to give it a padding of 25px and change its background color to pink.
  Set id = "name" for the input element of type "text" and link it to the label element using "for" attribute. 
  Use id of the input element to set its height to 25px.
  Use "for" attribute of the label element to change its font style to italic.
  Give both the buttons a class name of "btn", and then use this class name to set 25px as their top margin, and to give them a padding of 10px on all sides.
```

Final output will somewhat look like this image:

![image](https://github.com/user-attachments/assets/652d0b31-441e-4760-92de-07ef7b0e9b30)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <form>
    <label for="name">Name:</label>
    <input type="text" id="name">
    <br>
    <button class="btn" type="submit">Submit</button>
    <button class="btn" type="reset">Reset</button>
  </form>
</body>

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

