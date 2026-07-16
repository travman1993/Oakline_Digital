/* Black Maple Digital — shared site behavior (no framework, no build step) */
(function () {
  'use strict';

  function initThemeToggle() {
    var buttons = document.querySelectorAll('[data-theme-toggle]');
    if (!buttons.length) return;

    function paintButtons() {
      var isDark = document.documentElement.classList.contains('dark');
      buttons.forEach(function (btn) {
        var use = btn.querySelector('use');
        if (use) use.setAttribute('href', '/assets/icons/sprite.svg#icon-' + (isDark ? 'sun' : 'moon'));
      });
    }

    paintButtons();

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var isDark = document.documentElement.classList.toggle('dark');
        try {
          localStorage.setItem('blackmaple-theme', isDark ? 'dark' : 'light');
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
      if (use) use.setAttribute('href', '/assets/icons/sprite.svg#icon-' + (open ? 'x' : 'menu'));
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
    if (!form) return;

    var BUSINESS_EMAIL = 'support@blackmaple.co';
    var BUSINESS_PHONE = '+14046494654';

    function field(name) {
      var el = form.elements[name];
      return el ? el.value.trim() : '';
    }

    function buildBody() {
      var lines = ['Name: ' + field('name')];
      if (field('business')) lines.push('Business: ' + field('business'));
      if (field('email')) lines.push('Email: ' + field('email'));
      if (field('phone')) lines.push('Phone: ' + field('phone'));
      if (field('service')) lines.push('Service: ' + field('service'));
      lines.push('');
      lines.push('Message:');
      lines.push(field('message'));
      return lines.join('\n');
    }

    var emailBtn = form.querySelector('[data-send-email]');
    var textBtn = form.querySelector('[data-send-text]');

    if (emailBtn) {
      emailBtn.addEventListener('click', function () {
        if (!form.reportValidity()) return;
        var business = field('business');
        var subject = 'New Project Inquiry' + (business ? ' — ' + business : '');
        var url = 'mailto:' + BUSINESS_EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(buildBody());
        window.location.href = url;
      });
    }

    if (textBtn) {
      textBtn.addEventListener('click', function () {
        if (!form.reportValidity()) return;
        var url = 'sms:' + BUSINESS_PHONE + '?body=' + encodeURIComponent(buildBody());
        window.location.href = url;
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
