/**
 * ========================================
 * THEME.JS - Theme Manager
 * ========================================
 * Maneja modo claro/oscuro con persistencia y detección de sistema
 */

export class ThemeManager {
  constructor() {
    this.currentTheme = 'system'; // 'light', 'dark', 'system'
    this.mediaQuery = null;
    this.listeners = new Set();
  }

  init() {
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      this.currentTheme = savedTheme;
    }

    // Configurar MediaQuery para detectar cambios del sistema
    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQuery.addEventListener('change', this.handleSystemChange.bind(this));

    // Aplicar tema inicial
    this.applyTheme();

    // Configurar botones de tema
    this.setupThemeButtons();

    return this;
  }

  handleSystemChange(e) {
    if (this.currentTheme === 'system') {
      this.applyTheme();
    }
  }

  getEffectiveTheme() {
    if (this.currentTheme === 'system') {
      return this.mediaQuery?.matches ? 'dark' : 'light';
    }
    return this.currentTheme;
  }

  applyTheme() {
    const effectiveTheme = this.getEffectiveTheme();
    document.documentElement.setAttribute('data-theme', effectiveTheme);

    // Actualizar meta theme-color para mobile
    this.updateMetaThemeColor(effectiveTheme);
  }

  updateMetaThemeColor(theme) {
    const meta = document.querySelector('meta[name="theme-color"]');
    const color = theme === 'dark' ? '#171717' : '#fafafa';
    if (meta) {
      meta.setAttribute('content', color);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'theme-color';
      newMeta.content = color;
      document.head.appendChild(newMeta);
    }
  }

  setTheme(theme) {
    if (!['light', 'dark', 'system'].includes(theme)) return false;

    this.currentTheme = theme;
    localStorage.setItem('portfolio-theme', theme);
    this.applyTheme();

    this.notifyListeners({ theme: this.currentTheme, effectiveTheme: this.getEffectiveTheme() });
    window.dispatchEvent(new CustomEvent('theme:change', {
      detail: { theme: this.currentTheme, effectiveTheme: this.getEffectiveTheme() }
    }));

    return true;
  }

  toggle() {
    const effective = this.getEffectiveTheme();
    const next = effective === 'dark' ? 'light' : 'dark';
    // Si estamos en system, cambiamos a la opuesta explícita
    this.setTheme(this.currentTheme === 'system' ? next : (this.currentTheme === 'dark' ? 'light' : 'dark'));
  }

  getCurrentTheme() {
    return this.currentTheme;
  }

  getEffectiveTheme() {
    if (this.currentTheme === 'system') {
      return this.mediaQuery?.matches ? 'dark' : 'light';
    }
    return this.currentTheme;
  }

  setupThemeButtons() {
    // Botones con data-theme-toggle
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.dataset.themeToggle;
        if (theme) {
          this.setTheme(theme);
        } else {
          this.toggle();
        }
      });
    });

    // Actualizar estado visual de botones
    this.updateButtonStates();
  }

  updateButtonStates() {
    const effective = this.getEffectiveTheme();

    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      const theme = btn.dataset.themeToggle;
      const isActive = theme === this.currentTheme ||
                      (theme === 'system' && this.currentTheme === 'system') ||
                      (!theme && effective === (btn.dataset.themeValue || ''));

      btn.setAttribute('aria-pressed', isActive.toString());

      // Si es un toggle único (sun/moon), actualizar icono
      if (btn.dataset.themeToggle === undefined && btn.dataset.themeValue) {
        btn.hidden = btn.dataset.themeValue === effective;
      }
    });
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notifyListeners(data) {
    this.listeners.forEach(cb => {
      try {
        cb(data);
      } catch (error) {
        console.error('Error in theme listener:', error);
      }
    });
  }

  refresh() {
    this.updateButtonStates();
  }
}