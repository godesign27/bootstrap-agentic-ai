# Breadcrumb Component

## Purpose
Breadcrumb navigation provides a hierarchical path showing the user's location within a site or application.

## Variants

### Structure
- `breadcrumb` - Container list
- `breadcrumb-item` - Individual breadcrumb item
- `breadcrumb-item active` - Current page (last item)
- `aria-current="page"` - ARIA attribute for current page

## Usage Rules

1. **Use semantic nav**: Wrap in `<nav aria-label="breadcrumb">`
2. **Ordered list**: Use `<ol>` for proper structure
3. **Active item**: Last item should have `active` class and `aria-current="page"`
4. **Links**: All items except the last should be links
5. **Hierarchy**: Show path from home to current page

## Accessibility

- ✅ Semantic `<nav>` element with `aria-label`
- ✅ Ordered list structure
- ✅ `aria-current="page"` on active item
- ✅ Keyboard navigation supported

## Do's

- ✅ Show clear navigation path
- ✅ Make all items except last clickable
- ✅ Use descriptive link text
- ✅ Keep breadcrumbs concise

## Don'ts

- ❌ Don't use breadcrumbs for deep hierarchies (keep to 3-4 levels)
- ❌ Don't make current page a link
- ❌ Don't skip `aria-label` on nav

## Dependencies

- Bootstrap 5.3.8 CSS only
- No JavaScript required

