# 📘 CSS `position` Property - Complete Guide

The `position` property in CSS is used to control the positioning method of an element in the document. It works with `top`, `right`, `bottom`, and `left` properties to define the exact position of an element.

---

## 🔹 Syntax

```css
selector {
  position: value;
  top: value;
  right: value;
  bottom: value;
  left: value;
}
```

---

## 🔹 Position Values

### 1. `static` (Default)

* Elements are positioned according to the **normal flow** of the document.
* `top`, `right`, `bottom`, `left` have **no effect**.

```css
div {
  position: static;
}
```

✅ Use When: You don't need special positioning.

---

### 2. `relative`

* Element is positioned **relative to its normal position**.
* Offsets using `top`, `left`, etc., will move it **without affecting** other elements.

```css
div {
  position: relative;
  top: 20px;
  left: 10px;
}
```

✅ Use When: You want to shift an element slightly from its original place.

---

### 3. `absolute`

* Positioned **relative to the nearest positioned ancestor** (non-static).
* If no such ancestor exists, it’s positioned relative to `<html>`.
* Removed from the normal document flow.

```css
.container {
  position: relative;
}

.box {
  position: absolute;
  top: 10px;
  left: 20px;
}
```

✅ Use When: You want to place an element exactly within a specific container.

---

### 4. `fixed`

* Positioned **relative to the browser window**.
* Stays in the same place even when the page is scrolled.

```css
nav {
  position: fixed;
  top: 0;
  left: 0;
}
```

✅ Use When: You want a sticky navigation or sidebar that always stays visible.

---

### 5. `sticky`

* A hybrid of `relative` and `fixed`.
* Element toggles between relative and fixed **based on scroll position**.
* Requires a `top`, `left`, etc. to function.

```css
header {
  position: sticky;
  top: 0;
}
```

✅ Use When: You want the element to scroll until a threshold, then stick.

---

## 🔹 Comparison Table

| Value      | Relative To                 | Removed from Flow | Scroll Behavior    |
| ---------- | --------------------------- | ----------------- | ------------------ |
| `static`   | Default flow                | ❌                 | Normal scroll      |
| `relative` | Own position                | ❌                 | Scrolls normally   |
| `absolute` | Nearest positioned ancestor | ✅                 | Stays fixed inside |
| `fixed`    | Viewport                    | ✅                 | Fixed on screen    |
| `sticky`   | Scroll container            | ❌                 | Scrolls then fixes |

---

## 🔹 Visual Summary

```
static   → Normal position (default)
relative → Offset from its normal position
absolute → Positioned inside parent (or HTML)
fixed    → Fixed to browser window
sticky   → Relative until sticky point, then fixed
```

---

## 🔹 Z-Index with Position

* Only works on elements with position: relative, absolute, fixed, or sticky.

```css
div {
  position: relative;
  z-index: 10;
}
```

Higher `z-index` = appears on top.

---

## 📝 Use Case Examples

### Example 1: Tooltip with absolute

```css
.tooltip {
  position: absolute;
  top: 100%;
  left: 0;
}
```

### Example 2: Fixed footer

```css
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
```

### Example 3: Sticky header

```css
.header {
  position: sticky;
  top: 0;
}
```

---

## 📝 Conclusion

* `position` controls how elements are placed in relation to other elements and the viewport.
* Mastering `position` is crucial for advanced layout and UI/UX design.

---
