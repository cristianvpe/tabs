// Obtén todos los elementos de pestañas y contenido
const tabLinks = document.querySelectorAll('.tab-link');
const tabPanes = document.querySelectorAll('.tab-pane');

console.log(tabLinks);
console.log(tabPanes);

// Agrega un manejador de eventos a cada pestaña
tabLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Oculta todos los paneles de contenido
        tabPanes.forEach(pane => {
            pane.style.display = 'none';
        });

        // Muestra el panel de contenido correspondiente a la pestaña seleccionada
        tabPanes[index].style.display = 'block';
    });
});