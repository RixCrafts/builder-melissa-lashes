
# CSS Best Practices – Comprehensive Guide

This document serves as a **CSS best practices guide** for developers and AI coding assistants.  
It ensures consistency, maintainability, and scalability in web projects.

---

## 1. General Principles
- **Keep CSS DRY (Don’t Repeat Yourself):** Reuse classes instead of duplicating code.
- **Write for humans first, machines second:** Code should be easy to read and maintain.
- **Use semantic HTML where possible:** Avoid styling elements incorrectly when semantic tags already exist.
- **Progressive enhancement:** Ensure core functionality works without CSS, then enhance.

---

## 2. Naming Conventions
- **Use BEM (Block, Element, Modifier) methodology:**
  ```css
  .button { ... }           /* Block */
  .button__icon { ... }     /* Element */
  .button--primary { ... }  /* Modifier */
  .button_submit { ... } /* Compoused name */
  .button-overview { ... } /* Nested element: this is the 'button' of the 'overview' element */
  ```
- **Avoid generic names** like `.red`, `.big`, `.left`.
- **Use lowercase with hyphens** for readability (`.main-header`, `.nav-item`).
- **Keep names meaningful** (reflect role/purpose, not appearance).

---

## 3. File Organization
- **Separate concerns:**  
  - `base/` → resets, global styles  
  - `components/` → buttons, cards, forms  
  - `layout/` → grids, headers, footers  
  - `themes/` → color palettes, dark/light mode  
- **One component = one file** for modularity.
- **Import systematically** with `@import` or CSS preprocessors.

---

## 4. Performance Best Practices
- **Minimize CSS file size:** Use minification in production.  
- **Load critical CSS inline:** Improve above-the-fold performance.  
- **Avoid deep selectors:** `header nav ul li a {}` → too specific, costly.  
- **Limit use of `!important`:** Only as a last resort.  
- **Use shorthand properties:**  
  ```css
  margin: 10px 20px;  /* Instead of separate margin-top, margin-right */
  ```

---

## 5. Maintainability & Scalability
- **Group related properties logically:**
  ```css
  .card {
    /* Layout */
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* Box model */
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #ddd;

    /* Aesthetics */
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }
  ```
- **Comment complex sections in detail** (`/* Grid system for responsive layout */`).
- **Use variables for colors, fonts, spacing** (`:root { --primary-color: #0066ff; }`).

---

## 6. Accessibility Best Practices
- **Ensure sufficient color contrast** (use [WCAG guidelines](https://www.w3.org/WAI/WCAG21/quickref/)).  
- **Don’t rely on color alone** to convey meaning.  
- **Respect user preferences:**  
  ```css
  @media (prefers-reduced-motion: reduce) {
    * { animation: none; transition: none; }
  }
  ```
- **Maintain focus states** for interactive elements.

---

## 7. Responsive Design
- **Use mobile-first approach:**  
  ```css
  .container { width: 100%; }
  @media (min-width: 768px) { .container { width: 750px; } }
  ```
- **Use relative units** (`em`, `rem`, `%`, `vh`, `vw`) instead of `px` when possible.  
- **Leverage modern layout tools:** Flexbox & CSS Grid.

---

## 8. Common Pitfalls to Avoid
- Avoid **inline styles** (`<div style="color:red">`).  
- Avoid **over-nesting selectors** (max 3 levels deep).  
- Avoid **large z-index values** (`z-index: 9999;`). Use structured stacking.  
- Don’t hardcode colors/fonts everywhere → use variables/tokens.

---

## 9. Tools & Automation
- **Default Usage:** Use plain CSS until otherwise specify
- **Linting:** Use Stylelint for consistency.  
- **Preprocessors:** Sass/SCSS for variables & nesting, only after confirmation.  
- **PostCSS:** For autoprefixing & modern features, only after confirmation.  
- **CSS frameworks:** Tailwind when is already present on the code

---

## 10. Example Project Structure
```
/styles
  /base
    _reset.css
    _typography.css
  /layout
    _grid.css
    _header.css
    _footer.css
  /components
    _button.css
    _card.css
    _form.css
  /themes
    _dark.css
    _light.css
  main.css
```

---

## Final Notes
This guide should be followed strictly to ensure **consistency, scalability, and accessibility** in all CSS code written.
