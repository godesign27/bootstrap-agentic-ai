# Prompt Library

This folder contains **optional prompt templates** designed to accelerate agent interactions with this repository.

## Purpose

These prompts exist to:
- Reduce hallucination
- Reduce token usage
- Standardize intent

## Important Note

**Governance still lives in AGENT_RULES.md and related instruction files.** These prompts are accelerators, not replacements. They reference governance files; they do not restate them verbosely.

## Usage

Copy and paste the appropriate prompt template into your Agentic AI tool, then customize as needed for your specific task.

## Available Prompts

- `start.md` - Universal entry prompt for any Agentic AI tool
- `small-feature.md` - Single component or tightly scoped UI features
- `medium-feature.md` - Multi-component or single-page features
- `large-feature.md` - Complex or multi-page features
- `brand-setup.md` - Generate deterministic color scales from base brand colors
- `changelog_prompt.md` - Post-change documentation mode

## Prompt Library UI

A visual browser for all prompts is available. See the demo at `/examples/prompt-library/index.html` or add the drawer component to any page:

```html
<link rel="stylesheet" href="/assets/prompt-drawer/prompt-drawer.css">
<script type="module" src="/assets/prompt-drawer/prompt-drawer.js"></script>
```

Press `Cmd+L` (Mac) or `Ctrl+L` (Windows/Linux) to open the drawer, or see `/assets/prompt-drawer/README.md` for details.

