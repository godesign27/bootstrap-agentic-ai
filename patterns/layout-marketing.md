# Layout: Marketing

## Purpose / When to Use
Marketing layouts are used for landing pages, product showcases, and promotional content. Use this pattern for public-facing pages that need to convert visitors into customers.

## Components Used
- `/components/navbar/navbar.html` - Top navigation with CTA
- `/components/card/card.html` - Feature cards, testimonial cards
- `/components/button/button.html` - Primary CTAs
- `/components/alert/alert.html` - Promotional banners (optional)

## Layout Structure

```html
<nav class="navbar ...">...</nav>
<main>
    <!-- Hero Section -->
    <section class="container py-5">
        <div class="row align-items-center">
            <div class="col-lg-6">
                <h1>Hero Title</h1>
                <p>Hero description</p>
                <button class="btn btn-primary btn-lg">CTA Button</button>
            </div>
            <div class="col-lg-6">
                <!-- Hero Image -->
            </div>
        </div>
    </section>
    
    <!-- Features Section -->
    <section class="container py-5">
        <div class="row text-center mb-5">
            <div class="col-12">
                <h2>Features</h2>
            </div>
        </div>
        <div class="row g-4">
            <div class="col-md-4">
                <!-- Feature Card -->
            </div>
            <!-- More feature cards -->
        </div>
    </section>
</main>
```

## Spacing Rules
- Use `container` for content sections
- Use `py-5` for section vertical padding
- Use `mb-5` for spacing between sections
- Use `g-4` for card grids
- Hero sections: `py-5` or larger (`py-5` to `py-5`)
- Feature cards: `col-md-4` for 3-column layout

## Accessibility Notes
- Use semantic HTML5 section elements
- Ensure sufficient color contrast for text over backgrounds
- Provide alt text for all images
- Use descriptive link text (not "click here")
- Ensure CTAs are clearly labeled and keyboard accessible

## Do's
- ✅ Use clear, benefit-focused headlines
- ✅ Include prominent CTAs above the fold
- ✅ Use visual hierarchy to guide attention
- ✅ Keep content scannable with short paragraphs
- ✅ Use testimonials and social proof
- ✅ Make CTAs stand out with primary button styles

## Don'ts
- ❌ Don't use too many competing CTAs
- ❌ Don't overload with text (keep it concise)
- ❌ Don't use low contrast text
- ❌ Don't hide important information below the fold
- ❌ Don't use generic stock photos without context

