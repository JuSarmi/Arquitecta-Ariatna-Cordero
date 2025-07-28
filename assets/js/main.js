document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const body = document.body;

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      body.classList.toggle('nav-open');
      
      // Cambiar el aria-label para accesibilidad
      const isNavOpen = body.classList.contains('nav-open');
      navToggle.setAttribute('aria-label', isNavOpen ? 'Cerrar menú' : 'Abrir menú');
    });
  }
});
