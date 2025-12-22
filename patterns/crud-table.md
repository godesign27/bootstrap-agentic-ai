# Pattern: CRUD Table

## Purpose / When to Use
CRUD (Create, Read, Update, Delete) table pattern is used for managing data records. Use this pattern for admin interfaces, content management, and data administration pages.

## Components Used
- `/components/navbar/navbar.html` - Navigation
- `/components/table/table.html` - Data table with actions
- `/components/button/button.html` - Create, Edit, Delete buttons
- `/components/modal/modal.html` - Confirmation modals for delete
- `/components/alert/alert.html` - Success/error messages

## Layout Structure

```html
<nav class="navbar ...">...</nav>
<main class="container py-5">
    <div class="row mb-4">
        <div class="col-md-6">
            <h1>Items</h1>
        </div>
        <div class="col-md-6 text-end">
            <button class="btn btn-primary">Create New</button>
        </div>
    </div>
    
    <!-- Alert Messages -->
    <div class="mb-3">
        <!-- Success/Error Alert -->
    </div>
    
    <!-- Table -->
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <thead>...</thead>
            <tbody>
                <!-- Rows with Edit/Delete buttons -->
            </tbody>
        </table>
    </div>
    
    <!-- Delete Confirmation Modal -->
    <!-- Modal component -->
</main>
```

## Spacing Rules
- Use `mb-4` for spacing between header and content
- Use `mb-3` for spacing between alerts and table
- Use `text-end` for right-aligned action buttons
- Use `me-1` or `me-2` between action buttons in table cells
- Use `btn-sm` for compact table action buttons

## Accessibility Notes
- Table must have proper `<thead>` and `<tbody>` structure
- Action buttons must have descriptive `aria-label` attributes
- Delete buttons should trigger confirmation modals
- Success/error messages must be announced to screen readers
- Use `scope` attributes on table headers

## Do's
- ✅ Include a clear "Create" button above the table
- ✅ Use striped and hover effects for better readability
- ✅ Provide confirmation for destructive actions (delete)
- ✅ Show success/error feedback after actions
- ✅ Use status badges to indicate record state
- ✅ Make action buttons clearly labeled

## Don'ts
- ❌ Don't allow delete without confirmation
- ❌ Don't use generic button labels ("Click", "Action")
- ❌ Don't skip table header structure
- ❌ Don't hide important actions
- ❌ Don't use tables for simple lists (use list-group)

