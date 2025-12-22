# Toast Component

## Purpose
Toast components provide lightweight notifications that appear temporarily, typically in the corner of the viewport.

## Variants

### Structure
- `toast` - Main container
- `toast-header` - Header with title and close button
- `toast-body` - Message content
- `toast-container` - Container for positioning multiple toasts

### Positioning
- `position-fixed` with utility classes (`top-0`, `end-0`, `bottom-0`, `start-0`)
- `p-3` for padding

## Usage Rules

1. **ARIA attributes**: Include `role="alert"`, `aria-live="assertive"`, `aria-atomic="true"`
2. **JavaScript initialization**: Toasts must be initialized and shown via JavaScript
3. **Container**: Use `toast-container` for positioning multiple toasts
4. **Close button**: Include close button with `data-bs-dismiss="toast"`
5. **Auto-hide**: Toasts auto-hide after delay (default 5 seconds)

## Accessibility

- ✅ `role="alert"` for screen reader announcements
- ✅ `aria-live="assertive"` for immediate announcements
- ✅ `aria-atomic="true"` for complete message reading
- ✅ Keyboard accessible close button

## Do's

- ✅ Use for non-critical notifications
- ✅ Keep messages concise
- ✅ Position appropriately
- ✅ Initialize via JavaScript

## Don'ts

- ❌ Don't use for critical errors (use modals)
- ❌ Don't stack too many toasts
- ❌ Don't forget JavaScript initialization

## Dependencies

- Bootstrap 5.3.8 CSS
- Bootstrap 5.3.8 JavaScript bundle (required)
- JavaScript initialization required:
  ```javascript
  var toastEl = document.getElementById('liveToast')
  var toast = new bootstrap.Toast(toastEl)
  toast.show()
  ```

