# Pattern: Search, Filter, and Sort

## Purpose / When to Use
Search, filter, and sort pattern is used for data-rich pages where users need to find and organize content. Use this pattern for product listings, content libraries, and data tables.

## Components Used
- `/components/form/input.html` - Search input
- `/components/form/select.html` - Filter and sort dropdowns
- `/components/button/button.html` - Filter toggle buttons
- `/components/table/table.html` - Results table (if applicable)
- `/components/card/card.html` - Result cards (if applicable)

## Layout Structure

```html
<main class="container py-5">
    <!-- Search and Filter Bar -->
    <div class="row mb-4">
        <div class="col-md-6 mb-3 mb-md-0">
            <!-- Search Input -->
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Search...">
                <button class="btn btn-outline-secondary" type="button">Search</button>
            </div>
        </div>
        <div class="col-md-3 mb-3 mb-md-0">
            <!-- Filter Dropdown -->
            <select class="form-select">
                <option>All Categories</option>
                <option>Category 1</option>
            </select>
        </div>
        <div class="col-md-3">
            <!-- Sort Dropdown -->
            <select class="form-select">
                <option>Sort by: Newest</option>
                <option>Sort by: Oldest</option>
                <option>Sort by: Name</option>
            </select>
        </div>
    </div>
    
    <!-- Active Filters (if any) -->
    <div class="row mb-3">
        <div class="col-12">
            <span class="badge bg-primary me-2">
                Filter: Category 1
                <button type="button" class="btn-close btn-close-white ms-2" aria-label="Remove"></button>
            </span>
        </div>
    </div>
    
    <!-- Results -->
    <div class="row">
        <!-- Table or Card Grid -->
    </div>
</main>
```

## Spacing Rules
- Use `mb-4` for spacing between filter bar and results
- Use `mb-3` for spacing between active filters and results
- Use `mb-3 mb-md-0` for responsive spacing on filter controls
- Use `me-2` for spacing between active filter badges
- Use `ms-2` for spacing between badge text and close button

## Accessibility Notes
- Search input must have a label (can be visually hidden with `sr-only`)
- Filter and sort dropdowns must have labels
- Active filter removal buttons must have `aria-label`
- Ensure keyboard navigation works for all controls
- Provide clear feedback when filters are applied

## Do's
- ✅ Place search prominently (left side, full width on mobile)
- ✅ Group related filters together
- ✅ Show active filters with removable badges
- ✅ Provide clear sort options
- ✅ Show result count when applicable
- ✅ Make filter controls responsive

## Don'ts
- ❌ Don't hide search functionality
- ❌ Don't use too many filter options (group them)
- ❌ Don't forget to show active filters
- ❌ Don't use unclear sort labels
- ❌ Don't make filters hard to reset

