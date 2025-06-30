  document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.lazy-block');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
 
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1   
    });

    blocks.forEach(block => observer.observe(block));
  });