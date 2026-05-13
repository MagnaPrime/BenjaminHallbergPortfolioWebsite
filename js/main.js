/* ================================================================
   BENJAMIN HALLBERG — main.js
   ================================================================ */

/* ─── NAVBAR: add .scrolled class after user scrolls ─────────── */
(function () {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const THRESHOLD = 30;
  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > THRESHOLD);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}());

/* ─── SCROLL REVEAL via IntersectionObserver ─────────────────── */
(function () {
  if (!('IntersectionObserver' in window)) {
    // Fallback: make everything visible immediately
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });
}());

