# CSS Box Model: Detailed Explanation

The **CSS Box Model** is a fundamental concept that defines how elements are displayed and spaced on a web page. Every HTML element is represented as a rectangular box, composed of the following parts:

## 1. Content

* The actual content of the element (text, image, etc.).
* Defined using `width` and `height` properties.

```css
width: 200px;
height: 100px;
```

## 2. Padding

* Space between the content and the border.
* Increases the space inside the element.
* Padding is transparent.

```css
padding: 10px;
```

### Individual Padding:

```css
padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 5px;
```

## 3. Border

* Surrounds the padding and content.
* Adds visible lines around the element.

```css
border: 2px solid black;
```

## 4. Margin

* Space outside the element, separating it from other elements.
* Margins are transparent.

```css
margin: 20px;
```

### Individual Margins:

```css
margin-top: 10px;
margin-right: 15px;
margin-bottom: 10px;
margin-left: 5px;
```

## Box Size Calculation

### When `box-sizing: content-box` (default):

```
Total width = content width + padding + border + margin
```

### When `box-sizing: border-box`:

* The `width` and `height` include padding and border.
* Content size is adjusted to fit within the total size.

```css
box-sizing: border-box;
```

```css
* {
  box-sizing: border-box;
}
```

## Margin Collapse

### What is it?

* When two vertical margins meet, they collapse into a single margin.
* The resulting space equals the **larger** of the two margins.

### Example:

```html
<div style="margin-bottom: 20px;"></div>
<div style="margin-top: 30px;"></div>
```

**Resulting space = 30px**, not 50px.

### When does it occur?

* Between block-level sibling elements.
* Between a parent and its first/last child.

### How to prevent it?

* Add padding, border, or `overflow: hidden` to one of the elements.

## Summary Table

| Property          | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| `content`         | The actual element data (text, image, etc.)                  |
| `padding`         | Space **inside** the border (between content and border)     |
| `border`          | The boundary around padding and content                      |
| `margin`          | Space **outside** the element (between this and other boxes) |
| `box-sizing`      | Controls whether padding and border are included in width    |
| `margin collapse` | When vertical margins of block elements overlap              |
