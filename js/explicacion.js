// ======= Ejemplo Flexbox =======
const flexContainer = document.getElementById("flex-container");
const rowBtn = document.getElementById("row-btn");
const columnBtn = document.getElementById("column-btn");

rowBtn.addEventListener("click", () => {
  flexContainer.style.flexDirection = "row";
});

columnBtn.addEventListener("click", () => {
  flexContainer.style.flexDirection = "column";
});

// ======= Ejemplo classList.toggle() =======
const texto = document.getElementById("demo-text");
const boton = document.getElementById("toggle-btn");

boton.addEventListener("click", () => {
  texto.classList.toggle("activo");
});

// ======= Menú responsivo =======
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
