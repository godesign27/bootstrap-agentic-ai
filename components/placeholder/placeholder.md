# Placeholder Component

## Purpose
Placeholder components provide skeleton loading states to show content structure while data is loading.

## Variants

### Style Variants
- `placeholder` - Basic placeholder
- `placeholder-glow` - Glowing animation
- `placeholder-wave` - Wave animation

### Size Variants
- Use column classes (`col-*`) to control width
- `col-1` through `col-12` for responsive widths

## Usage Rules

1. **Use column classes**: Control width with Bootstrap column classes
2. **Animation**: Use `placeholder-glow` or `placeholder-wave` for animated placeholders
3. **Accessibility**: Use `aria-hidden="true"` on placeholder containers
4. **Multiple lines**: Create multiple placeholders for multi-line content
5. **Replace with content**: Remove placeholders when actual content loads

## Accessibility

- ✅ Use `aria-hidden="true"` on placeholder containers
- ✅ Screen readers will skip placeholder content
- ✅ Ensure actual content is accessible when loaded

## Do's

- ✅ Use appropriate widths for content
- ✅ Match placeholder structure to actual content
- ✅ Use animations for better UX
- ✅ Hide from screen readers

## Don'ts

- ❌ Don't leave placeholders visible after content loads
- ❌ Don't use placeholders for permanent content
- ❌ Don't forget `aria-hidden`

## Dependencies

- Bootstrap 5.3.8 CSS only
- No JavaScript required

