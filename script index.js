// Seleccionar el botón
const verProductosBtn = document.querySelector('.cta');

// Función de animación y redirección
function animarBoton(event) {
  event.preventDefault(); // Evitar que se siga el enlace al hacer clic
  verProductosBtn.classList.add('animacion-boton'); // Agregar la clase de animación al botón

  // Redirigir a la página de productos después de 0.5 segundos (ajusta el tiempo según tus necesidades)
  setTimeout(() => {
    window.location.href = 'productos.html';
  }, 500);
}

// Agregar el evento de clic al botón
verProductosBtn.addEventListener('click', animarBoton);
