# Mobile-Specific CSS Analysis

This document summarizes all mobile-specific CSS found in the codebase. The project uses Tailwind CSS with a custom configuration for responsive design.

## 🔧 Configuration

### Tailwind Breakpoints (styles/tailwind.config.js)
```javascript
screens: {
  'xl': '480px',    // Extra small (note: duplicate key, unusual config)
  'sm': '768px',    // Small screens and up
  'md': '1024px',   // Medium screens and up  
  'lg': '1280px',   // Large screens and up
  'xl': '1536px',   // Extra large screens and up
}
```

**Note**: There's a configuration issue with duplicate 'xl' keys. The effective breakpoint for 'xl' is 1536px.

## 📱 Custom Mobile CSS

### Font Size Adjustments
**Location**: `styles/tailwind.css`
```css
@screen sm {
  html {
    font-size: 20px;
  }
}
```
- Base font size increases from default to 20px on screens ≥768px

### Container Reset Utility
**Location**: `styles/tailwind.css`
```css
@responsive {
  .container-reset { @apply px-0 mx-0; }
}
```
- Removes container padding and margins at all breakpoints
- Used for: `sm:container-reset` classes in navigation

### Mobile Navigation Toggle System
**Location**: `styles/tailwind.css`
```css
/* Toggle Menu Components */
.toggle-trigger { @apply cursor-pointer block; }
.toggle-controller { @apply sr-only; }
.toggle-content {
  opacity: 1;
  overflow: visible;
  transform-origin: top center;
  transform: scaleY(1);
  transition: all 0.2s ease-in-out;
}
.toggle-controller:not(:checked) ~ .toggle-content {
  opacity: 0;
  overflow: hidden;
  transform: scaleY(0);
}

@responsive {
  .toggle-hidden { @apply hidden; }
  .toggle-content-visible {
    opacity: 1 !important;
    overflow: visible !important;
    transform: scaleY(1) !important;
  }
}
```

### Fragment Links (Mobile-Responsive)
**Location**: `styles/tailwind.css`
```css
.fragment-container { @apply sm:-ml-8 sm:pl-8 sm:relative; }
.fragment-link { @apply hidden absolute top-0 left-3; }
.fragment-container:hover > .fragment-link { @apply sm:block; }
```

## 🎯 Mobile-Specific Responsive Patterns

### Navigation Header
**Location**: `_includes/_components/header.njk`

**Mobile (default):**
- Hamburger menu visible
- Navigation hidden by default
- Vertical navigation layout
- Full-width navigation container

**Desktop (sm: ≥768px):**
- Hamburger menu hidden (`sm:toggle-hidden`)
- Navigation always visible (`sm:toggle-content-visible`)
- Horizontal navigation layout (`sm:flex-row`)
- Container width constraints (`sm:w-1/3`, `sm:w-auto`)

```html
<!-- Key mobile navigation classes -->
<label class="toggle-trigger sm:toggle-hidden icon icon-hamburger">
<input class="toggle-controller sm:toggle-hidden" type="checkbox" />
<nav class="toggle-content sm:toggle-content-visible absolute top-px sm:static">
<ul class="flex flex-col sm:flex-row sm:items-center">
```

### Layout Transformations

#### Flexbox Direction Changes
- **Navigation**: `flex flex-col sm:flex-row` - Vertical on mobile, horizontal on desktop
- **Footer**: `flex flex-col md:flex-row` - Vertical on mobile/tablet, horizontal on desktop
- **Content sections**: `flex flex-col` with responsive width adjustments

#### Width Adjustments
- **Header container**: `sm:w-1/3` - Constrains width on larger screens
- **Content areas**: `sm:w-3/5`, `sm:w-2/5` - Two-column layouts on desktop
- **Service items**: `md:w-1/2` - Side-by-side on medium screens and up

#### Spacing & Positioning
- **Mobile padding**: `py-4` for touch-friendly targets
- **Desktop padding**: `sm:py-0` for tighter spacing
- **Margins**: `mb-8 sm:mb-0`, `mb-16 sm:mb-20 sm:mb-24` - Progressive spacing increases

### Visibility Controls
- **Hidden on mobile**: `hidden sm:flex` - Elements that appear only on desktop
- **Hidden on desktop**: `sm:hidden md:block` - Complex visibility patterns
- **Background changes**: `bg-brand-light-grey sm:bg-transparent`
- **Border changes**: `border-b sm:border-none`

## 📊 Generated CSS Media Queries

The compiled CSS (`_site/style.css`) contains these responsive breakpoints:

### Small screens (≥768px)
```css
@media (min-width: 768px) {
  /* Font size, layout, and component adjustments */
  html { font-size: 20px; }
  .sm\:flex { display: flex; }
  .sm\:flex-row { flex-direction: row; }
  .sm\:static { position: static; }
  /* ... 30+ responsive utilities */
}
```

### Medium screens (≥1024px)
```css
@media (min-width: 1024px) {
  .md\:flex { display: flex; }
  .md\:flex-row { flex-direction: row; }
  .md\:w-1\/2 { width: 50%; }
  /* ... layout and sizing utilities */
}
```

### Large screens (≥1280px, ≥1536px)
- Container max-width adjustments
- Additional spacing and layout utilities

## 🎨 Mobile-Specific Design Patterns

1. **Progressive Enhancement**: Mobile-first approach with desktop enhancements
2. **Touch-Friendly**: Larger touch targets on mobile (`py-4` vs `sm:py-0`)
3. **Collapsible Navigation**: Hamburger menu system for small screens
4. **Flexible Layouts**: Extensive use of flexbox direction changes
5. **Content Reordering**: Using flex `order` properties for mobile optimization
6. **Conditional Visibility**: Strategic showing/hiding of elements per screen size

## 🚨 Potential Issues

1. **Tailwind Config**: Duplicate 'xl' key in screens configuration
2. **No Max-Width Queries**: Only min-width media queries used (mobile-first only)
3. **Complex Class Combinations**: Some elements have very long responsive class chains

## 📈 Usage Statistics

- **Total responsive classes found**: 50+ unique responsive utilities
- **Most common breakpoint**: `sm:` (768px+) - used extensively
- **Second most common**: `md:` (1024px+) - used for layout changes
- **Navigation complexity**: 15+ responsive classes in header component alone