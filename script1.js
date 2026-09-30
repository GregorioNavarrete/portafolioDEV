function cambiarTema(tema) {
  switch (tema) {
    case "dark":
      document.getElementById("btn-dark").style.display = "none";
      document.getElementById("btn-light").style.display = "block";
      document.getElementById("btn-darkIngles").style.display = "none";
      document.getElementById("btn-lightIngles").style.display = "block";
      document.documentElement.setAttribute("data-theme", "dark");
      break;
    default:
      document.getElementById("btn-dark").style.display = "block";
      document.getElementById("btn-light").style.display = "none";
      document.getElementById("btn-darkIngles").style.display = "block";
      document.getElementById("btn-lightIngles").style.display = "none";
      document.documentElement.setAttribute("data-theme", "light");
      break;
  }
}
function cambiarTemaIngles(tema) {
  switch (tema) {
    case "dark":
      document.getElementById("btn-darkIngles").style.display = "none";
      document.getElementById("btn-lightIngles").style.display = "block";
      document.getElementById("btn-dark").style.display = "none";
      document.getElementById("btn-light").style.display = "block";
      document.documentElement.setAttribute("data-theme", "dark");
      break;
    default:
      document.getElementById("btn-darkIngles").style.display = "block";
      document.getElementById("btn-lightIngles").style.display = "none";
      document.getElementById("btn-dark").style.display = "block";
      document.getElementById("btn-light").style.display = "none";
      document.documentElement.setAttribute("data-theme", "light");
      break;
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const darkModeBtn = document.getElementById('darkModeBtn');
  const darkModeBtn2 = document.getElementById('darkModeBtn2');

  const langBtn = document.getElementById('langBtn');
  const langBtn2 = document.getElementById('langBtn2');

  const spanishSection = document.querySelector('.Español');
  const englishSection = document.querySelector('.ingles');

  const projects = document.querySelector('.projects');
  const projects2 = document.querySelector('.projects2');

  // Estado actual del modo oscuro
  let darkModeEnabled = false;
  let darkModeEnabled2 = false;

  // Inicializar tema al cargar
  document.documentElement.setAttribute('data-theme', 'light');

  // Alternar modo oscuro con botón 1
  darkModeBtn.addEventListener('click', function() {
    darkModeEnabled = !darkModeEnabled;
    if (darkModeEnabled) {
      document.body.classList.add('dark-mode-body');
      projects.classList.add('dark-mode-projects');
      projects2.classList.add('dark-mode-projects');
      cambiarTema('dark');
    } else {
      document.body.classList.remove('dark-mode-body');
      projects.classList.remove('dark-mode-projects');
      projects2.classList.remove('dark-mode-projects');
      cambiarTema('light');
    }
  });

  // Alternar modo oscuro con botón 2
  darkModeBtn2.addEventListener('click', function() {
    darkModeEnabled2 = !darkModeEnabled2;
    if (darkModeEnabled2) {
      document.body.classList.add('dark-mode-body');
      projects2.classList.add('dark-mode-projects');
      projects.classList.add('dark-mode-projects');
      cambiarTemaIngles('dark');
    } else {
      document.body.classList.remove('dark-mode-body');
      projects2.classList.remove('dark-mode-projects');
      projects.classList.remove('dark-mode-projects');
      cambiarTemaIngles('light');
    }
  });

  // Función para alternar idioma
  function toggleLanguage(){
      spanishSection.classList.toggle('inactive');
      englishSection.classList.toggle('inactive');
  }

  langBtn.addEventListener('click', toggleLanguage);
  langBtn2.addEventListener('click', toggleLanguage);
});