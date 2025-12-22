# Offcanvas Component

## Purpose
Offcanvas components provide hidden sidebars that slide in from the edges of the viewport, commonly used for navigation, filters, or additional content.

## Variants

### Position Variants
- `offcanvas-start` - Slides in from left
- `offcanvas-end` - Slides in from right
- `offcanvas-top` - Slides in from top
- `offcanvas-bottom` - Slides in from bottom

### Structure
- `offcanvas` - Main container
- `offcanvas-header` - Header section
- `offcanvas-title` - Title heading
- `offcanvas-body` - Main content area

## Usage Rules

1. **Unique ID required**: Offcanvas needs unique `id`
2. **Data attributes**: Trigger needs `data-bs-toggle="offcanvas"` and `data-bs-target="#offcanvasId"`
3. **ARIA attributes**: Include `aria-labelledby` pointing to title ID, `aria-controls` on trigger
4. **Tabindex**: Use `tabindex="-1"` on offcanvas element
5. **Close button**: Include close button in header with `data-bs-dismiss="offcanvas"`

## Accessibility

- ✅ `aria-labelledby` links to title
- ✅ `aria-controls` on trigger
- ✅ Focus trap when open
- ✅ Keyboard navigation (ESC to close)

## Do's

- ✅ Use appropriate position for context
- ✅ Include clear title
- ✅ Provide close button
- ✅ Ensure content is accessible

## Don'ts

- ❌ Don't skip ARIA attributes
- ❌ Don't forget `tabindex="-1"`
- ❌ Don't use for critical content

## Dependencies

- Bootstrap 5.3.8 CSS
- Bootstrap 5.3.8 JavaScript bundle (required)

