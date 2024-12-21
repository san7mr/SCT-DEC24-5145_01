import { initNavigation } from './src/js/navigation.js';
import { initContactForm } from './src/js/contact.js';
import { initScrollAnimations } from './src/js/animations.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initContactForm();
  initScrollAnimations();
});