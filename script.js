document.addEventListener("DOMContentLoaded", () => {
    const animElements = document.querySelectorAll('.scroll-animate');
  
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });
  
    animElements.forEach(el => scrollObserver.observe(el));
  });