# Scrollspy Component

## Purpose
Scrollspy components automatically update navigation based on scroll position, highlighting the current section in the viewport.

## Variants

### Structure
- Navigation with links to sections
- Content sections with matching IDs
- `data-bs-spy="scroll"` on scrollable container
- `data-bs-target` pointing to navigation

### Options
- `data-bs-offset` - Offset from top (pixels)
- `data-bs-smooth-scroll` - Smooth scrolling

## Usage Rules

1. **Data attributes**: Scrollable container needs `data-bs-spy="scroll"` and `data-bs-target="#navId"`
2. **Matching IDs**: Navigation links must match section IDs (with `#` prefix)
3. **Offset**: Use `data-bs-offset` to adjust trigger point
4. **JavaScript initialization**: Scrollspy must be initialized via JavaScript
5. **Tabindex**: Include `tabindex="0"` on scrollable container for keyboard access

## Accessibility

- ✅ Keyboard navigation supported
- ✅ Focus management
- ✅ Active state indicates current section
- ✅ Screen reader announcements

## Do's

- ✅ Use clear section headings
- ✅ Ensure IDs match between nav and sections
- ✅ Set appropriate offset
- ✅ Initialize via JavaScript

## Don'ts

- ❌ Don't forget JavaScript initialization
- ❌ Don't use duplicate IDs
- ❌ Don't skip `tabindex` on container

## Dependencies

- Bootstrap 5.3.8 CSS
- Bootstrap 5.3.8 JavaScript bundle (required)
- JavaScript initialization required:
  ```javascript
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })
  ```

