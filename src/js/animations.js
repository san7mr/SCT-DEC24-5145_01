export function initScrollAnimations() {
  window.addEventListener('scroll', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight * 0.8) {
        element.classList.add('visible');
      }
    });
  });
}