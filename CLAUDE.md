# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
pnpm dev          # Start development server (client + server on port 8080)
pnpm build        # Production build (builds both client and server)
pnpm build:client # Build client only (outputs to dist/spa)
pnpm build:server # Build server only (outputs to dist/server)
pnpm start        # Start production server
pnpm test         # Run Vitest tests
pnpm typecheck    # TypeScript validation
pnpm format.fix   # Format code with Prettier
```

## Architecture Overview

This is a full-stack React application with integrated Express server using the "Fusion Starter" template. Key architectural decisions:

### Project Structure
- **client/**: React SPA frontend with TypeScript
  - `pages/`: Route components (Index.tsx = home page)
  - `components/ui/`: Pre-built Radix UI component library
  - `App.tsx`: Main app entry with routing setup
  - `global.css`: TailwindCSS theme and global styles
- **server/**: Express API backend
  - `index.ts`: Main server setup with route definitions
  - `routes/`: API handlers
  - `node-build.ts`: Production server entry point
- **shared/**: Shared TypeScript interfaces between client and server

### Key Technologies
- **Frontend**: React 18 + React Router 6 (SPA mode) + TypeScript + Vite
- **Backend**: Express server integrated with Vite dev server
- **Styling**: TailwindCSS 3 + Radix UI + custom beauty salon color palette
- **Testing**: Vitest
- **Package Manager**: pnpm (required - configured in .npmrc)

### Development Setup
- Single-port development (8080) with Vite + Express integration
- Hot reload for both client and server code
- TypeScript path aliases: `@/*` for client, `@shared/*` for shared

### API Routes
- All API endpoints are prefixed with `/api/`
- Example routes: `/api/ping`, `/api/demo`
- Use shared TypeScript interfaces from `shared/api.ts` for type safety

### Styling System
- Uses TailwindCSS with custom beauty salon theme colors (pink, blue, neutral palettes)
- Custom fonts: Heebo (sans-serif), Noto Serif (serif)
- `cn()` utility function combines clsx + tailwind-merge for conditional classes
- Dark mode support via class strategy

## Development Best Practices

This project follows comprehensive best practices guidelines located in `code_bp/`. Here are the key principles:

### React Best Practices
- **Use functional components with hooks** - No class components
- **Keep components small and focused** - Single responsibility principle
- **Organize by feature, not file type** - Group related components, hooks, services together
- **Use React.memo for expensive components** to prevent unnecessary re-renders
- **Use useCallback for functions passed as props** to child components
- **Use useMemo for expensive calculations** only when necessary
- **Extract reusable logic into custom hooks** (prefix with "use")
- **Follow proper dependency arrays** in useEffect and avoid stale closures
- **Never mutate state directly** - always create new objects/arrays
- **Use unique, stable keys** for dynamic lists (avoid array indices)

### TypeScript Best Practices
- **Always enable strict mode** in tsconfig.json
- **Prefer interfaces over types** for object definitions
- **Avoid `any`** - use explicit types, `unknown`, or generics
- **Use type inference** where possible for cleaner code
- **Always type function parameters and return values**
- **Use utility types** (`Partial<T>`, `Pick<T>`, `Omit<T>`) when appropriate
- **Create custom error classes** for better error handling
- **Separate types/interfaces** into dedicated files when they grow large

### CSS/Styling Best Practices
- **Follow BEM methodology** for class naming when not using TailwindCSS
- **Use TailwindCSS utility classes** as the primary styling method
- **Create design tokens** for consistent colors, spacing, typography
- **Mobile-first responsive design** approach
- **Ensure WCAG accessibility compliance** (sufficient color contrast, focus states)
- **Respect user preferences** (prefers-reduced-motion, prefers-color-scheme)
- **Group CSS properties logically**: layout → box model → aesthetics
- **Use CSS custom properties** for dynamic theming values

### JavaScript/General Best Practices
- **Use ES6+ features**: const/let, arrow functions, destructuring, modules
- **Keep functions small and pure** when possible
- **Use meaningful variable and function names** that describe purpose
- **Implement proper error handling** with try/catch blocks
- **Use async/await** instead of promise chains
- **Avoid deep nesting** - extract complex logic into separate functions
- **Use ES modules** (import/export) for code organization
- **Validate user input** and sanitize data before processing

### HTML/Accessibility Best Practices
- **Use semantic HTML elements** (header, main, article, section, nav, aside)
- **Maintain proper heading hierarchy** (h1 → h6, don't skip levels)
- **Provide meaningful alt text** for all images
- **Label form elements properly** with associated labels
- **Ensure keyboard navigation** works for all interactive elements
- **Use ARIA attributes sparingly** - only when native HTML isn't sufficient
- **Include lang attribute** on html element for screen readers

### Component Development Guidelines
- **Start with local state** using useState before considering global state
- **Lift state up** only when multiple components need shared data
- **Use Context** for deeply nested props (theme, auth, user preferences)
- **Define clear prop interfaces** with TypeScript or PropTypes
- **Provide default props** for optional parameters
- **Handle loading and error states** appropriately in UI
- **Write components that are easy to test** (avoid implementation details)

### Performance Best Practices
- **Lazy load components** with React.lazy and Suspense for code splitting
- **Debounce expensive operations** like search inputs or API calls
- **Optimize images** and use modern formats (WebP, AVIF)
- **Minimize bundle size** by importing only what you need
- **Use virtualization** for large lists (react-window)
- **Cache API responses** and implement proper cache invalidation
- **Monitor Core Web Vitals** and performance metrics

### Testing Strategy
- **Write tests at different levels**: unit tests, integration tests, e2e tests
- **Test user behavior, not implementation details**
- **Use React Testing Library** patterns for component testing
- **Create reusable test utilities** and helpers
- **Mock external dependencies** and API calls
- **Test custom hooks** with renderHook from testing library
- **Focus on critical user paths** and edge cases

### Code Organization Patterns
- **Feature-based structure**: Group related files together
- **Separate concerns**: components, hooks, services, utils, types
- **Use index files** for clean imports and public APIs
- **Keep shared components** in dedicated ui/ folder
- **Create utility functions** for common operations
- **Maintain consistent file naming** conventions throughout project

## Learning-Focused Development

When making changes to this codebase, Claude Code should:

### 1. Explain the "Why" Behind Code Changes
Before implementing changes, explain:
- **Problem being solved**: What issue are we addressing?
- **Approach chosen**: Why this solution over alternatives?
- **Trade-offs considered**: What are the pros/cons of this approach?
- **Impact on codebase**: How does this change affect other parts of the system?

### 2. Educational Code Comments
When writing code, include educational comments that explain:
- **Complex business logic**: Why certain decisions were made
- **Performance optimizations**: What problem they solve
- **Design patterns used**: How and why they're implemented
- **Security considerations**: What threats are being mitigated

### 3. Progressive Learning Examples
When introducing new concepts:
- **Start simple**: Show basic implementation first
- **Build complexity gradually**: Add features incrementally
- **Explain each step**: Why each addition is necessary
- **Show common pitfalls**: What to avoid and why

### 4. Real-World Context
Connect code changes to:
- **User experience impact**: How changes affect end users
- **Business value**: Why this work matters
- **Technical debt**: How changes improve or impact maintainability
- **Scalability considerations**: How solution handles growth

### 5. Knowledge Transfer Patterns
- **Document decision rationale** in commit messages
- **Create examples** for complex implementations
- **Reference best practices** from code_bp/ when applicable
- **Suggest follow-up learning** resources when relevant

### Code Quality Checklist
Before completing any change, ensure:
- [ ] Code follows project's best practices (from code_bp/)
- [ ] TypeScript types are properly defined and used
- [ ] Components have single responsibilities
- [ ] Error handling is implemented appropriately  
- [ ] Accessibility standards are maintained
- [ ] Performance implications are considered
- [ ] Tests cover new functionality
- [ ] Code is self-documenting with clear names
- [ ] Security best practices are followed
- [ ] Mobile responsiveness is maintained

### Important Notes
- Add new routes in `client/App.tsx` ABOVE the catch-all "*" route
- API endpoints should be created sparingly - only when server-side logic is necessary
- Use shared interfaces from `@shared/api` for client-server communication
- The server is configured for both development (via Vite middleware) and production builds
- Always run `pnpm typecheck` before committing code changes
- Follow the comprehensive best practices documented in `code_bp/` directory

---

# 🎓 Learning & Development Progress

> **Copy this section to new projects**: This learning framework is designed to be portable across all your projects, evolving with your skills and experience.

## 🎯 Learning Philosophy

**Goal**: Transform every development session into a structured learning experience that builds real-world programming skills.

**Approach**: Learn by building, understand by explaining, master by teaching.

## 📊 Current Skill Level Assessment

### React & Frontend Development
- [ ] **Beginner**: Understanding basic React concepts (components, props, state)
- [ ] **Intermediate**: Comfortable with hooks, context, routing, and basic patterns
- [ ] **Advanced**: Mastering performance optimization, custom hooks, complex state management
- [ ] **Expert**: Teaching others, contributing to open source, architectural decisions

### TypeScript
- [ ] **Beginner**: Basic type annotations and interfaces
- [ ] **Intermediate**: Generics, utility types, proper error handling
- [ ] **Advanced**: Complex type manipulations, conditional types
- [ ] **Expert**: Advanced patterns, contributing to type definitions

### Web Development Fundamentals
- [ ] **HTML/CSS**: Semantic markup, responsive design, accessibility
- [ ] **JavaScript**: ES6+, async programming, module systems
- [ ] **Testing**: Unit tests, integration tests, TDD practices
- [ ] **Performance**: Core Web Vitals, optimization strategies
- [ ] **Security**: Input validation, XSS prevention, authentication

### Full-Stack Development
- [ ] **API Design**: RESTful services, error handling, documentation
- [ ] **Database**: Basic CRUD operations, schema design
- [ ] **DevOps**: Build processes, deployment, environment management
- [ ] **Architecture**: Component design, separation of concerns, scalability

## 🗓️ Learning Session Log

### Session Template
```markdown
## [Date] - [Feature/Topic]
**Concepts Learned:**
- [Concept 1]: [Brief explanation]
- [Concept 2]: [Brief explanation]

**Code Implemented:**
- [Feature/component built]
- [Files modified/created]

**Challenges Faced:**
- [Problem]: [How it was solved]

**Key Insights:**
- [Important realization or pattern learned]

**Next Steps:**
- [What to learn/practice next]
```

### Example Session
```markdown
## 2024-01-15 - Contact Form with Validation
**Concepts Learned:**
- React Hook Form: Simplified form handling with better performance
- Zod Schema Validation: Type-safe form validation with TypeScript
- Error Boundaries: Graceful error handling for React components

**Code Implemented:**
- ContactForm component with real-time validation
- Custom useFormValidation hook
- Error display components

**Challenges Faced:**
- TypeScript integration with React Hook Form: Used generic types and proper typing
- Accessibility for error messages: Added aria-describedby and role="alert"

**Key Insights:**
- Form libraries reduce boilerplate but require understanding their patterns
- Client-side validation improves UX but server-side validation is essential for security

**Next Steps:**
- Learn about form submission with API integration
- Explore advanced validation patterns
```

## 🎯 Project-Specific Learning Goals

### Melissa Lashes Website Goals
1. **Master Modern React Patterns**
   - [ ] Functional components with hooks
   - [ ] Custom hooks for business logic
   - [ ] Context for theme/user state
   - [ ] Performance optimization with memo/callback

2. **Build Production-Ready UI**
   - [ ] Responsive design with TailwindCSS
   - [ ] Accessible components following WCAG
   - [ ] Interactive elements with proper states
   - [ ] Form handling and validation

3. **Implement Business Features**
   - [ ] Service showcase with dynamic content
   - [ ] Booking/contact system
   - [ ] Image gallery with optimizations
   - [ ] Customer testimonials

4. **Professional Development Practices**
   - [ ] TypeScript for type safety
   - [ ] Component testing strategies
   - [ ] Git workflow and documentation
   - [ ] Performance monitoring

## 🧠 Concept Explanation Framework

When learning new concepts, Claude Code will use this structure:

### 1. **What & Why**
- What is this concept/pattern/tool?
- Why do we need it? What problem does it solve?
- When should/shouldn't we use it?

### 2. **How It Works**
- Basic implementation with simple example
- Key principles and mental models
- Common patterns and variations

### 3. **Real-World Application**
- How it applies to your current project
- Integration with existing codebase
- Business value and user impact

### 4. **Best Practices**
- Industry standards and conventions
- Performance considerations
- Security implications
- Accessibility requirements

### 5. **Common Pitfalls**
- What beginners often get wrong
- How to avoid and debug issues
- Code smells to watch for

### 6. **Practice Exercises**
- Immediate coding challenges
- Extension ideas for deeper learning
- Related concepts to explore next

## 📚 Learning Path Progression

### Phase 1: Foundation Building (Current Project)
- [ ] React fundamentals and modern patterns
- [ ] TypeScript integration and type safety
- [ ] TailwindCSS and responsive design
- [ ] Basic testing with Vitest

### Phase 2: Intermediate Skills
- [ ] Advanced React patterns (render props, HOCs, custom hooks)
- [ ] State management with Context and external libraries
- [ ] API integration and data fetching
- [ ] Performance optimization techniques

### Phase 3: Advanced Development
- [ ] Complex state management (Redux Toolkit, Zustand)
- [ ] Advanced TypeScript patterns
- [ ] Testing strategies (unit, integration, e2e)
- [ ] Build tools and deployment

### Phase 4: Professional Mastery
- [ ] Architecture and design patterns
- [ ] Security best practices
- [ ] Accessibility expertise
- [ ] Performance monitoring and optimization

## 🔄 Skills Reinforcement System

### Daily Practice
- [ ] Code review of yesterday's work
- [ ] Identify one improvement opportunity
- [ ] Implement one small refactor or optimization

### Weekly Review
- [ ] Review learning session logs
- [ ] Identify patterns in challenges faced
- [ ] Plan focus areas for coming week
- [ ] Update skill level assessments

### Monthly Reflection
- [ ] Assess progress against learning goals
- [ ] Update learning path based on interests/needs
- [ ] Plan next project to reinforce skills
- [ ] Document key insights and breakthroughs

## 🎮 Gamification Elements

### Achievement Unlocks
- 🏆 **First Component**: Created your first React functional component
- 🎯 **Hook Master**: Successfully used 5+ different React hooks
- 🔧 **Type Safety Champion**: Zero TypeScript errors in a complex component
- 🎨 **Design System Builder**: Created reusable UI components
- 🚀 **Performance Optimizer**: Improved Core Web Vitals scores
- 🛡️ **Accessibility Advocate**: Built fully accessible features
- 🧪 **Test Coverage Hero**: Achieved 80%+ test coverage
- 📱 **Mobile-First Master**: Built responsive, mobile-optimized features

### Progress Tracking
```markdown
## Current Achievements
- [ ] First Component
- [ ] Hook Master
- [ ] Type Safety Champion
- [ ] Design System Builder
- [ ] Performance Optimizer
- [ ] Accessibility Advocate
- [ ] Test Coverage Hero
- [ ] Mobile-First Master

## Learning Streak: [X] days
## Components Built: [X]
## Tests Written: [X]
## Performance Improvements: [X]
```

## 🔍 Code Quality Metrics

Track your improvement through measurable outcomes:

### Technical Metrics
- TypeScript error count (goal: 0)
- Test coverage percentage (goal: 80%+)
- Performance scores (Lighthouse/Core Web Vitals)
- Accessibility score (goal: 100%)
- Build time and bundle size

### Learning Metrics
- Concepts learned per week
- Code reviews completed
- Documentation written
- Refactoring improvements made

## 📝 Learning Notes Template

For each new concept, maintain notes using this template:

```markdown
# [Concept Name]

## Summary
[One-sentence description]

## When to Use
- [Scenario 1]
- [Scenario 2]

## Basic Example
```[language]
[Simple code example]
```

## Advanced Usage
[More complex example with explanation]

## Related Concepts
- [Related concept 1]
- [Related concept 2]

## Resources
- [Documentation link]
- [Tutorial link]
- [Best practices article]
```

## 🚀 Next Learning Session Preparation

Before starting each development session:

1. **Review Previous Session**: What did you learn last time?
2. **Set Learning Goal**: What specific concept will you focus on today?
3. **Prepare Resources**: Gather documentation, examples, tutorials
4. **Plan Implementation**: How will you apply the learning to your project?
5. **Set Success Criteria**: How will you know you've learned it?

---

**Remember**: Every line of code is an opportunity to learn something new. Every bug is a chance to deepen your understanding. Every refactor is a step toward mastery.

*Happy coding and learning! 🚀*