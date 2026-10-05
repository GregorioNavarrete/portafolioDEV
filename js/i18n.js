/**
 * ========================================
 * I18N.JS - Internationalization Manager (No-fetch version)
 * ========================================
 * Datos incrustados directamente - funciona en file:// sin servidor
 */

// ===== DATOS INCRUSTADOS =====
const EMBEDDED_TRANSLATIONS = {
  es: {
    ui: {
      nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", contact: "Contacto" },
      hero: { badge: "Desarrollador Fullstack", title: "Creo soluciones digitales", highlight: "innovadoras y escalables", description: "Desarrollador apasionado por construir aplicaciones web robustas, interfaces elegantes y arquitecturas limpias. Especializado en el ecosistema JavaScript/TypeScript moderno.", ctaPrimary: "Ver proyectos", ctaSecondary: "Contactar" },
      about: { title: "Sobre mí", description: "¡Hola! Soy Gregorio Navarrete, desarrollador fullstack con más de 3 años de experiencia creando aplicaciones web modernas.", journey: "Mi viaje en la programación comenzó como hobby hace más de 3 años. En la universidad me sumergí en el análisis de algoritmos y desarrollo de programas con estructuras dinámicas en C, C++ y Java. Sin embargo, surgió en mí un interés por desarrollar programas en un entorno más visual como la web, aprendiendo tanto frontend como backend.", learning: "Actualmente sigo aprendiendo y construyendo proyectos web tomando cursos en plataformas como Digital House y Platzi.", highlights: "Entre mis logros destaco la creación de sistemas escalables, APIs de alto rendimiento y interfaces accesibles.", cv: "Descargar CV" },
      projects: { title: "Proyectos Destacados", subtitle: "Una selección de mis trabajos más recientes y relevantes", filters: { all: "Todos", featured: "Destacados", fullstack: "Fullstack", frontend: "Frontend", backend: "Backend", webapp: "Web Apps", tooling: "Herramientas", "data-science": "Data Science" }, viewProject: "Ver proyecto", viewCode: "Ver código", viewDemo: "Demo en vivo", techStack: "Tecnologías", role: "Rol", year: "Año", noResults: "No se encontraron proyectos", gallery: { title: "Galería del proyecto", desktop: "Escritorio", mobile: "Móvil", close: "Cerrar galería", prev: "Anterior", next: "Siguiente", counter: "{{current}} / {{total}}" } },
      projectModal: { close: "Cerrar", details: "Detalles", description: "Descripción", technologies: "Tecnologías", links: "Enlaces", demo: "Demo", github: "GitHub", docs: "Documentación", npm: "NPM", caseStudy: "Caso de estudio" },
      footer: { copyright: "© 2024 Desarrollador Fullstack. Construido con pasión.", madeWith: "Hecho con", and: "y" },
      theme: { light: "Claro", dark: "Oscuro", system: "Sistema" },
      language: { es: "Español", en: "Inglés" },
      a11y: { skipToContent: "Saltar al contenido principal", menuOpen: "Abrir menú", menuClose: "Cerrar menú", themeToggle: "Cambiar tema", languageToggle: "Cambiar idioma", projectCard: "Tarjeta de proyecto", projectImage: "Imagen del proyecto", projectVideo: "Video del proyecto", galleryImage: "Imagen de la galería", galleryNav: "Navegación de galería" }
    },
    projects: {
      projects: [
        { id: "prisma", title: "Proyecto Prisma", shortDescription: "Plataforma de gestión empresarial con módulos de inventario, ventas y analítica en tiempo real.", fullDescription: "Proyecto Prisma es una solución completa de gestión empresarial (ERP) desarrollada para PYMEs que necesitan centralizar sus operaciones. Incluye módulos de inventario inteligente con alertas de stock, punto de venta (POS) integrado, facturación electrónica, CRM ligero y un dashboard analítico con métricas en tiempo real usando WebSockets. La arquitectura modular permite escalar cada componente independientemente.", images: ["assets/images/projects/prisma/desktop-1.png","assets/images/projects/prisma/desktop-2.png","assets/images/projects/prisma/desktop-3.png","assets/images/projects/prisma/mobile-1.png","assets/images/projects/prisma/mobile-2.png","assets/images/projects/prisma/mobile-3.png","assets/images/projects/prisma/mobile-4.png"], video: null, poster: "assets/images/projects/prisma/desktop-1.png", techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets", "Tailwind CSS", "Docker"], category: "fullstack", links: { demo: "https://prisma-demo.example.com", github: "https://github.com/usuario/prisma", caseStudy: "#" }, featured: true, year: 2024, role: "Fullstack Developer & Arquitecto" },
        { id: "taskflow", title: "TaskFlow", shortDescription: "Aplicación de productividad colaborativa con tableros Kanban, automatizaciones y métricas de equipo.", fullDescription: "TaskFlow es una herramienta de gestión de proyectos inspirada en Linear y Notion. Permite crear espacios de trabajo, tableros Kanban personalizables, automatizaciones tipo 'si esto entonces aquello', seguimiento de tiempo, y reportes de productividad por miembro del equipo. Implementa edición colaborativa en tiempo real usando CRDTs (Yjs) para sincronización sin conflictos. Incluye modo offline-first con sincronización automática al recuperar conexión.", images: ["assets/images/projects/taskflow/1.png","assets/images/projects/taskflow/2.png"], video: null, poster: "assets/images/projects/taskflow/1.png", techStack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Yjs", "Vercel"], category: "webapp", links: { demo: "https://taskflow.example.com", github: "https://github.com/usuario/taskflow", caseStudy: "#" }, featured: true, year: 2024, role: "Fullstack Developer" },
        { id: "devhub", title: "DevHub CLI", shortDescription: "Herramienta de línea de comandos para automatizar flujos de trabajo de desarrollo: scaffolding, deploy, monitoreo.", fullDescription: "DevHub CLI es una herramienta open source que automatiza tareas repetitivas de desarrollo. Incluye generadores de proyectos (React, Next.js, Node, Go), gestión de secretos integrada con 1Password/Bitwarden, deploy a múltiples clouds (Vercel, AWS, Railway), y monitoreo de salud de aplicaciones con alertas en Slack/Discord. Diseñada con arquitectura de plugins para extensibilidad.", images: ["assets/images/projects/devhub/1.png","assets/images/projects/devhub/2.png"], video: null, poster: "assets/images/projects/devhub/1.png", techStack: ["TypeScript", "Node.js", "Commander.js", "Inquirer", "Docker", "GitHub Actions"], category: "tooling", links: { demo: null, github: "https://github.com/usuario/devhub-cli", npm: "https://npmjs.com/package/@usuario/devhub" }, featured: false, year: 2023, role: "Creador & Maintainer" },
        { id: "ecomerce-api", title: "E-Commerce API", shortDescription: "API RESTful de alta performance para comercio electrónico con arquitectura hexagonal y eventos de dominio.", fullDescription: "Backend robusto para plataformas de e-commerce construido con arquitectura hexagonal (Ports & Adapters). Implementa CQRS para separar lectura/escritura, event sourcing para auditoría completa, idempotencia en pagos, rate limiting adaptativo, y testing exhaustivo (unit, integration, contract). Documentación OpenAPI 3.1 automática. Soporta multi-tenancy y feature flags.", images: ["assets/images/projects/ecomerce/1.png","assets/images/projects/ecomerce/2.png"], video: null, poster: "assets/images/projects/ecomerce/1.png", techStack: ["Node.js", "TypeScript", "Fastify", "PostgreSQL", "Redis", "RabbitMQ", "Kafka", "Jest", "k6"], category: "backend", links: { demo: null, github: "https://github.com/usuario/ecomerce-api", docs: "https://api-docs.example.com" }, featured: false, year: 2023, role: "Backend Developer & Arquitecto" },
        { id: "design-system", title: "Aurora Design System", shortDescription: "Sistema de diseño accesible y temático con 60+ componentes, tokens de diseño y documentación interactiva.", fullDescription: "Aurora es un sistema de diseño completo construido desde cero con enfoque en accesibilidad (WCAG 2.1 AA), theming avanzado (modo oscuro, high contrast, brand themes), y developer experience. Incluye Storybook interactivo, CLI para generar componentes, tokens en Figma sincronizados, y paquetes para React, Vue y HTML puro. Zero-runtime CSS con Stitches.", images: ["assets/images/projects/aurora/1.png","assets/images/projects/aurora/2.png"], video: null, poster: "assets/images/projects/aurora/1.png", techStack: ["React", "TypeScript", "Storybook", "Stitches", "Figma API", "Changesets", "Vite"], category: "frontend", links: { demo: "https://aurora-ds.example.com", github: "https://github.com/usuario/aurora-design-system", npm: "https://npmjs.com/org/aurora-ds" }, featured: true, year: 2024, role: "Frontend Architect & Lead" },
        { id: "ml-price-predictor", title: "ML Price Predictor", shortDescription: "Modelo de Machine Learning para predicción de precios inmobiliarios con explicabilidad SHAP y API de inferencia.", fullDescription: "Proyecto de Data Science aplicado a real estate. Entrenamiento de modelos (XGBoost, LightGBM, Neural Nets) con feature engineering avanzado, validación cruzada temporal, y explicabilidad con SHAP values. Despliegue como API REST con FastAPI, monitoreo de drift con Evidently, y pipeline CI/CD con MLflow y DVC. Incluye notebooks de exploración y reporte automático de métricas.", images: ["assets/images/projects/ml-price/1.png","assets/images/projects/ml-price/2.png"], video: null, poster: "assets/images/projects/ml-price/1.png", techStack: ["Python", "FastAPI", "XGBoost", "LightGBM", "SHAP", "MLflow", "DVC", "Docker", "Kubernetes"], category: "data-science", links: { demo: "https://ml-price.example.com", github: "https://github.com/usuario/ml-price-predictor", notebook: "https://kaggle.com/usuario/ml-price" }, featured: false, year: 2023, role: "ML Engineer" }
      ],
      categories: [ { "id": "all", "label": "Todos", "icon": "grid" }, { "id": "featured", "label": "Destacados", "icon": "star" }, { "id": "fullstack", "label": "Fullstack", "icon": "layers" }, { "id": "frontend", "label": "Frontend", "icon": "monitor" }, { "id": "backend", "label": "Backend", "icon": "server" }, { "id": "webapp", "label": "Web Apps", "icon": "window" }, { "id": "tooling", "label": "Herramientas", "icon": "wrench" }, { "id": "data-science", "label": "Data Science", "icon": "bar-chart" } ]
    }
  },
  en: {
    ui: {
      nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
      hero: { badge: "Fullstack Developer", title: "I create digital solutions", highlight: "innovative and scalable", description: "Passionate developer building robust web applications, elegant interfaces, and clean architectures. Specialized in the modern JavaScript/TypeScript ecosystem.", ctaPrimary: "View Projects", ctaSecondary: "Contact" },
      about: { title: "About Me", description: "Hi! I'm Gregorio Navarrete, a fullstack developer with over 3 years of experience creating modern web applications.", journey: "My programming journey started as a hobby over 3 years ago. In university, I immersed myself in algorithm analysis and program development with dynamic data structures in C, C++, and Java. However, I developed an interest in building programs in a more visual environment like the web, learning both frontend and backend.", learning: "Currently I keep learning and building web projects taking courses on platforms like Digital House and Platzi.", highlights: "Among my achievements, I highlight the creation of scalable systems, high-performance APIs, and accessible interfaces.", cv: "Download CV" },
      projects: { title: "Featured Projects", subtitle: "A selection of my most recent and relevant work", filters: { all: "All", featured: "Featured", fullstack: "Fullstack", frontend: "Frontend", backend: "Backend", webapp: "Web Apps", tooling: "Tooling", "data-science": "Data Science" }, viewProject: "View Project", viewCode: "View Code", viewDemo: "Live Demo", techStack: "Technologies", role: "Role", year: "Year", noResults: "No projects found", gallery: { title: "Project Gallery", desktop: "Desktop", mobile: "Mobile", close: "Close gallery", prev: "Previous", next: "Next", counter: "{{current}} / {{total}}" } },
      projectModal: { close: "Close", details: "Details", description: "Description", technologies: "Technologies", links: "Links", demo: "Demo", github: "GitHub", docs: "Documentation", npm: "NPM", caseStudy: "Case Study" },
      footer: { copyright: "© 2024 Fullstack Developer. Built with passion.", madeWith: "Made with", and: "and" },
      theme: { light: "Light", dark: "Dark", system: "System" },
      language: { es: "Spanish", en: "English" },
      a11y: { skipToContent: "Skip to main content", menuOpen: "Open menu", menuClose: "Close menu", themeToggle: "Toggle theme", languageToggle: "Toggle language", projectCard: "Project card", projectImage: "Project image", projectVideo: "Project video", galleryImage: "Gallery image", galleryNav: "Gallery navigation" }
    },
    projects: {
      projects: [
        { id: "prisma", title: "Proyecto Prisma", shortDescription: "Enterprise management platform with inventory, sales, and real-time analytics modules.", fullDescription: "Proyecto Prisma is a complete enterprise management solution (ERP) developed for SMEs that need to centralize their operations. It includes smart inventory modules with stock alerts, integrated point of sale (POS), electronic invoicing, lightweight CRM, and an analytical dashboard with real-time metrics using WebSockets. The modular architecture allows each component to scale independently.", images: ["assets/images/projects/prisma/desktop-1.png","assets/images/projects/prisma/desktop-2.png","assets/images/projects/prisma/desktop-3.png","assets/images/projects/prisma/mobile-1.png","assets/images/projects/prisma/mobile-2.png","assets/images/projects/prisma/mobile-3.png","assets/images/projects/prisma/mobile-4.png"], video: null, poster: "assets/images/projects/prisma/desktop-1.png", techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets", "Tailwind CSS", "Docker"], category: "fullstack", links: { demo: "https://prisma-demo.example.com", github: "https://github.com/usuario/prisma", caseStudy: "#" }, featured: true, year: 2024, role: "Fullstack Developer & Architect" },
        { id: "taskflow", title: "TaskFlow", shortDescription: "Collaborative productivity app with Kanban boards, automations, and team metrics.", fullDescription: "TaskFlow is a project management tool inspired by Linear and Notion. It allows creating workspaces, customizable Kanban boards, 'if-this-then-that' automations, time tracking, and productivity reports per team member. It implements real-time collaborative editing using CRDTs (Yjs) for conflict-free synchronization. Includes offline-first mode with automatic sync on reconnection.", images: ["assets/images/projects/taskflow/1.png","assets/images/projects/taskflow/2.png"], video: null, poster: "assets/images/projects/taskflow/1.png", techStack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Yjs", "Vercel"], category: "webapp", links: { demo: "https://taskflow.example.com", github: "https://github.com/usuario/taskflow", caseStudy: "#" }, featured: true, year: 2024, role: "Fullstack Developer" },
        { id: "devhub", title: "DevHub CLI", shortDescription: "Command-line tool to automate development workflows: scaffolding, deploy, monitoring.", fullDescription: "DevHub CLI is an open source tool that automates repetitive development tasks. It includes project generators (React, Next.js, Node, Go), secrets management integrated with 1Password/Bitwarden, deploy to multiple clouds (Vercel, AWS, Railway), and application health monitoring with Slack/Discord alerts. Designed with a plugin architecture for extensibility.", images: ["assets/images/projects/devhub/1.png","assets/images/projects/devhub/2.png"], video: null, poster: "assets/images/projects/devhub/1.png", techStack: ["TypeScript", "Node.js", "Commander.js", "Inquirer", "Docker", "GitHub Actions"], category: "tooling", links: { demo: null, github: "https://github.com/usuario/devhub-cli", npm: "https://npmjs.com/package/@usuario/devhub" }, featured: false, year: 2023, role: "Creator & Maintainer" },
        { id: "ecomerce-api", title: "E-Commerce API", shortDescription: "High-performance RESTful API for e-commerce with hexagonal architecture and domain events.", fullDescription: "Robust backend for e-commerce platforms built with hexagonal architecture (Ports & Adapters). Implements CQRS to separate read/write, event sourcing for complete audit trail, payment idempotency, adaptive rate limiting, and exhaustive testing (unit, integration, contract). Automatic OpenAPI 3.1 documentation. Supports multi-tenancy and feature flags.", images: ["assets/images/projects/ecomerce/1.png","assets/images/projects/ecomerce/2.png"], video: null, poster: "assets/images/projects/ecomerce/1.png", techStack: ["Node.js", "TypeScript", "Fastify", "PostgreSQL", "Redis", "RabbitMQ", "Kafka", "Jest", "k6"], category: "backend", links: { demo: null, github: "https://github.com/usuario/ecomerce-api", docs: "https://api-docs.example.com" }, featured: false, year: 2023, role: "Backend Developer & Architect" },
        { id: "design-system", title: "Aurora Design System", shortDescription: "Accessible, themable design system with 60+ components, design tokens, and interactive documentation.", fullDescription: "Aurora is a complete design system built from scratch with focus on accessibility (WCAG 2.1 AA), advanced theming (dark mode, high contrast, brand themes), and developer experience. Includes interactive Storybook, CLI for component generation, Figma-synced tokens, and packages for React, Vue, and vanilla HTML. Zero-runtime CSS with Stitches.", images: ["assets/images/projects/aurora/1.png","assets/images/projects/aurora/2.png"], video: null, poster: "assets/images/projects/aurora/1.png", techStack: ["React", "TypeScript", "Storybook", "Stitches", "Figma API", "Changesets", "Vite"], category: "frontend", links: { demo: "https://aurora-ds.example.com", github: "https://github.com/usuario/aurora-design-system", npm: "https://npmjs.com/org/aurora-ds" }, featured: true, year: 2024, role: "Frontend Architect & Lead" },
        { id: "ml-price-predictor", title: "ML Price Predictor", shortDescription: "Machine Learning model for real estate price prediction with SHAP explainability and inference API.", fullDescription: "Data Science project applied to real estate. Training of models (XGBoost, LightGBM, Neural Nets) with advanced feature engineering, temporal cross-validation, and explainability with SHAP values. Deployed as REST API with FastAPI, drift monitoring with Evidently, and CI/CD pipeline with MLflow and DVC. Includes exploration notebooks and automated metrics reporting.", images: ["assets/images/projects/ml-price/1.png","assets/images/projects/ml-price/2.png"], video: null, poster: "assets/images/projects/ml-price/1.png", techStack: ["Python", "FastAPI", "XGBoost", "LightGBM", "SHAP", "MLflow", "DVC", "Docker", "Kubernetes"], category: "data-science", links: { demo: "https://ml-price.example.com", github: "https://github.com/usuario/ml-price-predictor", notebook: "https://kaggle.com/usuario/ml-price" }, featured: false, year: 2023, role: "ML Engineer" }
      ],
      categories: [ { "id": "all", "label": "All", "icon": "grid" }, { "id": "featured", "label": "Featured", "icon": "star" }, { "id": "fullstack", "label": "Fullstack", "icon": "layers" }, { "id": "frontend", "label": "Frontend", "icon": "monitor" }, { "id": "backend", "label": "Backend", "icon": "server" }, { "id": "webapp", "label": "Web Apps", "icon": "window" }, { "id": "tooling", "label": "Tooling", "icon": "wrench" }, { "id": "data-science", "label": "Data Science", "icon": "bar-chart" } ]
    }
  }
};

// ===== CLASE I18nManager =====
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

    // Cargar traducciones EMBEBIDAS (sin fetch)
    this.loadEmbeddedTranslations(this.currentLang);

    // Aplicar al DOM
    this.applyTranslations();

    // Actualizar atributo lang del HTML
    document.documentElement.lang = this.currentLang;

    // Configurar dropdown de idiomas
    this.setupLanguageDropdown();

    return this;
  }

  loadEmbeddedTranslations(lang) {
    const data = EMBEDDED_TRANSLATIONS[lang] || EMBEDDED_TRANSLATIONS.es;
    this.translations.ui = data.ui;
    this.translations.projects = data.projects;
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

  async setLanguage(lang) {
    if (!this.supportedLanguages.includes(lang) || lang === this.currentLang) {
      return false;
    }

    this.currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);

    this.loadEmbeddedTranslations(lang);
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
        return key;
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
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.dataset.i18nAria;
      const translation = this.t(key);
      if (translation) el.setAttribute('aria-label', translation);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.dataset.i18nTitle;
      const translation = this.t(key);
      if (translation) el.title = translation;
    });
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notifyListeners(data) {
    this.listeners.forEach(cb => {
      try { cb(data); } catch (error) { console.error('Error in i18n listener:', error); }
    });
  }

  refresh() {
    this.applyTranslations();
  }
}