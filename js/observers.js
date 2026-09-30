/**
 * ========================================
 * OBSERVERS.JS - Scroll & Intersection Observers
 * ========================================
 * Maneja animaciones basadas en scroll e intersección
 */

export class ScrollAnimations {
  constructor() {
    this.revealObserver = null;
    this.parallaxElements = [];
    this.scrollProgress = null;
  }

  init() {
    this.setupRevealObserver();
    this.setupScrollProgress();
    this.setupParallax();
    this.setupHeaderScroll();
    this.setupTypingAnimation();
  }

  // IntersectionObserver para elementos .reveal
  setupRevealObserver() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: mostrar todo inmediatamente
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('reveal--visible'));
      return;
    }

    this.revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          this.revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observar todos los elementos .reveal
    document.querySelectorAll('.reveal').forEach(el => {
      this.revealObserver.observe(el);
    });
  }

  // Barra de progreso de scroll
  setupScrollProgress() {
    this.scrollProgress = document.createElement('div');
    this.scrollProgress.className = 'scroll-progress';
    this.scrollProgress.setAttribute('aria-hidden', 'true');
    document.body.appendChild(this.scrollProgress);

    // Usar CSS scroll-driven animation si está disponible
    if (CSS.supports('animation-timeline: scroll()')) {
      return; // El CSS maneja la animación
    }

    // Fallback JS
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = scrollTop / docHeight;
          this.scrollProgress.style.transform = `scaleX(${progress})`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // Parallax suave en elementos con data-parallax
  setupParallax() {
    this.parallaxElements = document.querySelectorAll('[data-parallax]');

    if (this.parallaxElements.length === 0) return;

    // Preferencias de movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          this.parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.3;
            const y = scrollY * speed;
            el.style.transform = `translate3d(0, ${y}px, 0)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // Header que se oculta/muestra al scroll
  setupHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (currentScrollY > 100) {
            header.classList.add('header--scrolled');
          } else {
            header.classList.remove('header--scrolled');
          }

          // Ocultar header al bajar, mostrar al subir
          if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
          } else {
            header.style.transform = 'translateY(0)';
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // Animación de typing en elementos con data-typing
  setupTypingAnimation() {
    const typingElements = document.querySelectorAll('[data-typing]');

    typingElements.forEach(el => {
      const text = el.dataset.typing;
      const speed = parseInt(el.dataset.typingSpeed) || 50;
      const delay = parseInt(el.dataset.typingDelay) || 0;

      el.textContent = '';
      el.classList.add('typing');

      setTimeout(() => {
        this.typeText(el, text, speed, () => {
          el.classList.remove('typing');
          el.classList.add('typing--done');
        });
      }, delay);
    });
  }

  typeText(element, text, speed, callback) {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
        if (callback) callback();
      }
    }, speed);
  }

  // Método para agregar elementos reveal dinámicamente
  observe(element) {
    if (this.revealObserver && element.classList.contains('reveal')) {
      this.revealObserver.observe(element);
    }
  }

  // Forzar verificación de elementos visibles
  checkVisible() {
    if (this.revealObserver) {
      // El observer se encarga automáticamente
    }
  }

  destroy() {
    this.revealObserver?.disconnect();
    this.scrollProgress?.remove();
  }
}

// Utilidad para animar contadores
export function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    const current = Math.floor(start + (target - start) * eased);

    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// Utilidad para animar números con decimales
export function animateNumber(element, target, decimals = 0, duration = 2000) {
  const start = 0;
  const startTime = performance.now();
  const factor = Math.pow(10, decimals);

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    const current = (start + (target - start) * eased).toFixed(decimals);

    element.textContent = Number(current).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}