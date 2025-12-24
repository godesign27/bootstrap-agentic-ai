/**
 * Prompt Drawer - Cards + Takeover View
 * 
 * Hotkeys: Cmd/Ctrl+L or Cmd/Ctrl+K toggles drawer
 * Declarative: data-open-prompt-drawer attribute opens drawer
 */

class PromptDrawer {
  constructor() {
    this.isOpen = false;
    this.prompts = [];
    this.currentPrompt = null;
    this.currentView = 'list'; // 'list' or 'detail'
    this.init();
  }

  init() {
    this.createDrawer();
    this.setupHotkeys();
    this.setupClickTriggers();
    this.loadPrompts();
  }

  createDrawer() {
    // Overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'prompt-drawer-overlay';
    this.overlay.setAttribute('role', 'dialog');
    this.overlay.setAttribute('aria-modal', 'true');
    this.overlay.setAttribute('aria-label', 'Prompt Library');
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    // Drawer container
    this.drawer = document.createElement('div');
    this.drawer.className = 'prompt-drawer';
    this.drawer.setAttribute('role', 'complementary');
    this.drawer.setAttribute('aria-label', 'Prompt Library Drawer');

    // Header
    const header = document.createElement('div');
    header.className = 'prompt-drawer-header';
    
    const title = document.createElement('h2');
    title.className = 'prompt-drawer-title';
    title.textContent = 'Prompt Library';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'prompt-drawer-close';
    closeButton.innerHTML = '&times;';
    closeButton.setAttribute('aria-label', 'Close drawer');
    closeButton.addEventListener('click', () => this.close());
    
    header.appendChild(title);
    header.appendChild(closeButton);

    // Body
    const body = document.createElement('div');
    body.className = 'prompt-drawer-body';

    // List view container
    this.listView = document.createElement('div');
    this.listView.className = 'prompt-drawer-list-view';

    // Detail view container
    this.detailView = document.createElement('div');
    this.detailView.className = 'prompt-drawer-detail-view';
    this.detailView.style.display = 'none';

    body.appendChild(this.listView);
    body.appendChild(this.detailView);

    this.drawer.appendChild(header);
    this.drawer.appendChild(body);
    this.overlay.appendChild(this.drawer);

    // Focus trap
    this.setupFocusTrap();

    document.body.appendChild(this.overlay);
  }

