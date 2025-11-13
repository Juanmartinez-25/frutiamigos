// Selecciona el botón del menú y la navegación
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

// Alterna visibilidad del menú al hacer clic
menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

// Cierra el menú si se hace clic en un enlace (móvil)
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('active');
  });
});
