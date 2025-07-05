In this task, you will work with a CSS compiler to apply styles to an already provided HTML structure.

Your goal is to correctly use different types of advanced CSS selectors to modify the appearance of elements.

🎥 Watch the video on advanced selectors here.  https://www.loom.com/share/fe04564ea994459cb00d61c0ee2d0c0a?sid=42b377f0-bbb2-4060-8714-be2adcf5d183



🎯 What You Will Learn:
You will focus on the following types of CSS selectors:

1️⃣ Descendant Selector (parent child) – Targets all elements inside a specified parent.

2️⃣ Child Selector (parent > child) – Targets only the direct children of a specified parent.

3️⃣ Attribute Selector ([attribute="value"]) – Targets elements based on specific attributes.



 Deliverables: 
 ```md
Apply styles using the descendant selector (.descendant p)

All <p> elements inside the .descendant div should:
Color: Blue
Font Style: Italic


Apply styles using the child selector (.child > p)

Only direct <p> children of the .child div should:
Color: Red
Font Weight: Bold
❌ Nested <p> elements inside another <div> should NOT be affected.


Apply styles using the attribute selector ([attribute="value"])

For input fields with type="text":
Border: 2px solid green
Padding: 5px
For the button with data-type="special":
Background Color: Yellow
Font Size: 18px
```

 Instructions:
 ```
Write the CSS styles as per the selectors given above.
Do NOT modify the HTML structure. Only add styles in the CSS file.
Use the exact selector names (.descendant, .child, input[type="text"], button[data-type="special"]).
Make sure the correct elements are targeted (Check the difference between child and descendant selectors!).
*Important* : Remove the commented lines from the code while running the test cases.
```

🔍 Expected Output:
```
Once done, the page should have:
Blue italic text for all <p> inside .descendant.
Red bold text only for direct <p> children inside .child.
Green-bordered input for text fields.
Yellow background button with larger text.
```

The final output will be somewhat like this image:

![image](https://github.com/user-attachments/assets/4b8b2b3c-3455-401d-8c90-c3c14c3b3feb)

```css
.descendant p{
    color: blue;
    font-style: italic;
}

.child > p{
    color: red;
    font-weight: bold;
}

input[type="text"]{
    border: 2px solid green;
    padding: 5px;
}

button[data-type="special"]{
    background-color: yellow;
    font-size: 18px;
}
```





Note: Remove the commented lines from the code while running the test cases.
Happy coding! 🚀
