/**
 * ========================================
 * GALLERY.JS - Image Gallery / Carousel Component
 * ========================================
 * Galería de imágenes con navegación, teclado, swipe touch, y lazy loading
 */

export class Gallery {
  constructor(options = {}) {
    this.images = options.images || [];
    this.currentIndex = 0;
    this.isOpen = false;
    this.modal = null;
    this.i18n = options.i18n || null;
    this.startX = 0;
    this.threshold = 50;
    this.autoPlayTimer = null;
    this.autoPlayDelay = 5000;
  }

  init() {
    this.createModal();
    this.bindEvents();
  }

  createModal() {
    this.modal = document.createElement('div');
    this.modal.className = 'gallery-modal';
    this.modal.setAttribute('role', 'dialog');
    this.modal.setAttribute('aria-modal', 'true');
    this.modal.setAttribute('aria-label', this.t('projects.gallery.title'));
    this.modal.innerHTML = `
      <div class="gallery-modal__backdrop" data-gallery-close></div>
      <div class="gallery-modal__container">
        <button class="gallery-modal__close" data-gallery-close aria-label="${this.t('projects.gallery.close')}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
        <button class="gallery-modal__nav gallery-modal__nav--prev" data-gallery-prev aria-label="${this.t('projects.gallery.prev')}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <div class="gallery-modal__viewport" data-gallery-viewport>
          <div class="gallery-modal__track" data-gallery-track></div>
        </div>
        <button class="gallery-modal__nav gallery-modal__nav--next" data-gallery-next aria-label="${this.t('projects.gallery.next')}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>
        <div class="gallery-modal__counter" data-gallery-counter aria-live="polite"></div>
        <div class="gallery-modal__thumbnails" data-gallery-thumbnails></div>
      </div>
    `;
    document.body.appendChild(this.modal);
    this.track = this.modal.querySelector('[data-gallery-track]');
    this.viewport = this.modal.querySelector('[data-gallery-viewport]');
    this.counter = this.modal.querySelector('[data-gallery-counter]');
    this.thumbnailsContainer = this.modal.querySelector('[data-gallery-thumbnails]');
  }

  bindEvents() {
    // Close on backdrop or close button
    this.modal.addEventListener('click', (e) => {
      if (e.target.closest('[data-gallery-close]')) {
        this.close();
      }
    });

    // Navigation buttons
    this.modal.querySelector('[data-gallery-prev]').addEventListener('click', () => this.prev());
    this.modal.querySelector('[data-gallery-next]').addEventListener('click', () => this.next());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    // Touch/swipe support
    this.viewport.addEventListener('touchstart', (e) => {
      this.startX = e.touches[0].clientX;
    }, { passive: true });

    this.viewport.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      const diff = this.startX - endX;
      if (Math.abs(diff) > this.threshold) {
        diff > 0 ? this.next() : this.prev();
      }
    }, { passive: true });

    // Thumbnail clicks (delegated)
    this.thumbnailsContainer.addEventListener('click', (e) => {
      const thumb = e.target.closest('[data-gallery-thumb]');
      if (thumb) {
        const index = parseInt(thumb.dataset.galleryThumb, 10);
        this.goTo(index);
      }
    });

    // Pause auto-play on hover
    this.modal.addEventListener('mouseenter', () => this.pauseAutoPlay());
    this.modal.addEventListener('mouseleave', () => this.resumeAutoPlay());
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
      this.modal.classList.add('gallery-modal--open');
      document.body.style.overflow = 'hidden';
      this.goTo(this.currentIndex, false);
      this.startAutoPlay();
    });

    // Focus management
    this.lastFocused = document.activeElement;
    this.modal.querySelector('.gallery-modal__close').focus();

    // View Transitions API
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        this.modal.classList.add('gallery-modal--open');
      });
    }
  }

  close() {
    if (!this.isOpen) return;

    this.isOpen = false;
    this.pauseAutoPlay();

    const closeModal = () => {
      this.modal.classList.remove('gallery-modal--open');
      document.body.style.overflow = '';
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
          alt="${this.t('a11y.galleryImage')}: ${this.getImageName(src)}"
          loading="${i === this.currentIndex ? 'eager' : 'lazy'}"
          class="gallery-modal__image"
        >
      </div>
    `).join('');
  }

  renderThumbnails() {
    if (this.images.length <= 1) {
      this.thumbnailsContainer.innerHTML = '';
      return;
    }

    this.thumbnailsContainer.innerHTML = this.images.map((src, i) => `
      <button
        class="gallery-modal__thumb ${i === this.currentIndex ? 'gallery-modal__thumb--active' : ''}"
        data-gallery-thumb="${i}"
        aria-label="${this.t('projects.gallery.counter', { current: i + 1, total: this.images.length })}"
        aria-current="${i === this.currentIndex ? 'true' : 'false'}"
      >
        <img src="${src}" alt="" loading="lazy" width="60" height="40">
      </button>
    `).join('');
  }

  goTo(index, animate = true) {
    if (index < 0 || index >= this.images.length) return;

    this.currentIndex = index;
    const translateX = -index * 100;

    if (animate) {
      this.track.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    } else {
      this.track.style.transition = 'none';
    }

    this.track.style.transform = `translateX(${translateX}%)`;

    // Update thumbnails
    this.thumbnailsContainer.querySelectorAll('[data-gallery-thumb]').forEach((thumb, i) => {
      thumb.classList.toggle('gallery-modal__thumb--active', i === index);
      thumb.setAttribute('aria-current', i === index ? 'true' : 'false');
    });

    // Update counter
    this.updateCounter();

    // Lazy load current and adjacent images
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
    this.counter.textContent = this.t('projects.gallery.counter', {
      current: this.currentIndex + 1,
      total: this.images.length
    });
  }

  preloadAdjacent(index) {
    const indices = [index];
    if (index > 0) indices.push(index - 1);
    if (index < this.images.length - 1) indices.push(index + 1);

    indices.forEach(i => {
      const img = this.track.querySelector(`[data-gallery-index="${i}"] img`);
      if (img && img.loading === 'lazy') {
        img.loading = 'eager';
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
    const filename = src.split('/').pop().split('.')[0];
    return filename.replace(/[-_]/g, ' ');
  }

  t(key, params = {}) {
    if (!this.i18n) return key;
    return this.i18n.t(key, params);
  }

  destroy() {
    this.pauseAutoPlay();
    this.modal?.remove();
  }
}

// Export a simple function to open gallery from anywhere
export function openGallery(images, startIndex, i18n) {
  const gallery = new Gallery({ images, i18n });
  gallery.init();
  gallery.open(images, startIndex);
  return gallery;
}