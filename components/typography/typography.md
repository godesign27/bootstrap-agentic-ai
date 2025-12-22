# Typography Component

## Purpose
Typography components provide text styling, headings, paragraphs, lists, and text utilities for consistent text presentation.

## Variants

### Headings
- `h1` through `h6` - Standard heading hierarchy
- `.display-1` through `.display-6` - Large display headings
- `.lead` - Standout paragraph

### Text Utilities
- `.text-muted` - Muted/secondary text
- `.text-primary`, `.text-success`, `.text-danger`, `.text-warning`, `.text-info` - Contextual colors
- `.text-start`, `.text-center`, `.text-end` - Text alignment
- `.text-uppercase`, `.text-lowercase`, `.text-capitalize` - Text transformation
- `.fw-bold`, `.fw-normal`, `.fw-light` - Font weight
- `.fst-italic` - Italic text

### Text Elements
- `<mark>` - Highlighted text
- `<small>` - Small text
- `<abbr>` - Abbreviation with title attribute
- `<blockquote>` - Blockquote with `.blockquote` class
- `<cite>` - Citation

### Lists
- `.list-unstyled` - Remove default list styling
- `.list-inline` - Horizontal list items

### Description Lists
- `.row` on `<dl>` with `.col-sm-*` on `<dt>` and `<dd>` for responsive layout

## Usage Rules

1. **Heading hierarchy**: Use h1-h6 in proper order (don't skip levels)
2. **Semantic HTML**: Use appropriate HTML elements (`<p>`, `<h1>`, etc.)
3. **Lead paragraph**: Use `.lead` for the first paragraph to draw attention
4. **Text utilities**: Use contextual colors sparingly and ensure sufficient contrast
5. **Blockquotes**: Include `.blockquote-footer` with citation when appropriate

## Accessibility

- ✅ Use proper heading hierarchy (h1-h6)
- ✅ Ensure sufficient color contrast (WCAG AA minimum)
- ✅ Use semantic HTML elements
- ✅ Provide `title` attribute on abbreviations
- ✅ Use `<cite>` for citations

## Do's

- ✅ Maintain consistent heading hierarchy
- ✅ Use `.lead` for important introductory text
- ✅ Use text utilities for emphasis and context
- ✅ Use semantic HTML elements
- ✅ Ensure text is readable and has good contrast

## Don'ts

- ❌ Don't skip heading levels (h1 → h3)
- ❌ Don't use headings for styling only (use CSS classes)
- ❌ Don't use low contrast text
- ❌ Don't use color alone to convey meaning
- ❌ Don't use `<br>` for spacing (use margin utilities)

## Dependencies

- Bootstrap 5.3.8 CSS only
- No JavaScript required

## Example Usage

```html
<!-- Display Heading -->
<h1 class="display-4">Large Display Heading</h1>

<!-- Lead Paragraph -->
<p class="lead">This is an important introduction paragraph.</p>

<!-- Contextual Text -->
<p class="text-success">Success message text.</p>

<!-- Blockquote -->
<blockquote class="blockquote">
    <p>Important quote here.</p>
    <footer class="blockquote-footer">Author Name</footer>
</blockquote>
```

