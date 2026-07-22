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

  // Prefills the contact form based on a ?intent= query param (e.g. a "Book Business
  // Photography" button elsewhere on the site linking to /contact.html?intent=photography),
  // then smooth-scrolls the form into view. Everything stays editable afterward.
  function initContactPrefill() {
    var form = document.querySelector('[data-contact-form]');
    if (!form) return;

    var TEMPLATES = {
      photography: {
        service: 'Business Photography',
        message:
          "Hi!\n\nI'm interested in Business Photography.\n\n" +
          'Business Location: \n\n' +
          'Type of Business: \n\n' +
          'What would you like photographed?\n' +
          '☐ Storefront\n☐ Interior\n☐ Team\n☐ Products\n☐ Fleet / Vehicles\n☐ Other\n\n' +
          'Preferred Date: \n\n' +
          "Anything else you'd like us to know?",
      },
      bundle: {
        service: 'Website + Photography Bundle',
        message:
          "Hi!\n\nI'm interested in a new website along with Business Photography.\n\n" +
          'Business Location: \n\n' +
          'Type of Business: \n\n' +
          'Current Website (if applicable): \n\n' +
          'Tell us about your project:',
      },
    };

    var intent = new URLSearchParams(window.location.search).get('intent');
    var template = TEMPLATES[intent];
    if (!template) return;

    var select = form.elements['service'];
    var textarea = form.elements['message'];
    if (select) select.value = template.service;
    if (textarea && !textarea.value) textarea.value = template.message;

    var card = form.closest('.contact-form-card') || form;
    window.requestAnimationFrame(function () {
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // Photography gallery: renders a masonry grid from window.PHOTOGRAPHY_IMAGES (shuffled
  // fresh on every load), paginates with "Load More", and opens a simple prev/next/close
  // lightbox. Adding a photo only requires dropping a file into the images folder and
  // listing its name in assets/js/photography-images.js — no layout code to touch.
  function initPhotoGallery() {
    var grid = document.querySelector('[data-photo-grid]');
    if (!grid) return;

    var BASE = '/assets/img/photography/gallery/';
    var PAGE_SIZE = 9;
    var images = (window.PHOTOGRAPHY_IMAGES || []).slice();

    for (var i = images.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = images[i];
      images[i] = images[j];
      images[j] = tmp;
    }

    var loadMoreBtn = document.querySelector('[data-photo-load-more]');
    var lightbox = document.querySelector('[data-lightbox]');
    var lightboxImg = lightbox ? lightbox.querySelector('[data-lightbox-img]') : null;
    var shown = 0;
    var currentIndex = 0;

    function setLightboxImage(index) {
      currentIndex = index;
      if (lightboxImg) lightboxImg.src = BASE + images[currentIndex];
    }

    function openLightbox(index) {
      if (!lightbox) return;
      setLightboxImage(index);
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
    }

    function showRelative(delta) {
      setLightboxImage((currentIndex + delta + images.length) % images.length);
    }

    function renderBatch() {
      images.slice(shown, shown + PAGE_SIZE).forEach(function (file, i) {
        var index = shown + i;
        var item = document.createElement('a');
        item.href = BASE + file;
        item.className = 'photo-item';

        var img = document.createElement('img');
        img.src = BASE + file;
        img.alt = 'Black Maple Digital business photography example';
        img.loading = 'lazy';
        item.appendChild(img);

        item.addEventListener('click', function (e) {
          e.preventDefault();
          openLightbox(index);
        });

        grid.appendChild(item);
      });
      shown = Math.min(shown + PAGE_SIZE, images.length);

      if (loadMoreBtn) loadMoreBtn.hidden = shown >= images.length;
    }

    renderBatch();
    if (loadMoreBtn) loadMoreBtn.addEventListener('click', renderBatch);

    if (lightbox) {
      var closeBtn = lightbox.querySelector('[data-lightbox-close]');
      var prevBtn = lightbox.querySelector('[data-lightbox-prev]');
      var nextBtn = lightbox.querySelector('[data-lightbox-next]');

      if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
      if (prevBtn) prevBtn.addEventListener('click', function () { showRelative(-1); });
      if (nextBtn) nextBtn.addEventListener('click', function () { showRelative(1); });

      lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
      });

      document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('is-open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showRelative(-1);
        if (e.key === 'ArrowRight') showRelative(1);
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
    initContactPrefill();
    initPhotoGallery();
    initFooterYear();
  });
})();
