# Specialized Focus Areas - CSS Structure Guide

## Class Hierarchy

```
.responsive-program-section
├── .program-section-wrapper (wrapper styling)
├── .program-content-badge (styled badge)
├── .program-content-heading (h3 heading)
├── .program-content-text (description paragraph)
├── .program-features-list (ul)
│   └── .program-feature-item (li)
│       └── .program-feature-icon (i.fas)
├── .program-cta-btn (a href)
└── .program-image-wrapper
    └── img
```

## CSS Classes Breakdown

### 1. `.responsive-program-section`
**Purpose**: Main container for each program card (Computer & Islamic Education)

**Inline Grid Properties**:
- `display: grid`
- `grid-template-columns: 1fr 1fr` (desktop)
- `gap: 3rem`
- `align-items: center`
- `background`: Color-specific gradient
- `border-radius: 24px`
- `padding: 3.5rem`
- `border: 1px solid rgba(...)`

**Responsive Changes**:
- **Tablet (768px)**: `grid-template-columns: 1fr`, `gap: 2rem`, `padding: 2rem 1.5rem`
- **Mobile (480px)**: `padding: 1.5rem 1rem`, `margin-bottom: 2.5rem`
- **Extra Small (360px)**: `padding: 1.25rem 0.75rem`

### 2. `.program-content-badge`
**Purpose**: "Core Subject" / "Character Building" label

**Base Styles**:
```css
display: inline-flex;
align-items: center;
gap: 8px;
background: rgba(255,140,0,0.15);
border: 1px solid rgba(255,140,0,0.25);
color: #FF8C00;
padding: 0.5rem 1.2rem;
border-radius: 25px;
font-size: 0.75rem;
font-weight: 800;
letter-spacing: 1px;
text-transform: uppercase;
margin-bottom: 1.5rem;
```

**Variants**:
- **Computer Education**: Orange theme (default)
- **Islamic Education**: Purple theme
  - `background: rgba(147,51,234,0.15)`
  - `border: 1px solid rgba(147,51,234,0.25)`
  - `color: #9333ea`

**Responsive**:
- **Mobile (480px)**: `font-size: 0.7rem`, `padding: 0.4rem 0.9rem`, `margin-bottom: 1rem`
- **Extra Small (360px)**: Same as mobile

### 3. `.program-content-heading`
**Purpose**: Main section title (h3)

**Base Styles**:
```css
font-size: 2rem;
font-weight: 900;
color: #1F2A44;
margin-bottom: 1rem;
line-height: 1.2;
```

**Responsive**:
- **Tablet (768px)**: `font-size: 1.6rem`
- **Mobile (480px)**: `font-size: 1.3rem`, `margin-bottom: 0.8rem`, `line-height: 1.3`
- **Extra Small (360px)**: `font-size: 1.15rem`, `margin-bottom: 0.6rem`

### 4. `.program-content-text`
**Purpose**: Description paragraph

**Base Styles**:
```css
font-size: 1rem;
color: #64748B;
line-height: 1.8;
margin-bottom: 1.5rem;
```

**Responsive**:
- **Tablet (768px)**: `font-size: 0.95rem`
- **Mobile (480px)**: `font-size: 0.88rem`, `margin-bottom: 1rem`, `line-height: 1.7`
- **Extra Small (360px)**: `font-size: 0.85rem`, `margin-bottom: 0.8rem`

### 5. `.program-features-list`
**Purpose**: Container for feature items (ul element)

**Base Styles**:
```css
display: flex;
flex-direction: column;
gap: 0.8rem;
margin-bottom: 2rem;
```

**Responsive**:
- **Tablet (768px)**: `margin-bottom: 1.5rem`
- **Mobile (480px)**: `gap: 0.7rem`, `margin-bottom: 1.5rem`

### 6. `.program-feature-item`
**Purpose**: Individual feature list item (li element)

**Base Styles**:
```css
display: flex;
align-items: flex-start;
gap: 12px;
color: #64748B;
```

**Responsive**:
- **Tablet (768px)**: `font-size: 0.9rem`
- **Mobile (480px)**: `gap: 8px`, `font-size: 0.85rem`, `line-height: 1.6`
- **Extra Small (360px)**: `font-size: 0.8rem`, `gap: 6px`

### 7. `.program-feature-icon`
**Purpose**: Checkmark icon styling (i.fas)

**Base Styles**:
```css
color: #FF8C00;
margin-top: 3px;
flex-shrink: 0;
font-size: 0.9rem;
```

