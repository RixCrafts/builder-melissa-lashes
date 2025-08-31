
# HTML Best Practices – Comprehensive Guide

This document serves as an **HTML best practices guide** for developers and AI coding assistants.  
It ensures semantic correctness, accessibility, and maintainability in web projects.

---

## 1. General Principles
- **Use semantic HTML whenever possible** (e.g., `<header>`, `<main>`, `<article>` instead of `<div>` everywhere).
- **Keep markup clean and minimal** – avoid unnecessary wrappers and empty elements.
- **Validate HTML** with [W3C Validator](https://validator.w3.org/).
- **Use lowercase for tags and attributes.**
- **Always close tags properly.**

---

## 2. Document Structure
A proper HTML5 document should include:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
  </head>
  <body>
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
  </body>
</html>
```

### Best Practices:
- **Always set `lang` attribute** for accessibility and SEO (`<html lang="en">`).
- **Always include `meta viewport`** for responsive design.
- **Use descriptive and unique `<title>` for each page.**
- **Use `<main>` only once per page.**

---

## 3. Semantic Elements
- **Headings (`<h1>`–`<h6>`)** should be hierarchical (don’t skip levels).
- **Use `<section>` and `<article>`** for structuring content.
- **Use `<nav>` for navigation menus.**
- **Use `<aside>` for complementary content.**
- **Use `<figure>` and `<figcaption>` for images with captions.**
- **Avoid using `<div>` and `<span>` unless semantically necessary.**

---

## 4. Accessibility Best Practices
- **Always provide `alt` text** for images:
  ```html
  <img src="logo.png" alt="Company logo">
  ```
- **Label form elements properly:**
  ```html
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  ```
- **Ensure keyboard navigation works** (don’t remove focus states).
- **Use ARIA roles sparingly** – only when native HTML doesn’t cover functionality.

---

## 5. Forms Best Practices
- **Group related inputs with `<fieldset>` and `<legend>`.**
- **Use appropriate input types** (`email`, `tel`, `url`, `number`, `date`).
- **Use `required`, `min`, `max`, and `pattern` for validation.**
- **Place submit buttons inside `<form>`.**

Example:
```html
<form action="/submit" method="POST">
  <fieldset>
    <legend>Contact Information</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </fieldset>
  <button type="submit">Submit</button>
</form>
```

---

## 6. Performance Best Practices
- **Minimize inline styles/scripts.**  
- **Load scripts at the bottom or use `defer`.**
- **Use `<link rel="preload">` for critical assets.**
- **Optimize images** (use modern formats like WebP/AVIF).  
- **Avoid unnecessary attributes** (e.g., `type="text/javascript"` in HTML5 is redundant).

---

## 7. SEO Best Practices
- **Use only one `<h1>` per page.**
- **Include meta descriptions:**
  ```html
  <meta name="description" content="High-quality web development services.">
  ```
- **Use descriptive link text** (`<a href="/services">Our Services</a>` instead of "Click here").
- **Use structured data (JSON-LD)** when applicable.

---

## 8. Common Pitfalls to Avoid
- Avoid using `<br>` for spacing – use CSS margins/padding instead.  
- Don’t use tables for layout – only for tabular data.  
- Don’t leave empty `alt=""` unless decorative.  
- Avoid inline event handlers (`onclick="..."`). Use external JS.  
- Don’t nest interactive elements (e.g., button inside a link).

---

## 9. Example Project Structure
```
/project
  index.html
  about.html
  contact.html
  /assets
    /css
      styles.css
    /js
      scripts.js
    /images
      logo.png
```

---

## 10. Final Notes
This guide enforces **clean, semantic, and accessible HTML**.  
It should be used as a foundation for all projects to maintain **consistency, scalability, and SEO friendliness**.
