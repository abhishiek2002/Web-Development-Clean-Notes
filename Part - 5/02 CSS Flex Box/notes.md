# CSS Flexbox: Complete Guide

Flexbox (Flexible Box Layout) is a CSS layout model that allows you to design a flexible and efficient layout structure without using floats or positioning.

---

## 🔹 Key Concepts

* **Main Axis**: The primary axis along which flex items are laid out.
* **Cross Axis**: Perpendicular to the main axis.
* **Main Size**: Width or height along the main axis.
* **Cross Size**: Width or height along the cross axis.

---

## 🔸 Flex Container

An element becomes a flex container when `display: flex` or `display: inline-flex` is applied.

```css
.container {
  display: flex;
}
```

---

## 🔸 Flex Container Properties

### 1. `flex-direction`

Defines the direction of the main axis.

```css
flex-direction: row | row-reverse | column | column-reverse;
```

* `row` (default): left to right
* `column`: top to bottom

### 2. `flex-wrap`

Controls whether the flex items should wrap onto multiple lines.

```css
flex-wrap: nowrap | wrap | wrap-reverse;
```

* `nowrap` (default): All items in one line
* `wrap`: Items wrap onto multiple lines

### 3. `flex-flow`

Shorthand for `flex-direction` and `flex-wrap`.

```css
flex-flow: row wrap;
```

### 4. `justify-content`

Aligns items **horizontally** along the main axis.

```css
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
```

### 5. `align-items`

Aligns items **vertically** along the cross axis.

```css
align-items: stretch | flex-start | flex-end | center | baseline;
```

### 6. `align-content`

Aligns **rows of items** when there’s extra space in the cross axis.
(Works only with wrapped content.)

```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
```

---

## 🔸 Flex Item Properties

These properties are applied to children inside a flex container.

### 1. `order`

Defines the order of the flex item.

```css
.item {
  order: 2; /* Default is 0 */
}
```

### 2. `flex-grow`

Defines how much the item will grow relative to the rest.

```css
.item {
  flex-grow: 1; /* Will grow to fill available space */
}
```

### 3. `flex-shrink`

Defines how the item will shrink when space is tight.

```css
.item {
  flex-shrink: 1; /* Default is 1 */
}
```

### 4. `flex-basis`

Initial size of the item before growing or shrinking.

```css
.item {
  flex-basis: 200px;
}
```

### 5. `flex`

Shorthand for `flex-grow`, `flex-shrink`, and `flex-basis`.

```css
.item {
  flex: 1 0 150px;
}
```

### 6. `align-self`

Overrides `align-items` for a specific item.

```css
.item {
  align-self: flex-start;
}
```

---

## 🔹 Common Flexbox Layouts

### Horizontal Centering:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Equal-Width Columns:

```css
.container {
  display: flex;
}
.item {
  flex: 1;
}
```

### Responsive Wrap:

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

---

## 🔹 Summary Table

| Property          | Description                                      |
| ----------------- | ------------------------------------------------ |
| `display`         | Defines flex container (`flex` or `inline-flex`) |
| `flex-direction`  | Main axis direction                              |
| `flex-wrap`       | Wraps items onto multiple lines                  |
| `justify-content` | Aligns items on main axis                        |
| `align-items`     | Aligns items on cross axis                       |
| `align-content`   | Aligns multiple lines                            |
| `order`           | Item order                                       |
| `flex-grow`       | Growth factor                                    |
| `flex-shrink`     | Shrink factor                                    |
| `flex-basis`      | Initial main size                                |
| `flex`            | Shorthand for grow, shrink, basis                |
| `align-self`      | Individual item alignment                        |

---

Flexbox simplifies responsive design and layout alignment, making it a powerful tool for modern web development.
