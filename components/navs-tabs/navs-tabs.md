# Navs and Tabs Component

## Purpose
Navs and tabs provide navigation components for switching between different views or content sections.

## Variants

### Nav Types
- `nav-tabs` - Tab-style navigation
- `nav-pills` - Pill-style navigation
- `nav-underline` - Underline-style navigation

### Tab Structure
- `nav` - Navigation container
- `nav-item` - Individual nav item
- `nav-link` - Link/button within item
- `tab-content` - Content container
- `tab-pane` - Individual content panel

## Usage Rules

1. **Role attributes**: Use `role="tablist"` on nav, `role="presentation"` on items, `role="tab"` on buttons
2. **Data attributes**: Buttons need `data-bs-toggle="tab"` or `data-bs-toggle="pill"` and `data-bs-target="#paneId"`
3. **ARIA attributes**: Include `aria-controls`, `aria-selected`, `aria-labelledby`
4. **Active state**: Use `active` class and `show` class on initial tab/pane
5. **Fade animation**: Use `fade` class on tab panes for smooth transitions

## Accessibility

- ✅ Proper ARIA roles and attributes
- ✅ `aria-selected` indicates active tab
- ✅ `aria-controls` links tab to content
- ✅ Keyboard navigation (Arrow keys, Home, End)

## Do's

- ✅ Use clear tab labels
- ✅ Provide accessible tab structure
- ✅ Use fade animation for better UX
- ✅ Ensure unique IDs

## Don'ts

- ❌ Don't skip ARIA attributes
- ❌ Don't use tabs for primary navigation
- ❌ Don't forget `role="presentation"` on list items

## Dependencies

- Bootstrap 5.3.8 CSS
- Bootstrap 5.3.8 JavaScript bundle (required for tab switching)

