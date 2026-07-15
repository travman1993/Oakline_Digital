/* Oakline Digital — shared site behavior (no framework, no build step) */
(function () {
  'use strict';

  function initThemeToggle() {
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    if (!buttons.length) return;

    function paintButtons() {
      var isDark = document.documentElement.classList.contains('dark');
      buttons.forEach(function (btn) {
        var use = btn.querySelector('use');
        if (use) use.setAttribute('href', '#icon-' + (isDark ? 'sun' : 'moon'));
      });
    }

    paintButtons();

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var isDark = document.documentElement.classList.toggle('dark');
        try {
          localStorage.setItem('oakline-theme', isDark ? 'dark' : 'light');
        } catch (e) {}
        paintButtons();
      });
    });
  }

  function initMobileMenu() {
    var toggle = document.querySelector('[data-menu-toggle]');
    var menu = document.querySelector('[data-menu]');
    if (!toggle || !menu) return;

    function setOpen(open) {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-open', open);
      var use = toggle.querySelector('use');
      if (use) use.setAttribute('href', '#icon-' + (open ? 'x' : 'menu'));
    }

    toggle.addEventListener('click', function () {
      setOpen(!menu.classList.contains('is-open'));
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false);
      });
    });
  }

  function initNavbarScroll() {
    var navbar = document.querySelector('[data-navbar]');
    if (!navbar) return;

    function update() {
      navbar.classList.toggle('is-condensed', window.scrollY > 12);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' },
    );

    items.forEach(function (el) { observer.observe(el); });
  }

  function initPortfolioFilter() {
    var filters = document.querySelectorAll('[data-filter]');
    var cards = document.querySelectorAll('[data-category]');
    if (!filters.length || !cards.length) return;

    filters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var value = btn.getAttribute('data-filter');

        filters.forEach(function (b) { b.classList.toggle('is-active', b === btn); });
        cards.forEach(function (card) {
          var show = value === 'All' || card.getAttribute('data-category') === value;
          card.classList.toggle('is-shown', show);
        });
      });
    });
  }

  function initContactForm() {
    var form = document.querySelector('[data-contact-form]');
    var success = document.querySelector('[data-contact-success]');
    var resetBtn = document.querySelector('[data-contact-reset]');
    if (!form || !success) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var submitBtn = form.querySelector('button[type="submit"]');
      var label = submitBtn.querySelector('[data-submit-label]');
      submitBtn.disabled = true;
      if (label) label.textContent = 'Sending...';

      window.setTimeout(function () {
        form.classList.add('is-hidden');
        success.classList.add('is-shown');
      }, 900);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        success.classList.remove('is-shown');
        form.classList.remove('is-hidden');
        form.reset();
        var submitBtn = form.querySelector('button[type="submit"]');
        var label = submitBtn.querySelector('[data-submit-label]');
        submitBtn.disabled = false;
        if (label) label.textContent = 'Request a Free Consultation';
      });
    }
  }

  function initFooterYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initThemeToggle();
    initMobileMenu();
    initNavbarScroll();
    initReveal();
    initPortfolioFilter();
    initContactForm();
    initFooterYear();
  });
})();
