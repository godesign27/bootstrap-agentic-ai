# List Group Component

## Purpose
List groups provide flexible and powerful components for displaying lists of content with various states and actions.

## Variants

### Types
- Basic list - Simple list items
- Actionable list - Clickable items with `list-group-item-action`
- Flush list - Remove borders with `list-group-flush`

### States
- Default
- `active` - Active/selected item
- `disabled` - Disabled item

### Content Structure
- Simple text items
- Complex items with headings, text, and metadata
- Badges and other elements

## Usage Rules

1. **Semantic structure**: Use `<ul>` for simple lists, `<div>` for actionable lists
2. **Action items**: Use `<a>` tags with `list-group-item-action` for clickable items
3. **Active state**: Use `active` class and `aria-current="true"` for current item
4. **Disabled items**: Use `disabled` class (not on `<a>` tags, use `<div>`)
5. **Complex content**: Use flexbox utilities for multi-line content

## Accessibility

- ✅ Semantic HTML structure
- ✅ `aria-current="true"` for active items
- ✅ Keyboard navigation for actionable items
- ✅ Focus indicators visible

## Do's

- ✅ Use actionable lists for navigation
- ✅ Provide clear item labels
- ✅ Use active state appropriately
- ✅ Structure complex content clearly

## Don'ts

- ❌ Don't use `disabled` on `<a>` tags
- ❌ Don't mix actionable and non-actionable items
- ❌ Don't skip semantic structure

## Dependencies

- Bootstrap 5.3.8 CSS only
- No JavaScript required

