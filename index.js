document.querySelectorAll('.lazy-block').forEach(el => 
  new IntersectionObserver(entries => 
    entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'))
  ).observe(el)
);