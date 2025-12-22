# Spinner Component

## Purpose
Spinner components provide loading indicators to show that content is being processed or loaded.

## Variants

### Style Variants
- `spinner-border` - Rotating border spinner
- `spinner-grow` - Pulsing/growing spinner

### Color Variants
- Default (primary color)
- `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-light`, `text-dark`

### Size Variants
- Default size
- `spinner-border-sm` - Small spinner (for buttons)
- `spinner-grow-sm` - Small grow spinner

## Usage Rules

1. **Always include role**: Use `role="status"` for accessibility
2. **Visually hidden text**: Include `<span class="visually-hidden">Loading...</span>` for screen readers
3. **Button spinners**: Use `spinner-border-sm` or `spinner-grow-sm` in buttons
4. **Color utilities**: Use text color utilities for colored spinners
5. **Disabled state**: Disable buttons when showing spinner

## Accessibility

- ✅ `role="status"` for screen reader announcement
- ✅ Visually hidden text for context
- ✅ Proper ARIA attributes

## Do's

- ✅ Use appropriate spinner type for context
- ✅ Include accessible text
- ✅ Disable interactive elements during loading
- ✅ Use small spinners in buttons

## Don'ts

- ❌ Don't skip `role="status"`
- ❌ Don't forget visually hidden text
- ❌ Don't use spinners without context

## Dependencies

- Bootstrap 5.3.8 CSS only
- No JavaScript required (but typically used with JavaScript for show/hide)

