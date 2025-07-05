# CSS Grid: Complete Guide

CSS Grid Layout is a two-dimensional layout system for the web. It allows you to create grid-based designs using rows and columns.

---

## 🔹 display: grid

Defines a grid container.

```css
.container {
  display: grid;
}
```

* Turns the element into a grid container.
* Its direct children become grid items.

---

## 🔹 grid-template-columns

Defines the number and size of columns in the grid.

```css
.container {
  grid-template-columns: 100px 1fr 2fr;
}
```

* Can use fixed units (e.g., px), percentages, `fr` units, or functions like `minmax()`.

---

## 🔹 grid-template-rows

Defines the number and size of rows in the grid.

```css
.container {
  grid-template-rows: auto 200px 1fr;
}
```

* Similar to columns but applies to rows.

---

## 🔹 gap

Controls spacing between rows and columns.

```css
.container {
  gap: 20px;
  row-gap: 10px;
  column-gap: 15px;
}
```

* `gap` is shorthand for both row-gap and column-gap.

---

## 🔹 justify-items

Aligns grid items along the inline (horizontal) axis.

```css
.container {
  justify-items: start | end | center | stretch;
}
```

* Applies to all grid items.
* `stretch` (default): items stretch to fill the cell.

---

## 🔹 align-items

Aligns grid items along the block (vertical) axis.

```css
.container {
  align-items: start | end | center | stretch;
}
```

* Applies to all items within their respective grid cells.

---

## 🔹 place-items

Shorthand for `justify-items` and `align-items`.

```css
.container {
  place-items: center start; /* align-items justify-items */
}
```

* Can use one or two values.

  * One value: applies to both axes.
  * Two values: first is align-items, second is justify-items.

---

## 🔹 grid-column

Controls how many columns an item spans or where it starts and ends.

```css
.item {
  grid-column: 1 / 3; /* start line / end line */
  /* or */
  grid-column: span 2;
}
```

---

## 🔹 grid-row

Controls how many rows an item spans or where it starts and ends.

```css
.item {
  grid-row: 2 / 4;
  /* or */
  grid-row: span 2;
}
```

---

CSS Grid is powerful for creating both simple and complex responsive layouts. The properties listed here are essential building blocks for mastering grid-based design.