  setupFocusTrap() {
    const focusableElements = this.drawer.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    this.drawer.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    });
  }

  setupHotkeys() {
    document.addEventListener('keydown', (e) => {
      // Ignore when typing in form elements
      const isInputElement = e.target.tagName === 'INPUT' ||
                             e.target.tagName === 'TEXTAREA' ||
                             e.target.tagName === 'SELECT' ||
                             e.target.isContentEditable;
      
      if (isInputElement) return;
      
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const modifier = isMac ? e.metaKey : e.ctrlKey;
      
      // Ignore if other modifiers pressed
      if (e.shiftKey || e.altKey) return;
      
      // Cmd/Ctrl+L or Cmd/Ctrl+K to toggle
      if (modifier && (e.key === 'l' || e.key === 'k')) {
        e.preventDefault();
        this.toggle();
        return;
      }
      
      // ESC: close drawer or return to list
      if (e.key === 'Escape') {
        if (this.currentView === 'detail') {
          this.showListView();
        } else if (this.isOpen) {
          this.close();
        }
      }
    });
  }

  setupClickTriggers() {
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-open-prompt-drawer]');
      if (trigger) {
        e.preventDefault();
        if (!this.isOpen) {
          this.open();
        }
      }
    });
  }

  async loadPrompts() {
    try {
      const response = await fetch('/public/prompts/PROMPTS_INDEX.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      this.prompts = data.prompts || [];
      this.renderListView();
    } catch (error) {
      console.error('Failed to load prompts:', error);
      this.showError('Serve via a local web server; file:// won\'t work.');
    }
  }

  renderListView() {
    this.listView.innerHTML = '';
    
    if (this.prompts.length === 0) {
      this.listView.innerHTML = '<div class="prompt-drawer-loading">No prompts available</div>';
      return;
    }

    // Group by category
    const categories = {};
    this.prompts.forEach(prompt => {
      if (!categories[prompt.category]) {
        categories[prompt.category] = [];
      }
      categories[prompt.category].push(prompt);
    });

    // Render categories and cards
    Object.keys(categories).sort().forEach(category => {
      const categoryHeader = document.createElement('div');
      categoryHeader.className = 'prompt-drawer-category';
      categoryHeader.textContent = category;
      this.listView.appendChild(categoryHeader);

      const cardsContainer = document.createElement('div');
      cardsContainer.className = 'prompt-drawer-cards';

      categories[category].forEach(prompt => {
        const card = document.createElement('button');
        card.className = 'prompt-drawer-card';
        card.setAttribute('type', 'button');
        
        const cardTitle = document.createElement('div');
        cardTitle.className = 'prompt-drawer-card-title';
        cardTitle.textContent = prompt.title;
        
        const cardDescription = document.createElement('div');
        cardDescription.className = 'prompt-drawer-card-description';
        cardDescription.textContent = prompt.description;
        
        card.appendChild(cardTitle);
        card.appendChild(cardDescription);
        
        card.addEventListener('click', () => this.showDetail(prompt));
        
        cardsContainer.appendChild(card);
      });

      this.listView.appendChild(cardsContainer);
    });
  }

  async showDetail(prompt) {
    this.currentPrompt = prompt;
    this.currentView = 'detail';
    
    // Show detail view, hide list view
    this.listView.style.display = 'none';
    this.detailView.style.display = 'flex';
    this.detailView.innerHTML = '';

    // Header with back button
    const header = document.createElement('div');
    header.className = 'prompt-drawer-detail-header';
    
    const backButton = document.createElement('button');
    backButton.className = 'prompt-drawer-back-button';
    backButton.innerHTML = '← Back';
    backButton.addEventListener('click', () => this.showListView());
    
    const title = document.createElement('h3');
    title.className = 'prompt-drawer-detail-title';
    title.textContent = prompt.title;
    
    header.appendChild(backButton);
    header.appendChild(title);

    // Content area
    const contentArea = document.createElement('div');
    contentArea.className = 'prompt-drawer-detail-content';
    
    // Loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'prompt-drawer-loading';
    loadingDiv.textContent = 'Loading prompt...';
    contentArea.appendChild(loadingDiv);

    // Description
    const description = document.createElement('div');
    description.className = 'prompt-drawer-detail-description';
    description.textContent = prompt.description;

    // Prompt content (will be loaded)
    const promptContent = document.createElement('pre');
    promptContent.className = 'prompt-drawer-prompt-content';

    // Sticky copy button
    const copyButtonContainer = document.createElement('div');
    copyButtonContainer.className = 'prompt-drawer-copy-container';
    
    const copyButton = document.createElement('button');
    copyButton.className = 'prompt-drawer-copy-button';
    copyButton.innerHTML = '📋 Copy Prompt';
    copyButton.addEventListener('click', () => this.copyPrompt('', copyButton));
    
    copyButtonContainer.appendChild(copyButton);

    this.detailView.appendChild(header);
    this.detailView.appendChild(contentArea);
    this.detailView.appendChild(copyButtonContainer);

    // Load prompt content
    try {
      const response = await fetch(prompt.file);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text();
      
      // Remove loading indicator
      loadingDiv.remove();
      
      // Add description and content
      contentArea.appendChild(description);
      contentArea.appendChild(promptContent);
      promptContent.textContent = text;
      
      // Update copy button to use loaded content
      copyButton.onclick = () => this.copyPrompt(text, copyButton);
    } catch (error) {
      console.error('Failed to load prompt:', error);
      
      // Remove loading indicator
      loadingDiv.remove();
      
      // Add description and error content
      contentArea.appendChild(description);
      contentArea.appendChild(promptContent);
      promptContent.textContent = `Error: Failed to load prompt from ${prompt.file}\n\nServe via a local web server; file:// won't work.`;
    }

    // Focus back button
    backButton.focus();
  }

  showListView() {
    this.currentView = 'list';
    this.currentPrompt = null;
    this.listView.style.display = 'block';
    this.detailView.style.display = 'none';
  }

  async copyPrompt(text, button) {
    try {
      await navigator.clipboard.writeText(text);
      const originalHTML = button.innerHTML;
      button.innerHTML = '✓ Copied!';
      button.classList.add('copied');
      
      setTimeout(() => {
        button.innerHTML = originalHTML;
        button.classList.remove('copied');
      }, 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        const originalHTML = button.innerHTML;
        button.innerHTML = '✓ Copied!';
        button.classList.add('copied');
        setTimeout(() => {
          button.innerHTML = originalHTML;
          button.classList.remove('copied');
        }, 2000);
      } catch (err) {
        alert('Failed to copy. Please copy manually.');
      }
      document.body.removeChild(textarea);
    }
  }

  showError(message) {
    this.listView.innerHTML = `
      <div class="prompt-drawer-error">
        <div class="prompt-drawer-error-message">${message}</div>
      </div>
    `;
  }

  open() {
    if (this.isOpen) return;
    this.isOpen = true;
    this.overlay.classList.add('is-open');
    this.drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    
    const firstFocusable = this.drawer.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    firstFocusable?.focus();
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.currentView = 'list';
    this.overlay.classList.remove('is-open');
    this.drawer.classList.remove('is-open');
    document.body.style.overflow = '';
    this.showListView();
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}

// Initialize
let promptDrawer;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    promptDrawer = new PromptDrawer();
    window.promptDrawer = promptDrawer;
  });
} else {
  promptDrawer = new PromptDrawer();
  window.promptDrawer = promptDrawer;
}

