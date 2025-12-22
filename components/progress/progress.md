# Progress Component

## Purpose
Progress components provide visual indicators showing the completion status of a task or process.

## Variants

### Color Variants
- Default (primary color)
- `bg-success` - Success/green
- `bg-info` - Info/cyan
- `bg-warning` - Warning/yellow
- `bg-danger` - Danger/red

### Size Variants
- Default height
- `progress-sm` - Small height (custom CSS may be needed)

### Multiple Bars
- Stack multiple progress bars for segmented progress

## Usage Rules

1. **ARIA attributes**: Include `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
2. **Width style**: Set `width` style on progress-bar (percentage)
3. **Update values**: Update `aria-valuenow` and width when progress changes
4. **Labels**: Include text in progress-bar for percentage display
5. **Multiple bars**: Use multiple progress-bar divs for segmented progress

## Accessibility

- ✅ `role="progressbar"` for screen readers
- ✅ `aria-valuenow`, `aria-valuemin`, `aria-valuemax` for current state
- ✅ Text labels for visual users
- ✅ Live region updates (if using JavaScript)

## Do's

- ✅ Update ARIA values dynamically
- ✅ Include percentage text when helpful
- ✅ Use appropriate colors for context
- ✅ Keep progress bars visible during process

## Don'ts

- ❌ Don't skip ARIA attributes
- ❌ Don't use for indeterminate progress (use spinner)
- ❌ Don't forget to update values

## Dependencies

- Bootstrap 5.3.8 CSS only
- No JavaScript required (but typically used with JavaScript for updates)

