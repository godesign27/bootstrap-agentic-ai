# Popover Component

## Purpose
Popover components provide small overlay content that appears on click, hover, or focus, typically for additional information or actions.

## Variants

### Placement
- `data-bs-placement="top"` - Above element
- `data-bs-placement="right"` - To the right
- `data-bs-placement="bottom"` - Below element
- `data-bs-placement="left"` - To the left
- Auto (default) - Automatically positions

### Content
- `data-bs-title` - Popover title
- `data-bs-content` - Popover content
- HTML content via JavaScript initialization

## Usage Rules

1. **Data attributes**: Use `data-bs-toggle="popover"` on trigger element
2. **Content**: Provide `data-bs-title` and `data-bs-content` attributes
3. **Placement**: Specify `data-bs-placement` for positioning
4. **JavaScript initialization**: Popovers must be initialized via JavaScript
5. **Container**: Use `data-bs-container="body"` to append to body (prevents overflow issues)

## Accessibility

- ✅ Keyboard accessible (trigger with keyboard)
- ✅ Focus management
- ✅ ARIA attributes managed by Bootstrap JS
- ✅ Screen reader announcements

## Do's

- ✅ Use for supplementary information
- ✅ Keep content concise
- ✅ Choose appropriate placement
- ✅ Initialize via JavaScript

## Don'ts

- ❌ Don't use for critical information
- ❌ Don't rely on hover-only (include click)
- ❌ Don't forget JavaScript initialization

## Dependencies

- Bootstrap 5.3.8 CSS
- Bootstrap 5.3.8 JavaScript bundle (required)
- JavaScript initialization required:
  ```javascript
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
  ```

