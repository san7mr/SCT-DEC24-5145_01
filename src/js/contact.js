export function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}