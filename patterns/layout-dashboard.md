# Layout: Dashboard

## Purpose / When to Use
Dashboard layouts are used for data-rich applications where users need to see multiple metrics, charts, and data points at a glance. Use this pattern for admin panels, analytics dashboards, and control centers.

## Components Used
- `/components/navbar/navbar.html` - Top navigation
- `/components/card/card.html` - Metric cards and content containers
- `/components/table/table.html` - Data tables
- `/components/button/button.html` - Action buttons

## Layout Structure

```html
<nav class="navbar ...">...</nav>
<main class="container py-5">
    <div class="row mb-4">
        <div class="col-12">
            <h1>Dashboard</h1>
        </div>
    </div>
    <div class="row g-4">
        <div class="col-md-6 col-lg-3">
            <!-- Metric Card -->
        </div>
        <div class="col-md-6 col-lg-3">
            <!-- Metric Card -->
        </div>
        <!-- More metric cards -->
    </div>
    <div class="row mt-4">
        <div class="col-12">
            <!-- Data Table or Chart Container -->
        </div>
    </div>
</main>
```

## Spacing Rules
- Use `container` for main wrapper
- Use `py-5` on main for vertical padding
- Use `row g-4` for card grids (gap between cards)
- Use `mb-4` for section spacing
- Use `mt-4` for spacing between sections
- Metric cards: `col-md-6 col-lg-3` for 4-column grid on large screens

## Accessibility Notes
- Use proper heading hierarchy (h1 for page title, h2-h6 for sections)
- Ensure all interactive elements are keyboard accessible
- Provide alt text for any charts or images
- Use ARIA labels for icon-only buttons
- Maintain focus order (top to bottom, left to right)

## Do's
- ✅ Use grid system for responsive card layouts
- ✅ Group related metrics together
- ✅ Use consistent card heights for visual alignment
- ✅ Include clear section headings
- ✅ Provide loading states for dynamic content
- ✅ Use appropriate color coding for status indicators

## Don'ts
- ❌ Don't overload dashboard with too many metrics
- ❌ Don't use tables for simple metric displays (use cards)
- ❌ Don't skip heading hierarchy
- ❌ Don't use color alone to convey information
- ❌ Don't create fixed-width layouts (use responsive grid)

