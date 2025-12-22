# Pagination Component

## Purpose
Pagination components provide navigation for splitting content across multiple pages.

## Variants

### States
- Default page item
- `active` - Current page
- `disabled` - Disabled item

### Sizing
- Default size
- `pagination-lg` - Large pagination
- `pagination-sm` - Small pagination

## Usage Rules

1. **Semantic nav**: Wrap in `<nav aria-label="...">`
2. **List structure**: Use `<ul class="pagination">` with `<li class="page-item">`
3. **Active state**: Use `active` class and `aria-current="page"` on current page
4. **Disabled state**: Use `disabled` class and `aria-disabled="true"` on disabled items
5. **Links**: Use `<a class="page-link">` for all items

## Accessibility

- ✅ Semantic `<nav>` with `aria-label`
- ✅ `aria-current="page"` on active item
- ✅ `aria-disabled="true"` on disabled items
- ✅ Keyboard navigation supported

## Do's

- ✅ Provide clear navigation labels
- ✅ Show current page clearly
- ✅ Include Previous/Next buttons
- ✅ Use appropriate sizing

## Don'ts

- ❌ Don't skip `aria-label` on nav
- ❌ Don't use buttons instead of links
- ❌ Don't forget disabled state styling

## Dependencies

- Bootstrap 5.3.8 CSS only
- No JavaScript required (unless implementing dynamic pagination)

