 Our aim right now is to understand JavaScript, and not CSS. However, I do feel that you should have a basic understanding of CSS, and therefore, we are having two tasks here on CSS basics.



Go through these videos:

```md
How can you style HTML elements? - Inline Styles  https://drive.google.com/file/d/1r7fEM_Oeqp7-49VPLco7bEKPGKj2432r/view?usp=drive_link
Basic Properties - Part 1 - Basic CSS Properties  https://drive.google.com/file/d/13B7M68Ym_dnyneTnfE5YStYIH0zj-0iQ/view?usp=drive_link
Basic Properties - Part 2 - Border, Padding, Margin - Demo  https://drive.google.com/file/d/17kJsGRNfl8Z51hExNoiVkIXLjqeM8haH/view?usp=drive_link
Basic Properties - Part 3 - Border, Padding, Margin - Explanation  https://drive.google.com/file/d/1v9TZ7DGGizylunRW5q7i9ltiAtW9VgYj/view?usp=drive_link
```

Deliverables:

```md
You need to use Inline CSS for this task , so add the style accordingly . 
You are given a simple form in the html file. You task is to:

Apply following styles to form element:
font-family = Arial
background-color = gray
padding = 20px
border-radius = 20px
Apply following styles to label element:
font-weight = bold
font-size = 20px
color = blue
Apply following styles to input element:
font-style = italic
margin-bottom = 20px
height = 30px
Apply following styles to button element:
background-color = yellow
width = 225px
border = 1px solid yellow
```

The final output will be somewhat like this image:

![image](https://github.com/user-attachments/assets/c9eb8b71-c50a-4a99-bf63-19a441d38ace)

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <form style="font-family:Arial;background-color:gray;padding:20px;border-radius:20px;">
    <label for="name" style="font-weight:bold;font-size:20px;color:blue;">
      Name:
    </label>
    <input type="text" id="name" style="font-style:italic;margin-bottom:20px;height:30px;">
    <br>
    <button type="submit" style="background-color:yellow;width:225px;border:1px solid yellow;">Submit</button>
  </form>
</body>

</html>
```
