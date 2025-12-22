# Pattern: Settings Form

## Purpose / When to Use
Settings form pattern is used for user preferences, account settings, and configuration pages. Use this pattern when users need to update their profile, preferences, or system settings.

## Components Used
- `/components/navbar/navbar.html` - Navigation
- `/components/form/input.html` - Text inputs
- `/components/form/select.html` - Dropdown selects
- `/components/form/checkbox.html` - Checkboxes for toggles
- `/components/form/textarea.html` - Multi-line inputs
- `/components/button/button.html` - Save/Cancel buttons
- `/components/card/card.html` - Group related settings

## Layout Structure

```html
<nav class="navbar ...">...</nav>
<main class="container py-5">
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <h1 class="mb-4">Settings</h1>
            
            <!-- Settings Section Card -->
            <div class="card mb-4">
                <div class="card-header">
                    <h5 class="mb-0">Profile Settings</h5>
                </div>
                <div class="card-body">
                    <form>
                        <!-- Form fields -->
                    </form>
                </div>
            </div>
            
            <!-- Another Settings Section -->
            <div class="card mb-4">
                <!-- Settings group -->
            </div>
            
            <!-- Action Buttons -->
            <div class="d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-secondary">Cancel</button>
                <button type="submit" class="btn btn-primary">Save Changes</button>
            </div>
        </div>
    </div>
</main>
```

## Spacing Rules
- Use `col-lg-8 mx-auto` for centered form (max-width on large screens)
- Use `mb-4` for spacing between card sections
- Use `mb-3` for spacing between form fields
- Use `gap-2` for spacing between action buttons
- Use `card` to group related settings sections

## Accessibility Notes
- All form inputs must have associated labels
- Use `fieldset` and `legend` for grouped settings
- Provide clear error messages with `invalid-feedback`
- Ensure form validation is keyboard accessible
- Use `aria-describedby` to link help text to inputs

## Do's
- ✅ Group related settings into logical sections (cards)
- ✅ Use clear section headings
- ✅ Provide helpful placeholder text and helper text
- ✅ Show validation feedback immediately
- ✅ Include "Save" and "Cancel" buttons
- ✅ Use appropriate input types (email, tel, etc.)

## Don'ts
- ❌ Don't create overly long forms (break into sections)
- ❌ Don't skip labels on form inputs
- ❌ Don't use generic button labels
- ❌ Don't hide validation errors
- ❌ Don't auto-save without user consent (for critical settings)

