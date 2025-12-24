# Prompt Drawer

A right-side drawer component for browsing and copying prompts from the Prompt Library.

## Quick Start

Add these two lines to your HTML file:

```html
<link rel="stylesheet" href="/assets/prompt-drawer/prompt-drawer.css">
<script type="module" src="/assets/prompt-drawer/prompt-drawer.js"></script>
```

## Usage

### Hotkey

- **Mac**: Press `Cmd+L` to open/close the drawer
- **Windows/Linux**: Press `Ctrl+L` to open/close the drawer
- **ESC**: Close the drawer

### Programmatic Control

The drawer is also exposed globally as `window.promptDrawer`:

```javascript
// Open drawer
window.promptDrawer.open();

// Close drawer
window.promptDrawer.close();

// Toggle drawer
window.promptDrawer.toggle();
```

## Features

- Right-side drawer overlay
- Keyboard shortcuts (Cmd/Ctrl+L, ESC)
- Focus trap when open
- Groups prompts by category
- Displays prompt content in readable format
- One-click copy to clipboard
- Accessible (ARIA labels, keyboard navigation)
- No external dependencies

## Requirements

- Must be served via a local web server (file:// protocol will fail due to CORS)
- Requires `/prompts/PROMPTS_INDEX.json` to exist
- Prompt markdown files must be accessible via relative paths

## Demo

See `/examples/prompt-library/index.html` for a working example.

