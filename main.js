// Defino la lista de productos y sus precios
const productos = [
    { nombre: "Zapatillas Vans", precio: 27600 },
    { nombre: "Buzo Levis", precio: 19799 },
    { nombre: "Remera Nike", precio: 12300 }
];

// Declaro un arreglo vacio para el carrito de compras
const carrito = [];

// Declaro una variable para realizar el seguimiento total de la compra
let total = 0;

// Creo la funcion para agregar un producto al carrito
function agregarAlCarrito(index) {
    const producto = productos[index]; // Toma el producto seleccionado
    carrito.push(producto); // Agrega el producto al carrito
    total += producto.precio; // Actualiza el total
    console.log(`${producto.nombre} ha sido agregado al carrito.`); // Hago que se muestre por consola
    actualizarCarrito(); // Actualiza la visualización en la consola
}

// Función para quitar un producto del carrito
function quitarDelCarrito() {
    // Verifica si el carrito está vacío, si lo está manda el mensaje por consola
    if (carrito.length === 0) {
        console.log("El carrito está vacío, no se puede quitar ningún producto.");
        return; // Sale de la función si el carrito está vacío
    }
    
    const productoRemovido = carrito.pop(); // Remueve el último producto del carrito y lo guarda en la variable productoRemovido
    total -= productoRemovido.precio; // Actualiza el total
    
    // Llama a la función actualizarCarrito para reflejar los cambios en la visualización del carrito
    actualizarCarrito();
}

// Función para actualizar el carrito en la consola
function actualizarCarrito() {
    console.clear(); // Borra la consola para mostrar mensajes más limpios
    console.log("Carrito de Compras:");
    // Itera a través de los productos en el carrito y muestra sus nombres y precios en la consola
    carrito.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
    });
    console.log(`Total: $${total}`); // Muestra el total de la compra en la consola
}
