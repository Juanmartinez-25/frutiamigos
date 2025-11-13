// Menú móvil
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Formulario de pedido
const pedidoForm = document.getElementById('pedidoForm');
const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

pedidoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const datos = {
    nombre: pedidoForm.nombre.value.trim(),
    correo: pedidoForm.correo.value.trim(),
    telefono: pedidoForm.telefono.value.trim(),
    producto: pedidoForm.producto.value.trim(),
    cantidad: pedidoForm.cantidad.value.trim(),
    observaciones: pedidoForm.observaciones.value.trim(),
  };

  if (!datos.nombre || !datos.correo || !datos.telefono || !datos.producto || !datos.cantidad) {
    mensajeConfirmacion.textContent = "Por favor completa todos los campos obligatorios.";
    mensajeConfirmacion.style.color = "#ffcccb";
    return;
  }

  mensajeConfirmacion.textContent = `🍓 Pedido de ${datos.cantidad} × ${datos.producto} registrado a nombre de ${datos.nombre}. ¡Gracias por elegir Fruteame!`;
  mensajeConfirmacion.style.color = "#bbf7d0";

  pedidoForm.reset();
});
