# Dropdown Component

## Purpose
Dropdown components provide toggleable menus for actions, navigation, and options.

## Variants

### Types
- Standard dropdown - Button with dropdown menu
- Split button - Button group with dropdown toggle

### Menu Items
- `dropdown-item` - Standard menu item
- `dropdown-item-text` - Non-clickable text
- `dropdown-divider` - Separator line
- `dropdown-header` - Section header

### Alignment
- Default (left-aligned)
- `dropdown-menu-end` - Right-aligned
- `dropdown-menu-start` - Left-aligned (explicit)

## Usage Rules

1. **Data attributes**: Button needs `data-bs-toggle="dropdown"` and `aria-expanded="false"`
2. **ARIA attributes**: Include `aria-labelledby` on menu linking to button ID
3. **Unique IDs**: Button needs unique `id` for ARIA reference
4. **Menu structure**: Use `<ul>` with `<li>` and `<a>` for menu items
5. **Split buttons**: Use `dropdown-toggle-split` for split button styling

## Accessibility

- ✅ `aria-expanded` indicates menu state
- ✅ `aria-labelledby` links menu to button
- ✅ Keyboard navigation (Arrow keys, Enter, Escape)
- ✅ Focus management

## Do's

- ✅ Use clear button labels
- ✅ Group related items
- ✅ Use dividers for separation
- ✅ Provide keyboard access

## Don'ts

- ❌ Don't skip ARIA attributes
- ❌ Don't use dropdowns for primary navigation
- ❌ Don't nest dropdowns

## Dependencies

- Bootstrap 5.3.8 CSS
- Bootstrap 5.3.8 JavaScript bundle (required)

