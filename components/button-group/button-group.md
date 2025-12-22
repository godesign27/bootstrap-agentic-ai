# Button Group Component

## Purpose
Button groups combine multiple buttons together for related actions, toolbar layouts, and segmented controls.

## Variants

### Group Types
- `btn-group` - Horizontal button group
- `btn-group-vertical` - Vertical button group
- `btn-toolbar` - Container for multiple button groups

### Size Variants
- Default size
- `btn-group-sm` - Small buttons
- `btn-group-lg` - Large buttons

## Usage Rules

1. **Role attributes**: Use `role="group"` on button groups, `role="toolbar"` on toolbars
2. **ARIA labels**: Include `aria-label` describing the group
3. **Consistent styling**: All buttons in a group should use the same style
4. **Spacing**: Use `me-2` or similar for spacing between groups in toolbars
5. **Button types**: Use `type="button"` to prevent form submission

## Accessibility

- ✅ `role="group"` or `role="toolbar"` for screen readers
- ✅ `aria-label` for group description
- ✅ Keyboard navigation supported
- ✅ Focus indicators visible

## Do's

- ✅ Group related actions together
- ✅ Use consistent button styles
- ✅ Provide descriptive ARIA labels
- ✅ Use toolbars for complex layouts

## Don'ts

- ❌ Don't mix button styles in a group
- ❌ Don't skip ARIA labels
- ❌ Don't use for unrelated actions

## Dependencies

- Bootstrap 5.3.8 CSS only
- No JavaScript required (unless using dropdown buttons)

