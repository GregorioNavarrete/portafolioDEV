/**
 * ========================================
 * NAVIGATION.JS - Navigation Manager
 * ========================================
 * Maneja navegación suave, active states, mobile menu
 */

export class NavigationManager {
  constructor() {
    this.navLinks = [];
    this.sections = [];
    this.mobileMenuBtn = null;
    this.mobileMenu = null;
    this.isMobileOpen = false;
  }

  init() {
    this.navLinks = document.querySelectorAll('[data-nav-link]');
    this.sections = document.querySelectorAll('section[id]');
    this.mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
    this.mobileMenu = document.querySelector('[data-mobile-menu]');

    this.setupSmoothScroll();
    this.setupActiveSection();
    this.setupMobileMenu();
    this.setupKeyboardNavigation();
  }

  setupSmoothScroll() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const headerOffset = 80; // Altura del header fijo
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            // Cerrar menú móvil si está abierto
            this.closeMobileMenu();

            // Focus para accesibilidad
            target.setAttribute('tabindex', '-1');
            target.focus({ preventScroll: true });
          }
        }
      });
    });
  }

  setupActiveSection() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          this.updateActiveLink(id);
        }
      });
    }, {
      rootMargin: '-80px 0px -66% 0px', // Offset para header
      threshold: 0
    });

    this.sections.forEach(section => observer.observe(section));
  }

  updateActiveLink(activeId) {
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const isActive = href === `#${activeId}`;
      link.classList.toggle('nav-link--active', isActive);
      link.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  }

  setupMobileMenu() {
    if (!this.mobileMenuBtn || !this.mobileMenu) return;

    this.mobileMenuBtn.addEventListener('click', () => {
      this.toggleMobileMenu();
    });

    // Cerrar al hacer click en un enlace
    this.mobileMenu.querySelectorAll('[data-nav-link]').forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });

    // Cerrar al hacer click fuera
    document.addEventListener('click', (e) => {
      if (this.isMobileOpen &&
          !this.mobileMenu.contains(e.target) &&
          !this.mobileMenuBtn.contains(e.target)) {
        this.closeMobileMenu();
      }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isMobileOpen) {
        this.closeMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileOpen = !this.isMobileOpen;
    this.mobileMenuBtn.setAttribute('aria-expanded', this.isMobileOpen);
    this.mobileMenu.classList.toggle('mobile-menu--open', this.isMobileOpen);
    document.body.style.overflow = this.isMobileOpen ? 'hidden' : '';
  }

  closeMobileMenu() {
    if (this.isMobileOpen) {
      this.isMobileOpen = false;
      this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
      this.mobileMenu.classList.remove('mobile-menu--open');
      document.body.style.overflow = '';
    }
  }

  setupKeyboardNavigation() {
    // Navegación con teclas de flecha en menú
    const navContainer = document.querySelector('[data-nav-container]');
    if (!navContainer) return;

    navContainer.addEventListener('keydown', (e) => {
      const links = Array.from(navContainer.querySelectorAll('[data-nav-link]'));
      const currentIndex = links.indexOf(document.activeElement);

      if (currentIndex === -1) return;

      let nextIndex = currentIndex;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextIndex = (currentIndex + 1) % links.length;
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        nextIndex = (currentIndex - 1 + links.length) % links.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        nextIndex = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        nextIndex = links.length - 1;
      }

      if (nextIndex !== currentIndex) {
        links[nextIndex].focus();
      }
    });
  }

  refresh() {
    // Re-ejecutar setup si el DOM cambió
    this.init();
  }
}