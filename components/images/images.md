# Images Component

## Purpose
Image components provide responsive images, rounded corners, thumbnails, and image alignment utilities.

## Variants

### Responsive Images
- `.img-fluid` - Makes image responsive (max-width: 100%, height: auto)

### Image Shapes
- `.rounded` - Rounded corners
- `.rounded-top` - Rounded top corners only
- `.rounded-bottom` - Rounded bottom corners only
- `.rounded-start` - Rounded left corners only
- `.rounded-end` - Rounded right corners only
- `.rounded-circle` - Circular image
- `.rounded-pill` - Pill-shaped (very rounded)

### Image Styles
- `.img-thumbnail` - Thumbnail with border and padding

### Image Alignment
- `.float-start` - Float left
- `.float-end` - Float right
- `.mx-auto d-block` - Center image (block display with auto margins)

## Usage Rules

1. **Always include alt text**: Every image must have descriptive `alt` attribute
2. **Use responsive images**: Always use `.img-fluid` for images that should scale
3. **Alt text should be descriptive**: Describe the image content, not just "image"
4. **Decorative images**: Use `alt=""` for purely decorative images (screen readers will skip)
5. **Responsive sizing**: Use appropriate image dimensions for the context

## Accessibility

- ✅ All images must have `alt` attributes
- ✅ Alt text should describe image content or function
- ✅ Decorative images should have empty alt (`alt=""`)
- ✅ Ensure images don't rely on color alone to convey information

## Do's

- ✅ Use `.img-fluid` for responsive images
- ✅ Provide descriptive alt text
- ✅ Use appropriate image formats (WebP, JPEG, PNG)
- ✅ Optimize images for web (appropriate file sizes)
- ✅ Use semantic image shapes (rounded, circle) appropriately

## Don'ts

- ❌ Don't skip alt attributes
- ❌ Don't use generic alt text like "image" or "photo"
- ❌ Don't use images for text (use actual text)
- ❌ Don't use oversized images without `.img-fluid`
- ❌ Don't use images that are too small to be readable

## Dependencies

- Bootstrap 5.3.8 CSS only
- No JavaScript required

## Example Usage

```html
<!-- Responsive Image -->
<img src="image.jpg" class="img-fluid" alt="Product photo showing the item from the front">

<!-- Circular Avatar -->
<img src="avatar.jpg" class="rounded-circle" alt="User profile picture">

<!-- Centered Image -->
<img src="logo.png" class="mx-auto d-block" alt="Company logo">

<!-- Thumbnail -->
<img src="thumbnail.jpg" class="img-thumbnail" alt="Small preview image">
```

