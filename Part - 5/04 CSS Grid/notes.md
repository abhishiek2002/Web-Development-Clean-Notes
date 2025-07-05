# CSS Grid: Complete Guide

CSS Grid Layout is a two-dimensional layout system for the web. It allows you to create grid-based designs using rows and columns.

---

## 🔹 Display

To enable grid layout on a container:

```css
display: grid;       /* Block-level grid */
display: inline-grid; /* Inline-level grid */
```

---

## 🔹 Grid Container & Grid Items

* **Grid Container**: The element with `display: grid` or `inline-grid`.
* **Grid Items**: The **direct children** of the grid container.

```html
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
</div>
```

---

## 🔹 Grid Template Columns & Rows

Defines the number and size of columns and rows.

```css
grid-template-columns: 200px 1fr 2fr;
grid-template-rows: 100px auto;
```

* You can use fixed units (`px`, `em`), percentages (`%`), `fr` units, or functions like `minmax()`.

---

## 🔹 Gap

Defines spacing between rows and columns.

```css
gap: 20px;              /* Both row and column gap */
row-gap: 10px;
column-gap: 15px;
```

---

## 🔹 Grid Lines, Tracks & Cells

### Grid Lines

* Invisible lines that divide the grid into columns and rows.

### Grid Tracks

* The **space between two adjacent lines** (row track or column track).

### Grid Cells

* The **intersection** of a single row and column — the basic unit of the grid.

---

## 🔹 Grid Area

Defines a specific rectangular area in the grid.

### Named Grid Areas:

```css
grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";

.item-header { grid-area: header; }
```

### Shorthand Placement:

```css
grid-area: row-start / column-start / row-end / column-end;
```

```css
grid-area: 1 / 2 / 3 / 4;
```

---

## 🔹 Justify & Align Content (Grid Container)

Align the **entire grid** within the container.

```css
justify-content: start | end | center | space-between | space-around | space-evenly;
align-content: start | end | center | stretch;
```

---

## 🔹 Justify & Align Items (Grid Container)

Align **individual items** inside their grid cells.

```css
justify-items: start | end | center | stretch;
align-items: start | end | center | stretch;
```

---

## 🔹 Justify & Align Self (Grid Item)

Override alignment **per item**.

```css
.grid-item {
  justify-self: center;
  align-self: end;
}
```

---

## 🔹 Grid Auto Flow

Controls the direction in which auto-placed items are inserted.

```css
grid-auto-flow: row | column | dense | row dense | column dense;
```

* `row`: Default, items are placed row-wise.
* `column`: Items are placed column-wise.
* `dense`: Tries to fill gaps with smaller items.

---

## 🔹 Auto-Fit & Auto-Fill

Used in combination with `repeat()` and `minmax()` for responsive design.

```css
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
```

* `auto-fill`: Adds as many columns as possible, even if empty.
* `auto-fit`: Same as `auto-fill`, but collapses empty columns.

---

## 🔹 Fractional Units (fr) & Minmax

### `fr` Unit

* Stands for "fraction" of the available space.

```css
grid-template-columns: 1fr 2fr; /* 1/3 and 2/3 of the container */
```

### `minmax()` Function

* Defines a range for size — minimum and maximum.

```css
grid-template-columns: repeat(3, minmax(100px, 1fr));
```

---

## 🔹 Summary Table

| Property                           | Description                            |
| ---------------------------------- | -------------------------------------- |
| `display`                          | Turns element into grid container      |
| `grid-template-columns`            | Defines columns structure              |
| `grid-template-rows`               | Defines rows structure                 |
| `gap`, `row-gap`, `column-gap`     | Defines spacing between grid tracks    |
| `grid-area`                        | Positions items or defines named areas |
| `justify-content`, `align-content` | Aligns entire grid in container        |
| `justify-items`, `align-items`     | Aligns individual items                |
| `justify-self`, `align-self`       | Aligns a specific item                 |
| `grid-auto-flow`                   | Defines auto-placement direction       |
| `auto-fit`, `auto-fill`            | Responsive track fitting               |
| `fr`                               | Fractional unit of available space     |
| `minmax()`                         | Min and max size boundaries            |

---

CSS Grid is powerful for creating both simple and complex responsive layouts, especially when combined with media queries and Flexbox.
