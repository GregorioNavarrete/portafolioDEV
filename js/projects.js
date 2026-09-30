/**
 * ========================================
 * PROJECTS.JS - Project Manager
 * ========================================
 * Maneja renderizado, filtrado y visualización de proyectos
 */

export class ProjectManager {
  constructor(i18nManager) {
    this.i18n = i18nManager;
    this.projects = [];
    this.categories = [];
    this.currentFilter = 'all';
    this.filteredProjects = [];
    this.gridElement = null;
    this.filterContainer = null;
  }

  async init() {
    // Obtener datos del i18n
    this.projects = this.i18n.getProjects();
    this.categories = this.i18n.getCategories();

    // Encontrar elementos del DOM
    this.gridElement = document.querySelector('[data-projects-grid]');
    this.filterContainer = document.querySelector('[data-projects-filters]');

    if (!this.gridElement) {
      console.warn('Projects grid element not found');
      return;
    }

    // Renderizar filtros
    this.renderFilters();

    // Renderizar proyectos iniciales
    this.applyFilter('all');

    // Configurar event listeners
    this.setupEventListeners();

    // Suscribirse a cambios de idioma
    this.unsubscribeI18n = this.i18n.subscribe(() => this.refresh());
  }

  setupEventListeners() {
    // Delegación de eventos para filtros
    if (this.filterContainer) {
      this.filterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-filter]');
        if (btn) {
          this.applyFilter(btn.dataset.filter);
        }
      });
    }

    // Delegación para tarjetas de proyecto
    if (this.gridElement) {
      this.gridElement.addEventListener('click', (e) => {
        const card = e.target.closest('[data-project-id]');
        if (card && !e.target.closest('[data-project-link]')) {
          const projectId = card.dataset.projectId;
          this.openProjectModal(projectId);
        }
      });
    }
  }

  renderFilters() {
    if (!this.filterContainer) return;

    const t = this.i18n.t.bind(this.i18n);

    this.filterContainer.innerHTML = this.categories.map((cat, index) => `
      <button
        class="filter-btn ${cat.id === 'all' ? 'filter-btn--active' : ''}"
        data-filter="${cat.id}"
        data-i18n="projects.filters.${cat.id}"
        type="button"
      >
        ${t(`projects.filters.${cat.id}`) || cat.label}
      </button>
    `).join('');
  }

  applyFilter(filterId) {
    this.currentFilter = filterId;

    // Actualizar botones activos
    if (this.filterContainer) {
      this.filterContainer.querySelectorAll('[data-filter]').forEach(btn => {
        btn.classList.toggle('filter-btn--active', btn.dataset.filter === filterId);
      });
    }

    // Filtrar proyectos
    if (filterId === 'all') {
      this.filteredProjects = [...this.projects];
    } else if (filterId === 'featured') {
      this.filteredProjects = this.projects.filter(p => p.featured);
    } else {
      this.filteredProjects = this.projects.filter(p => p.category === filterId);
    }

    // Renderizar grid
    this.renderGrid();
  }

  renderGrid() {
    if (!this.gridElement) return;

    const t = this.i18n.t.bind(this.i18n);

    if (this.filteredProjects.length === 0) {
      this.gridElement.innerHTML = `
        <div class="no-projects" style="grid-column: 1 / -1; text-align: center; padding: var(--space-12);">
          <p style="color: var(--color-text-secondary);">${t('projects.noResults') || 'No projects found'}</p>
        </div>
      `;
      return;
    }

    this.gridElement.innerHTML = this.filteredProjects.map((project, index) => this.renderProjectCard(project, index)).join('');

    // Trigger scroll animations
    this.observeCards();
  }

  renderProjectCard(project, index) {
    const t = this.i18n.t.bind(this.i18n);
    const hasVideo = project.video && project.video !== 'path_to_your_video.mp4';

    return `
      <article
        class="project-card reveal reveal--stagger-${(index % 6) + 1}"
        data-project-id="${project.id}"
        style="--stagger-delay: ${index * 100}ms"
      >
        <div class="project-card__media">
          ${hasVideo ?
            `<video
              class="project-card__video"
              src="${project.video}"
              poster="${project.poster || project.image}"
              muted
              loop
              playsinline
              preload="metadata"
              aria-label="${t('a11y.projectVideo')}: ${project.title}"
            ></video>` :
            `<img
              class="project-card__image"
              src="${project.image}"
              alt="${t('a11y.projectImage')}: ${project.title}"
              loading="lazy"
              width="400"
              height="250"
            >`
          }
          <div class="project-card__overlay">
            <div class="project-card__tech">
              ${project.techStack.slice(0, 4).map(tech =>
                `<span class="tech-tag">${tech}</span>`
              ).join('')}
              ${project.techStack.length > 4 ?
                `<span class="tech-tag">+${project.techStack.length - 4}</span>` : ''
              }
            </div>
          </div>
        </div>
        <div class="project-card__content">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__description">${project.shortDescription}</p>
          <div class="project-card__footer">
            ${project.links.demo ? `
              <a href="${project.links.demo}" class="btn btn--primary btn--sm" data-project-link target="_blank" rel="noopener noreferrer">
                ${t('projects.viewDemo')}
              </a>
            ` : ''}
            ${project.links.github ? `
              <a href="${project.links.github}" class="btn btn--secondary btn--sm" data-project-link target="_blank" rel="noopener noreferrer">
                ${t('projects.viewCode')}
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }

  observeCards() {
    // Usar IntersectionObserver para animaciones de entrada
    const cards = this.gridElement.querySelectorAll('.project-card:not(.observed)');
    cards.forEach(card => card.classList.add('observed'));

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '50px' });

      cards.forEach(card => observer.observe(card));
    } else {
      // Fallback
      cards.forEach(card => card.classList.add('reveal--visible'));
    }
  }

  openProjectModal(projectId) {
    const project = this.projects.find(p => p.id === projectId);
    if (project) {
      window.dispatchEvent(new CustomEvent('project:open', { detail: project }));
    }
  }

  refresh() {
    // Recargar datos del i18n
    this.projects = this.i18n.getProjects();
    this.categories = this.i18n.getCategories();

    // Re-renderizar
    this.renderFilters();
    this.applyFilter(this.currentFilter);
  }

  destroy() {
    this.unsubscribeI18n?.();
  }
}