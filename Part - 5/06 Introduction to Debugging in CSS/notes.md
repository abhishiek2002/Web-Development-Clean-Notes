# 🛠️ Basic Methods of CSS Debugging

### 1. **Use Browser DevTools**

* Right-click on the page and select **Inspect** or press `F12`.
* Use the **Elements** panel to view and live-edit styles.
* Use the **Computed** tab to understand the final applied styles.

### 2. **Outline Elements for Debugging**

```css
* {
  outline: 1px solid red;
}
```

* Helps visualize spacing, alignment, and nested elements.

### 3. **Check for Specificity and Overrides**

* Use DevTools to identify overridden styles.
* Understand how specificity, order, and `!important` affect rule application.

### 4. **Use Temporary Background Colors**

```css
.container { background-color: rgba(0, 255, 0, 0.2); }
.item { background-color: rgba(255, 0, 0, 0.2); }
```

* Makes it easy to detect boundaries and misalignments.

### 5. **Validate CSS Code**

* Use [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) to catch syntax errors.

### 6. **Test Layout Responsiveness**

* Resize browser window or use DevTools' device toolbar.
* Helps detect overflow, breakpoints, and responsive issues.

### 7. **Use `display: contents` to debug nesting issues**

* Temporarily flattens DOM structure for layout visualization.

### 8. **Use Grid/Flexbox Visualizers in DevTools**

* Chrome/Firefox show grid lines and names in the layout panel.
* Helpful for understanding alignment, spacing, and spans.

---

CSS Grid is powerful for creating both simple and complex responsive layouts. The properties listed here are essential building blocks for mastering grid-based design.
