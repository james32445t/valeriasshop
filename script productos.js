// script.js

// Obtener los elementos relevantes del DOM
const filterButtons = document.querySelectorAll('.filter-button');
const productCards = document.querySelectorAll('.product-card');

// Agregar un event listener a cada botón de filtro
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Obtener la categoría seleccionada
    const category = button.dataset.category;

    // Aplicar estilos a los botones de filtro
    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    // Mostrar u ocultar los productos según la categoría seleccionada
    productCards.forEach((card) => {
      const cardCategories = card.dataset.category.split(' ');
      if (category === 'todos' || cardCategories.includes(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
