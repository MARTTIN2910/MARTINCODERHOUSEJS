// Definición de la lista de productos con nombre y precio
const productos = [
    { nombre: "Campera Nike", precio: 27600 },
    { nombre: "Remera Adidas", precio: 19799 },
    { nombre: "Anorak", precio: 12300 },
    { nombre: "Jean Oxford", precio: 24600 },
    { nombre: "Zapatillas Nike AIR", precio: 60000 },
    { nombre: "Remera New Ballance", precio: 15000 }
];

// Verifica si ya hay datos en el carrito en el almacenamiento local
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Verifica si ya hay datos en el total en el almacenamiento local
let total = JSON.parse(localStorage.getItem('total')) || 0;

// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    const producto = productos[index];
    carrito.push(producto);
    total += producto.precio;
    actualizarCarrito(); // Actualiza la visualización del carrito en la página
    actualizarTotalEnPagina(); // Actualiza el total en la página
    guardarEnLocalStorage(); // Guarda el carrito y el total en el almacenamiento local
}

// Función para quitar un producto del carrito
function quitarDelCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío, no se puede quitar ningún producto.");
        return;
    }
    
    const productoRemovido = carrito.pop();
    total -= productoRemovido.precio;
    actualizarCarrito(); // Actualiza la visualización del carrito en la página
    actualizarTotalEnPagina(); // Actualiza el total en la página
    guardarEnLocalStorage(); // Guarda el carrito y el total en el almacenamiento local
}

// Función para actualizar el carrito en la página web
function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");
    carritoElement.innerHTML = ""; // Borra el contenido anterior

    carrito.forEach((producto, index) => {
        const productoElement = document.createElement("div");
        productoElement.textContent = `${index + 1}. ${producto.nombre} - $${producto.precio}`;
        carritoElement.appendChild(productoElement);
    });

    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total: $${total}`;
}

// Función para actualizar el total en la página
function actualizarTotalEnPagina() {
    document.getElementById("total").textContent = `Total: $${total}`;
}

// Función para guardar el carrito y el total en el almacenamiento local
function guardarEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('total', JSON.stringify(total));
}

// Función para confirmar la compra y mostrar un mensaje de éxito
function confirmarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de confirmar la compra.");
        return;
    }

    alert("¡Compra completada exitosamente! Gracias por tu compra.");
    carrito.length = 0; // Borra el contenido del carrito
    total = 0; // Reinicia el total
    actualizarCarrito(); // Actualiza la visualización del carrito en la página
    actualizarTotalEnPagina(); // Actualiza el total en la página
    guardarEnLocalStorage(); // Borra el carrito y el total del almacenamiento local
}

// Inicializa la página
actualizarCarrito(); // Actualiza el carrito al cargar la página
actualizarTotalEnPagina(); // Actualiza el total al cargar la página