# 🧹 Project Cleanup Plan - Melissa Lashes Website

## 📊 Current State Analysis
- **Total Dependencies**: 74 packages
- **Actually Used**: ~35-40 packages  
- **Bundle Size Opportunity**: 40-60% reduction possible
- **Builder.io Status**: Can be completely removed

## 🎯 Phase 1: Safe Immediate Removals (High Confidence)

### 3D Libraries (Not Used)
```bash
npm uninstall @react-three/drei @react-three/fiber three @types/three
```
**Why**: No 3D content in the application. These are large packages.
**Impact**: ~2-3MB bundle size reduction

### Animation Libraries (Not Used)
```bash
npm uninstall framer-motion
```
**Why**: No Framer Motion animations in the code. Large package.
**Impact**: ~1MB bundle size reduction

### Date Utilities (Redundant)
```bash
npm uninstall date-fns
```
**Why**: react-day-picker handles all date functionality needed.
**Impact**: ~500KB bundle size reduction

### Unused Development Tools
```bash
npm uninstall tsx globals @tailwindcss/typography
```
**Why**: 
- `tsx` - Using Vite instead
- `globals` - Not referenced anywhere
- `@tailwindcss/typography` - Not configured in Tailwind

### Dependency Cleanup (zod)
```bash
# Move zod to devDependencies since it's not used in runtime
npm uninstall zod
npm install --save-dev zod  # Only if needed for validation schemas
```

## 🎯 Phase 2: Radix UI Cleanup (Medium Confidence)

### Unused Radix Components
Most Radix UI components are defined but not actually used in the main application:

```bash
# Remove unused Radix UI components (keep only the ones actually used)
npm uninstall \
  @radix-ui/react-accordion \
  @radix-ui/react-alert-dialog \
  @radix-ui/react-aspect-ratio \
  @radix-ui/react-avatar \
  @radix-ui/react-checkbox \
  @radix-ui/react-collapsible \
  @radix-ui/react-context-menu \
  @radix-ui/react-dialog \
  @radix-ui/react-dropdown-menu \
  @radix-ui/react-hover-card \
  @radix-ui/react-label \
  @radix-ui/react-menubar \
  @radix-ui/react-navigation-menu \
  @radix-ui/react-popover \
  @radix-ui/react-progress \
  @radix-ui/react-radio-group \
  @radix-ui/react-scroll-area \
  @radix-ui/react-select \
  @radix-ui/react-separator \
  @radix-ui/react-slider \
  @radix-ui/react-switch \
  @radix-ui/react-tabs \
  @radix-ui/react-toast \
  @radix-ui/react-toggle \
  @radix-ui/react-toggle-group
```

**Keep These Radix Components** (Actually Used):
- `@radix-ui/react-slot` - Used in button component
- `@radix-ui/react-tooltip` - Used in App.tsx

**Impact**: ~2-3MB bundle size reduction

## 🎯 Phase 3: Builder.io Migration (Requires Code Changes)

### 1. Replace Builder.io Images
Current images served from Builder.io CDN need to be replaced:

**Files to update**:
- `client/pages/Index.tsx` - Multiple Builder.io image URLs

**Action Items**:
1. Download images from Builder.io URLs
2. Add to `public/images/` folder
3. Update image references in Index.tsx
4. Remove Builder.io environment variables

### 2. Clean Builder.io Artifacts
```bash
# Remove Builder.io configuration
rm -rf .builder/
```

**Files to update**:
- `.env` - Remove `VITE_PUBLIC_BUILDER_KEY`
- `package.json` - Change project name from "fusion-starter" to "melissa-lashes-website"

## 🎯 Phase 4: Optional Optimizations (Review Needed)

### UI Component Library Assessment
Currently 47 UI components defined but only ~5-6 used in main application.

**Options**:
1. **Keep All**: Maintain full component library for future use
2. **Remove Unused**: Clean up unused components and their dependencies
3. **Hybrid**: Keep commonly used components, remove specialized ones

### Alternative Libraries (Consider)
- **recharts** → Simpler chart solution or CSS-based charts
- **@tanstack/react-query** → Evaluate if needed for simple website
- **serverless-http** → Only needed for Netlify functions

## 📋 Implementation Checklist

### Phase 1 - Safe Removals ✅
- [ ] Remove 3D libraries (@react-three/*)
- [ ] Remove framer-motion
- [ ] Remove date-fns  
- [ ] Remove unused dev tools (tsx, globals, @tailwindcss/typography)
- [ ] Clean up zod dependency
- [ ] Test build after removals
- [ ] Verify application still works

### Phase 2 - Radix UI Cleanup ✅
- [ ] Identify truly unused Radix components
- [ ] Remove unused components one by one
- [ ] Test UI functionality after each removal
- [ ] Update component exports if needed

### Phase 3 - Builder.io Migration ✅
- [ ] Audit all Builder.io image URLs in code
- [ ] Download and optimize images
- [ ] Create local image assets structure
- [ ] Update image references in components
- [ ] Remove Builder.io configuration
- [ ] Test image loading

### Phase 4 - Optional Optimizations ✅
- [ ] Evaluate UI component usage
- [ ] Consider alternative libraries
- [ ] Bundle size analysis
- [ ] Performance testing

## 📊 Expected Outcomes

### Bundle Size Reduction
- **Phase 1**: ~4-5MB reduction (3D + animation libraries)
- **Phase 2**: ~2-3MB reduction (unused Radix components)
- **Phase 3**: Minimal size impact, improved independence
- **Total Expected**: 40-60% bundle size reduction

### Performance Improvements
- Faster initial page load
- Reduced JavaScript parsing time
- Better Core Web Vitals scores
- Improved mobile performance

### Maintenance Benefits
- Fewer security vulnerabilities to monitor
- Faster dependency updates
- Cleaner codebase
- Easier debugging

## 🚨 Risk Mitigation

### Before Starting
- [ ] Commit current working state to Git
- [ ] Create backup branch: `git checkout -b backup-before-cleanup`
- [ ] Document current functionality

### During Cleanup
- [ ] Remove dependencies incrementally
- [ ] Test after each major removal
- [ ] Keep detailed notes of changes
- [ ] Monitor for TypeScript errors

### Testing Strategy
- [ ] Manual testing of all pages
- [ ] Build success verification
- [ ] TypeScript compilation check
- [ ] Performance comparison (before/after)

## 🎓 Learning Opportunities

This cleanup process teaches:
- **Dependency Management**: Understanding what each package does
- **Bundle Optimization**: Impact of unused code on performance
- **Risk Assessment**: How to safely remove dependencies
- **Performance Monitoring**: Measuring improvements
- **Build Tools**: How bundlers handle dependencies