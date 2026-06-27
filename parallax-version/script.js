document.getElementById('year').textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const layers = Array.from(document.querySelectorAll('.parallax-layer'));
const progressBar = document.getElementById('progressBar');

let ticking = false;

function updateOnScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
  progressBar.style.width = progress + '%';

  if (!prefersReducedMotion) {
    layers.forEach((layer) => {
      const speed = parseFloat(layer.dataset.speed || '0.2');
      // Only translate layers relative to their own section so it stays subtle and contained
      const section = layer.closest('header, section');
      const sectionTop = section ? section.offsetTop : 0;
      const relativeScroll = scrollY - sectionTop;
      const offset = relativeScroll * speed * -1;
      layer.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  }

  ticking = false;
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateOnScroll);
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', onScroll);
updateOnScroll();

// Reveal-on-scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}
