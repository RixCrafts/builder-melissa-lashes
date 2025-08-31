
# TypeScript Best Practices – Comprehensive Guide

This document serves as a **TypeScript best practices guide** for developers and AI coding assistants.  
It ensures type safety, scalability, and maintainability in large applications.

---

## 1. General Principles
- **Always enable strict mode** (`"strict": true` in `tsconfig.json`).  
- **Prefer interfaces over types for object definitions.**  
- **Avoid `any`** – use explicit types or generics.  
- **Use type inference** where possible for cleaner code.  
- **Keep functions small and strongly typed.**  

---

## 2. Variables & Types
- Use `const` and `let` (never `var`).  
- Always annotate complex structures.  

```ts
const username: string = "Alice";
let count: number = 5;

interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}
const user: User = { id: 1, name: "Alice", isAdmin: true };
```

---

## 3. Functions & Generics
- Always type parameters and return values.  
- Use **generics** for reusable functions.  

```ts
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);
```

---

## 4. Interfaces vs Types
- Use **interfaces** for objects and contracts.  
- Use **types** for unions, intersections, and primitives.  

```ts
interface Animal {
  name: string;
  sound(): void;
}

type Status = "active" | "inactive" | "pending";
```

---

## 5. Classes & OOP Best Practices
- Use **access modifiers** (`public`, `private`, `protected`).  
- Use **readonly** for immutable properties.  
- Prefer **composition over inheritance**.  

```ts
class Person {
  readonly id: number;
  constructor(public name: string, id: number) {
    this.id = id;
  }
}
```

---

## 6. Error Handling
- Always type errors in try/catch.  
- Create custom error classes for clarity.  

```ts
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
  }
}
```

---

## 7. Asynchronous Best Practices
- Use `Promise<T>` return types.  
- Always handle rejected promises.  

```ts
async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  return response.json();
}
```

---

## 8. Advanced Type Features
- **Union & Intersection types** for flexibility.  
- **Optional and default parameters** for functions.  
- **Utility types** (`Partial<T>`, `Pick<T>`, `Omit<T>`).  

```ts
type Point = { x: number; y: number };
type Point3D = Point & { z: number };

interface Config {
  debug?: boolean;
}
```

---

## 9. Project Organization
- Separate **types/interfaces** into `types/`.  
- Keep reusable logic in `utils/`.  
- Use index files for exports.  

```
/project
  /src
    index.ts
    /types
      user.ts
    /services
      api.ts
    /utils
      helpers.ts
  tsconfig.json
```

---

## 10. Common Pitfalls to Avoid
- Avoid `any` – use `unknown` if unsure.  
- Avoid mixing JavaScript and TypeScript files.  
- Don’t overuse type assertions (`as Type`).  
- Don’t forget to check for `null` and `undefined`.  

---

## Final Notes
This guide enforces **scalable, type-safe, and maintainable TypeScript**.  
It should be followed for all TS projects to ensure **robustness and clarity**.
