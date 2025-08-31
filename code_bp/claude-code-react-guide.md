# React Guidelines for Claude Code

## Core Principles

1. **Use functional components with hooks** - No class components
2. **Organize by feature, not file type** - Group related components, hooks, services together
3. **Keep components small and focused** - Single responsibility principle
4. **Use TypeScript when available** - Better type safety and IntelliSense

## Component Structure

```jsx
// ✅ Preferred pattern
function UserCard({ user, onEdit, onDelete, showActions = true }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleEdit = useCallback(() => {
    onEdit(user.id);
  }, [user.id, onEdit]);

  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {showActions && (
        <div>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}
```

## File Organization

```
src/
├── components/ui/           # Shared UI components (Button, Input, Modal)
├── features/               # Feature-based modules
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
├── hooks/                  # Shared custom hooks
├── services/               # API calls
├── utils/                  # Pure helper functions
└── types/                  # TypeScript types
```

## Hooks Best Practices

### useState
```jsx
// ✅ Functional updates for state that depends on previous value
setCount(prevCount => prevCount + 1);

// ✅ Initialize with function for expensive calculations
const [data, setData] = useState(() => expensiveCalculation());
```

### useEffect
```jsx
// ✅ Always include dependencies
useEffect(() => {
  fetchUser(userId);
}, [userId]);

// ✅ Cleanup subscriptions/timers
useEffect(() => {
  const timer = setInterval(() => setCount(c => c + 1), 1000);
  return () => clearInterval(timer);
}, []);
```

### Custom Hooks
```jsx
// ✅ Extract reusable logic
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch logic
  }, [url]);

  return { data, loading, error };
}
```

## Performance Patterns

```jsx
// ✅ React.memo for expensive components
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  return <div>{/* expensive rendering */}</div>;
});

// ✅ useCallback for functions passed as props
const handleClick = useCallback((id) => {
  onItemClick(id);
}, [onItemClick]);

// ✅ useMemo for expensive calculations
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.name.localeCompare(b.name));
}, [items]);
```

## State Management Rules

1. **Start with local state** - Use `useState` first
2. **Lift state up** only when multiple components need it
3. **Use Context** for deeply nested props (theme, auth)
4. **Consider external libraries** (Zustand, Redux Toolkit) for complex apps

```jsx
// ✅ Context pattern
const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
```

## Common Anti-patterns to Avoid

```jsx
// ❌ Don't mutate state directly
todos.push(newTodo); setTodos(todos);
// ✅ Create new arrays/objects
setTodos(prev => [...prev, newTodo]);

// ❌ Don't use index as key in dynamic lists
{items.map((item, index) => <Item key={index} />)}
// ✅ Use unique, stable keys
{items.map(item => <Item key={item.id} />)}

// ❌ Don't create objects/functions in render
<Component style={{ margin: 10 }} onClick={() => handler()} />
// ✅ Define outside or use useMemo/useCallback
<Component style={styles} onClick={memoizedHandler} />
```

## Naming Conventions

- **Components**: PascalCase (`UserProfile`)
- **Files**: PascalCase for components (`UserProfile.jsx`)
- **Props/variables**: camelCase (`isVisible`, `onClick`)
- **Custom hooks**: start with "use" (`useAuth`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_BASE_URL`)

## Accessibility Essentials

```jsx
// ✅ Use semantic HTML
<nav>
  <ul>
    <li><Link to="/home">Home</Link></li>
  </ul>
</nav>

// ✅ Add ARIA labels where needed
<button aria-label="Close modal" onClick={onClose}>×</button>

// ✅ Proper form labels
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

## Error Handling

```jsx
// ✅ Error boundaries for component trees
function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) return <div>Something went wrong</div>;
  return children;
}

// ✅ Handle async errors in components
useEffect(() => {
  fetchData().catch(error => {
    console.error('Failed to fetch:', error);
    setError(error.message);
  });
}, []);
```

## Testing Priorities

1. **Test user behavior, not implementation**
2. **Use React Testing Library patterns**
3. **Test custom hooks with renderHook**
4. **Mock API calls and external dependencies**

```jsx
// ✅ Test user interactions
test('submits form when valid', async () => {
  render(<ContactForm />);
  await user.type(screen.getByLabelText(/name/i), 'John');
  await user.click(screen.getByRole('button', { name: /submit/i }));
  expect(screen.getByText(/success/i)).toBeInTheDocument();
});
```

## Quick Checklist for New Components

- [ ] Single responsibility - does one thing well
- [ ] Proper prop destructuring with defaults
- [ ] useCallback for functions passed to children
- [ ] useMemo only for expensive calculations
- [ ] Proper dependency arrays in useEffect
- [ ] Cleanup in useEffect when needed
- [ ] Semantic HTML elements
- [ ] Unique keys for list items
- [ ] TypeScript interfaces (if using TS)

## When to Break These Rules

- **Performance critical sections** - May need more aggressive optimization
- **Legacy code integration** - Gradual migration might require compromises
- **Third-party library requirements** - Some libraries may dictate patterns
- **Team preferences** - Adapt to existing codebase conventions

Remember: These are guidelines to write maintainable, performant React code. Adapt based on project needs and team standards.