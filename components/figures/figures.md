# Figures Component

## Purpose
Figure components provide semantic HTML5 structure for images with captions. Use for images that need descriptive captions.

## Variants

### Figure Structure
- `.figure` - Container for figure
- `.figure-img` - Image within figure (typically with `.img-fluid`)
- `.figure-caption` - Caption text
- `.figure-caption.text-end` - Right-aligned caption
- `.figure-caption.text-center` - Center-aligned caption

## Usage Rules

1. **Semantic structure**: Use `<figure>` and `<figcaption>` for images with captions
2. **Always include alt text**: Images must have descriptive `alt` attributes
3. **Caption alignment**: Use text utilities (`.text-end`, `.text-center`) for caption alignment
4. **Responsive images**: Use `.img-fluid` on figure images for responsiveness
5. **Caption content**: Captions should describe or provide context for the image

## Accessibility

- ✅ Semantic HTML5 `<figure>` and `<figcaption>` elements
- ✅ Images must have descriptive `alt` attributes
- ✅ Captions provide additional context for screen readers
- ✅ Proper heading hierarchy if figures are in content sections

## Do's

- ✅ Use figures for images that need captions
- ✅ Provide descriptive alt text
- ✅ Use responsive images (`.img-fluid`)
- ✅ Align captions appropriately for design
- ✅ Keep captions concise and descriptive

## Don'ts

- ❌ Don't use figures for decorative images
- ❌ Don't skip alt attributes
- ❌ Don't use generic captions
- ❌ Don't nest figures inside figures

## Dependencies

- Bootstrap 5.3.8 CSS only
- No JavaScript required

## Example Usage

```html
<!-- Basic Figure -->
<figure class="figure">
    <img src="chart.png" class="figure-img img-fluid rounded" alt="Sales chart showing Q4 growth">
    <figcaption class="figure-caption">Quarterly sales performance for Q4 2024.</figcaption>
</figure>

<!-- Right-Aligned Caption -->
<figure class="figure">
    <img src="photo.jpg" class="figure-img img-fluid" alt="Team photo">
    <figcaption class="figure-caption text-end">Our development team in 2024.</figcaption>
</figure>
```

