What You Will Learn ? 

You will focus on the following:
```
Pseudo-classes – Special states of elements, like hover, focus, or first-child.
video link : https://www.loom.com/share/a8d9e7a7957942aeb280584276b544d3?sid=84321f18-e0f2-430c-9996-1f931a4ace9f

Pseudo-elements – Styling specific parts of an element, like first-letter or before/after content.
video link :  https://www.loom.com/share/fadd64f57fa14378a3e7085dc46ab635?sid=87a12209-f2c0-43d7-8e4e-0cf55fb9e051
```


Deliverables:
```
Apply styles using the :hover pseudo-class:

Style the <button> tag to change its background color when hovered over.
The background color should change to light blue when the button is hovered.


Apply styles using the :focus pseudo-class:

Style the <input> tag to have a red border when it is focused.
The border should be 2px solid red when the input is focused.


Apply styles using ::first-letter for paragraphs inside .container class:

Style the first letter of paragraphs inside .container to:
Be 2em in size
Have bold font weight


Apply styles using ::first-line for paragraphs inside .container class:

Style the first line of paragraphs inside .container to have bold font weight.


Apply styles using the ::selection pseudo-element:

Style the selected text to:
Have a yellow background
Have black text color when text is selected.
```





 Instructions:
 ```
Write the CSS styles as per the given pseudo-classes and pseudo-elements.
Remove the commented lines while running the test cases.
Use the exact selector names as instructed.
Ensure correct syntax and usage of pseudo-classes and pseudo-elements.
```

Expected Output:
```
Buttons should change appearance when hovered.
Input fields should have a distinct border when focused.
Paragraphs should have uniquely styled first letters and first lines.
Extra content should appear before and after headings.
Text selection should have a custom highlight effect.
```

![image](https://github.com/user-attachments/assets/bb744471-c761-4ec6-8740-4b501d49cd96)

```css
button:hover{
    background-color: lightblue;
}

input:focus{
    border: 2px solid red;
}


.container p::first-letter{
    font-size: 2em;
    font-weight: bold;
}

.container p::first-line {
  font-weight: bold;
}

::selection{
    background-color: yellow;
    color: black;
}
```
