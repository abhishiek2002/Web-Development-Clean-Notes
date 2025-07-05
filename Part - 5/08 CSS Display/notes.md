# 📘 CSS `display` Property - Complete Guide

The `display` property in CSS determines how an element is displayed in the document layout. It is one of the most important properties for defining the structure and layout of a webpage.

---

## 🔹 Syntax

```css
selector {
  display: value;
}
```

---

## 🔹 Common `display` Values

### 1. `block`

* The element starts on a new line and takes up the full width.
* Respects width/height/margin/padding.
* Examples: `<div>`, `<section>`, `<article>`

```css
div {
  display: block;
}
```

---

### 2. `inline`

* Does **not** start on a new line.
* Only takes up as much width as its content.
* Cannot set width/height.
* Examples: `<span>`, `<a>`, `<strong>`

```css
span {
  display: inline;
}
```

---

### 3. `inline-block`

* Similar to `inline`, but allows setting width and height.
* Elements sit next to each other like inline elements.

```css
.button {
  display: inline-block;
  width: 100px;
  height: 40px;
}
```

---

### 4. `none`

* The element is **completely hidden** (removed from layout).
* It won’t take up any space.

```css
.modal {
  display: none;
}
```

---

## 🔹 Layout Models

### 5. `flex`

* Enables **flexbox** layout.
* Allows flexible arrangements of children using axes.

```css
.container {
  display: flex;
}
```

* Related properties:

  * `flex-direction`
  * `justify-content`
  * `align-items`

---

### 6. `grid`

* Enables **CSS Grid** layout.
* Allows you to create rows and columns.

```css
.container {
  display: grid;
}
```

* Related properties:

  * `grid-template-columns`
  * `grid-template-rows`
  * `gap`

---

### 7. `inline-flex` and `inline-grid`

* Like `flex` and `grid` but behave like `inline` elements.

```css
nav {
  display: inline-flex;
}
```

---

## 🔹 HTML Default `display` Values

| HTML Element | Default Display |
| ------------ | --------------- |
| `<div>`      | block           |
| `<span>`     | inline          |
| `<a>`        | inline          |
| `<li>`       | list-item       |
| `<table>`    | table           |

---

## 🔹 Table-Related Values

| Value           | Description              |
| --------------- | ------------------------ |
| `table`         | Behaves like `<table>`   |
| `table-row`     | Behaves like `<tr>`      |
| `table-cell`    | Behaves like `<td>`      |
| `table-caption` | Behaves like `<caption>` |

Useful for creating table-like layouts without using `<table>` tags.

---

## 🔹 Other Values

### `list-item`

* Used to render bullets or numbers in lists.
* Default for `<li>`.

```css
li {
  display: list-item;
}
```

---

### `contents`

* Makes the container element disappear while keeping its children visible.

```css
.wrapper {
  display: contents;
}
```

---

### `inherit`, `initial`, `unset`

| Keyword   | Description                                            |
| --------- | ------------------------------------------------------ |
| `inherit` | Inherits the value from the parent element             |
| `initial` | Sets the property to its default initial value         |
| `unset`   | Acts as either `inherit` or `initial` based on context |

---

## 🔹 Visual Summary

```
Block       → Full width, new line
Inline      → Only content width, no line break
Inline-block→ Inline + supports width/height
None        → Hidden, removed from layout
Flex        → Flexbox layout for 1D layout
Grid        → Grid layout for 2D layout
```

---

## 📝 Use Case Examples

### Example 1: Hiding an element

```css
.hidden {
  display: none;
}
```

### Example 2: Horizontal button layout using flex

```css
.button-group {
  display: flex;
  gap: 10px;
}
```

### Example 3: Creating a basic 2-column layout with grid

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

---

## 📝 Conclusion

* The `display` property is the **foundation of layout** in CSS.
* Choosing the right `display` value allows you to control how elements appear and interact on the page.
* Combine `display` with layout tools like **flexbox** and **grid** for powerful designs.

---
