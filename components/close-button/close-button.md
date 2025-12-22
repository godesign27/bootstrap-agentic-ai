# Close Button Component

## Purpose
Close button provides a consistent way to dismiss alerts, modals, and other dismissible content.

## Variants

### Style Variants
- `btn-close` - Standard close button (X icon)
- `btn-close-white` - White close button (for dark backgrounds)

### Usage Contexts
- Alerts (with `data-bs-dismiss="alert"`)
- Modals (with `data-bs-dismiss="modal"`)
- Offcanvas (with `data-bs-dismiss="offcanvas"`)
- Toast (with `data-bs-dismiss="toast"`)

## Usage Rules

1. **Always include aria-label**: Must have `aria-label="Close"` attribute
2. **Dismiss attribute**: Include appropriate `data-bs-dismiss` attribute for functionality
3. **White variant**: Use `btn-close-white` on dark backgrounds
4. **Button type**: Use `type="button"` to prevent form submission
5. **Positioning**: Typically placed in top-right corner of containers

## Accessibility

- ✅ `aria-label="Close"` required for screen readers
- ✅ Keyboard accessible (Enter/Space activates)
- ✅ Focus indicators visible

## Do's

- ✅ Always include `aria-label`
- ✅ Use appropriate `data-bs-dismiss` attribute
- ✅ Use white variant on dark backgrounds
- ✅ Position clearly and consistently

## Don'ts

- ❌ Don't skip `aria-label` attribute
- ❌ Don't use for navigation (use links)
- ❌ Don't use generic button text

## Dependencies

- Bootstrap 5.3.8 CSS
- Bootstrap 5.3.8 JavaScript bundle (for dismiss functionality)

