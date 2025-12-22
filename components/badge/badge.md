# Badge Component

## Purpose
Badge components provide small labels and counters for highlighting information, status indicators, and counts.

## Variants

### Color Variants
- `badge bg-primary` - Primary badge
- `badge bg-secondary` - Secondary badge
- `badge bg-success` - Success badge
- `badge bg-danger` - Danger badge
- `badge bg-warning text-dark` - Warning badge (with dark text)
- `badge bg-info text-dark` - Info badge (with dark text)
- `badge bg-light text-dark` - Light badge (with dark text)
- `badge bg-dark` - Dark badge

### Shape Variants
- Default (rounded corners)
- `badge rounded-pill` - Pill-shaped badge

## Usage Rules

1. **Use semantic colors**: Choose badge color based on meaning (success=green, danger=red, etc.)
2. **Text contrast**: Use `text-dark` on light backgrounds (warning, info, light) for readability
3. **Pill badges**: Use `rounded-pill` for softer, more modern look
4. **Inline usage**: Badges work inline with text and headings
5. **Status indicators**: Commonly used in tables and lists for status

## Accessibility

- ✅ Badges are semantic inline elements
- ✅ Color contrast meets WCAG standards (with `text-dark` where needed)
- ✅ Don't rely on color alone (include text labels)

## Do's

- ✅ Use appropriate colors for context
- ✅ Include descriptive text in badges
- ✅ Use pill shape for modern designs
- ✅ Combine with headings for emphasis

## Don'ts

- ❌ Don't use color alone to convey meaning
- ❌ Don't use badges for large amounts of text
- ❌ Don't skip `text-dark` on light backgrounds

## Dependencies

- Bootstrap 5.3.8 CSS only
- No JavaScript required

