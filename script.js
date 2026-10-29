/* ═══════════════════════════════════════════════════════════════
   LOTUS — script.js
   Handles: mobile nav toggle, scroll-fade animations
═══════════════════════════════════════════════════════════════ */

'use strict';

/* ─── Mobile nav toggle ─────────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.getElementById('main-nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen.toString());
  });

  /* Close nav when a link is clicked */
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* Close nav on outside click */
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();


/* ─── Scroll-fade animations ────────────────────────────────── */
(function () {
  /* Respect user preference for reduced motion */
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  /* Elements to animate */
  var selectors = [
    '.hero-text',
    '.hero-image-wrap',
    '.who-text',
    '.who-image-wrap',
    '.stat-item',
    '.sectors-header',
    '.sector-column',
    '.how-header',
    '.step-item',
    '.quote-text-col',
    '.quote-image-wrap',
    '.team-header',
    '.team-card',
    '.contact-info',
    '.contact-form-wrap',
  ];

  var elements = document.querySelectorAll(selectors.join(', '));

  elements.forEach(function (el) {
    el.classList.add('fade-in');
  });

  /* Stagger siblings for a natural rhythm */
  function staggerChildren(parentSelector, childSelector) {
    document.querySelectorAll(parentSelector).forEach(function (parent) {
      parent.querySelectorAll(childSelector).forEach(function (child, i) {
        child.style.transitionDelay = (i * 80) + 'ms';
      });
    });
  }

  staggerChildren('.stats-inner',  '.stat-item');
  staggerChildren('.steps-list',   '.step-item');
  staggerChildren('.team-cards',   '.team-card');
  staggerChildren('.sectors-grid', '.sector-column');

  /* IntersectionObserver — trigger once */
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();


/* ─── Accessible form ───────────────────────────────────────── */
(function () {
  var form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    /* Basic client-side validation feedback */
    var invalid = false;
    form.querySelectorAll('[required]').forEach(function (field) {
      if (!field.value.trim()) {
        field.setAttribute('aria-invalid', 'true');
        field.style.borderColor = '#B45309';
        invalid = true;
      } else {
        field.removeAttribute('aria-invalid');
        field.style.borderColor = '';
      }
    });

    if (invalid) return;

    /*
      PLACEHOLDER: Replace the alert below with your actual form submission logic.
      Options: Formspree (action="https://formspree.io/f/YOUR_ID"),
               EmailJS, or a backend endpoint.
    */
    var btn = form.querySelector('.btn-submit');
    btn.textContent = 'Sent — we will be in touch.';
    btn.disabled = true;
    btn.style.opacity = '0.6';
  });
})();
