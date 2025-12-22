# Pattern: Confirm Delete

## Purpose / When to Use
Confirm delete pattern is used to prevent accidental deletion of important data. Use this pattern whenever a destructive action (delete, remove, archive) is triggered.

## Components Used
- `/components/modal/modal.html` - Confirmation dialog
- `/components/button/button.html` - Delete trigger and modal actions
- `/components/alert/alert.html` - Optional warning message in modal

## Layout Structure

```html
<!-- Delete Trigger Button -->
<button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#deleteModal">
    Delete
</button>

<!-- Confirmation Modal -->
<div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header border-0">
                <h5 class="modal-title" id="deleteModalLabel">Confirm Delete</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <!-- Optional Warning Alert -->
                <div class="alert alert-warning" role="alert">
                    <strong>Warning:</strong> This action cannot be undone.
                </div>
                
                <p>Are you sure you want to delete <strong>"Item Name"</strong>?</p>
                <p class="text-muted mb-0">This will permanently remove this item and all associated data.</p>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
</div>
```

## Spacing Rules
- Use `border-0` on modal header and footer for cleaner look
- Use `mb-0` on last paragraph in modal body
- Use `text-muted` for secondary information
- Delete button should be on the right (primary action position)

## Accessibility Notes
- Modal must have proper ARIA attributes (`aria-labelledby`, `aria-hidden`)
- Delete button must be clearly labeled
- Warning message should be announced to screen readers
- Use `role="alert"` on warning alert
- Ensure keyboard navigation works (ESC to close, Tab to navigate)

## Do's
- ✅ Always require confirmation for destructive actions
- ✅ Clearly state what will be deleted
- ✅ Explain consequences of the action
- ✅ Use warning styling (alert-warning) for emphasis
- ✅ Place Cancel button on left, Delete on right
- ✅ Use danger button style for delete action

## Don'ts
- ❌ Don't allow delete without confirmation
- ❌ Don't use vague confirmation messages
- ❌ Don't hide the consequences
- ❌ Don't make it too easy to accidentally confirm
- ❌ Don't use generic "OK" button (use "Delete" or "Remove")

