var App = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // js/main.js
  var main_exports = {};
  __export(main_exports, {
    AppState: () => AppState
  });

  // js/i18n.js
  var EMBEDDED_TRANSLATIONS = {
    es: {
      ui: {
        nav: { home: "Inicio", about: "Sobre m\xED", projects: "Proyectos", contact: "Contacto" },
        hero: { badge: "Desarrollador Fullstack", title: "Creo soluciones digitales", highlight: "innovadoras y escalables", description: "Desarrollador apasionado por construir aplicaciones web robustas, interfaces elegantes y arquitecturas limpias. Especializado en el ecosistema JavaScript/TypeScript moderno.", ctaPrimary: "Ver proyectos", ctaSecondary: "Contactar" },
        about: { title: "Sobre m\xED", description: "\xA1Hola! Soy Gregorio Navarrete, desarrollador fullstack con m\xE1s de 3 a\xF1os de experiencia creando aplicaciones web modernas.", journey: "Mi viaje en la programaci\xF3n comenz\xF3 como hobby hace m\xE1s de 3 a\xF1os. En la universidad me sumerg\xED en el an\xE1lisis de algoritmos y desarrollo de programas con estructuras din\xE1micas en C, C++ y Java. Sin embargo, surgi\xF3 en m\xED un inter\xE9s por desarrollar programas en un entorno m\xE1s visual como la web, aprendiendo tanto frontend como backend.", learning: "Actualmente sigo aprendiendo y construyendo proyectos web tomando cursos en plataformas como Digital House y Platzi.", highlights: "Entre mis logros destaco la creaci\xF3n de sistemas escalables, APIs de alto rendimiento y interfaces accesibles.", cv: "Descargar CV" },
        projects: { title: "Proyectos Destacados", subtitle: "Una selecci\xF3n de mis trabajos m\xE1s recientes y relevantes", filters: { all: "Todos", featured: "Destacados", fullstack: "Fullstack", frontend: "Frontend", backend: "Backend", webapp: "Web Apps", tooling: "Herramientas", "data-science": "Data Science" }, viewProject: "Ver proyecto", viewCode: "Ver c\xF3digo", viewDemo: "Demo en vivo", techStack: "Tecnolog\xEDas", role: "Rol", year: "A\xF1o", noResults: "No se encontraron proyectos", gallery: { title: "Galer\xEDa del proyecto", desktop: "Escritorio", mobile: "M\xF3vil", close: "Cerrar galer\xEDa", prev: "Anterior", next: "Siguiente", counter: "{{current}} / {{total}}" } },
        projectModal: { close: "Cerrar", details: "Detalles", description: "Descripci\xF3n", technologies: "Tecnolog\xEDas", links: "Enlaces", demo: "Demo", github: "GitHub", docs: "Documentaci\xF3n", npm: "NPM", caseStudy: "Caso de estudio" },
        footer: { copyright: "\xA9 2024 Desarrollador Fullstack. Construido con pasi\xF3n.", madeWith: "Hecho con", and: "y" },
        theme: { light: "Claro", dark: "Oscuro", system: "Sistema" },
        language: { es: "Espa\xF1ol", en: "Ingl\xE9s" },
        a11y: { skipToContent: "Saltar al contenido principal", menuOpen: "Abrir men\xFA", menuClose: "Cerrar men\xFA", themeToggle: "Cambiar tema", languageToggle: "Cambiar idioma", projectCard: "Tarjeta de proyecto", projectImage: "Imagen del proyecto", projectVideo: "Video del proyecto", galleryImage: "Imagen de la galer\xEDa", galleryNav: "Navegaci\xF3n de galer\xEDa" }
      },
      projects: {
        projects: [
          { id: "prisma", title: "Proyecto Prisma", shortDescription: "Plataforma de gesti\xF3n empresarial con m\xF3dulos de inventario, ventas y anal\xEDtica en tiempo real.", fullDescription: "Proyecto Prisma es una soluci\xF3n completa de gesti\xF3n empresarial (ERP) desarrollada para PYMEs que necesitan centralizar sus operaciones. Incluye m\xF3dulos de inventario inteligente con alertas de stock, punto de venta (POS) integrado, facturaci\xF3n electr\xF3nica, CRM ligero y un dashboard anal\xEDtico con m\xE9tricas en tiempo real usando WebSockets. La arquitectura modular permite escalar cada componente independientemente.", images: ["assets/images/projects/prisma/desktop-1.png", "assets/images/projects/prisma/desktop-2.png", "assets/images/projects/prisma/desktop-3.png", "assets/images/projects/prisma/mobile-1.png", "assets/images/projects/prisma/mobile-2.png", "assets/images/projects/prisma/mobile-3.png", "assets/images/projects/prisma/mobile-4.png"], video: null, poster: "assets/images/projects/prisma/desktop-1.png", techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets", "Tailwind CSS", "Docker"], category: "fullstack", links: { demo: "https://prisma-demo.example.com", github: "https://github.com/usuario/prisma", caseStudy: "#" }, featured: true, year: 2024, role: "Fullstack Developer & Arquitecto" },
          { id: "taskflow", title: "TaskFlow", shortDescription: "Aplicaci\xF3n de productividad colaborativa con tableros Kanban, automatizaciones y m\xE9tricas de equipo.", fullDescription: "TaskFlow es una herramienta de gesti\xF3n de proyectos inspirada en Linear y Notion. Permite crear espacios de trabajo, tableros Kanban personalizables, automatizaciones tipo 'si esto entonces aquello', seguimiento de tiempo, y reportes de productividad por miembro del equipo. Implementa edici\xF3n colaborativa en tiempo real usando CRDTs (Yjs) para sincronizaci\xF3n sin conflictos. Incluye modo offline-first con sincronizaci\xF3n autom\xE1tica al recuperar conexi\xF3n.", images: ["assets/images/projects/taskflow/1.png", "assets/images/projects/taskflow/2.png"], video: null, poster: "assets/images/projects/taskflow/1.png", techStack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Yjs", "Vercel"], category: "webapp", links: { demo: "https://taskflow.example.com", github: "https://github.com/usuario/taskflow", caseStudy: "#" }, featured: true, year: 2024, role: "Fullstack Developer" },
          { id: "devhub", title: "DevHub CLI", shortDescription: "Herramienta de l\xEDnea de comandos para automatizar flujos de trabajo de desarrollo: scaffolding, deploy, monitoreo.", fullDescription: "DevHub CLI es una herramienta open source que automatiza tareas repetitivas de desarrollo. Incluye generadores de proyectos (React, Next.js, Node, Go), gesti\xF3n de secretos integrada con 1Password/Bitwarden, deploy a m\xFAltiples clouds (Vercel, AWS, Railway), y monitoreo de salud de aplicaciones con alertas en Slack/Discord. Dise\xF1ada con arquitectura de plugins para extensibilidad.", images: ["assets/images/projects/devhub/1.png", "assets/images/projects/devhub/2.png"], video: null, poster: "assets/images/projects/devhub/1.png", techStack: ["TypeScript", "Node.js", "Commander.js", "Inquirer", "Docker", "GitHub Actions"], category: "tooling", links: { demo: null, github: "https://github.com/usuario/devhub-cli", npm: "https://npmjs.com/package/@usuario/devhub" }, featured: false, year: 2023, role: "Creador & Maintainer" },
          { id: "ecomerce-api", title: "E-Commerce API", shortDescription: "API RESTful de alta performance para comercio electr\xF3nico con arquitectura hexagonal y eventos de dominio.", fullDescription: "Backend robusto para plataformas de e-commerce construido con arquitectura hexagonal (Ports & Adapters). Implementa CQRS para separar lectura/escritura, event sourcing para auditor\xEDa completa, idempotencia en pagos, rate limiting adaptativo, y testing exhaustivo (unit, integration, contract). Documentaci\xF3n OpenAPI 3.1 autom\xE1tica. Soporta multi-tenancy y feature flags.", images: ["assets/images/projects/ecomerce/1.png", "assets/images/projects/ecomerce/2.png"], video: null, poster: "assets/images/projects/ecomerce/1.png", techStack: ["Node.js", "TypeScript", "Fastify", "PostgreSQL", "Redis", "RabbitMQ", "Kafka", "Jest", "k6"], category: "backend", links: { demo: null, github: "https://github.com/usuario/ecomerce-api", docs: "https://api-docs.example.com" }, featured: false, year: 2023, role: "Backend Developer & Arquitecto" },
          { id: "design-system", title: "Aurora Design System", shortDescription: "Sistema de dise\xF1o accesible y tem\xE1tico con 60+ componentes, tokens de dise\xF1o y documentaci\xF3n interactiva.", fullDescription: "Aurora es un sistema de dise\xF1o completo construido desde cero con enfoque en accesibilidad (WCAG 2.1 AA), theming avanzado (modo oscuro, high contrast, brand themes), y developer experience. Incluye Storybook interactivo, CLI para generar componentes, tokens en Figma sincronizados, y paquetes para React, Vue y HTML puro. Zero-runtime CSS con Stitches.", images: ["assets/images/projects/aurora/1.png", "assets/images/projects/aurora/2.png"], video: null, poster: "assets/images/projects/aurora/1.png", techStack: ["React", "TypeScript", "Storybook", "Stitches", "Figma API", "Changesets", "Vite"], category: "frontend", links: { demo: "https://aurora-ds.example.com", github: "https://github.com/usuario/aurora-design-system", npm: "https://npmjs.com/org/aurora-ds" }, featured: true, year: 2024, role: "Frontend Architect & Lead" },
          { id: "ml-price-predictor", title: "ML Price Predictor", shortDescription: "Modelo de Machine Learning para predicci\xF3n de precios inmobiliarios con explicabilidad SHAP y API de inferencia.", fullDescription: "Proyecto de Data Science aplicado a real estate. Entrenamiento de modelos (XGBoost, LightGBM, Neural Nets) con feature engineering avanzado, validaci\xF3n cruzada temporal, y explicabilidad con SHAP values. Despliegue como API REST con FastAPI, monitoreo de drift con Evidently, y pipeline CI/CD con MLflow y DVC. Incluye notebooks de exploraci\xF3n y reporte autom\xE1tico de m\xE9tricas.", images: ["assets/images/projects/ml-price/1.png", "assets/images/projects/ml-price/2.png"], video: null, poster: "assets/images/projects/ml-price/1.png", techStack: ["Python", "FastAPI", "XGBoost", "LightGBM", "SHAP", "MLflow", "DVC", "Docker", "Kubernetes"], category: "data-science", links: { demo: "https://ml-price.example.com", github: "https://github.com/usuario/ml-price-predictor", notebook: "https://kaggle.com/usuario/ml-price" }, featured: false, year: 2023, role: "ML Engineer" }
        ],
        categories: [{ "id": "all", "label": "Todos", "icon": "grid" }, { "id": "featured", "label": "Destacados", "icon": "star" }, { "id": "fullstack", "label": "Fullstack", "icon": "layers" }, { "id": "frontend", "label": "Frontend", "icon": "monitor" }, { "id": "backend", "label": "Backend", "icon": "server" }, { "id": "webapp", "label": "Web Apps", "icon": "window" }, { "id": "tooling", "label": "Herramientas", "icon": "wrench" }, { "id": "data-science", "label": "Data Science", "icon": "bar-chart" }]
      }
    },
    en: {
      ui: {
        nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
        hero: { badge: "Fullstack Developer", title: "I create digital solutions", highlight: "innovative and scalable", description: "Passionate developer building robust web applications, elegant interfaces, and clean architectures. Specialized in the modern JavaScript/TypeScript ecosystem.", ctaPrimary: "View Projects", ctaSecondary: "Contact" },
        about: { title: "About Me", description: "Hi! I'm Gregorio Navarrete, a fullstack developer with over 3 years of experience creating modern web applications.", journey: "My programming journey started as a hobby over 3 years ago. In university, I immersed myself in algorithm analysis and program development with dynamic data structures in C, C++, and Java. However, I developed an interest in building programs in a more visual environment like the web, learning both frontend and backend.", learning: "Currently I keep learning and building web projects taking courses on platforms like Digital House and Platzi.", highlights: "Among my achievements, I highlight the creation of scalable systems, high-performance APIs, and accessible interfaces.", cv: "Download CV" },
        projects: { title: "Featured Projects", subtitle: "A selection of my most recent and relevant work", filters: { all: "All", featured: "Featured", fullstack: "Fullstack", frontend: "Frontend", backend: "Backend", webapp: "Web Apps", tooling: "Tooling", "data-science": "Data Science" }, viewProject: "View Project", viewCode: "View Code", viewDemo: "Live Demo", techStack: "Technologies", role: "Role", year: "Year", noResults: "No projects found", gallery: { title: "Project Gallery", desktop: "Desktop", mobile: "Mobile", close: "Close gallery", prev: "Previous", next: "Next", counter: "{{current}} / {{total}}" } },
        projectModal: { close: "Close", details: "Details", description: "Description", technologies: "Technologies", links: "Links", demo: "Demo", github: "GitHub", docs: "Documentation", npm: "NPM", caseStudy: "Case Study" },
        footer: { copyright: "\xA9 2024 Fullstack Developer. Built with passion.", madeWith: "Made with", and: "and" },
        theme: { light: "Light", dark: "Dark", system: "System" },
        language: { es: "Spanish", en: "English" },
        a11y: { skipToContent: "Skip to main content", menuOpen: "Open menu", menuClose: "Close menu", themeToggle: "Toggle theme", languageToggle: "Toggle language", projectCard: "Project card", projectImage: "Project image", projectVideo: "Project video", galleryImage: "Gallery image", galleryNav: "Gallery navigation" }
      },
      projects: {
        projects: [
          { id: "prisma", title: "Proyecto Prisma", shortDescription: "Enterprise management platform with inventory, sales, and real-time analytics modules.", fullDescription: "Proyecto Prisma is a complete enterprise management solution (ERP) developed for SMEs that need to centralize their operations. It includes smart inventory modules with stock alerts, integrated point of sale (POS), electronic invoicing, lightweight CRM, and an analytical dashboard with real-time metrics using WebSockets. The modular architecture allows each component to scale independently.", images: ["assets/images/projects/prisma/desktop-1.png", "assets/images/projects/prisma/desktop-2.png", "assets/images/projects/prisma/desktop-3.png", "assets/images/projects/prisma/mobile-1.png", "assets/images/projects/prisma/mobile-2.png", "assets/images/projects/prisma/mobile-3.png", "assets/images/projects/prisma/mobile-4.png"], video: null, poster: "assets/images/projects/prisma/desktop-1.png", techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets", "Tailwind CSS", "Docker"], category: "fullstack", links: { demo: "https://prisma-demo.example.com", github: "https://github.com/usuario/prisma", caseStudy: "#" }, featured: true, year: 2024, role: "Fullstack Developer & Architect" },
          { id: "taskflow", title: "TaskFlow", shortDescription: "Collaborative productivity app with Kanban boards, automations, and team metrics.", fullDescription: "TaskFlow is a project management tool inspired by Linear and Notion. It allows creating workspaces, customizable Kanban boards, 'if-this-then-that' automations, time tracking, and productivity reports per team member. It implements real-time collaborative editing using CRDTs (Yjs) for conflict-free synchronization. Includes offline-first mode with automatic sync on reconnection.", images: ["assets/images/projects/taskflow/1.png", "assets/images/projects/taskflow/2.png"], video: null, poster: "assets/images/projects/taskflow/1.png", techStack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Yjs", "Vercel"], category: "webapp", links: { demo: "https://taskflow.example.com", github: "https://github.com/usuario/taskflow", caseStudy: "#" }, featured: true, year: 2024, role: "Fullstack Developer" },
          { id: "devhub", title: "DevHub CLI", shortDescription: "Command-line tool to automate development workflows: scaffolding, deploy, monitoring.", fullDescription: "DevHub CLI is an open source tool that automates repetitive development tasks. It includes project generators (React, Next.js, Node, Go), secrets management integrated with 1Password/Bitwarden, deploy to multiple clouds (Vercel, AWS, Railway), and application health monitoring with Slack/Discord alerts. Designed with a plugin architecture for extensibility.", images: ["assets/images/projects/devhub/1.png", "assets/images/projects/devhub/2.png"], video: null, poster: "assets/images/projects/devhub/1.png", techStack: ["TypeScript", "Node.js", "Commander.js", "Inquirer", "Docker", "GitHub Actions"], category: "tooling", links: { demo: null, github: "https://github.com/usuario/devhub-cli", npm: "https://npmjs.com/package/@usuario/devhub" }, featured: false, year: 2023, role: "Creator & Maintainer" },
          { id: "ecomerce-api", title: "E-Commerce API", shortDescription: "High-performance RESTful API for e-commerce with hexagonal architecture and domain events.", fullDescription: "Robust backend for e-commerce platforms built with hexagonal architecture (Ports & Adapters). Implements CQRS to separate read/write, event sourcing for complete audit trail, payment idempotency, adaptive rate limiting, and exhaustive testing (unit, integration, contract). Automatic OpenAPI 3.1 documentation. Supports multi-tenancy and feature flags.", images: ["assets/images/projects/ecomerce/1.png", "assets/images/projects/ecomerce/2.png"], video: null, poster: "assets/images/projects/ecomerce/1.png", techStack: ["Node.js", "TypeScript", "Fastify", "PostgreSQL", "Redis", "RabbitMQ", "Kafka", "Jest", "k6"], category: "backend", links: { demo: null, github: "https://github.com/usuario/ecomerce-api", docs: "https://api-docs.example.com" }, featured: false, year: 2023, role: "Backend Developer & Architect" },
          { id: "design-system", title: "Aurora Design System", shortDescription: "Accessible, themable design system with 60+ components, design tokens, and interactive documentation.", fullDescription: "Aurora is a complete design system built from scratch with focus on accessibility (WCAG 2.1 AA), advanced theming (dark mode, high contrast, brand themes), and developer experience. Includes interactive Storybook, CLI for component generation, Figma-synced tokens, and packages for React, Vue, and vanilla HTML. Zero-runtime CSS with Stitches.", images: ["assets/images/projects/aurora/1.png", "assets/images/projects/aurora/2.png"], video: null, poster: "assets/images/projects/aurora/1.png", techStack: ["React", "TypeScript", "Storybook", "Stitches", "Figma API", "Changesets", "Vite"], category: "frontend", links: { demo: "https://aurora-ds.example.com", github: "https://github.com/usuario/aurora-design-system", npm: "https://npmjs.com/org/aurora-ds" }, featured: true, year: 2024, role: "Frontend Architect & Lead" },
          { id: "ml-price-predictor", title: "ML Price Predictor", shortDescription: "Machine Learning model for real estate price prediction with SHAP explainability and inference API.", fullDescription: "Data Science project applied to real estate. Training of models (XGBoost, LightGBM, Neural Nets) with advanced feature engineering, temporal cross-validation, and explainability with SHAP values. Deployed as REST API with FastAPI, drift monitoring with Evidently, and CI/CD pipeline with MLflow and DVC. Includes exploration notebooks and automated metrics reporting.", images: ["assets/images/projects/ml-price/1.png", "assets/images/projects/ml-price/2.png"], video: null, poster: "assets/images/projects/ml-price/1.png", techStack: ["Python", "FastAPI", "XGBoost", "LightGBM", "SHAP", "MLflow", "DVC", "Docker", "Kubernetes"], category: "data-science", links: { demo: "https://ml-price.example.com", github: "https://github.com/usuario/ml-price-predictor", notebook: "https://kaggle.com/usuario/ml-price" }, featured: false, year: 2023, role: "ML Engineer" }
        ],
        categories: [{ "id": "all", "label": "All", "icon": "grid" }, { "id": "featured", "label": "Featured", "icon": "star" }, { "id": "fullstack", "label": "Fullstack", "icon": "layers" }, { "id": "frontend", "label": "Frontend", "icon": "monitor" }, { "id": "backend", "label": "Backend", "icon": "server" }, { "id": "webapp", "label": "Web Apps", "icon": "window" }, { "id": "tooling", "label": "Tooling", "icon": "wrench" }, { "id": "data-science", "label": "Data Science", "icon": "bar-chart" }]
      }
    }
  };
  var I18nManager = class {
    constructor() {
      this.currentLang = "es";
      this.translations = {};
      this.supportedLanguages = ["es", "en"];
      this.listeners = /* @__PURE__ */ new Set();
    }
    async init() {
      const savedLang = localStorage.getItem("portfolio-lang");
      const browserLang = navigator.language.split("-")[0];
      if (savedLang && this.supportedLanguages.includes(savedLang)) {
        this.currentLang = savedLang;
      } else if (this.supportedLanguages.includes(browserLang)) {
        this.currentLang = browserLang;
      }
      this.loadEmbeddedTranslations(this.currentLang);
      this.applyTranslations();
      document.documentElement.lang = this.currentLang;
      this.setupLanguageDropdown();
      return this;
    }
    loadEmbeddedTranslations(lang) {
      const data = EMBEDDED_TRANSLATIONS[lang] || EMBEDDED_TRANSLATIONS.es;
      this.translations.ui = data.ui;
      this.translations.projects = data.projects;
    }
    setupLanguageDropdown() {
      this.langBtn = document.getElementById("langBtn");
      this.langDropdown = this.langBtn?.nextElementSibling;
      this.langText = document.getElementById("langText");
      this.langFlag = document.getElementById("langFlag");
      if (!this.langBtn || !this.langDropdown) return;
      this.langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isHidden = this.langDropdown.hasAttribute("hidden");
        if (isHidden) {
          this.langDropdown.removeAttribute("hidden");
          this.langBtn.setAttribute("aria-expanded", "true");
        } else {
          this.langDropdown.setAttribute("hidden", "");
          this.langBtn.setAttribute("aria-expanded", "false");
        }
      });
      document.addEventListener("click", () => {
        if (!this.langDropdown.hasAttribute("hidden")) {
          this.langDropdown.setAttribute("hidden", "");
          this.langBtn.setAttribute("aria-expanded", "false");
        }
      });
      this.langDropdown.querySelectorAll("[data-lang]").forEach((item) => {
        item.addEventListener("click", async (e) => {
          e.stopPropagation();
          const lang = item.dataset.lang;
          await this.setLanguage(lang);
          this.updateLanguageButton();
          this.langDropdown.setAttribute("hidden", "");
          this.langBtn.setAttribute("aria-expanded", "false");
          this.langBtn.focus();
        });
      });
      this.updateLanguageButton();
    }
    updateLanguageButton() {
      if (!this.langText || !this.langFlag) return;
      const flags = {
        es: "https://media.flaticon.com/dist/min/img/flags/es.svg",
        en: "https://media.flaticon.com/dist/min/img/flags/en.svg"
      };
      const names = {
        es: this.t("language.es"),
        en: this.t("language.en")
      };
      this.langFlag.src = flags[this.currentLang] || flags.es;
      this.langText.textContent = names[this.currentLang] || names.es;
    }
    async setLanguage(lang) {
      if (!this.supportedLanguages.includes(lang) || lang === this.currentLang) {
        return false;
      }
      this.currentLang = lang;
      localStorage.setItem("portfolio-lang", lang);
      this.loadEmbeddedTranslations(lang);
      this.applyTranslations();
      document.documentElement.lang = lang;
      this.updateLanguageButton();
      this.notifyListeners({ lang, translations: this.translations });
      window.dispatchEvent(new CustomEvent("i18n:change", {
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
      const keys = key.split(".");
      let value = this.translations.ui;
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          console.warn(`Translation key not found: ${key}`);
          return key;
        }
      }
      if (typeof value === "string" && Object.keys(params).length > 0) {
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
      const elements = document.querySelectorAll("[data-i18n]");
      elements.forEach((el) => {
        const key = el.dataset.i18n;
        const translation = this.t(key);
        if (translation) {
          if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            el.placeholder = translation;
          } else if (el.dataset.i18nHtml === "true") {
            el.innerHTML = translation;
          } else {
            el.textContent = translation;
          }
        }
      });
      this.updateSpecificAttributes();
    }
    updateSpecificAttributes() {
      document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        const key = el.dataset.i18nAria;
        const translation = this.t(key);
        if (translation) el.setAttribute("aria-label", translation);
      });
      document.querySelectorAll("[data-i18n-title]").forEach((el) => {
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
      this.listeners.forEach((cb) => {
        try {
          cb(data);
        } catch (error) {
          console.error("Error in i18n listener:", error);
        }
      });
    }
    refresh() {
      this.applyTranslations();
    }
  };

  // js/theme.js
  var ThemeManager = class {
    constructor() {
      this.currentTheme = "system";
      this.mediaQuery = null;
      this.listeners = /* @__PURE__ */ new Set();
    }
    init() {
      const savedTheme = localStorage.getItem("portfolio-theme");
      if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
        this.currentTheme = savedTheme;
      }
      this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      this.mediaQuery.addEventListener("change", this.handleSystemChange.bind(this));
      this.applyTheme();
      this.setupThemeButtons();
      return this;
    }
    handleSystemChange(e) {
      if (this.currentTheme === "system") {
        this.applyTheme();
      }
    }
    getEffectiveTheme() {
      if (this.currentTheme === "system") {
        return this.mediaQuery?.matches ? "dark" : "light";
      }
      return this.currentTheme;
    }
    applyTheme() {
      const effectiveTheme = this.getEffectiveTheme();
      document.documentElement.setAttribute("data-theme", effectiveTheme);
      this.updateMetaThemeColor(effectiveTheme);
    }
    updateMetaThemeColor(theme) {
      const meta = document.querySelector('meta[name="theme-color"]');
      const color = theme === "dark" ? "#171717" : "#fafafa";
      if (meta) {
        meta.setAttribute("content", color);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "theme-color";
        newMeta.content = color;
        document.head.appendChild(newMeta);
      }
    }
    setTheme(theme) {
      if (!["light", "dark", "system"].includes(theme)) return false;
      console.log("\u{1F3A8} setTheme llamado:", theme);
      this.currentTheme = theme;
      localStorage.setItem("portfolio-theme", theme);
      this.applyTheme();
      this.notifyListeners({ theme: this.currentTheme, effectiveTheme: this.getEffectiveTheme() });
      window.dispatchEvent(new CustomEvent("theme:change", {
        detail: { theme: this.currentTheme, effectiveTheme: this.getEffectiveTheme() }
      }));
      console.log("\u2705 Tema aplicado:", this.currentTheme, "efectivo:", this.getEffectiveTheme());
      return true;
    }
    toggle() {
      const effective = this.getEffectiveTheme();
      const next = effective === "dark" ? "light" : "dark";
      this.setTheme(this.currentTheme === "system" ? next : this.currentTheme === "dark" ? "light" : "dark");
    }
    getCurrentTheme() {
      return this.currentTheme;
    }
    setupThemeButtons() {
      document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
        btn.addEventListener("click", () => {
          console.log("\u{1F5B1}\uFE0F Click en theme button:", btn.dataset.themeToggle);
          const theme = btn.dataset.themeToggle;
          if (theme) {
            this.setTheme(theme);
          } else {
            this.toggle();
          }
        });
      });
      this.updateButtonStates();
    }
    updateButtonStates() {
      const effective = this.getEffectiveTheme();
      document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
        const theme = btn.dataset.themeToggle;
        const isActive = theme === this.currentTheme || theme === "system" && this.currentTheme === "system" || !theme && effective === (btn.dataset.themeValue || "");
        btn.setAttribute("aria-pressed", isActive.toString());
        if (btn.dataset.themeToggle === void 0 && btn.dataset.themeValue) {
          btn.hidden = btn.dataset.themeValue === effective;
        }
      });
    }
    subscribe(callback) {
      this.listeners.add(callback);
      return () => this.listeners.delete(callback);
    }
    notifyListeners(data) {
      this.listeners.forEach((cb) => {
        try {
          cb(data);
        } catch (error) {
          console.error("Error in theme listener:", error);
        }
      });
    }
    refresh() {
      this.updateButtonStates();
    }
  };

  // js/gallery.js
  var Gallery = class {
    constructor(options = {}) {
      this.images = options.images || [];
      this.currentIndex = 0;
      this.isOpen = false;
      this.modal = null;
      this.i18n = options.i18n || null;
      this.startX = 0;
      this.threshold = 50;
      this.autoPlayTimer = null;
      this.autoPlayDelay = 5e3;
    }
    init() {
      this.createModal();
      this.bindEvents();
    }
    createModal() {
      this.modal = document.createElement("div");
      this.modal.className = "gallery-modal";
      this.modal.setAttribute("role", "dialog");
      this.modal.setAttribute("aria-modal", "true");
      this.modal.setAttribute("aria-label", this.t("projects.gallery.title"));
      this.modal.innerHTML = `
      <div class="gallery-modal__backdrop" data-gallery-close></div>
      <div class="gallery-modal__container">
        <button class="gallery-modal__close" data-gallery-close aria-label="${this.t("projects.gallery.close")}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <button class="gallery-modal__nav gallery-modal__nav--prev" data-gallery-prev aria-label="${this.t("projects.gallery.prev")}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="gallery-modal__viewport" data-gallery-viewport>
          <div class="gallery-modal__track" data-gallery-track></div>
        </div>
        <button class="gallery-modal__nav gallery-modal__nav--next" data-gallery-next aria-label="${this.t("projects.gallery.next")}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div class="gallery-modal__counter" data-gallery-counter aria-live="polite"></div>
        <div class="gallery-modal__thumbnails" data-gallery-thumbnails></div>
      </div>
    `;
      document.body.appendChild(this.modal);
      this.track = this.modal.querySelector("[data-gallery-track]");
      this.viewport = this.modal.querySelector("[data-gallery-viewport]");
      this.counter = this.modal.querySelector("[data-gallery-counter]");
      this.thumbnailsContainer = this.modal.querySelector("[data-gallery-thumbnails]");
    }
    bindEvents() {
      this.modal.addEventListener("click", (e) => {
        if (e.target.closest("[data-gallery-close]")) {
          this.close();
        }
      });
      this.modal.querySelector("[data-gallery-prev]").addEventListener("click", () => this.prev());
      this.modal.querySelector("[data-gallery-next]").addEventListener("click", () => this.next());
      document.addEventListener("keydown", (e) => {
        if (!this.isOpen) return;
        if (e.key === "Escape") this.close();
        if (e.key === "ArrowLeft") this.prev();
        if (e.key === "ArrowRight") this.next();
      });
      this.viewport.addEventListener("touchstart", (e) => {
        this.startX = e.touches[0].clientX;
      }, { passive: true });
      this.viewport.addEventListener("touchend", (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = this.startX - endX;
        if (Math.abs(diff) > this.threshold) {
          diff > 0 ? this.next() : this.prev();
        }
      }, { passive: true });
      this.thumbnailsContainer.addEventListener("click", (e) => {
        const thumb = e.target.closest("[data-gallery-thumb]");
        if (thumb) {
          const index = parseInt(thumb.dataset.galleryThumb, 10);
          this.goTo(index);
        }
      });
      this.modal.addEventListener("mouseenter", () => this.pauseAutoPlay());
      this.modal.addEventListener("mouseleave", () => this.resumeAutoPlay());
    }
    open(images, startIndex = 0) {
      if (!images || images.length === 0) return;
      this.images = images;
      this.currentIndex = Math.max(0, Math.min(startIndex, images.length - 1));
      this.isOpen = true;
      this.render();
      this.updateCounter();
      this.renderThumbnails();
      requestAnimationFrame(() => {
        this.modal.classList.add("gallery-modal--open");
        document.body.style.overflow = "hidden";
        this.goTo(this.currentIndex, false);
        this.startAutoPlay();
      });
      this.lastFocused = document.activeElement;
      this.modal.querySelector(".gallery-modal__close").focus();
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          this.modal.classList.add("gallery-modal--open");
        });
      }
    }
    close() {
      if (!this.isOpen) return;
      this.isOpen = false;
      this.pauseAutoPlay();
      const closeModal = () => {
        this.modal.classList.remove("gallery-modal--open");
        document.body.style.overflow = "";
        if (this.lastFocused) this.lastFocused.focus();
      };
      if (document.startViewTransition) {
        document.startViewTransition(closeModal);
      } else {
        closeModal();
      }
    }
    render() {
      this.track.innerHTML = this.images.map((src, i) => `
      <div class="gallery-modal__slide" data-gallery-index="${i}" style="flex: 0 0 100%; width: 100%;">
        <img
          src="${src}"
          alt="${this.t("a11y.galleryImage")}: ${this.getImageName(src)}"
          loading="${i === this.currentIndex ? "eager" : "lazy"}"
          class="gallery-modal__image"
        >
      </div>
    `).join("");
    }
    renderThumbnails() {
      if (this.images.length <= 1) {
        this.thumbnailsContainer.innerHTML = "";
        return;
      }
      this.thumbnailsContainer.innerHTML = this.images.map((src, i) => `
      <button
        class="gallery-modal__thumb ${i === this.currentIndex ? "gallery-modal__thumb--active" : ""}"
        data-gallery-thumb="${i}"
        aria-label="${this.t("projects.gallery.counter", { current: i + 1, total: this.images.length })}"
        aria-current="${i === this.currentIndex ? "true" : "false"}"
      >
        <img src="${src}" alt="" loading="lazy" width="60" height="40">
      </button>
    `).join("");
    }
    goTo(index, animate = true) {
      if (index < 0 || index >= this.images.length) return;
      this.currentIndex = index;
      const translateX = -index * 100;
      if (animate) {
        this.track.style.transition = "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      } else {
        this.track.style.transition = "none";
      }
      this.track.style.transform = `translateX(${translateX}%)`;
      this.thumbnailsContainer.querySelectorAll("[data-gallery-thumb]").forEach((thumb, i) => {
        thumb.classList.toggle("gallery-modal__thumb--active", i === index);
        thumb.setAttribute("aria-current", i === index ? "true" : "false");
      });
      this.updateCounter();
      this.preloadAdjacent(index);
    }
    prev() {
      const newIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.goTo(newIndex);
    }
    next() {
      const newIndex = (this.currentIndex + 1) % this.images.length;
      this.goTo(newIndex);
    }
    updateCounter() {
      this.counter.textContent = this.t("projects.gallery.counter", {
        current: this.currentIndex + 1,
        total: this.images.length
      });
    }
    preloadAdjacent(index) {
      const indices = [index];
      if (index > 0) indices.push(index - 1);
      if (index < this.images.length - 1) indices.push(index + 1);
      indices.forEach((i) => {
        const img = this.track.querySelector(`[data-gallery-index="${i}"] img`);
        if (img && img.loading === "lazy") {
          img.loading = "eager";
        }
      });
    }
    startAutoPlay() {
      if (this.images.length <= 1) return;
      this.pauseAutoPlay();
      this.autoPlayTimer = setInterval(() => this.next(), this.autoPlayDelay);
    }
    pauseAutoPlay() {
      if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer);
        this.autoPlayTimer = null;
      }
    }
    resumeAutoPlay() {
      if (this.isOpen) this.startAutoPlay();
    }
    getImageName(src) {
      const filename = src.split("/").pop().split(".")[0];
      return filename.replace(/[-_]/g, " ");
    }
    t(key, params = {}) {
      if (!this.i18n) return key;
      return this.i18n.t(key, params);
    }
    destroy() {
      this.pauseAutoPlay();
      this.modal?.remove();
    }
  };

  // js/projects.js
  var ProjectManager = class {
    constructor(i18nManager) {
      this.i18n = i18nManager;
      this.projects = [];
      this.categories = [];
      this.currentFilter = "all";
      this.filteredProjects = [];
      this.gridElement = null;
      this.filterContainer = null;
      this.gallery = null;
    }
    async init() {
      this.projects = this.i18n.getProjects();
      this.categories = this.i18n.getCategories();
      this.gridElement = document.querySelector("[data-projects-grid]");
      this.filterContainer = document.querySelector("[data-projects-filters]");
      if (!this.gridElement) {
        console.warn("Projects grid element not found");
        return;
      }
      this.gallery = new Gallery({ i18n: this.i18n });
      this.gallery.init();
      this.renderFilters();
      this.applyFilter("all");
      this.setupEventListeners();
      this.unsubscribeI18n = this.i18n.subscribe(() => this.refresh());
    }
    setupEventListeners() {
      if (this.filterContainer) {
        this.filterContainer.addEventListener("click", (e) => {
          const btn = e.target.closest("[data-filter]");
          if (btn) {
            this.applyFilter(btn.dataset.filter);
          }
        });
      }
      if (this.gridElement) {
        this.gridElement.addEventListener("click", (e) => {
          const card = e.target.closest("[data-project-id]");
          if (!card) return;
          const projectId = card.dataset.projectId;
          if (e.target.closest("[data-project-link]")) {
            return;
          }
          if (e.target.closest("[data-gallery-trigger]")) {
            e.stopPropagation();
            this.openGallery(projectId);
            return;
          }
          this.openProjectModal(projectId);
        });
        this.gridElement.addEventListener("keydown", (e) => {
          const card = e.target.closest("[data-project-id]");
          if (!card) return;
          if (e.key === "Enter" || e.key === " ") {
            const projectId = card.dataset.projectId;
            if (e.target.closest("[data-gallery-trigger]")) {
              e.preventDefault();
              this.openGallery(projectId);
            } else {
              e.preventDefault();
              this.openProjectModal(projectId);
            }
          }
        });
      }
    }
    renderFilters() {
      if (!this.filterContainer) return;
      const t = this.i18n.t.bind(this.i18n);
      this.filterContainer.innerHTML = this.categories.map((cat) => `
      <button
        class="filter-btn ${cat.id === "all" ? "filter-btn--active" : ""}"
        data-filter="${cat.id}"
        data-i18n="projects.filters.${cat.id}"
        type="button"
      >
        ${t(`projects.filters.${cat.id}`) || cat.label}
      </button>
    `).join("");
    }
    applyFilter(filterId) {
      this.currentFilter = filterId;
      if (this.filterContainer) {
        this.filterContainer.querySelectorAll("[data-filter]").forEach((btn) => {
          btn.classList.toggle("filter-btn--active", btn.dataset.filter === filterId);
        });
      }
      if (filterId === "all") {
        this.filteredProjects = [...this.projects];
      } else if (filterId === "featured") {
        this.filteredProjects = this.projects.filter((p) => p.featured);
      } else {
        this.filteredProjects = this.projects.filter((p) => p.category === filterId);
      }
      this.renderGrid();
    }
    renderGrid() {
      if (!this.gridElement) return;
      const t = this.i18n.t.bind(this.i18n);
      if (this.filteredProjects.length === 0) {
        this.gridElement.innerHTML = `
        <div class="no-projects" style="grid-column: 1 / -1; text-align: center; padding: var(--space-12);">
          <p style="color: var(--color-text-secondary);">${t("projects.noResults") || "No projects found"}</p>
        </div>
      `;
        return;
      }
      this.gridElement.innerHTML = this.filteredProjects.map((project, index) => this.renderProjectCard(project, index)).join("");
      this.observeCards();
    }
    renderProjectCard(project, index) {
      const t = this.i18n.t.bind(this.i18n);
      const hasVideo = project.video && project.video !== "path_to_your_video.mp4";
      const hasGallery = project.images && project.images.length > 0;
      return `
      <article
        class="project-card reveal reveal--stagger-${index % 6 + 1}"
        data-project-id="${project.id}"
        style="--stagger-delay: ${index * 100}ms"
        tabindex="0"
        role="article"
        aria-label="${t("a11y.projectCard")}: ${project.title}"
      >
        <div class="project-card__media">
          ${hasVideo ? `<video
              class="project-card__video"
              src="${project.video}"
              poster="${project.poster || project.image}"
              muted
              loop
              playsinline
              preload="metadata"
              aria-label="${t("a11y.projectVideo")}: ${project.title}"
            ></video>` : `<img
              class="project-card__image"
              src="${project.images?.[0] || project.image}"
              alt="${t("a11y.projectImage")}: ${project.title}"
              loading="lazy"
              width="400"
              height="250"
            >`}
          <div class="project-card__overlay">
            <div class="project-card__tech">
              ${project.techStack.slice(0, 4).map(
        (tech) => `<span class="tech-tag">${tech}</span>`
      ).join("")}
              ${project.techStack.length > 4 ? `<span class="tech-tag">+${project.techStack.length - 4}</span>` : ""}
            </div>
          </div>

          ${hasGallery && project.images.length > 1 ? `
            <div class="project-card__gallery-indicator" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <circle cx="15.5" cy="8.5" r="1.5"></circle>
                <circle cx="8.5" cy="15.5" r="1.5"></circle>
                <circle cx="15.5" cy="15.5" r="1.5"></circle>
              </svg>
              <span>${project.images.length}</span>
            </div>
            <button
              class="project-card__gallery-trigger"
              data-gallery-trigger
              aria-label="${t("projects.gallery.title")}: ${project.title}"
              type="button"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <circle cx="15.5" cy="8.5" r="1.5"></circle>
                <circle cx="8.5" cy="15.5" r="1.5"></circle>
                <circle cx="15.5" cy="15.5" r="1.5"></circle>
              </svg>
            </button>
          ` : ""}
        </div>
        <div class="project-card__content">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__description">${project.shortDescription}</p>
          <div class="project-card__footer">
            ${project.links.demo ? `
              <a href="${project.links.demo}" class="btn btn--primary btn--sm project-card__link" data-project-link target="_blank" rel="noopener noreferrer">
                ${t("projects.viewDemo")}
              </a>
            ` : ""}
            ${project.links.github ? `
              <a href="${project.links.github}" class="btn btn--secondary btn--sm project-card__link" data-project-link target="_blank" rel="noopener noreferrer">
                ${t("projects.viewCode")}
              </a>
            ` : ""}
          </div>
        </div>
      </article>
    `;
    }
    observeCards() {
      const cards = this.gridElement.querySelectorAll(".project-card:not(.observed)");
      cards.forEach((card) => card.classList.add("observed"));
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal--visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: "50px" });
        cards.forEach((card) => observer.observe(card));
      } else {
        cards.forEach((card) => card.classList.add("reveal--visible"));
      }
    }
    openProjectModal(projectId) {
      const project = this.projects.find((p) => p.id === projectId);
      if (project) {
        window.dispatchEvent(new CustomEvent("project:open", { detail: project }));
      }
    }
    openGallery(projectId, startIndex = 0) {
      const project = this.projects.find((p) => p.id === projectId);
      if (project && project.images && project.images.length > 0) {
        this.gallery.open(project.images, startIndex);
      }
    }
    refresh() {
      this.projects = this.i18n.getProjects();
      this.categories = this.i18n.getCategories();
      this.renderFilters();
      this.applyFilter(this.currentFilter);
    }
    destroy() {
      this.unsubscribeI18n?.();
      this.gallery?.destroy();
    }
  };

  // js/modal.js
  var ModalManager = class {
    constructor(i18nManager) {
      this.i18n = i18nManager;
      this.modal = null;
      this.currentProject = null;
      this.isOpen = false;
      this.lastFocusedElement = null;
    }
    init() {
      this.createModal();
      this.setupEventListeners();
      this.unsubscribeI18n = this.i18n.subscribe(() => this.refresh());
    }
    createModal() {
      this.modal = document.createElement("div");
      this.modal.className = "modal";
      this.modal.setAttribute("role", "dialog");
      this.modal.setAttribute("aria-modal", "true");
      this.modal.setAttribute("aria-labelledby", "modal-title");
      this.modal.innerHTML = `
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__content">
        <button class="modal__close" data-modal-close aria-label="${this.i18n.t("projectModal.close")}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <div class="modal__media" data-modal-media></div>
        <div class="modal__body">
          <div class="modal__header">
            <h2 id="modal-title" class="modal__title"></h2>
            <div class="modal__meta"></div>
          </div>
          <p class="modal__description"></p>
          <div class="modal__details"></div>
          <div class="modal__actions"></div>
        </div>
      </div>
    `;
      document.body.appendChild(this.modal);
    }
    setupEventListeners() {
      this.modal.addEventListener("click", (e) => {
        if (e.target.closest("[data-modal-close]")) {
          this.close();
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isOpen) {
          this.close();
        }
        if (e.key === "Tab" && this.isOpen) {
          this.trapFocus(e);
        }
      });
      window.addEventListener("project:open", (e) => {
        this.open(e.detail);
      });
    }
    open(project) {
      this.currentProject = project;
      this.lastFocusedElement = document.activeElement;
      this.isOpen = true;
      this.renderContent();
      requestAnimationFrame(() => {
        this.modal.classList.add("modal--open");
        document.body.style.overflow = "hidden";
        this.modal.querySelector(".modal__close").focus();
      });
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          this.modal.classList.add("modal--open");
        });
      }
    }
    close() {
      if (!this.isOpen) return;
      this.isOpen = false;
      const closeModal = () => {
        this.modal.classList.remove("modal--open");
        document.body.style.overflow = "";
        if (this.lastFocusedElement) {
          this.lastFocusedElement.focus();
        }
        this.currentProject = null;
      };
      if (document.startViewTransition) {
        document.startViewTransition(closeModal);
      } else {
        closeModal();
      }
    }
    renderContent() {
      if (!this.currentProject) return;
      const p = this.currentProject;
      const t = this.i18n.t.bind(this.i18n);
      const hasVideo = p.video && p.video !== "path_to_your_video.mp4";
      const hasGallery = p.images && p.images.length > 0;
      const mediaContainer = this.modal.querySelector("[data-modal-media]");
      const firstImage = hasGallery ? p.images[0] : p.image;
      mediaContainer.innerHTML = hasVideo ? `<video src="${p.video}" poster="${p.poster || firstImage}" controls playsinline aria-label="${t("a11y.projectVideo")}: ${p.title}"></video>` : `<img src="${firstImage}" alt="${t("a11y.projectImage")}: ${p.title}" loading="eager">`;
      this.modal.querySelector(".modal__title").textContent = p.title;
      const metaContainer = this.modal.querySelector(".modal__meta");
      metaContainer.innerHTML = `
      ${p.featured ? `<span class="badge badge--featured">${t("projects.filters.featured")}</span>` : ""}
      <span class="badge">${p.year}</span>
      <span class="badge">${this.getCategoryLabel(p.category)}</span>
      ${p.role ? `<span class="badge">${p.role}</span>` : ""}
    `;
      this.modal.querySelector(".modal__description").textContent = p.fullDescription;
      const detailsContainer = this.modal.querySelector(".modal__details");
      detailsContainer.innerHTML = `
      <div class="modal__detail">
        <h4>${t("projectModal.technologies")}</h4>
        <div class="tech-tags">
          ${p.techStack.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
        </div>
      </div>
      ${p.links.demo || p.links.github || p.links.docs || p.links.npm || p.links.caseStudy ? `
        <div class="modal__detail">
          <h4>${t("projectModal.links")}</h4>
          <div class="modal__links">
            ${p.links.demo ? `<a href="${p.links.demo}" class="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer">${t("projectModal.demo")}</a>` : ""}
            ${p.links.github ? `<a href="${p.links.github}" class="btn btn--secondary btn--sm" target="_blank" rel="noopener noreferrer">${t("projectModal.github")}</a>` : ""}
            ${p.links.docs ? `<a href="${p.links.docs}" class="btn btn--outline btn--sm" target="_blank" rel="noopener noreferrer">${t("projectModal.docs")}</a>` : ""}
            ${p.links.npm ? `<a href="${p.links.npm}" class="btn btn--outline btn--sm" target="_blank" rel="noopener noreferrer">${t("projectModal.npm")}</a>` : ""}
            ${p.links.caseStudy ? `<a href="${p.links.caseStudy}" class="btn btn--outline btn--sm" target="_blank" rel="noopener noreferrer">${t("projectModal.caseStudy")}</a>` : ""}
          </div>
        </div>
      ` : ""}
      ${hasGallery && p.images.length > 1 ? `
        <div class="modal__detail">
          <h4>${t("projects.gallery.title")}</h4>
          <button class="btn btn--secondary btn--sm" id="openGalleryBtn" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px; margin-right: 6px;">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <circle cx="15.5" cy="8.5" r="1.5"></circle>
              <circle cx="8.5" cy="15.5" r="1.5"></circle>
              <circle cx="15.5" cy="15.5" r="1.5"></circle>
            </svg>
            ${t("projects.gallery.title")} (${p.images.length} im\xE1genes)
          </button>
        </div>
      ` : ""}
    `;
      const actionsContainer = this.modal.querySelector(".modal__actions");
      actionsContainer.innerHTML = `
      ${p.links.demo ? `<a href="${p.links.demo}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">${t("projectModal.demo")}</a>` : ""}
      ${p.links.github ? `<a href="${p.links.github}" class="btn btn--secondary" target="_blank" rel="noopener noreferrer">${t("projectModal.github")}</a>` : ""}
    `;
      const galleryBtn = this.modal.querySelector("#openGalleryBtn");
      if (galleryBtn) {
        galleryBtn.addEventListener("click", () => {
          window.dispatchEvent(new CustomEvent("project:gallery", { detail: { project: p, startIndex: 0 } }));
        });
      }
    }
    getCategoryLabel(categoryId) {
      const category = this.i18n.getCategories().find((c) => c.id === categoryId);
      return category ? this.i18n.t(`projects.filters.${categoryId}`) || category.label : categoryId;
    }
    trapFocus(e) {
      const focusableElements = this.modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
    refresh() {
      if (this.isOpen && this.currentProject) {
        this.renderContent();
      }
    }
    destroy() {
      this.unsubscribeI18n?.();
      this.modal?.remove();
    }
  };

  // js/observers.js
  var ScrollAnimations = class {
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
      if (!("IntersectionObserver" in window)) {
        document.querySelectorAll(".reveal").forEach((el) => el.classList.add("reveal--visible"));
        return;
      }
      this.revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            this.revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      });
      document.querySelectorAll(".reveal").forEach((el) => {
        this.revealObserver.observe(el);
      });
    }
    // Barra de progreso de scroll
    setupScrollProgress() {
      this.scrollProgress = document.createElement("div");
      this.scrollProgress.className = "scroll-progress";
      this.scrollProgress.setAttribute("aria-hidden", "true");
      document.body.appendChild(this.scrollProgress);
      if (CSS.supports("animation-timeline: scroll()")) {
        return;
      }
      let ticking = false;
      window.addEventListener("scroll", () => {
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
      this.parallaxElements = document.querySelectorAll("[data-parallax]");
      if (this.parallaxElements.length === 0) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
      let ticking = false;
      window.addEventListener("scroll", () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            this.parallaxElements.forEach((el) => {
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
      const header = document.querySelector(".header");
      if (!header) return;
      let lastScrollY = window.scrollY;
      let ticking = false;
      window.addEventListener("scroll", () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 100) {
              header.classList.add("header--scrolled");
            } else {
              header.classList.remove("header--scrolled");
            }
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
              header.style.transform = "translateY(-100%)";
            } else {
              header.style.transform = "translateY(0)";
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
      const typingElements = document.querySelectorAll("[data-typing]");
      typingElements.forEach((el) => {
        const text = el.dataset.typing;
        const speed = parseInt(el.dataset.typingSpeed) || 50;
        const delay = parseInt(el.dataset.typingDelay) || 0;
        el.textContent = "";
        el.classList.add("typing");
        setTimeout(() => {
          this.typeText(el, text, speed, () => {
            el.classList.remove("typing");
            el.classList.add("typing--done");
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
      if (this.revealObserver && element.classList.contains("reveal")) {
        this.revealObserver.observe(element);
      }
    }
    // Forzar verificación de elementos visibles
    checkVisible() {
      if (this.revealObserver) {
      }
    }
    destroy() {
      this.revealObserver?.disconnect();
      this.scrollProgress?.remove();
    }
  };

  // js/navigation.js
  var NavigationManager = class {
    constructor() {
      this.navLinks = [];
      this.sections = [];
      this.mobileMenuBtn = null;
      this.mobileMenu = null;
      this.isMobileOpen = false;
    }
    init() {
      this.navLinks = document.querySelectorAll("[data-nav-link]");
      this.sections = document.querySelectorAll("section[id]");
      this.mobileMenuBtn = document.querySelector("[data-mobile-menu-btn]");
      this.mobileMenu = document.querySelector("[data-mobile-menu]");
      this.setupSmoothScroll();
      this.setupActiveSection();
      this.setupMobileMenu();
      this.setupKeyboardNavigation();
    }
    setupSmoothScroll() {
      this.navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          const href = link.getAttribute("href");
          if (href && href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              const headerOffset = 80;
              const elementPosition = target.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.scrollY - headerOffset;
              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
              });
              this.closeMobileMenu();
              target.setAttribute("tabindex", "-1");
              target.focus({ preventScroll: true });
            }
          }
        });
      });
    }
    setupActiveSection() {
      if (!("IntersectionObserver" in window)) return;
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            this.updateActiveLink(id);
          }
        });
      }, {
        rootMargin: "-80px 0px -66% 0px",
        // Offset para header
        threshold: 0
      });
      this.sections.forEach((section) => observer.observe(section));
    }
    updateActiveLink(activeId) {
      this.navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        const isActive = href === `#${activeId}`;
        link.classList.toggle("nav-link--active", isActive);
        link.setAttribute("aria-current", isActive ? "page" : "false");
      });
    }
    setupMobileMenu() {
      if (!this.mobileMenuBtn || !this.mobileMenu) return;
      this.mobileMenuBtn.addEventListener("click", () => {
        this.toggleMobileMenu();
      });
      this.mobileMenu.querySelectorAll("[data-nav-link]").forEach((link) => {
        link.addEventListener("click", () => this.closeMobileMenu());
      });
      document.addEventListener("click", (e) => {
        if (this.isMobileOpen && !this.mobileMenu.contains(e.target) && !this.mobileMenuBtn.contains(e.target)) {
          this.closeMobileMenu();
        }
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && this.isMobileOpen) {
          this.closeMobileMenu();
        }
      });
    }
    toggleMobileMenu() {
      this.isMobileOpen = !this.isMobileOpen;
      this.mobileMenuBtn.setAttribute("aria-expanded", this.isMobileOpen);
      this.mobileMenu.classList.toggle("mobile-menu--open", this.isMobileOpen);
      document.body.style.overflow = this.isMobileOpen ? "hidden" : "";
    }
    closeMobileMenu() {
      if (this.isMobileOpen) {
        this.isMobileOpen = false;
        this.mobileMenuBtn.setAttribute("aria-expanded", "false");
        this.mobileMenu.classList.remove("mobile-menu--open");
        document.body.style.overflow = "";
      }
    }
    setupKeyboardNavigation() {
      const navContainer = document.querySelector("[data-nav-container]");
      if (!navContainer) return;
      navContainer.addEventListener("keydown", (e) => {
        const links = Array.from(navContainer.querySelectorAll("[data-nav-link]"));
        const currentIndex = links.indexOf(document.activeElement);
        if (currentIndex === -1) return;
        let nextIndex = currentIndex;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          nextIndex = (currentIndex + 1) % links.length;
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          nextIndex = (currentIndex - 1 + links.length) % links.length;
        } else if (e.key === "Home") {
          e.preventDefault();
          nextIndex = 0;
        } else if (e.key === "End") {
          e.preventDefault();
          nextIndex = links.length - 1;
        }
        if (nextIndex !== currentIndex) {
          links[nextIndex].focus();
        }
      });
    }
    refresh() {
      this.init();
    }
  };

  // js/main.js
  var AppState = {
    i18n: null,
    theme: null,
    projects: null,
    modal: null,
    scroll: null,
    navigation: null
  };
  async function initApp() {
    try {
      console.log("\u{1F527} Iniciando app...");
      AppState.i18n = new I18nManager();
      await AppState.i18n.init();
      console.log("\u2705 i18n inicializado, lang:", AppState.i18n.getCurrentLanguage());
      AppState.theme = new ThemeManager();
      AppState.theme.init();
      console.log("\u2705 Tema inicializado:", AppState.theme.getCurrentTheme(), "efectivo:", AppState.theme.getEffectiveTheme());
      AppState.navigation = new NavigationManager();
      AppState.navigation.init();
      AppState.projects = new ProjectManager(AppState.i18n);
      await AppState.projects.init();
      AppState.modal = new ModalManager(AppState.i18n);
      AppState.modal.init();
      AppState.scroll = new ScrollAnimations();
      AppState.scroll.init();
      setupGlobalListeners();
      document.documentElement.classList.add("app-ready");
      window.dispatchEvent(new CustomEvent("app:ready", { detail: AppState }));
      console.log("\u{1F680} Portfolio app initialized successfully");
    } catch (error) {
      console.error("\u274C Failed to initialize app:", error);
      document.documentElement.classList.add("app-error");
    }
  }
  function setupGlobalListeners() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && AppState.modal?.isOpen) {
        AppState.modal.close();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
      }
      if (e.key === "t" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        AppState.theme?.toggle();
      }
    });
    window.addEventListener("i18n:change", (e) => {
      AppState.projects?.refresh();
      AppState.modal?.refresh();
      AppState.navigation?.refresh();
    });
    window.addEventListener("theme:change", (e) => {
    });
    window.addEventListener("project:gallery", (e) => {
      const { project, startIndex } = e.detail;
      if (project && project.images && project.images.length > 0) {
        AppState.projects.openGallery(project.id, startIndex);
      }
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
  window.AppState = AppState;
  return __toCommonJS(main_exports);
})();
