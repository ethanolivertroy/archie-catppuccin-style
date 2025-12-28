/**
 * Catppuccin Flavor Switcher
 * Manages switching between 4 Catppuccin flavors: Latte, Frappé, Macchiato, Mocha
 * https://catppuccin.com
 */

const FLAVORS = ['latte', 'frappe', 'macchiato', 'mocha'];
const STORAGE_KEY = 'catppuccin-flavor';
const DEFAULT_FLAVOR = 'mocha';

/**
 * Set the active Catppuccin flavor
 * @param {string} flavor - One of: latte, frappe, macchiato, mocha
 */
function setFlavor(flavor) {
  if (!FLAVORS.includes(flavor)) {
    console.warn(`Invalid flavor: ${flavor}. Using default: ${DEFAULT_FLAVOR}`);
    flavor = DEFAULT_FLAVOR;
  }

  // Store user preference
  localStorage.setItem(STORAGE_KEY, flavor);

  // Enable only the selected flavor stylesheet, disable others
  FLAVORS.forEach(f => {
    const stylesheet = document.getElementById(`flavor-${f}`);
    if (stylesheet) {
      stylesheet.disabled = (f !== flavor);
    }
  });

  // Update selector UI to reflect current flavor
  const selector = document.getElementById('flavor-selector');
  if (selector) {
    selector.value = flavor;
  }

  // Set body attribute for potential CSS targeting
  document.body.setAttribute('data-catppuccin-flavor', flavor);

  console.log(`Catppuccin flavor set to: ${flavor}`);
}

/**
 * Handle flavor selector change event
 * @param {Event} event - Change event from select element
 */
function handleFlavorChange(event) {
  const newFlavor = event.target.value;
  setFlavor(newFlavor);
}

/**
 * Initialize flavor on page load
 * Priority: localStorage > config default > DEFAULT_FLAVOR
 */
function initializeFlavor() {
  // Check localStorage for saved preference
  const savedFlavor = localStorage.getItem(STORAGE_KEY);

  // Fallback to config default (injected by Hugo)
  const configFlavor = window.CATPPUCCIN_DEFAULT_FLAVOR;

  // Final fallback to hardcoded default
  const flavor = savedFlavor || configFlavor || DEFAULT_FLAVOR;

  setFlavor(flavor);
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeFlavor);
} else {
  initializeFlavor();
}
