// JavaScript para desplegar el menú
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show'); // Agregar o quitar la clase "show" al menú
});

// jQuery Version
// $(function() {
//     var btn_movil = $(‘#nav-mobile’),
//     menu = $(‘#menu’).find(‘ul’);

//     // Al dar click agregar/quitar clases que permiten el despliegue del menú
//     btn_movil.on(‘click’, function (e) {
//         e.preventDefault();
//         var el = $(this);
//         el.toggleClass(‘nav-active’);
//         menu.toggleClass(‘open-menu’);
//     });
// });