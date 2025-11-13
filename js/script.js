// === Alternar menú responsive ===
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('activo');
});

// === Mostrar / ocultar las explicaciones ===
const botones = document.querySelectorAll('.explicacion-btn');

botones.forEach((btn) => {
  btn.addEventListener('click', () => {
    const explicacion = btn.nextElementSibling;
    explicacion.classList.toggle('oculto');
  });
});