**Variants**:
- **Computer Education**: Orange (#FF8C00)
- **Islamic Education**: Purple (#9333ea)

**Responsive**:
- **Mobile (480px)**: `margin-top: 2px`

### 8. `.program-cta-btn`
**Purpose**: "Explore More" button (a.program-cta-btn)

**Base Styles**:
```css
display: inline-flex;
align-items: center;
gap: 8px;
background: linear-gradient(135deg, #FF8C00, #FFB347);
color: #000 !important;
padding: 0.8rem 2rem;
border-radius: 30px;
font-weight: 700;
text-decoration: none;
transition: all 0.3s ease;
border: none;
cursor: pointer;
```

**Hover**:
```css
transform: translateY(-2px);
box-shadow: 0 8px 20px rgba(255,140,0,0.4);
```

**Variants**:
- **Computer Education**: Orange to FFB347 gradient, black text
- **Islamic Education**: Purple to light purple gradient, white text

**Responsive**:
- **Tablet (768px)**: `width: 100%`, `justify-content: center`, `padding: 0.8rem 1.5rem`
- **Mobile (480px)**: `width: 100%`, `justify-content: center`, `padding: 0.7rem 1.25rem`, `font-size: 0.9rem`
- **Extra Small (360px)**: `padding: 0.6rem 1rem`, `font-size: 0.85rem`

### 9. `.program-image-wrapper`
**Purpose**: Image container with proper aspect ratio

**Base Styles**:
```css
width: 100%;
height: 380px;
border-radius: 20px;
overflow: hidden;
box-shadow: 0 15px 40px rgba(255,140,0,0.2);
transition: transform 0.3s ease;
```

**Variants**:
- **Computer Education**: Orange shadow (rgba(255,140,0,0.2))
- **Islamic Education**: Purple shadow (rgba(147,51,234,0.2))

**Responsive**:
- **Tablet (768px)**: `height: 280px`, `margin-bottom: 1rem`
- **Mobile (480px)**: `height: 220px`, `margin-bottom: 1rem`
- **Extra Small (360px)**: `height: 180px`

### 10. `.program-image-wrapper img`
**Purpose**: Image element styling

**Base Styles**:
```css
width: 100%;
height: 100%;
object-fit: cover;
transition: transform 0.3s ease;
```

**Hover**:
```css
transform: scale(1.03);
```

## Islamic Education Section Overrides

### `.islamic-program-section`
Applied additional styles to override/enhance:

```css
.islamic-program-section .program-content-badge {
    background: rgba(147,51,234,0.15);
    border: 1px solid rgba(147,51,234,0.25);
    color: #9333ea;
}

.islamic-program-section .program-cta-btn {
    background: linear-gradient(135deg, #9333ea, #c084fc);
    color: #fff !important;
}

.islamic-program-section .program-cta-btn:hover {
    box-shadow: 0 8px 20px rgba(147,51,234,0.4);
}

.islamic-program-section .program-image-wrapper {
    box-shadow: 0 15px 40px rgba(147,51,234,0.2);
}

.islamic-program-section .program-feature-icon {
    color: #9333ea;
}
```

## Responsive Breakpoints Summary

| Breakpoint | Width | Grid | Image Height | Heading | Text |
|------------|-------|------|--------------|---------|------|
| Desktop | 1024px+ | 1fr 1fr | 380px | 2rem | 1rem |
| Tablet | 768px-1023px | 1fr | 280px | 1.6rem | 0.95rem |
| Mobile | 480px-767px | 1fr | 220px | 1.3rem | 0.88rem |
| Extra Small | 320px-479px | 1fr | 180px | 1.15rem | 0.85rem |

## Color Palette

### Computer Education (Orange Theme)
- Primary: `#FF8C00`
- Light: `#FFB347`
- Badge Background: `rgba(255,140,0,0.15)`
- Badge Border: `rgba(255,140,0,0.25)`
- Image Shadow: `rgba(255,140,0,0.2)`
- Section Background: `rgba(255,140,0,0.08)` to `rgba(255,140,0,0.02)`

### Islamic Education (Purple Theme)
- Primary: `#9333ea`
- Light: `#c084fc`
- Badge Background: `rgba(147,51,234,0.15)`
- Badge Border: `rgba(147,51,234,0.25)`
- Image Shadow: `rgba(147,51,234,0.2)`
- Section Background: `rgba(147,51,234,0.08)` to `rgba(147,51,234,0.02)`

### Neutral Colors
- Dark Text: `#1F2A44`
- Muted Text: `#64748B`
- Section Background: Linear gradient with whites/light grays

## Spacing Guide

### Padding
- Desktop Section: `3.5rem`
- Tablet Section: `2rem 1.5rem`
- Mobile Section: `1.5rem 1rem`
- Extra Small: `1.25rem 0.75rem`

### Margins
- Content Badge: `margin-bottom: 1.5rem` (or 1rem/0.6rem mobile)
- Heading: `margin-bottom: 1rem` (or 0.8rem/0.6rem mobile)
- Text: `margin-bottom: 1.5rem` (or 1rem/0.8rem mobile)
- Features List: `margin-bottom: 2rem` (or 1.5rem mobile)

### Gaps
- Desktop Gap: `3rem`
- Tablet Gap: `2rem`
- Feature Item Gap: `0.8rem` desktop, `0.7rem` mobile, `6px` extra small

## Animation & Transitions

- Button Hover: `transform: translateY(-2px)`, `0.3s ease`
- Image Hover: `scale(1.03)`, `0.3s ease`
- Button Shadow: `0.3s ease`
- All Transitions: Use `all 0.3s ease` for smooth effects
