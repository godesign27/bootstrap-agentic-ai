# Collapse Component

## Purpose
Collapse component provides show/hide functionality for content sections, typically triggered by buttons or links.

## Variants

### States
- `collapse` - Hidden by default
- `collapse show` - Visible by default

### Trigger Elements
- Buttons with `data-bs-toggle="collapse"`
- Links with `data-bs-toggle="collapse"`
- Any element with appropriate data attributes

## Usage Rules

1. **Unique ID required**: Collapse element needs unique `id`
2. **Data attributes**: Trigger needs `data-bs-toggle="collapse"` and `data-bs-target="#collapseId"`
3. **ARIA attributes**: Include `aria-expanded` and `aria-controls` on trigger
4. **Toggle state**: Use `aria-expanded="false"` for collapsed, `true` for expanded
5. **Content wrapper**: Often wrapped in card or other container

## Accessibility

- ✅ `aria-expanded` indicates state
- ✅ `aria-controls` links trigger to content
- ✅ Keyboard navigation supported
- ✅ Focus management

## Do's

- ✅ Use clear trigger labels
- ✅ Provide visual feedback for state
- ✅ Use appropriate default state
- ✅ Ensure unique IDs

## Don'ts

- ❌ Don't skip ARIA attributes
- ❌ Don't use duplicate IDs
- ❌ Don't forget to update `aria-expanded` state

## Dependencies

- Bootstrap 5.3.8 CSS
- Bootstrap 5.3.8 JavaScript bundle (required)

