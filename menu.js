console.log("menu.js cargado");

let iconoMenu = document.getElementById("icono-menu");

let iconos = [
    document.getElementById("hover-desplegable"),
    document.getElementById("icono-inventario").parentElement,
    document.getElementById("icono-alta").parentElement,
    document.querySelector(".elemento-informacion")
];

iconoMenu.addEventListener("click", function(event) {
    event.preventDefault();

    iconos.forEach(function(icono) {
        icono.classList.toggle("oculto");
    });
});