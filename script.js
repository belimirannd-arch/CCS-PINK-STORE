
// CONTADOR DEL CARRITO
let cantidad = 0;

function agregarCarrito() {
    cantidad++;

    document.getElementById("contador").textContent = cantidad;

    alert("¡Producto agregado al carrito!");
}

// BOTON DE INFORMACION
const botonInfo = document.getElementById("botonInfo");
const informacion = document.getElementById("informacion");
const cerrarInfo = document.getElementById("cerrarInfo");

botonInfo.addEventListener("click", function() {
    informacion.style.display = "block";
});

cerrarInfo.addEventListener("click", function() {
    informacion.style.display = "none";
});

// MENU PARA CELULARES
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {
    menu.classList.toggle("activo");
});

// CERRAR MENU AL SELECCIONAR UNA OPCION
const enlaces = document.querySelectorAll(".menu a");

enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function() {
        menu.classList.remove("activo");
    });
});