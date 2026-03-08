(() => {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) {
    return;
  }

  targets.forEach((el) => {
    const delay = el.getAttribute('data-delay');
    if (delay) {
      el.style.setProperty('--delay', `${delay}ms`);
    }
  });

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      root: null,
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px',
    },
  );

  targets.forEach((el) => {
    if (!el.classList.contains('is-visible')) {
      io.observe(el);
    }
  });
})();
