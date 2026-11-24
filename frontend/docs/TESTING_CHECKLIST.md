# Mobile Responsive Testing Checklist

## Specialized Focus Areas Section

### Desktop View (1440px+)
- [ ] Section title and subtitle display properly
- [ ] Computer Education card (left) with image (right) in 2-column layout
- [ ] Islamic Education card (right) with image (left) in 2-column layout
- [ ] Badge, heading, description, and feature list visible
- [ ] "Explore More" buttons show with gradient and hover effect
- [ ] Images display at 380px height with proper zoom on hover
- [ ] Spacing: 3rem gap between columns, 3.5rem padding in sections

### Tablet View (768px - 1023px)
- [ ] Section converts to single column layout
- [ ] Computer Education: Text content above image
- [ ] Islamic Education: Image above text (order: 2 for text, order: 1 for image)
- [ ] Badge styling remains intact
- [ ] Heading reduces to 1.6rem font size
- [ ] Description text at 0.95rem font size
- [ ] Images reduce to 280px height
- [ ] Buttons extend to full width
- [ ] Padding: 2rem 1.5rem
- [ ] Bottom spacing between sections: 3rem

### Mobile View (480px - 767px)
- [ ] Layout maintains single column
- [ ] Padding reduces to 1.5rem 1rem
- [ ] Badge font size: 0.7rem with adjusted padding
- [ ] Heading font size: 1.3rem with good line-height
- [ ] Description font size: 0.88rem, readable without zoom
- [ ] Feature list items at 0.85rem font size
- [ ] Images at 220px height
- [ ] Buttons full-width with 0.7rem 1.25rem padding
- [ ] Feature list gap: 0.7rem (tighter but readable)
- [ ] Section margin-bottom: 2.5rem

### Extra Small View (320px - 479px)
- [ ] Layout still maintains single column
- [ ] Padding: 1.25rem 0.75rem (compact but readable)
- [ ] Badge font size: 0.7rem with minimal padding
- [ ] Heading font size: 1.15rem
- [ ] Description font size: 0.85rem
- [ ] Feature items at 0.8rem font size with 6px gap
- [ ] Feature icons properly sized and spaced
- [ ] Images at 180px height (portrait-friendly)
- [ ] Buttons: 0.6rem 1rem padding, 0.85rem font
- [ ] No horizontal scrolling

## Computer Education Card

### Content Verification
- [ ] Badge text: "Core Subject" with laptop-code icon
- [ ] Heading: "Computer" + "Education" (Education in orange)
- [ ] Description mentions: "mandatory subject", "practical, hands-on"
- [ ] Feature 1: Grade-tailored curriculum with checkmark
- [ ] Feature 2: Dedicated Computer Lab with checkmark
- [ ] Feature 3: Board exam ready with checkmark
- [ ] Button: "Explore More" with arrow icon
- [ ] Button links to: computer-education.html

### Styling Verification
- [ ] Background: Orange gradient (rgba(255,140,0,0.08))
- [ ] Border: 1px rgba(255,140,0,0.15)
- [ ] Border-radius: 24px
- [ ] Badge color: #FF8C00
- [ ] Check icons: Orange (#FF8C00)
- [ ] Button background: Orange to FFB347 gradient
- [ ] Button text color: Black
- [ ] Image shadow: 0 15px 40px rgba(255,140,0,0.2)

### Interactive Elements
- [ ] Button hover: Translate up (-2px), shadow visible
- [ ] Image hover: Scale 1.03
- [ ] Links work correctly

## Islamic Education Card

### Content Verification
- [ ] Badge text: "Character Building" with book-quran icon
- [ ] Heading: "Islamic" + "& Moral Education" (Islamic in purple)
- [ ] Description mentions: "values", "character", "Quranic education"
- [ ] Feature 1: Nazra Quran with Tajweed with checkmark
- [ ] Feature 2: Character Report Cards with checkmark
- [ ] Feature 3: Akhlaqiat & Seerah with checkmark
- [ ] Button: "Explore More" with arrow icon
- [ ] Button links to: islamic-education.html

### Styling Verification
- [ ] Background: Purple gradient (rgba(147,51,234,0.08))
- [ ] Border: 1px rgba(147,51,234,0.15)
- [ ] Border-radius: 24px
- [ ] Badge color: #9333ea
- [ ] Check icons: Purple (#9333ea)
- [ ] Button background: Purple to light purple gradient
- [ ] Button text color: White
- [ ] Image shadow: 0 15px 40px rgba(147,51,234,0.2)

### Interactive Elements
- [ ] Button hover: Translate up (-2px), shadow visible
- [ ] Image hover: Scale 1.03
- [ ] Links work correctly

## Cross-Browser Testing

### Chrome/Edge
- [ ] All responsive breakpoints work
- [ ] Hover effects smooth
- [ ] Images load correctly
- [ ] Fonts render properly

### Firefox
- [ ] Responsive layout displays correctly
- [ ] Gradients show properly
- [ ] Media queries trigger at correct breakpoints
- [ ] Hover states work

### Safari (Mac/iOS)
- [ ] Responsive layout adapts
- [ ] Touch interactions work (tap targets adequate)
- [ ] Smooth scrolling
- [ ] -webkit- prefixes work

### Mobile Browsers
- [ ] iOS Safari responsive
- [ ] Chrome Mobile responsive
- [ ] Touch interactions responsive
- [ ] No text cutoff

## Accessibility Testing

- [ ] Heading hierarchy correct (h3 under h2)
- [ ] Button text clear and descriptive
- [ ] Images have alt text
- [ ] Links are keyboard navigable
- [ ] Color contrast sufficient (meets WCAG AA)
- [ ] Touch targets at least 44x44px

## Performance Testing

- [ ] Page loads quickly
- [ ] Images don't cause layout shift
- [ ] Smooth scrolling
- [ ] Animations don't cause jank
- [ ] Mobile viewport optimized

## Additional Notes
- Check section alignment with other sections on page
- Verify padding/margin consistency
- Test with real mobile devices (not just browser DevTools)
- Test with slow network (3G simulation)
- Test with different font zoom levels
