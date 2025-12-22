# Accordion Component

## Purpose
Accordion components provide collapsible content sections that expand and collapse to show or hide content.

## Variants

### Structure
- `accordion` - Container
- `accordion-item` - Individual accordion item
- `accordion-header` - Header section with button
- `accordion-button` - Toggle button
- `accordion-collapse` - Collapsible content area
- `accordion-body` - Content within collapsed area

### States
- `collapse show` - Expanded (visible)
- `collapse` - Collapsed (hidden)
- `accordion-button collapsed` - Button state when collapsed

## Usage Rules

1. **Unique IDs required**: Each accordion item needs unique IDs for button and collapse
2. **Data attributes**: Button needs `data-bs-toggle="collapse"` and `data-bs-target="#collapseId"`
3. **Parent reference**: Collapse needs `data-bs-parent="#accordionId"`
4. **ARIA attributes**: Include `aria-expanded`, `aria-controls`, `aria-labelledby`
5. **Default state**: Use `collapse show` for initially expanded items

## Accessibility

- ✅ `aria-expanded` indicates state
- ✅ `aria-controls` links button to content
- ✅ `aria-labelledby` links content to button
- ✅ Keyboard navigation supported
- ✅ Focus management

## Do's

- ✅ Use semantic heading structure
- ✅ Provide clear button labels
- ✅ Use appropriate default expanded state
- ✅ Ensure unique IDs

## Don'ts

- ❌ Don't skip ARIA attributes
- ❌ Don't use duplicate IDs
- ❌ Don't forget `data-bs-parent`

## Dependencies

- Bootstrap 5.3.8 CSS
- Bootstrap 5.3.8 JavaScript bundle (required)

