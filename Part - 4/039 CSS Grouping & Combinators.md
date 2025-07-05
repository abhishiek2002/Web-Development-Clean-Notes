# CSS Selectors: Grouping, Adjacent Sibling, and General Sibling

## 1. Grouping Selector `,`

### 🔹 Description:

The grouping selector allows you to apply the same CSS styles to multiple elements at once, reducing repetition in your stylesheet.

### 🔹 Syntax:

```css
h1, h2, p {
  color: blue;
  font-family: Arial;
}
```

### 🔹 Explanation:

* This rule applies the same styles to all `<h1>`, `<h2>`, and `<p>` elements.
* Saves time and keeps code cleaner when multiple elements share the same style.

---

## 2. Adjacent Sibling Selector `+`

### 🔹 Description:

This selector targets an element that is immediately **next to another specific element** (i.e., the very next sibling in the DOM).

### 🔹 Syntax:

```css
h1 + p {
  color: red;
}
```

### 🔹 Explanation:

* This rule only affects a `<p>` element that comes directly **after** an `<h1>`.
* If there is any other element (like a `<div>`) between `<h1>` and `<p>`, the style will not apply.

### 🔹 Example:

```html
<h1>Title</h1>
<p>This paragraph will be red.</p>
<p>This one won't be affected.</p>
```

---

## 3. General Sibling Selector `~`

### 🔹 Description:

This selector targets **all sibling elements** that come **after** a specific element (not just the immediate one).

### 🔹 Syntax:

```css
h1 ~ p {
  color: green;
}
```

### 🔹 Explanation:

* All `<p>` elements that are siblings and appear after an `<h1>` will be styled.
* Unlike `+`, this doesn’t require the elements to be directly adjacent.

### 🔹 Example:

```html
<h1>Title</h1>
<div>Some content</div>
<p>This paragraph will be green.</p>
<p>This one will be green too.</p>
```

---

## ✅ Summary Table

| Selector | Meaning          | Affects                                     |
| -------- | ---------------- | ------------------------------------------- |
| `,`      | Grouping         | Multiple different elements with same style |
| `+`      | Adjacent sibling | The next sibling only                       |
| `~`      | General sibling  | All siblings after the target               |

---

Use these selectors to organize your CSS efficiently and apply styles with precision!
