# Carousel Component

## Purpose
Carousel components provide slideshows for cycling through images, content, or other elements.

## Variants

### Structure
- `carousel slide` - Main container
- `carousel-inner` - Container for slides
- `carousel-item` - Individual slide
- `carousel-indicators` - Dot indicators
- `carousel-control-prev` / `carousel-control-next` - Navigation buttons
- `carousel-caption` - Optional captions

### Options
- `data-bs-ride="carousel"` - Auto-play
- `data-bs-interval` - Auto-play interval (milliseconds)

## Usage Rules

1. **Unique ID required**: Carousel needs unique `id`
2. **Data attributes**: Include `data-bs-ride="carousel"` for auto-play
3. **Indicators**: Each slide needs corresponding indicator button
4. **ARIA labels**: Indicators need `aria-label` for each slide
5. **Alt text**: All images must have descriptive `alt` attributes
6. **Active state**: First slide should have `active` class

## Accessibility

- ✅ `aria-label` on indicator buttons
- ✅ `visually-hidden` text on control buttons
- ✅ Descriptive alt text on images
- ✅ Keyboard navigation supported

## Do's

- ✅ Provide descriptive alt text for images
- ✅ Include captions when helpful
- ✅ Use appropriate number of slides
- ✅ Ensure images are optimized

## Don'ts

- ❌ Don't skip alt text on images
- ❌ Don't use too many slides
- ❌ Don't auto-play without user control option

## Dependencies

- Bootstrap 5.3.8 CSS
- Bootstrap 5.3.8 JavaScript bundle (required)

