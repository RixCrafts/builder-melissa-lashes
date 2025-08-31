# React Best Practices Guide

A comprehensive guide for writing clean, maintainable, and performant React applications.

## Table of Contents

1. [General Principles](#general-principles)
2. [Project Structure & File Organization](#project-structure--file-organization)
3. [Component Best Practices](#component-best-practices)
4. [Hooks Usage](#hooks-usage)
5. [State Management](#state-management)
6. [Performance Optimization](#performance-optimization)
7. [Accessibility](#accessibility)
8. [Styling Best Practices](#styling-best-practices)
9. [Testing Best Practices](#testing-best-practices)
10. [Common Pitfalls to Avoid](#common-pitfalls-to-avoid)
11. [Example Project Structure](#example-project-structure)
12. [Final Notes](#final-notes)

## General Principles

### Write Declarative Code
React is built around the concept of declarative programming. Focus on describing what your UI should look like for any given state, rather than how to manipulate the DOM.

```jsx
// ❌ Imperative approach
function showMessage(isVisible) {
  const element = document.getElementById('message');
  if (isVisible) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

// ✅ Declarative approach
function Message({ isVisible, children }) {
  return isVisible ? <div>{children}</div> : null;
}
```

### Keep Components Small and Focused
Each component should have a single responsibility. If a component is doing too much, break it down into smaller, composable components.

```jsx
// ❌ Large, multi-responsibility component
function UserDashboard({ user }) {
  return (
    <div>
      <div className="header">
        <img src={user.avatar} alt="Avatar" />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
      <div className="stats">
        <div>Posts: {user.posts.length}</div>
        <div>Followers: {user.followers.length}</div>
      </div>
      <div className="recent-posts">
        {user.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ✅ Broken down into focused components
function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <Avatar src={user.avatar} alt="Avatar" />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

function UserStats({ posts, followers }) {
  return (
    <div className="user-stats">
      <StatItem label="Posts" value={posts.length} />
      <StatItem label="Followers" value={followers.length} />
    </div>
  );
}

function RecentPosts({ posts }) {
  return (
    <div className="recent-posts">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function UserDashboard({ user }) {
  return (
    <div>
      <UserProfile user={user} />
      <UserStats posts={user.posts} followers={user.followers} />
      <RecentPosts posts={user.posts} />
    </div>
  );
}
```

### Use Consistent Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile`, `NavigationMenu`)
- **Files**: PascalCase for component files (e.g., `UserProfile.jsx`)
- **Props**: camelCase (e.g., `isVisible`, `onClick`)
- **Hooks**: start with "use" (e.g., `useAuth`, `useLocalStorage`)
- **Constants**: SCREAMING_SNAKE_CASE (e.g., `API_BASE_URL`)

### Prefer Composition Over Inheritance
React favors composition over inheritance. Use props and children to compose behavior.

```jsx
// ❌ Inheritance pattern
class BaseButton extends React.Component {
  render() {
    return <button className="base-button">{this.props.children}</button>;
  }
}

class PrimaryButton extends BaseButton {
  render() {
    return (
      <button className="base-button primary-button">
        {this.props.children}
      </button>
    );
  }
}

// ✅ Composition pattern
function Button({ variant = 'default', children, ...props }) {
  const className = `button button--${variant}`;
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

// Usage
<Button variant="primary">Click me</Button>
```

## Project Structure & File Organization

### Organize by Feature, Not by File Type
Structure your project around features rather than grouping all components, hooks, or utils together.

```
// ❌ Organized by file type
src/
  components/
    Header.jsx
    UserProfile.jsx
    ProductCard.jsx
  hooks/
    useAuth.js
    useCart.js
  utils/
    api.js
    helpers.js

// ✅ Organized by feature
src/
  features/
    auth/
      components/
        LoginForm.jsx
        UserProfile.jsx
      hooks/
        useAuth.js
      services/
        authApi.js
    products/
      components/
        ProductCard.jsx
        ProductList.jsx
      hooks/
        useProducts.js
      services/
        productApi.js
  shared/
    components/
      Header.jsx
      Button.jsx
    hooks/
      useLocalStorage.js
    utils/
      helpers.js
```

### Use Index Files for Clean Imports
Create index files to provide clean import paths and establish clear public APIs for your modules.

```javascript
// features/auth/index.js
export { LoginForm } from './components/LoginForm';
export { UserProfile } from './components/UserProfile';
export { useAuth } from './hooks/useAuth';

// Usage in other files
import { LoginForm, useAuth } from 'features/auth';
```

### Separate Concerns with Clear Boundaries
- **Components**: UI rendering logic
- **Hooks**: Stateful logic and side effects
- **Services**: API calls and external integrations
- **Utils**: Pure functions and helpers
- **Types**: TypeScript type definitions
- **Constants**: Application constants and configuration

## Component Best Practices

### Prefer Functional Components
Use functional components with hooks instead of class components for new code. They're more concise and easier to test.

```jsx
// ❌ Class component
class UserGreeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTime: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { user } = this.props;
    const { currentTime } = this.state;
    return (
      <div>
        <h1>Hello, {user.name}!</h1>
        <p>Current time: {currentTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

// ✅ Functional component with hooks
function UserGreeting({ user }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <p>Current time: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
}
```

### Define Clear Prop Interfaces
Use PropTypes (or TypeScript) to define clear interfaces for your components.

```jsx
import PropTypes from 'prop-types';

// ✅ With PropTypes
function UserCard({ user, onEdit, onDelete, showActions = true }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      {showActions && (
        <div>
          <button onClick={() => onEdit(user.id)}>Edit</button>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  showActions: PropTypes.bool,
};

// ✅ With TypeScript
interface User {
  id: string;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  showActions?: boolean;
}

function UserCard({ user, onEdit, onDelete, showActions = true }: UserCardProps) {
  // Component implementation
}
```

### Use Default Props Appropriately
Provide default values for optional props to make your components more robust.

```jsx
// ✅ Default props in function signature
function Button({ 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  children,
  ...props 
}) {
  return (
    <button 
      className={`btn btn--${variant} btn--${size}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

// ✅ Or with defaultProps (legacy approach)
Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
};
```

### Handle Props Destructuring Consistently
Be consistent with how you destructure props. Extract what you need and spread the rest when appropriate.

```jsx
// ✅ Clear destructuring with rest props
function Input({ label, error, className, ...inputProps }) {
  return (
    <div className={`input-group ${className || ''}`}>
      {label && <label>{label}</label>}
      <input {...inputProps} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
```

### Avoid Inline Objects and Functions in Render
Creating objects and functions inline can cause unnecessary re-renders.

```jsx
// ❌ Inline objects and functions
function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          style={{ marginBottom: '10px' }} // New object every render
          onClick={() => handleClick(user.id)} // New function every render
        />
      ))}
    </div>
  );
}

// ✅ Define outside render or use useMemo/useCallback
const cardStyle = { marginBottom: '10px' };

function UserList({ users }) {
  const handleClick = useCallback((userId) => {
    // Handle click logic
  }, []);

  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          style={cardStyle}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}
```

## Hooks Usage

### Follow the Rules of Hooks
1. Only call hooks at the top level of your React functions
2. Don't call hooks inside loops, conditions, or nested functions
3. Only call hooks from React function components or custom hooks

```jsx
// ❌ Breaking rules of hooks
function UserProfile({ userId }) {
  if (userId) {
    const user = useUser(userId); // Hook inside condition
    return <div>{user.name}</div>;
  }
  return <div>No user</div>;
}

// ✅ Following rules of hooks
function UserProfile({ userId }) {
  const user = useUser(userId);
  
  if (!userId) {
    return <div>No user</div>;
  }
  
  return <div>{user.name}</div>;
}
```

### Use useEffect Correctly
Understand the dependency array and cleanup patterns.

```jsx
// ✅ Effect with dependencies
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;

    setLoading(true);
    
    const fetchUser = async () => {
      try {
        const userData = await api.getUser(userId);
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]); // Dependency array

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  
  return <div>{user.name}</div>;
}

// ✅ Effect with cleanup
function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // Cleanup function
    return () => clearInterval(interval);
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```

### Optimize with useMemo and useCallback
Use these hooks to optimize performance, but don't overuse them.

```jsx
function ExpensiveComponent({ items, filter, onItemClick }) {
  // ✅ Memoize expensive calculations
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);

  // ✅ Memoize callback functions
  const handleItemClick = useCallback((itemId) => {
    onItemClick(itemId);
    // Additional logic here
  }, [onItemClick]);

  return (
    <div>
      {filteredItems.map(item => (
        <Item 
          key={item.id} 
          item={item} 
          onClick={handleItemClick}
        />
      ))}
    </div>
  );
}
```

### Create Custom Hooks for Reusable Logic
Extract common stateful logic into custom hooks.

```jsx
// ✅ Custom hook for API calls
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// ✅ Custom hook for local storage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

// Usage
function UserPreferences() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { data: user } = useApi('/api/user');

  return (
    <div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      <p>Current theme: {theme}</p>
    </div>
  );
}
```

## State Management

### Start with Local State
Always start with local state using `useState`. Only lift state up or use global state when you have a clear need.

```jsx
// ✅ Local state for component-specific data
function TodoItem({ todo, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleSave = () => {
    onUpdate(todo.id, editValue);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input 
          value={editValue} 
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleSave}
        />
      ) : (
        <span onClick={() => setIsEditing(true)}>{todo.text}</span>
      )}
    </div>
  );
}
```

### Use Context for Deeply Nested Props
When you need to pass data through many component layers, consider using React Context.

```jsx
// ✅ Theme context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const value = {
    theme,
    setTheme,
    toggleTheme: () => setTheme(prev => prev === 'light' ? 'dark' : 'light')
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for using theme context
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Usage
function Button({ children }) {
  const { theme } = useTheme();
  return (
    <button className={`btn btn--${theme}`}>
      {children}
    </button>
  );
}
```

### Consider State Management Libraries for Complex Apps
For complex applications with intricate state interactions, consider libraries like Redux Toolkit or Zustand.

```jsx
// ✅ Zustand example (simpler than Redux)
import { create } from 'zustand';

const useStore = create((set, get) => ({
  user: null,
  isLoading: false,
  error: null,
  
  fetchUser: async (userId) => {
    set({ isLoading: true, error: null });
    try {
      const user = await api.getUser(userId);
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  
  updateUser: (updates) => set(state => ({
    user: state.user ? { ...state.user, ...updates } : null
  })),
  
  clearUser: () => set({ user: null, error: null })
}));

// Usage
function UserProfile() {
  const { user, isLoading, error, fetchUser } = useStore();
  
  useEffect(() => {
    fetchUser('123');
  }, [fetchUser]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>No user found</div>;
  
  return <div>Welcome, {user.name}!</div>;
}
```

### Normalize Complex State
For complex nested data, consider normalizing your state structure.

```jsx
// ❌ Nested state structure
const [state, setState] = useState({
  users: [
    { id: 1, name: 'John', posts: [{ id: 1, title: 'Post 1' }] },
    { id: 2, name: 'Jane', posts: [{ id: 2, title: 'Post 2' }] }
  ]
});

// ✅ Normalized state structure
const [state, setState] = useState({
  users: {
    byId: {
      1: { id: 1, name: 'John', postIds: [1] },
      2: { id: 2, name: 'Jane', postIds: [2] }
    },
    allIds: [1, 2]
  },
  posts: {
    byId: {
      1: { id: 1, title: 'Post 1', userId: 1 },
      2: { id: 2, title: 'Post 2', userId: 2 }
    },
    allIds: [1, 2]
  }
});
```

## Performance Optimization

### Use React.memo for Expensive Components
Wrap components in `React.memo` to prevent unnecessary re-renders when props haven't changed.

```jsx
// ✅ Memoized component
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data, onAction }) {
  // Expensive rendering logic here
  return (
    <div>
      {data.map(item => (
        <ComplexItem key={item.id} item={item} onAction={onAction} />
      ))}
    </div>
  );
});

// ✅ With custom comparison function
const UserCard = React.memo(function UserCard({ user, isSelected }) {
  return (
    <div className={`user-card ${isSelected ? 'selected' : ''}`}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison logic
  return prevProps.user.id === nextProps.user.id && 
         prevProps.isSelected === nextProps.isSelected;
});
```

### Implement Code Splitting and Lazy Loading
Use `React.lazy` and `Suspense` to split your code and load components only when needed.

```jsx
// ✅ Lazy loaded components
const Dashboard = lazy(() => import('./Dashboard'));
const UserProfile = lazy(() => import('./UserProfile'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

// ✅ Lazy loading with error boundary
const LazyComponent = lazy(() => 
  import('./HeavyComponent').catch(error => {
    console.error('Failed to load component:', error);
    return { default: () => <div>Failed to load component</div> };
  })
);
```

### Optimize Lists with Virtualization
For large lists, consider using virtualization libraries like `react-window`.

```jsx
// ✅ Virtualized list
import { FixedSizeList as List } from 'react-window';

const Row = ({ index, style, data }) => (
  <div style={style}>
    <UserCard user={data[index]} />
  </div>
);

function VirtualizedUserList({ users }) {
  return (
    <List
      height={400}
      itemCount={users.length}
      itemSize={100}
      itemData={users}
    >
      {Row}
    </List>
  );
}
```

### Debounce Expensive Operations
Debounce operations like API calls or expensive computations.

```jsx
// ✅ Custom debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function SearchInput({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

## Accessibility

### Use Semantic HTML Elements
Choose the right HTML elements for their semantic meaning, not their appearance.

```jsx
// ❌ Non-semantic structure
function Navigation() {
  return (
    <div className="nav">
      <div className="nav-item" onClick={() => navigate('/home')}>Home</div>
      <div className="nav-item" onClick={() => navigate('/about')}>About</div>
    </div>
  );
}

// ✅ Semantic structure
function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}
```

### Implement Proper ARIA Attributes
Use ARIA attributes to provide additional context for screen readers.

```jsx
// ✅ Accessible modal
function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef();

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="modal"
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header">
          <h2 id="modal-title">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="modal-close"
          >
            ×
          </button>
        </header>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}

// ✅ Accessible form
function ContactForm() {
  const [errors, setErrors] = useState({});

  return (
    <form noValidate>
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          type="text"
          required
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={errors.name ? "true" : "false"}
        />
        {errors.name && (
          <span id="name-error" className="error" role="alert">
            {errors.name}
          </span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Manage Focus Properly
Ensure keyboard users can navigate your application effectively.

```jsx
// ✅ Focus management
function Dropdown({ isOpen, onToggle, options, onSelect }) {
  const dropdownRef = useRef();
  const [focusedIndex, setFocusedIndex] = useState(-1);

  useEffect(() => {
    if (isOpen) {
      setFocusedIndex(0);
    } else {
      setFocusedIndex(-1);
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < options.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => 
          prev > 0 ? prev - 1 : options.length - 1
        );
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusedIndex >= 0) {
          onSelect(options[focusedIndex]);
        }
        break;
      case 'Escape':
        onToggle();
        break;
    }
  };

  return (
    <div className="dropdown" onKeyDown={handleKeyDown}>
      <button
        onClick={onToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        Select option
      </button>
      {isOpen && (
        <ul role="listbox" ref={dropdownRef}>
          {options.map((option, index) => (
            <li
              key={option.id}
              role="option"
              aria-selected={index === focusedIndex}
              className={index === focusedIndex ? 'focused' : ''}
              onClick={() => onSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### Provide Alternative Text for Images
Always include meaningful alt text for images.

```jsx
// ✅ Proper image accessibility
function UserAvatar({ user, size = 'medium' }) {
  return (
    <img
      src={user.avatar}
      alt={`${user.name}'s profile picture`}
      className={`avatar avatar--${size}`}
      onError={(e) => {
        e.target.src = '/default-avatar.png';
        e.target.alt = `Default avatar for ${user.name}`;
      }}
    />
  );
}

// ✅ Decorative images
function DecorativeIcon() {
  return (
    <img 
      src="/decorative-pattern.svg" 
      alt="" 
      role="presentation" 
    />
  );
}
```

## Styling Best Practices

### Choose a Consistent Styling Approach
Pick one primary styling method and stick to it throughout your project.

#### CSS Modules
```jsx
// ✅ CSS Modules
import styles from './Button.module.css';

function Button({ variant = 'primary', children, ...props }) {
  return (
    <button 
      className={`${styles.button} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

#### Styled Components
```jsx
// ✅ Styled Components
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${props => props.size === 'large' ? '12px 24px' : '8px 16px'};
  background-color: ${props => props.variant === 'primary' ? '#007bff' : '#6c757d'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
```

#### Tailwind CSS
```jsx
// ✅ Tailwind CSS
function Button({ variant = 'primary', size = 'medium', children, ...props }) {
  const baseClasses = 'font-medium rounded focus:outline-none focus:ring-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };
  
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };

  const className = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
```

### Create a Design System
Establish consistent design tokens and reusable components.

```jsx
// ✅ Design tokens
export const theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      900: '#1e3a8a'
    },
    gray: {
      100: '#f3f4f6',
      500: '#6b7280',
      900: '#111827'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem'
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem'
    }
  }
};

// ✅ Base component
function Card({ children, padding = 'md', className = '', ...props }) {
  const paddingClass = {
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6'
  };

  return (
    <div 
      className={`bg-white rounded-lg shadow-md ${paddingClass[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
```

### Avoid Inline Styles for Complex Styling
Use CSS classes or styled-components for maintainable styling.

```jsx
// ❌ Complex inline styles
function ComplexComponent({ isActive, theme }) {
  return (
    <div style={{
      backgroundColor: isActive ? '#007bff' : '#f8f9fa',
      color: isActive ? 'white' : '#333',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: isActive ? '0 4px 8px rgba(0,123,255,0.3)' : 'none',
      transform: isActive ? 'translateY(-2px)' : 'none',
      transition: 'all 0.2s ease-in-out'
    }}>
      Content
    </div>
  );
}

// ✅ CSS classes or styled components
import styles from './ComplexComponent.module.css';

function ComplexComponent({ isActive }) {
  return (
    <div className={`${styles.component} ${isActive ? styles.active : ''}`}>
      Content
    </div>
  );
}

/* ComplexComponent.module.css */
.component {
  padding: 16px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  background-color: #f8f9fa;
  color: #333;
}

.active {
  background-color: #007bff;
  color: white;
  box-shadow: 0 4px 8px rgba(0,123,255,0.3);
  transform: translateY(-2px);
}
```

### Use CSS Custom Properties for Theming
Leverage CSS custom properties for dynamic theming.

```jsx
// ✅ CSS custom properties for theming
function ThemeProvider({ theme, children }) {
  const cssVariables = {
    '--color-primary': theme.colors.primary,
    '--color-secondary': theme.colors.secondary,
    '--font-family': theme.fonts.primary,
    '--border-radius': theme.borderRadius
  };

  return (
    <div style={cssVariables} className="theme-provider">
      {children}
    </div>
  );
}

/* CSS */
.themed-button {
  background-color: var(--color-primary);
  font-family: var(--font-family);
  border-radius: var(--border-radius);
}
```

## Testing Best Practices

### Write Tests at Different Levels
Follow the testing pyramid: more unit tests, some integration tests, fewer E2E tests.

#### Unit Tests
```jsx
// ✅ Unit test example with React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('applies correct variant styles', () => {
    render(<Button variant="secondary">Click me</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn--secondary');
  });
});
```

#### Integration Tests
```jsx
// ✅ Integration test example
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserForm } from './UserForm';

// Mock API
jest.mock('../services/api', () => ({
  createUser: jest.fn()
}));

describe('UserForm Integration', () => {
  test('submits form with user data', async () => {
    const mockCreateUser = require('../services/api').createUser;
    mockCreateUser.mockResolvedValue({ id: 1, name: 'John Doe' });

    const onSuccess = jest.fn();
    render(<UserForm onSuccess={onSuccess} />);

    // Fill out form
    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    await userEvent.type(screen.getByLabelText(/email/i), 'john@example.com');
    
    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    // Wait for API call and success callback
    await waitFor(() => {
      expect(mockCreateUser).toHaveBeenCalledWith({
        name: 'John Doe',
        email: 'john@example.com'
      });
    });

    expect(onSuccess).toHaveBeenCalledWith({ id: 1, name: 'John Doe' });
  });

  test('displays error message on API failure', async () => {
    const mockCreateUser = require('../services/api').createUser;
    mockCreateUser.mockRejectedValue(new Error('API Error'));

    render(<UserForm />);

    await userEvent.type(screen.getByLabelText(/name/i), 'John Doe');
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/error creating user/i)).toBeInTheDocument();
    });
  });
});
```

#### Custom Hook Tests
```jsx
// ✅ Testing custom hooks
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('initializes with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test('initializes with provided value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  test('increments count', () => {
    const { result } = renderHook(() => useCounter());
    
    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test('decrements count', () => {
    const { result } = renderHook(() => useCounter(5));
    
    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(4);
  });
});
```

### Test User Behavior, Not Implementation
Focus on testing what users can see and do, not internal implementation details.

```jsx
// ❌ Testing implementation details
test('calls setState with correct value', () => {
  const setState = jest.fn();
  jest.spyOn(React, 'useState').mockReturnValue(['', setState]);
  
  render(<SearchInput />);
  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
  
  expect(setState).toHaveBeenCalledWith('test');
});

// ✅ Testing user behavior
test('updates search input when user types', async () => {
  const user = userEvent.setup();
  render(<SearchInput />);
  
  const input = screen.getByRole('textbox');
  await user.type(input, 'test query');
  
  expect(input).toHaveValue('test query');
});

test('calls onSearch with debounced value', async () => {
  const onSearch = jest.fn();
  render(<SearchInput onSearch={onSearch} />);
  
  const input = screen.getByRole('textbox');
  await userEvent.type(input, 'test');
  
  // Wait for debounce
  await waitFor(() => {
    expect(onSearch).toHaveBeenCalledWith('test');
  }, { timeout: 500 });
});
```

### Use Testing Utilities and Helpers
Create reusable testing utilities to reduce boilerplate.

```jsx
// ✅ Test utilities
// test-utils.jsx
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../contexts/ThemeContext';

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };

// ✅ Test helpers
export const createMockUser = (overrides = {}) => ({
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user',
  ...overrides
});

export const waitForLoadingToFinish = () =>
  waitFor(() => {
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });
```

## Common Pitfalls to Avoid

### Don't Mutate State Directly
Always create new state objects instead of mutating existing ones.

```jsx
// ❌ Mutating state directly
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    todos.push({ id: Date.now(), text }); // Mutation!
    setTodos(todos);
  };

  const toggleTodo = (id) => {
    const todo = todos.find(t => t.id === id);
    todo.completed = !todo.completed; // Mutation!
    setTodos(todos);
  };

  // Component JSX...
}

// ✅ Creating new state
function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  // Component JSX...
}
```

### Avoid Stale Closures in useEffect
Be careful with dependencies in useEffect to avoid stale closures.

```jsx
// ❌ Stale closure
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1); // This will always use the initial count (0)
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array

  return <div>{count}</div>;
}

// ✅ Functional update
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Uses current count
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Still empty, but now it works correctly

  return <div>{count}</div>;
}

// ✅ Include dependencies
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]); // Include count in dependencies

  return <div>{count}</div>;
}
```

### Don't Use Array Index as Key in Dynamic Lists
Using array indexes as keys can cause issues when the list changes.

```jsx
// ❌ Using index as key
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} /> // Problems when list changes
      ))}
    </ul>
  );
}

// ✅ Using unique, stable keys
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} /> // Unique, stable key
      ))}
    </ul>
  );
}
```

### Avoid Excessive Re-renders
Be mindful of what causes components to re-render.

```jsx
// ❌ Causes unnecessary re-renders
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <ExpensiveChild 
        data={{ value: 'static' }} // New object every render
        onClick={() => console.log('clicked')} // New function every render
      />
    </div>
  );
}

// ✅ Optimized version
const staticData = { value: 'static' };

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      <ExpensiveChild 
        data={staticData}
        onClick={handleClick}
      />
    </div>
  );
}

const ExpensiveChild = React.memo(function ExpensiveChild({ data, onClick }) {
  // Expensive rendering logic
  return <div onClick={onClick}>{data.value}</div>;
});
```

### Don't Forget Cleanup in useEffect
Always clean up subscriptions, timers, and event listeners.

```jsx
// ❌ Missing cleanup
function WindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    // Missing cleanup - memory leak!
  }, []);

  return <div>{size.width} x {size.height}</div>;
}

// ✅ Proper cleanup
function WindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div>{size.width} x {size.height}</div>;
}
```

### Avoid Prop Drilling
Don't pass props through many component layers unnecessarily.

```jsx
// ❌ Prop drilling
function App() {
  const [user, setUser] = useState(null);
  
  return <Dashboard user={user} onUserUpdate={setUser} />;
}

function Dashboard({ user, onUserUpdate }) {
  return (
    <div>
      <Sidebar user={user} />
      <MainContent user={user} onUserUpdate={onUserUpdate} />
    </div>
  );
}

function MainContent({ user, onUserUpdate }) {
  return (
    <div>
      <Header user={user} />
      <ProfileSection user={user} onUserUpdate={onUserUpdate} />
    </div>
  );
}

// ✅ Using Context to avoid prop drilling
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <MainContent />
    </div>
  );
}

function ProfileSection() {
  const { user, setUser } = useContext(UserContext);
  
  // Use user and setUser directly
  return <div>{user?.name}</div>;
}
```

## Example Project Structure

```
my-react-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/           # Shared/common components
│   │   ├── ui/              # Basic UI components
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Button.test.jsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.js
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   └── index.js
│   │   ├── layout/          # Layout components
│   │   │   ├── Header/
│   │   │   ├── Sidebar/
│   │   │   ├── Footer/
│   │   │   └── index.js
│   │   └── index.js
│   ├── features/            # Feature-based organization
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   ├── LoginForm/
│   │   │   │   ├── SignupForm/
│   │   │   │   └── UserProfile/
│   │   │   ├── hooks/
│   │   │   │   ├── useAuth.js
│   │   │   │   └── useAuthForm.js
│   │   │   ├── services/
│   │   │   │   └── authApi.js
│   │   │   ├── types/
│   │   │   │   └── auth.types.ts
│   │   │   └── index.js
│   │   ├── dashboard/
│   │   ├── products/
│   │   └── orders/
│   ├── hooks/               # Shared custom hooks
│   │   ├── useApi.js
│   │   ├── useLocalStorage.js
│   │   ├── useDebounce.js
│   │   └── index.js
│   ├── services/            # API and external services
│   │   ├── api.js
│   │   ├── httpClient.js
│   │   └── index.js
│   ├── utils/               # Utility functions
│   │   ├── helpers.js
│   │   ├── formatters.js
│   │   ├── validators.js
│   │   └── index.js
│   ├── contexts/            # React contexts
│   │   ├── AuthContext.js
│   │   ├── ThemeContext.js
│   │   └── index.js
│   ├── styles/              # Global styles
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── components.css
│   ├── constants/           # Application constants
│   │   ├── api.js
│   │   ├── routes.js
│   │   └── index.js
│   ├── types/               # TypeScript type definitions
│   │   ├── api.types.ts
│   │   ├── common.types.ts
│   │   └── index.ts
│   ├── __tests__/          # Global test utilities
│   │   ├── test-utils.jsx
│   │   └── setupTests.js
│   ├── App.jsx
│   ├── App.test.jsx
│   ├── index.js
│   └── index.css
├── .env
├── .env.local
├── .gitignore
├── package.json
├── README.md
└── jsconfig.json (or tsconfig.json)
```

### Key Structure Principles

1. **Feature-based organization**: Group related components, hooks, and services together
2. **Shared components**: Common UI components that can be reused across features
3. **Clear separation of concerns**: Components, hooks, services, and utilities are clearly separated
4. **Index files**: Provide clean import paths and establish public APIs
5. **Test co-location**: Tests live close to the code they test
6. **Type safety**: TypeScript types are organized and easily accessible

## Final Notes

### Keep Learning and Evolving
React and its ecosystem evolve rapidly. Stay updated with:

- **React official documentation**: Always the best source for latest patterns
- **React RFC (Request for Comments)**: Upcoming features and changes
- **Community best practices**: Follow React maintainers and community leaders
- **Testing practices**: Keep up with React Testing Library and Jest updates
- **Performance tools**: React DevTools, Profiler, and performance monitoring

### Code Review Checklist
When reviewing React code, check for:

- [ ] Components have clear, single responsibilities
- [ ] Props are properly typed and validated
- [ ] State is managed at the appropriate level
- [ ] Effects have proper dependencies and cleanup
- [ ] Performance optimizations are applied where needed
- [ ] Accessibility standards are followed
- [ ] Tests cover important user flows
- [ ] Code is readable and well-documented

### Performance Monitoring
Consider implementing performance monitoring:

```jsx
// ✅ Performance monitoring
import { Profiler } from 'react';

function onRenderCallback(id, phase, actualDuration) {
  // Send performance data to analytics
  analytics.track('component-render', {
    componentId: id,
    phase,
    duration: actualDuration
  });
}

function App() {
  return (
    <Profiler id="App" onRender={onRenderCallback}>
      <Router>
        <Routes>
          {/* Your routes */}
        </Routes>
      </Router>
    </Profiler>
  );
}
```

### Documentation Standards
Document your components and hooks:

```jsx
/**
 * UserCard displays user information in a card format
 * 
 * @param {Object} user - The user object
 * @param {string} user.id - Unique user identifier
 * @param {string} user.name - User's display name
 * @param {string} user.email - User's email address
 * @param {boolean} showActions - Whether to show edit/delete actions
 * @param {Function} onEdit - Callback when edit button is clicked
 * @param {Function} onDelete - Callback when delete button is clicked
 * 
 * @example
 * <UserCard
 *   user={{ id: '1', name: 'John', email: 'john@example.com' }}
 *   showActions={true}
 *   onEdit={(id) => console.log('Edit user', id)}
 *   onDelete={(id) => console.log('Delete user', id)}
 * />
 */
function UserCard({ user, showActions = false, onEdit, onDelete }) {
  // Component implementation
}
```

Remember: These are guidelines, not absolute rules. Adapt them to your project's specific needs and constraints. The goal is to write code that is maintainable, performant, and accessible while delivering great user experiences.