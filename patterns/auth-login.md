# Pattern: Authentication Login

## Purpose / When to Use
Authentication login pattern is used for user sign-in pages. Use this pattern for login forms, password reset, and authentication flows.

## Components Used
- `/components/form/input.html` - Email and password inputs
- `/components/form/checkbox.html` - "Remember me" checkbox
- `/components/button/button.html` - Login button
- `/components/alert/alert.html` - Error messages
- `/components/card/card.html` - Form container (optional)

## Layout Structure

```html
<main class="container py-5">
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title text-center mb-4">Sign In</h2>
                    
                    <!-- Error Alert -->
                    <div class="alert alert-danger" role="alert" style="display: none;">
                        Invalid credentials
                    </div>
                    
                    <form>
                        <!-- Email Input -->
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" required>
                        </div>
                        
                        <!-- Password Input -->
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required>
                        </div>
                        
                        <!-- Remember Me -->
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="remember">
                            <label class="form-check-label" for="remember">Remember me</label>
                        </div>
                        
                        <!-- Submit Button -->
                        <button type="submit" class="btn btn-primary w-100">Sign In</button>
                    </form>
                    
                    <!-- Links -->
                    <div class="text-center mt-3">
                        <a href="#">Forgot password?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
```

## Spacing Rules
- Use `justify-content-center` to center the form
- Use `col-md-6 col-lg-4` for responsive form width
- Use `mb-4` for spacing below title
- Use `mb-3` for spacing between form fields
- Use `mt-3` for spacing above footer links
- Use `w-100` on submit button for full width

## Accessibility Notes
- Form must have proper labels for all inputs
- Error messages must be announced to screen readers
- Use `type="email"` and `type="password"` for proper input types
- Include `required` attributes on mandatory fields
- Ensure error messages are visible and descriptive

## Do's
- ✅ Keep form simple and focused
- ✅ Use email input type for email fields
- ✅ Use password input type for password fields
- ✅ Center the form on the page
- ✅ Provide clear error messages
- ✅ Include "Forgot password" link
- ✅ Use full-width submit button

## Don'ts
- ❌ Don't use generic error messages
- ❌ Don't skip form validation
- ❌ Don't use placeholder text as labels
- ❌ Don't make form too wide (keep it narrow)
- ❌ Don't hide password requirements until after error

