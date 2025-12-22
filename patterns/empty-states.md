# Pattern: Empty States

## Purpose / When to Use
Empty state pattern is used when there is no data to display. Use this pattern for empty lists, no search results, first-time user experiences, and onboarding.

## Components Used
- `/components/card/card.html` - Container for empty state
- `/components/button/button.html` - Primary action button
- `/components/images/images.html` - Optional illustration (if component exists)

## Layout Structure

```html
<main class="container py-5">
    <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 text-center">
            <!-- Optional Image/Icon -->
            <div class="mb-4">
                <svg width="120" height="120" ...><!-- Icon --></svg>
            </div>
            
            <!-- Message -->
            <h2 class="mb-3">No items yet</h2>
            <p class="text-muted mb-4">
                Get started by creating your first item. It only takes a few seconds.
            </p>
            
            <!-- Primary Action -->
            <button type="button" class="btn btn-primary btn-lg">
                Create Your First Item
            </button>
            
            <!-- Optional Secondary Action -->
            <div class="mt-3">
                <a href="#" class="text-muted">Learn more</a>
            </div>
        </div>
    </div>
</main>
```

## Spacing Rules
- Use `justify-content-center` to center content
- Use `col-md-8 col-lg-6` for responsive width
- Use `text-center` for centered text
- Use `mb-4` for spacing below icon/image
- Use `mb-3` for spacing below heading
- Use `mb-4` for spacing below description
- Use `mt-3` for spacing above secondary actions

## Accessibility Notes
- Use semantic heading hierarchy
- Ensure buttons and links are keyboard accessible
- Provide alt text for any images or icons
- Use descriptive button text (not "Click here")
- Ensure sufficient color contrast for text

## Do's
- ✅ Provide clear, helpful messaging
- ✅ Include a primary action button
- ✅ Use friendly, encouraging tone
- ✅ Include visual element (icon or illustration)
- ✅ Offer secondary actions if relevant
- ✅ Explain what the user should do next

## Don'ts
- ❌ Don't use negative language ("No items", prefer "Get started")
- ❌ Don't leave users without a clear next step
- ❌ Don't use generic messages
- ❌ Don't skip visual elements (makes page feel empty)
- ❌ Don't use low contrast text

