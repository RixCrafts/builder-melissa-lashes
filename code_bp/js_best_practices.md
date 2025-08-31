
# JavaScript Best Practices – Comprehensive Guide

This document serves as a **JavaScript best practices guide** for developers and AI coding assistants.  
It ensures maintainability, readability, and performance in web projects.

---

## 1. General Principles
- **Write clean, readable code** – prioritize clarity over cleverness.  
- **Keep functions small and focused** (Single Responsibility Principle).  
- **Use meaningful variable and function names.**  
- **Prefer `const` and `let` over `var`.**  
- **Use strict mode** (`'use strict';`) to enforce safer coding.  

---

## 2. Variables & Constants
- Use `const` for values that never change.  
- Use `let` for variables that need reassignment.  
- Avoid polluting the global scope – wrap in modules/functions.  

```js
const PI = 3.14159;
let counter = 0;
```

---

## 3. Functions & Arrow Functions
- Use arrow functions for concise callbacks, regular functions for methods.  
- Keep functions pure when possible.  
- Default parameters instead of conditionals:  

```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
```

---

## 4. Code Organization
- Organize code into **modules** instead of long files.  
- Use **ES modules (`import/export`)** instead of global scripts.  
- Group related functions together.  

```js
// utils/math.js
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }

// main.js
import { add } from './utils/math.js';
console.log(add(2, 3));
```

---

## 5. Error Handling
- Always use `try...catch` for risky operations.  
- Provide meaningful error messages.  
- Avoid silent failures.  

```js
try {
  JSON.parse("invalid json");
} catch (error) {
  console.error("Parsing error:", error.message);
}
```

---

## 6. Performance Best Practices
- **Debounce and throttle** expensive functions (scroll, resize).  
- Avoid unnecessary DOM manipulations – batch updates.  
- Use `requestAnimationFrame` for animations instead of `setTimeout`.  
- Cache DOM queries instead of repeating.  

---

## 7. Asynchronous Code
- Use **Promises** and **async/await** over callbacks.  
- Handle rejections properly.  

```js
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
```

---

## 8. Security Best Practices
- Escape user input before injecting into HTML.  
- Avoid `eval()` and `Function()` constructors.  
- Use Content Security Policy (CSP) headers.  
- Validate data on client and server.  

---

## 9. Common Pitfalls to Avoid
- Don’t use `==` – always use `===`.  
- Avoid deeply nested callbacks (use async/await).  
- Don’t mutate function arguments.  
- Avoid hardcoding values – use constants/configs.  

---

## 10. Example Project Structure
```
/project
  /src
    index.js
    /utils
      math.js
      dom.js
  /tests
    math.test.js
  package.json
```

---

## Final Notes
This guide enforces **clean, modular, and maintainable JavaScript**.  
It should be followed for all JS code to ensure **consistency, security, and performance**.
