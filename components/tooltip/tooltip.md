# Tooltip Component

## Purpose
Tooltip components provide small popups that appear on hover or focus, typically for additional information or help text.

## Variants

### Placement
- `data-bs-placement="top"` - Above element
- `data-bs-placement="right"` - To the right
- `data-bs-placement="bottom"` - Below element
- `data-bs-placement="left"` - To the left
- Auto (default) - Automatically positions

### Content
- `title` attribute - Tooltip content
- HTML content via JavaScript initialization

## Usage Rules

1. **Data attributes**: Use `data-bs-toggle="tooltip"` on trigger element
2. **Title attribute**: Provide `title` attribute with tooltip content
3. **Placement**: Specify `data-bs-placement` for positioning
4. **JavaScript initialization**: Tooltips must be initialized via JavaScript
5. **Container**: Use `data-bs-container` to specify container if needed

## Accessibility

- ✅ Keyboard accessible (trigger with keyboard)
- ✅ Focus management
- ✅ ARIA attributes managed by Bootstrap JS
- ✅ Screen reader support

## Do's

- ✅ Use for supplementary information
- ✅ Keep content concise
- ✅ Choose appropriate placement
- ✅ Initialize via JavaScript

## Don'ts

- ❌ Don't use for critical information
- ❌ Don't rely on hover-only (include focus)
- ❌ Don't forget JavaScript initialization

## Dependencies

- Bootstrap 5.3.8 CSS
- Bootstrap 5.3.8 JavaScript bundle (required)
- JavaScript initialization required:
  ```javascript
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  ```

