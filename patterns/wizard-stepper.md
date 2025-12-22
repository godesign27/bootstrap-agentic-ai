# Pattern: Wizard / Stepper

## Purpose / When to Use
Wizard/stepper pattern is used for multi-step processes like onboarding, checkout, or complex forms. Use this pattern when a process has 3+ steps that should be completed sequentially.

## Components Used
- `/components/navs-tabs/navs-tabs.html` - Step indicator (or custom stepper)
- `/components/form/input.html` - Form inputs
- `/components/button/button.html` - Next/Previous/Submit buttons
- `/components/progress/progress.html` - Progress indicator (optional)
- `/components/card/card.html` - Step content container

## Layout Structure

```html
<main class="container py-5">
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <!-- Progress Indicator -->
            <div class="mb-4">
                <div class="progress mb-2" style="height: 4px;">
                    <div class="progress-bar" role="progressbar" style="width: 33%"></div>
                </div>
                <div class="d-flex justify-content-between">
                    <span class="badge bg-primary">Step 1</span>
                    <span class="badge bg-secondary">Step 2</span>
                    <span class="badge bg-secondary">Step 3</span>
                </div>
            </div>
            
            <!-- Step Content -->
            <div class="card">
                <div class="card-body">
                    <h2 class="mb-4">Step 1: Basic Information</h2>
                    
                    <form>
                        <!-- Form fields for current step -->
                        
                        <!-- Navigation Buttons -->
                        <div class="d-flex justify-content-between mt-4">
                            <button type="button" class="btn btn-secondary" disabled>Previous</button>
                            <button type="button" class="btn btn-primary">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>
```

## Spacing Rules
- Use `justify-content-center` to center wizard
- Use `col-lg-8` for optimal width
- Use `mb-4` for spacing below progress indicator
- Use `mb-2` for spacing below progress bar
- Use `mb-4` for spacing below step heading
- Use `mt-4` for spacing above navigation buttons
- Use `justify-content-between` for Previous/Next buttons

## Accessibility Notes
- Progress indicator should use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax`
- Step indicators should be clearly labeled
- Disable "Previous" button on first step
- Disable "Next" button if current step is invalid
- Provide clear step titles
- Announce step changes to screen readers

## Do's
- ✅ Show progress clearly (progress bar + step numbers)
- ✅ Validate each step before allowing "Next"
- ✅ Allow users to go back to previous steps
- ✅ Show which step they're on
- ✅ Provide clear step titles
- ✅ Disable navigation appropriately

## Don'ts
- ❌ Don't allow skipping steps without validation
- ❌ Don't hide progress indicator
- ❌ Don't make steps too long (break into smaller steps)
- ❌ Don't use unclear step labels
- ❌ Don't lose form data when navigating between steps

