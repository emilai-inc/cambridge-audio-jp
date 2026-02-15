/**
 * Cambridge Audio Japan - Main JavaScript
 * Complete site-wide interactivity.
 * Vanilla JS (ES6+), no frameworks.
 *
 * Features:
 *  1. Mobile Menu Toggle
 *  2. Product Carousel (horizontal drag scroll)
 *  3. Series Slider (fade transitions, auto-advance)
 *  4. Press Quote Carousel (fade, auto-advance)
 *  5. Mega Menu (desktop hover with delay)
 *  6. Smooth Scroll (anchor links with header offset)
 *  7. Newsletter Form (validation)
 *  8. Scroll Animations (IntersectionObserver)
 *  9. Header Scroll Behavior
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ============================================
  // 1. MOBILE MENU TOGGLE
  // ============================================
  const initMobileMenu = () => {
    // --- Pattern A: about.html (#hamburger + #mobile-nav) ---
    const hamburgerA = document.getElementById('hamburger');
    const mobileNavA = document.getElementById('mobile-nav');

    if (hamburgerA && mobileNavA) {
      const toggle = (forceClose = false) => {
        const isOpen = hamburgerA.classList.contains('is-active');

        if (forceClose || isOpen) {
          hamburgerA.classList.remove('is-active');
          mobileNavA.classList.remove('is-open');
          hamburgerA.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        } else {
          hamburgerA.classList.add('is-active');
          mobileNavA.classList.add('is-open');
          hamburgerA.setAttribute('aria-expanded', 'true');
          document.body.classList.add('menu-open');
        }
      };

      hamburgerA.addEventListener('click', (e) => {
        e.stopPropagation();
        toggle();
      });

      document.addEventListener('click', (e) => {
        if (
          mobileNavA.classList.contains('is-open') &&
          !mobileNavA.contains(e.target) &&
          !hamburgerA.contains(e.target)
        ) {
          toggle(true);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNavA.classList.contains('is-open')) {
          toggle(true);
          hamburgerA.focus();
        }
      });

      mobileNavA.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => toggle(true));
      });
    }

    // --- Pattern B: index.html (#hamburger-button + #primary-nav) ---
    const hamburgerB = document.getElementById('hamburger-button');
    const primaryNav = document.getElementById('primary-nav');

    if (hamburgerB && primaryNav) {
      hamburgerB.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = primaryNav.classList.toggle('is-open');
        hamburgerB.classList.toggle('is-active', isOpen);
        hamburgerB.setAttribute('aria-expanded', String(isOpen));
        document.body.classList.toggle('menu-open', isOpen);
      });

      document.addEventListener('click', (e) => {
        if (
          primaryNav.classList.contains('is-open') &&
          !primaryNav.contains(e.target) &&
          !hamburgerB.contains(e.target)
        ) {
          primaryNav.classList.remove('is-open');
          hamburgerB.classList.remove('is-active');
          hamburgerB.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
          primaryNav.classList.remove('is-open');
          hamburgerB.classList.remove('is-active');
          hamburgerB.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
          hamburgerB.focus();
        }
      });

      primaryNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          primaryNav.classList.remove('is-open');
          hamburgerB.classList.remove('is-active');
          hamburgerB.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('menu-open');
        });
      });
    }

    // --- Pattern C: hifi/headphones/products (.menu-toggle + .header-nav) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-nav');

    if (menuToggle && headerNav) {
      menuToggle.addEventListener('click', () => {
        const isOpen = headerNav.classList.toggle('is-open');
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      headerNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          headerNav.classList.remove('is-open');
          menuToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }
  };


  // ============================================
  // 2. PRODUCT CAROUSEL (horizontal drag scroll)
  // ============================================
  const initProductCarousels = () => {
    const carousels = document.querySelectorAll('.product-carousel, .featured-carousel, [data-carousel="products"]');
    if (!carousels.length) return;

    carousels.forEach((carousel) => {
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;
      let velocity = 0;
      let lastX = 0;
      let rafId = null;
      let hasDragged = false;

      const getPageX = (e) =>
        e.pageX !== undefined ? e.pageX : (e.touches?.[0]?.pageX ?? 0);

      const onPointerDown = (e) => {
        isDown = true;
        hasDragged = false;
        carousel.classList.add('is-grabbing');
        startX = getPageX(e) - carousel.offsetLeft;
        lastX = startX;
        scrollLeft = carousel.scrollLeft;
        velocity = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      };

      const onPointerMove = (e) => {
        if (!isDown) return;
        const x = getPageX(e) - carousel.offsetLeft;
        const walk = x - startX;

        if (Math.abs(walk) > 5) {
          hasDragged = true;
          if (e.cancelable) e.preventDefault();
        }

        velocity = x - lastX;
        lastX = x;
        carousel.scrollLeft = scrollLeft - walk;
      };

      const onPointerUp = () => {
        if (!isDown) return;
        isDown = false;
        carousel.classList.remove('is-grabbing');

        // Momentum scrolling with deceleration
        const decelerate = () => {
          velocity *= 0.92;
          if (Math.abs(velocity) > 0.5) {
            carousel.scrollLeft -= velocity;
            rafId = requestAnimationFrame(decelerate);
          }
        };
        if (Math.abs(velocity) > 1) {
          rafId = requestAnimationFrame(decelerate);
        }
      };

      // Mouse events
      carousel.addEventListener('mousedown', onPointerDown);
      carousel.addEventListener('mousemove', onPointerMove);
      carousel.addEventListener('mouseup', onPointerUp);
      carousel.addEventListener('mouseleave', onPointerUp);

      // Touch events
      carousel.addEventListener('touchstart', onPointerDown, { passive: true });
      carousel.addEventListener('touchmove', (e) => {
        if (isDown) onPointerMove(e);
      }, { passive: false });
      carousel.addEventListener('touchend', onPointerUp, { passive: true });

      // Prevent link clicks while dragging
      carousel.addEventListener('click', (e) => {
        if (hasDragged) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, true);

      // Set cursor style
      carousel.style.cursor = 'grab';
      carousel.style.userSelect = 'none';
      carousel.style.webkitUserSelect = 'none';

      // Optional dot indicators
      initCarouselDots(carousel);
    });
  };

  /**
   * Create and manage dot indicators for a carousel.
   * Expects a sibling element with class "carousel-dots".
   */
  const initCarouselDots = (carousel) => {
    const dotsContainer =
      carousel.parentElement?.querySelector('.carousel-dots') ||
      carousel.closest('[data-carousel-wrapper]')?.querySelector('.carousel-dots');
    if (!dotsContainer) return;

    const items = carousel.children;
    if (!items.length) return;

    // Build dots
    Array.from(items).forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = `carousel-dot${i === 0 ? ' is-active' : ''}`;
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', () => {
        items[i].scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      });
      dotsContainer.appendChild(dot);
    });

    // Update active dot on scroll (debounced)
    let scrollTimer = null;
    carousel.addEventListener('scroll', () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const scrollPos = carousel.scrollLeft;
        const itemWidth = items[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
        const activeIndex = Math.round(scrollPos / (itemWidth + gap));
        dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
          dot.classList.toggle('is-active', i === activeIndex);
        });
      }, 80);
    }, { passive: true });
  };


  // ============================================
  // 3. SERIES SLIDER (fade transition)
  // Skip on index.html — it has its own inline script handling series carousel
  // ============================================
  const initSeriesSliders = () => {
    // Skip if inline script already handles series (index.html)
    if (document.querySelector('[data-series-prev]')) return;
    const sliders = document.querySelectorAll('.series-carousel, [data-carousel="series"]');
    if (!sliders.length) return;

    sliders.forEach((slider) => {
      const slides = slider.querySelectorAll('.series-slide');
      const counter = slider.querySelector('.series-counter, [data-carousel-counter]');
      const prevBtn = slider.querySelector('.series-prev, [data-carousel-prev]');
      const nextBtn = slider.querySelector('.series-next, [data-carousel-next]');

      if (slides.length < 2) return;

      let currentIndex = 0;
      let autoTimer = null;
      const INTERVAL = 6000;

      // Position all slides absolutely except the first
      const wrapper = slides[0].parentElement;
      wrapper.style.position = 'relative';

      slides.forEach((slide, i) => {
        slide.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0, 0.25, 1)';
        if (i !== 0) {
          slide.style.position = 'absolute';
          slide.style.inset = '0';
          slide.style.width = '100%';
          slide.style.height = '100%';
          slide.style.opacity = '0';
          slide.style.pointerEvents = 'none';
        }
        slide.setAttribute('aria-hidden', String(i !== 0));
      });

      const showSlide = (index) => {
        slides.forEach((slide, i) => {
          const isActive = i === index;
          slide.style.opacity = isActive ? '1' : '0';
          slide.style.pointerEvents = isActive ? 'auto' : 'none';
          slide.setAttribute('aria-hidden', String(!isActive));

          // Keep the active slide in the document flow
          if (isActive) {
            slide.style.position = 'relative';
          } else {
            slide.style.position = 'absolute';
          }
        });
        currentIndex = index;

        if (counter) {
          counter.textContent = `${index + 1} of ${slides.length}`;
        }
      };

      const next = () => showSlide((currentIndex + 1) % slides.length);
      const prev = () => showSlide((currentIndex - 1 + slides.length) % slides.length);

      const startAuto = () => {
        stopAuto();
        autoTimer = setInterval(next, INTERVAL);
      };

      const stopAuto = () => {
        if (autoTimer) {
          clearInterval(autoTimer);
          autoTimer = null;
        }
      };

      showSlide(0);

      // Controls
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          next();
          startAuto();
        });
      }
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          prev();
          startAuto();
        });
      }

      // Pause on hover, resume on leave
      slider.addEventListener('mouseenter', stopAuto);
      slider.addEventListener('mouseleave', startAuto);

      // Keyboard support
      slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') { next(); startAuto(); }
        if (e.key === 'ArrowLeft') { prev(); startAuto(); }
      });

      startAuto();
    });
  };


  // ============================================
  // 4. PRESS QUOTE CAROUSEL (simple fade)
  // ============================================
  const initQuoteCarousels = () => {
    const carousels = document.querySelectorAll('.quote-carousel, [data-carousel="press"]');
    if (!carousels.length) return;

    carousels.forEach((carousel) => {
      const quotes = carousel.querySelectorAll('.press-quote');
      if (quotes.length < 2) return;

      let currentIndex = 0;
      let timer = null;
      const INTERVAL = 5000;

      // Position container
      carousel.style.position = 'relative';

      // Prepare initial styles
      quotes.forEach((quote, i) => {
        quote.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        if (i !== 0) {
          quote.style.opacity = '0';
          quote.style.position = 'absolute';
          quote.style.top = '0';
          quote.style.left = '0';
          quote.style.right = '0';
          quote.style.transform = 'translateY(10px)';
          quote.style.pointerEvents = 'none';
        }
      });

      const showQuote = (index) => {
        quotes.forEach((quote, i) => {
          const isActive = i === index;
          quote.style.opacity = isActive ? '1' : '0';
          quote.style.position = isActive ? 'relative' : 'absolute';
          quote.style.transform = isActive ? 'translateY(0)' : 'translateY(10px)';
          quote.style.pointerEvents = isActive ? 'auto' : 'none';
        });
        currentIndex = index;
      };

      const advance = () => showQuote((currentIndex + 1) % quotes.length);

      const startTimer = () => {
        stopTimer();
        timer = setInterval(advance, INTERVAL);
      };

      const stopTimer = () => {
        if (timer) {
          clearInterval(timer);
          timer = null;
        }
      };

      // Manual controls (index.html pattern)
      const prevBtn = carousel.querySelector('[data-carousel-prev]');
      const nextBtn = carousel.querySelector('[data-carousel-next]');

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          advance();
          startTimer();
        });
      }
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          showQuote((currentIndex - 1 + quotes.length) % quotes.length);
          startTimer();
        });
      }

      // Pause on hover
      carousel.addEventListener('mouseenter', stopTimer);
      carousel.addEventListener('mouseleave', startTimer);

      startTimer();
    });
  };


  // ============================================
  // 5. MEGA MENU (desktop hover)
  // ============================================
  const initMegaMenu = () => {
    const menuItems = document.querySelectorAll('.has-mega-menu');
    if (!menuItems.length) return;

    const HIDE_DELAY = 300;

    menuItems.forEach((item) => {
      const megaMenu = item.querySelector('.mega-menu');
      if (!megaMenu) return;

      let hideTimeout = null;

      // Prepare mega menu styles for transitions
      megaMenu.style.transition = 'opacity 0.25s ease, visibility 0.25s ease, transform 0.25s ease';
      megaMenu.style.opacity = '0';
      megaMenu.style.visibility = 'hidden';
      megaMenu.style.transform = 'translateY(-8px)';

      const show = () => {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          hideTimeout = null;
        }

        // Close all other open mega menus
        document.querySelectorAll('.mega-menu.is-visible').forEach((m) => {
          if (m !== megaMenu) {
            m.classList.remove('is-visible');
            m.style.opacity = '0';
            m.style.visibility = 'hidden';
            m.style.transform = 'translateY(-8px)';
          }
        });

        megaMenu.classList.add('is-visible');
        megaMenu.style.opacity = '1';
        megaMenu.style.visibility = 'visible';
        megaMenu.style.transform = 'translateY(0)';
      };

      const hide = () => {
        hideTimeout = setTimeout(() => {
          megaMenu.classList.remove('is-visible');
          megaMenu.style.opacity = '0';
          megaMenu.style.visibility = 'hidden';
          megaMenu.style.transform = 'translateY(-8px)';
        }, HIDE_DELAY);
      };

      item.addEventListener('mouseenter', show);
      item.addEventListener('mouseleave', hide);

      // Keep visible while hovering the mega menu panel itself
      megaMenu.addEventListener('mouseenter', show);
      megaMenu.addEventListener('mouseleave', hide);

      // Close on Escape
      megaMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          megaMenu.classList.remove('is-visible');
          megaMenu.style.opacity = '0';
          megaMenu.style.visibility = 'hidden';
          megaMenu.style.transform = 'translateY(-8px)';
          item.querySelector('a, button')?.focus();
        }
      });
    });
  };


  // ============================================
  // 6. SMOOTH SCROLL (anchor links)
  // ============================================
  const initSmoothScroll = () => {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const header = document.getElementById('site-header') || document.querySelector('.site-header');
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: 'smooth',
      });

      // Update URL hash without triggering scroll
      if (history.pushState) {
        history.pushState(null, '', href);
      }
    });
  };


  // ============================================
  // 7. NEWSLETTER FORM (validation)
  // ============================================
  const initNewsletterForm = () => {
    const form = document.getElementById('newsletter-form');
    if (!form) return;

    const emailInput = form.querySelector('input[type="email"]');
    const checkbox = form.querySelector('input[type="checkbox"]');
    const messageEl = document.getElementById('newsletter-message');

    if (!emailInput || !messageEl) return;

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const showMessage = (text, type) => {
      messageEl.textContent = text;
      messageEl.className = `newsletter-form__message newsletter-form__message--${type}`;
    };

    const clearMessage = () => {
      messageEl.textContent = '';
      messageEl.className = 'newsletter-form__message';
    };

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      clearMessage();

      const email = emailInput.value.trim();

      // Validate email presence
      if (!email) {
        showMessage('メールアドレスを入力してください。', 'error');
        emailInput.focus();
        return;
      }

      // Validate email format
      if (!EMAIL_REGEX.test(email)) {
        showMessage('有効なメールアドレスを入力してください。', 'error');
        emailInput.focus();
        return;
      }

      // Validate consent checkbox
      if (checkbox && !checkbox.checked) {
        showMessage('プライバシーポリシーへの同意が必要です。', 'error');
        return;
      }

      // Success (no backend - simulate)
      showMessage('ご登録ありがとうございます！', 'success');
      emailInput.value = '';
      if (checkbox) checkbox.checked = false;

      // Auto-clear success message
      setTimeout(clearMessage, 5000);
    });
  };


  // ============================================
  // 8. SCROLL ANIMATIONS (IntersectionObserver)
  // ============================================
  const initScrollAnimations = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    if (!elements.length) return;

    // Fallback for browsers without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;

            // Stagger animation for sibling .animate-on-scroll elements
            const parent = el.parentElement;
            const siblings = parent
              ? Array.from(parent.children).filter((c) =>
                  c.classList.contains('animate-on-scroll')
                )
              : [el];
            const index = siblings.indexOf(el);
            const delay = Math.min(index * 120, 600); // cap at 600ms

            setTimeout(() => {
              el.classList.add('is-visible');
            }, delay);

            observer.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    // ----- Legacy support -----
    // Also animate .product-card / .category-section from older templates
    const legacyElements = document.querySelectorAll(
      '.product-card:not(.animate-on-scroll), .category-section:not(.animate-on-scroll)'
    );
    if (legacyElements.length) {
      legacyElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });
    }
  };


  // ============================================
  // 9. HEADER SCROLL BEHAVIOR
  // ============================================
  const initHeaderScroll = () => {
    const header = document.getElementById('site-header') || document.querySelector('.site-header');
    if (!header) return;

    let ticking = false;

    const update = () => {
      if (window.scrollY > 50) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
      ticking = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );

    // Check initial state (e.g., page loaded scrolled down)
    update();
  };


  // ============================================
  // ACTIVE NAV LINK HIGHLIGHTING
  // ============================================
  const initActiveNav = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // about.html nav pattern (.main-nav__link)
    document.querySelectorAll('.main-nav__link').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('main-nav__link--active');
      }
    });

    // index.html nav pattern (.nav-link)
    document.querySelectorAll('.nav-link').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('is-active');
      }
    });

    // hifi/headphones/products nav pattern (.header-nav a)
    document.querySelectorAll('.header-nav a').forEach((link) => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      }
    });
  };


  // ============================================
  // INITIALIZE ALL MODULES
  // ============================================
  initMobileMenu();
  initProductCarousels();
  initSeriesSliders();
  initQuoteCarousels();
  initMegaMenu();
  initSmoothScroll();
  initNewsletterForm();
  initScrollAnimations();
  initHeaderScroll();
  initActiveNav();
});
