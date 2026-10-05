/**
 * ========================================
 * MAIN.JS - Entry Point
 * ========================================
 * Inicializa todos los módulos de la aplicación
 */

import { I18nManager } from './i18n.js';
import { ThemeManager } from './theme.js';
import { ProjectManager } from './projects.js';
import { ModalManager } from './modal.js';
import { ScrollAnimations } from './observers.js';
import { NavigationManager } from './navigation.js';

// Estado global de la app
const AppState = {
  i18n: null,
  theme: null,
  projects: null,
  modal: null,
  scroll: null,
  navigation: null
};

// Inicialización
async function initApp() {
  try {
    console.log('🔧 Iniciando app...');
    
    // 1. Inicializar i18n (necesario para renderizar)
    AppState.i18n = new I18nManager();
    await AppState.i18n.init();
    console.log('✅ i18n inicializado, lang:', AppState.i18n.getCurrentLanguage());

    // 2. Inicializar tema
    AppState.theme = new ThemeManager();
    AppState.theme.init();
    console.log('✅ Tema inicializado:', AppState.theme.getCurrentTheme(), 'efectivo:', AppState.theme.getEffectiveTheme());

    // 3. Inicializar navegación
    AppState.navigation = new NavigationManager();
    AppState.navigation.init();

    // 4. Inicializar proyectos (depende de i18n)
    AppState.projects = new ProjectManager(AppState.i18n);
    await AppState.projects.init();

    // 5. Inicializar modal
    AppState.modal = new ModalManager(AppState.i18n);
    AppState.modal.init();

    // 6. Inicializar animaciones de scroll
    AppState.scroll = new ScrollAnimations();
    AppState.scroll.init();

    // 7. Event listeners globales
    setupGlobalListeners();

    // 8. Marcar app como lista
    document.documentElement.classList.add('app-ready');

    // 9. Disparar evento personalizado
    window.dispatchEvent(new CustomEvent('app:ready', { detail: AppState }));

    console.log('🚀 Portfolio app initialized successfully');

  } catch (error) {
    console.error('❌ Failed to initialize app:', error);
    document.documentElement.classList.add('app-error');
  }
}

// Event listeners globales
function setupGlobalListeners() {
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Escape para cerrar modal
    if (e.key === 'Escape' && AppState.modal?.isOpen) {
      AppState.modal.close();
    }

    // Ctrl/Cmd + K para búsqueda (futuro)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      // TODO: Abrir command palette
    }

    // T para alternar tema
    if (e.key === 't' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      AppState.theme?.toggle();
    }
  });

  // Manejar cambios de idioma
  window.addEventListener('i18n:change', (e) => {
    AppState.projects?.refresh();
    AppState.modal?.refresh();
    AppState.navigation?.refresh();
  });

  // Manejar cambios de tema
  window.addEventListener('theme:change', (e) => {
    // Las variables CSS se actualizan automáticamente
  });

  // Manejar apertura de galería desde el modal
  window.addEventListener('project:gallery', (e) => {
    const { project, startIndex } = e.detail;
    if (project && project.images && project.images.length > 0) {
      AppState.projects.openGallery(project.id, startIndex);
    }
  });
}

// Iniciar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Exportar para debugging en consola
window.AppState = AppState;

export { AppState };