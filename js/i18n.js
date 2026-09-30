/**
 * ========================================
 * I18N.JS - Internationalization Manager
 * ========================================
 * Maneja múltiples idiomas con carga dinámica
 */

export class I18nManager {
  constructor() {
    this.currentLang = 'es';
    this.translations = {};
    this.supportedLanguages = ['es', 'en'];
    this.listeners = new Set();
  }

  async init() {
    // Detectar idioma guardado o del navegador
    const savedLang = localStorage.getItem('portfolio-lang');
    const browserLang = navigator.language.split('-')[0];

    if (savedLang && this.supportedLanguages.includes(savedLang)) {
      this.currentLang = savedLang;
    } else if (this.supportedLanguages.includes(browserLang)) {
      this.currentLang = browserLang;
    }

    // Cargar traducciones
    await this.loadTranslations(this.currentLang);

    // Aplicar al DOM
    this.applyTranslations();

    // Actualizar atributo lang del HTML
    document.documentElement.lang = this.currentLang;

    // Configurar dropdown de idiomas
    this.setupLanguageDropdown();

    return this;
  }

  setupLanguageDropdown() {
    this.langBtn = document.getElementById('langBtn');
    this.langDropdown = this.langBtn?.nextElementSibling;
    this.langText = document.getElementById('langText');
    this.langFlag = document.getElementById('langFlag');

    if (!this.langBtn || !this.langDropdown) return;

    // Toggle dropdown
    this.langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = this.langDropdown.hasAttribute('hidden');
      if (isHidden) {
        this.langDropdown.removeAttribute('hidden');
        this.langBtn.setAttribute('aria-expanded', 'true');
      } else {
        this.langDropdown.setAttribute('hidden', '');
        this.langBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Cerrar al hacer click fuera
    document.addEventListener('click', () => {
      if (!this.langDropdown.hasAttribute('hidden')) {
        this.langDropdown.setAttribute('hidden', '');
        this.langBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Seleccionar idioma
    this.langDropdown.querySelectorAll('[data-lang]').forEach(item => {
      item.addEventListener('click', async (e) => {
        e.stopPropagation();
        const lang = item.dataset.lang;
        await this.setLanguage(lang);
        this.updateLanguageButton();
        this.langDropdown.setAttribute('hidden', '');
        this.langBtn.setAttribute('aria-expanded', 'false');
        this.langBtn.focus();
      });
    });

    // Actualizar botón inicial
    this.updateLanguageButton();
  }

  updateLanguageButton() {
    if (!this.langText || !this.langFlag) return;

    const flags = {
      es: 'https://media.flaticon.com/dist/min/img/flags/es.svg',
      en: 'https://media.flaticon.com/dist/min/img/flags/en.svg'
    };

    const names = {
      es: this.t('language.es'),
      en: this.t('language.en')
    };

    this.langFlag.src = flags[this.currentLang] || flags.es;
    this.langText.textContent = names[this.currentLang] || names.es;
  }

  async loadTranslations(lang) {
    try {
      const [uiResponse, projectsResponse] = await Promise.all([
        fetch(`./data/i18n.${lang}.json`),
        fetch(`./data/projects.${lang}.json`)
      ]);

      if (!uiResponse.ok || !projectsResponse.ok) {
        throw new Error(`Failed to load translations for ${lang}`);
      }

      this.translations.ui = await uiResponse.json();
      this.translations.projects = await projectsResponse.json();

    } catch (error) {
      console.error(`Error loading ${lang} translations:`, error);
      // Fallback a español si falla
      if (lang !== 'es') {
        return this.loadTranslations('es');
      }
      throw error;
    }
  }

  async setLanguage(lang) {
    if (!this.supportedLanguages.includes(lang) || lang === this.currentLang) {
      return false;
    }

    this.currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    await this.loadTranslations(lang);
    this.applyTranslations();
    document.documentElement.lang = lang;

    // Actualizar botón de idioma
    this.updateLanguageButton();

    // Notificar listeners
    this.notifyListeners({ lang, translations: this.translations });

    // Disparar evento global
    window.dispatchEvent(new CustomEvent('i18n:change', {
      detail: { lang, translations: this.translations }
    }));

    return true;
  }

  getCurrentLanguage() {
    return this.currentLang;
  }

  getSupportedLanguages() {
    return this.supportedLanguages;
  }

  // Obtener traducción por clave anidada (ej: 'hero.title')
  t(key, params = {}) {
    const keys = key.split('.');
    let value = this.translations.ui;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Fallback a la clave
      }
    }

    // Interpolación simple de parámetros
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return value.replace(/\{\{(\w+)\}\}/g, (match, param) => params[param] || match);
    }

    return value;
  }

  // Obtener datos de proyectos
  getProjects() {
    return this.translations.projects?.projects || [];
  }

  getCategories() {
    return this.translations.projects?.categories || [];
  }

  // Aplicar traducciones a elementos con data-i18n
  applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
      const key = el.dataset.i18n;
      const translation = this.t(key);

      if (translation) {
        // Manejar placeholders
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translation;
        } else if (el.dataset.i18nHtml === 'true') {
          el.innerHTML = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    // Actualizar atributos específicos
    this.updateSpecificAttributes();
  }

  updateSpecificAttributes() {
    // Actualizar aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      const translation = this.t(key);
      if (translation) el.setAttribute('aria-label', translation);
    });

    // Actualizar titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.dataset.i18nTitle;
      const translation = this.t(key);
      if (translation) el.title = translation;
    });
  }

  // Suscribirse a cambios de idioma
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notifyListeners(data) {
    this.listeners.forEach(cb => {
      try {
        cb(data);
      } catch (error) {
        console.error('Error in i18n listener:', error);
      }
    });
  }

  // Método para forzar re-render (útil después de cambios dinámicos)
  refresh() {
    this.applyTranslations();
  }
}