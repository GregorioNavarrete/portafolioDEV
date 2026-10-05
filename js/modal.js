/**
 * ========================================
 * MODAL.JS - Project Modal Manager
 * ========================================
 * Maneja el modal de detalle de proyectos con View Transitions API
 */

export class ModalManager {
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
    // Crear elemento modal
    this.modal = document.createElement('div');
    this.modal.className = 'modal';
    this.modal.setAttribute('role', 'dialog');
    this.modal.setAttribute('aria-modal', 'true');
    this.modal.setAttribute('aria-labelledby', 'modal-title');
    this.modal.innerHTML = `
      <div class="modal__backdrop" data-modal-close></div>
      <div class="modal__content">
        <button class="modal__close" data-modal-close aria-label="${this.i18n.t('projectModal.close')}">
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
    // Cerrar con backdrop o botón
    this.modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-modal-close]')) {
        this.close();
      }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }

      // Trap focus dentro del modal
      if (e.key === 'Tab' && this.isOpen) {
        this.trapFocus(e);
      }
    });

    // Escuchar eventos de apertura
    window.addEventListener('project:open', (e) => {
      this.open(e.detail);
    });
  }

  open(project) {
    this.currentProject = project;
    this.lastFocusedElement = document.activeElement;
    this.isOpen = true;

    // Renderizar contenido
    this.renderContent();

    // Mostrar modal con animación
    requestAnimationFrame(() => {
      this.modal.classList.add('modal--open');
      document.body.style.overflow = 'hidden';

      // Focus en botón de cerrar para accesibilidad
      this.modal.querySelector('.modal__close').focus();
    });

    // View Transitions API si está disponible
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        this.modal.classList.add('modal--open');
      });
    }
  }

  close() {
    if (!this.isOpen) return;

    this.isOpen = false;

    const closeModal = () => {
      this.modal.classList.remove('modal--open');
      document.body.style.overflow = '';

      // Restaurar focus
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
    const hasVideo = p.video && p.video !== 'path_to_your_video.mp4';
    const hasGallery = p.images && p.images.length > 0;

    // Media (imagen o video)
    const mediaContainer = this.modal.querySelector('[data-modal-media]');
    const firstImage = hasGallery ? p.images[0] : p.image;

    mediaContainer.innerHTML = hasVideo ?
      `<video src="${p.video}" poster="${p.poster || firstImage}" controls playsinline aria-label="${t('a11y.projectVideo')}: ${p.title}"></video>` :
      `<img src="${firstImage}" alt="${t('a11y.projectImage')}: ${p.title}" loading="eager">`;

    // Título
    this.modal.querySelector('.modal__title').textContent = p.title;

    // Meta (rol, año, categoría)
    const metaContainer = this.modal.querySelector('.modal__meta');
    metaContainer.innerHTML = `
      ${p.featured ? `<span class="badge badge--featured">${t('projects.filters.featured')}</span>` : ''}
      <span class="badge">${p.year}</span>
      <span class="badge">${this.getCategoryLabel(p.category)}</span>
      ${p.role ? `<span class="badge">${p.role}</span>` : ''}
    `;

    // Descripción completa
    this.modal.querySelector('.modal__description').textContent = p.fullDescription;

    // Detalles (tech stack, links)
    const detailsContainer = this.modal.querySelector('.modal__details');
    detailsContainer.innerHTML = `
      <div class="modal__detail">
        <h4>${t('projectModal.technologies')}</h4>
        <div class="tech-tags">
          ${p.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
      </div>
      ${p.links.demo || p.links.github || p.links.docs || p.links.npm || p.links.caseStudy ? `
        <div class="modal__detail">
          <h4>${t('projectModal.links')}</h4>
          <div class="modal__links">
            ${p.links.demo ? `<a href="${p.links.demo}" class="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer">${t('projectModal.demo')}</a>` : ''}
            ${p.links.github ? `<a href="${p.links.github}" class="btn btn--secondary btn--sm" target="_blank" rel="noopener noreferrer">${t('projectModal.github')}</a>` : ''}
            ${p.links.docs ? `<a href="${p.links.docs}" class="btn btn--outline btn--sm" target="_blank" rel="noopener noreferrer">${t('projectModal.docs')}</a>` : ''}
            ${p.links.npm ? `<a href="${p.links.npm}" class="btn btn--outline btn--sm" target="_blank" rel="noopener noreferrer">${t('projectModal.npm')}</a>` : ''}
            ${p.links.caseStudy ? `<a href="${p.links.caseStudy}" class="btn btn--outline btn--sm" target="_blank" rel="noopener noreferrer">${t('projectModal.caseStudy')}</a>` : ''}
          </div>
        </div>
      ` : ''}
      ${hasGallery && p.images.length > 1 ? `
        <div class="modal__detail">
          <h4>${t('projects.gallery.title')}</h4>
          <button class="btn btn--secondary btn--sm" id="openGalleryBtn" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 16px; height: 16px; margin-right: 6px;">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <circle cx="15.5" cy="8.5" r="1.5"></circle>
              <circle cx="8.5" cy="15.5" r="1.5"></circle>
              <circle cx="15.5" cy="15.5" r="1.5"></circle>
            </svg>
            ${t('projects.gallery.title')} (${p.images.length} imágenes)
          </button>
        </div>
      ` : ''}
    `;

    // Acciones principales (footer del modal)
    const actionsContainer = this.modal.querySelector('.modal__actions');
    actionsContainer.innerHTML = `
      ${p.links.demo ? `<a href="${p.links.demo}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">${t('projectModal.demo')}</a>` : ''}
      ${p.links.github ? `<a href="${p.links.github}" class="btn btn--secondary" target="_blank" rel="noopener noreferrer">${t('projectModal.github')}</a>` : ''}
    `;

    // Event listener para abrir galería desde el modal
    const galleryBtn = this.modal.querySelector('#openGalleryBtn');
    if (galleryBtn) {
      galleryBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('project:gallery', { detail: { project: p, startIndex: 0 } }));
      });
    }
  }

  getCategoryLabel(categoryId) {
    const category = this.i18n.getCategories().find(c => c.id === categoryId);
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
}