# Image Migration Plan - Builder.io to Local Assets

## 🎯 Migration Overview
Converting from Builder.io CDN to local assets for complete independence and better performance control.

## 📸 Images to Migrate

### 1. Hero Image (Line 317)
- **Builder.io URL**: `4e2ff97a8a1d4b894ed2e07a083d040f5bc098cc?width=1200`
- **Alt Text**: "Beautiful woman with stunning lashes"
- **Usage**: Main hero section background
- **Dimensions**: 1200px width, responsive height (600px on lg screens)
- **New Path**: `public/images/hero/main-hero.jpg`
- **Optimization**: High quality for hero impression

### 2. Lash Lift Service Image (Line 399)
- **Builder.io URL**: `e97ae88cdcc24a2c9716dcb1f15fae9a` (responsive srcSet)
- **Alt Text**: "Lash lift service"
- **Usage**: Service card with responsive srcSet (100w to 2000w)
- **Aspect Ratio**: 0.67 (portrait orientation)
- **New Path**: `public/images/services/lash-lift.jpg`
- **Optimization**: Multiple sizes for responsive design

### 3. Feature Image #1 (Line 440)
- **Builder.io URL**: `6dec3fc3353e7d0a389dfd55a906f2ba1d243eb7?width=1200`
- **Alt Text**: Context suggests another service or feature image
- **Dimensions**: 1200px width
- **New Path**: `public/images/services/feature-1.jpg`

### 4. Background Image (Line 531)
- **Builder.io URL**: `9063f1f753ab9976d9dd00db5df66028d916908c?width=2880`
- **Usage**: Large background image
- **Dimensions**: 2880px width (high resolution)
- **New Path**: `public/images/backgrounds/main-bg.jpg`
- **Optimization**: Large file, needs compression

### 5. Placeholder Avatar (Line 575)
- **Builder.io URL**: `placeholder-avatar`
- **Alt Text**: Profile/testimonial avatar
- **Usage**: Customer testimonial or team member
- **New Path**: `public/images/avatars/placeholder.jpg`
- **Optimization**: Small file size, circular crop friendly

### 6. Feature Image #2 (Line 627)
- **Builder.io URL**: `21cfcdec06b31caa71408d157bb3955858599f18?width=1200`
- **Dimensions**: 1200px width
- **New Path**: `public/images/services/feature-2.jpg`

## 🏗️ Implementation Strategy

### Phase 1: Create Placeholder Images
Since we can't download Builder.io images directly, we'll create appropriate placeholder images:

```bash
# Temporary placeholder creation (for development)
# These should be replaced with actual lash business photos
```

### Phase 2: Update Image References
Replace Builder.io URLs with local paths in `client/pages/Index.tsx`:

```tsx
// Before (Builder.io CDN)
src="https://api.builder.io/api/v1/image/assets/TEMP/4e2ff97a8a1d4b894ed2e07a083d040f5bc098cc?width=1200"

// After (Local asset)
src="/images/hero/main-hero.jpg"
```

### Phase 3: Optimize for Performance
- **Image Compression**: Optimize file sizes for web
- **Modern Formats**: Consider WebP/AVIF for better compression
- **Responsive Images**: Implement proper srcSet for multi-size images
- **Lazy Loading**: Maintain loading="lazy" attributes

### Phase 4: Clean Up Configuration
- Remove Builder.io environment variables
- Delete .builder directory if exists
- Update project branding

## 📊 Expected Benefits

### Performance Improvements
- **Reduced DNS Lookups**: No external CDN requests
- **Better Caching Control**: Full control over cache headers
- **Eliminated Third-Party Dependencies**: No Builder.io service dependency

### Business Benefits
- **Complete Independence**: No external service accounts needed
- **Cost Control**: No CDN bandwidth costs
- **Security**: No external service data sharing

### Development Benefits
- **Simplified Deployment**: All assets self-contained
- **Better Version Control**: Images tracked with code
- **Easier Local Development**: No external API keys needed

## 🎨 Image Content Suggestions for Lash Business

To make this a real business website, consider replacing placeholders with:

### Hero Section
- **Main Hero**: Professional model with dramatic lash extensions
- **Angle**: Close-up showcasing beautiful, voluminous lashes
- **Lighting**: Professional photography with good contrast

### Service Images
- **Lash Lift**: Before/after comparison or process shots
- **Extensions**: Different lash styles and lengths
- **Maintenance**: Tools and technique demonstrations

### Background Images
- **Salon Interior**: Clean, modern lash studio environment
- **Texture**: Subtle patterns or gradients that don't compete with content

### Testimonials
- **Real Customers**: Actual client photos (with permission)
- **Results**: Before/after transformations
- **Professional**: High-quality headshots

## 🔧 Technical Implementation Notes

### Responsive Image Strategy
For the lash lift service image (currently using srcSet), implement:

```tsx
<img
  src="/images/services/lash-lift.jpg"
  srcSet="/images/services/lash-lift-400.jpg 400w, 
          /images/services/lash-lift-800.jpg 800w,
          /images/services/lash-lift-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Lash lift service"
  loading="lazy"
/>
```

### Image Optimization Checklist
- [ ] Compress images without quality loss
- [ ] Generate multiple sizes for responsive design
- [ ] Convert to modern formats (WebP) with fallbacks
- [ ] Add proper alt text for accessibility
- [ ] Implement lazy loading where appropriate
- [ ] Optimize largest contentful paint (LCP) for hero image