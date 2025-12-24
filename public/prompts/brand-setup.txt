You are working in the repository: bootstrap-agentic-ai.

## Task: Brand Color Setup

**Scope**: Generate deterministic color scales (50-900) from base brand colors and write them as CSS custom properties (tokens).

## Constraints

1. **Token-Only Output**
   - Write colors ONLY as CSS custom properties in `/styles/tokens.css` or `/styles/brand.css`
   - Do NOT generate UI components (except required Brand Preview page)
   - Do NOT modify component files
   - Do NOT add inline styles

2. **Deterministic Color Scale Generation (50-900 Scales Required)**
   - Generate full color scales: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 from base color inputs
   - ALL scales (50-900) must be generated for each provided base color
   - Use deterministic, non-subjective algorithms (HSL manipulation)
   - Base color (500) = provided input color
   - Lighter shades (50-400): Increase lightness, maintain hue and saturation
   - Darker shades (600-900): Decrease lightness, maintain hue and saturation
   - Ensure WCAG 2.1 AA contrast ratios where applicable
   - Write all scales as CSS custom properties (tokens), not hard-coded into components

3. **Color Scale Algorithm Rules**
   - Convert base color to HSL
   - For scale 50-400 (lighter): Lightness = base lightness + (100 - base lightness) * (1 - scale/500)
   - For scale 600-900 (darker): Lightness = base lightness * (1 - (scale - 500) / 500)
   - Maintain original hue and saturation
   - Clamp lightness values between 5% and 95%
   - Convert back to hex format

4. **Token Naming Convention**
   - Use format: `--brand-{name}-{scale}` (e.g., `--brand-primary-50`, `--brand-primary-500`, `--brand-primary-900`)
   - For base brand colors: `--brand`, `--brand-2`, `--brand-3`, `--brand-4`
   - Generate scales: `--brand-{name}-50` through `--brand-{name}-900`
   - Maintain compatibility with existing `--brand`, `--brand-2`, `--brand-3`, `--brand-4` variables

5. **File Structure**
   - If `/styles/brand.css` exists: Append color scales to existing file
   - If `/styles/brand.css` does not exist: Create new file with color scales
   - Do NOT modify `/styles/tokens.css` (base tokens only)
   - Do NOT modify `/styles/overrides.css` (utility classes only)

## Required Input

Provide base brand colors:
- Primary brand color (hex): [e.g., #0d6efd]
- Secondary brand color (hex): [e.g., #6c757d]
- Accent brand color (hex): [e.g., #198754]
- Highlight/Warn brand color (hex): [e.g., #dc3545]

## Brand Preview Page (Required)

Create `/start/brand-preview.html` as a visual verification page.

This page must:
- Render a simple preview UI of all brand tokens:
  - `--brand-*` scales (50-900) for primary color
  - `--brand-secondary-*` scales (50-900) if secondary colors are provided
  - `--brand-accent-*` scales (50-900) if accent color is provided
  - `--brand-highlight-*` scales (50-900) if highlight color is provided
- Show swatches + token name + hex value (computed from CSS or displayed as text in markup)
- Include light/dark preview guidance if theming supports it
- Be usable as a quick visual verification page (no build tools required)
- Use static HTML with CSS custom properties

The preview page serves as visual verification that all color scales are correctly generated and accessible.

## Required Checks

- [ ] Color scales generated: All scales (50-900) created for each base color
- [ ] Token format: Colors written as CSS custom properties only
- [ ] Brand Preview page created: `/start/brand-preview.html` exists and displays all scales
- [ ] No component modification: Component files remain unchanged
- [ ] Deterministic algorithm: Color scales use consistent HSL manipulation
- [ ] File location: Colors written to `/styles/brand.css` (create if needed)

## Workflow

1. Accept base brand color inputs (4 colors as hex values)
2. For each base color:
   a. Convert hex to HSL
   b. Generate scale 50-400 (lighter shades)
   c. Generate scale 600-900 (darker shades)
   d. Set scale 500 = base color
   e. Convert HSL back to hex
3. Write all color scales as CSS custom properties to `/styles/brand.css`
4. Maintain existing `--brand`, `--brand-2`, `--brand-3`, `--brand-4` variables (map to 500 scale)
5. Create Brand Preview page at `/start/brand-preview.html` displaying all generated scales
6. Output structured summary

## Output Format

1. Base colors received: [list of 4 hex colors]
2. Color scales generated: [confirmation for each color with 50-900 scales]
3. File created/modified: `/styles/brand.css`
4. Brand Preview page created: `/start/brand-preview.html`
5. Token variables created: [count of variables]
6. Implementation summary: [concise description]

## Deliverable

CSS custom properties file (`/styles/brand.css`) containing:
- Full color scales (50-900) for each base brand color
- Existing `--brand`, `--brand-2`, `--brand-3`, `--brand-4` variables mapped to 500 scale
- All colors as deterministic, algorithm-generated tokens

## Example Output Structure

```css
:root {
    /* Primary Brand Color Scale */
    --brand-primary-50: #e3f2fd;
    --brand-primary-100: #bbdefb;
    --brand-primary-200: #90caf9;
    --brand-primary-300: #64b5f6;
    --brand-primary-400: #42a5f5;
    --brand-primary-500: #0d6efd;  /* Base color */
    --brand-primary-600: #0b5ed7;
    --brand-primary-700: #0a58ca;
    --brand-primary-800: #084298;
    --brand-primary-900: #052c65;
    
    /* Maintain compatibility */
    --brand: var(--brand-primary-500);
    --brand-2: var(--brand-secondary-500);
    --brand-3: var(--brand-accent-500);
    --brand-4: var(--brand-highlight-500);
    
    /* Additional scales for brand-2, brand-3, brand-4... */
}
```

## Optional: Prompt Library Integration (Non-Blocking)

If a Prompt Library drawer exists in this project:
- Add an entry to PROMPTS_INDEX.json under a "Theming" category
- The entry should reference the Brand Setup prompt itself
- The goal is discoverability, not execution

Rules:
- This step is optional
- Do NOT fail the task if the Prompt Library does not exist
- Do NOT modify drawer UI or behavior
- Do NOT duplicate entries

Purpose:
Make Brand Setup discoverable alongside other system prompts without coupling branding to UI generation.

After completing this task, execute /prompts/changelog_prompt.md.

