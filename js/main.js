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

/* ─── PROJECT CARD MODAL ─────────────────────────────────────── */
(function () {
  var overlay  = document.getElementById('modalOverlay');
  if (!overlay) return;
  var elCompany = document.getElementById('modalCompany');
  var elTitle   = document.getElementById('modalTitle');
  var elRoles   = document.getElementById('modalRoles');
  var elBadge   = document.getElementById('modalBadge');
  var elDivider = document.getElementById('modalDivider');
  var elDesc    = document.getElementById('modalDescription');
  var elTrailer = document.getElementById('modalTrailer');

  function openModal(card) {
    var o = card.querySelector('.card-overlay');
    elCompany.innerHTML = (o.querySelector('.card-company') || {}).innerHTML || '';
    elTitle.innerHTML   = (o.querySelector('.card-title')   || {}).innerHTML || '';
    elRoles.innerHTML   = (o.querySelector('.card-roles')   || {}).innerHTML || '';

    var engine = o.querySelector('.card-engine');
    var tag    = o.querySelector('.card-tag');
    elBadge.innerHTML = engine ? engine.outerHTML : (tag ? tag.outerHTML : '');

    var desc = card.dataset.description || '';
    elDesc.textContent       = desc;
    elDivider.style.display  = desc ? '' : 'none';
    elDesc.style.display     = desc ? '' : 'none';

    var trailer = card.dataset.trailer || '';
    elTrailer.href         = trailer;
    elTrailer.style.display = trailer ? '' : 'none';

    document.body.classList.add('modal-open');
    overlay.classList.add('is-open');
    document.getElementById('modalClose').focus();
  }

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.classList.remove('modal-open');
  }

  document.querySelectorAll('.project-card').forEach(function (card) {
    card.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(card);
    });
  });

  document.getElementById('modalClose').addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
}());

