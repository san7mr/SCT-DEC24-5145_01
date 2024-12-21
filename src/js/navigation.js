export function initNavigation() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active');
    });
  });
}