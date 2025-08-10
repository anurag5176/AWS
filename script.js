// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // Close on link click (mobile)
  document.querySelectorAll('[data-nav]').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

// Scroll reveal
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Subtle parallax on hero visuals
const visual = document.querySelector('.hero__visual');
if (visual) {
  window.addEventListener('scroll', () => {
    const rect = visual.getBoundingClientRect();
    const offset = Math.max(-20, Math.min(20, (window.innerHeight - rect.top) / 40));
    visual.style.transform = `translateY(${offset}px)`;
  }, { passive: true });
}
