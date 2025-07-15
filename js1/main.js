// Funcion de productos

function Productos(){
    console.log("Productos disponibles");
    console.log("1. Jordan 1");
    console.log("1. Jordan 4");
    console.log("1. Adidas Campus");
}

// Funcion de precios de productos

function Precio(producto){
    if (producto === 1) return 300000;
    if (producto === 2) return 500000;
    if (producto === 3) return 250000;
    else return 0;
}

// Funcion de nombres de productos

function NombreProductos (producto){
    if (producto === 1) return "Jordan 1";
    if (producto === 2) return "Jordan 4";
    if (producto === 3) return "Adidas Campus";
    else return "No tenemos ese producto";
}

// Ingreso

alert ("Bienvenido a Sneakers Hub");

let nombre = prompt("Ingresa tu Nombre");

alert (nombre + " Porfavor iniciá tu compra:");

let total = 0;
let cantidad = prompt ("Cuantos productos deseas comprar?")
cantidad = parseInt(cantidad);

if (isNaN(cantidad) || cantidad <= 0){
    alert ("No se pueden comprar esta cantidad de productos, intentá nuevamente");
}
else {
    for (let i = 1; i <= cantidad; i++) {
    Productos();
    let elegidos = prompt("Elegí el producto #" + i + " (1, 2 o 3)");
    elegidos = parseInt(elegidos);

    if (elegidos >= 1 && elegidos <= 3) {
    let nombreProducto = NombreProductos(elegidos);
    let precio = Precio(elegidos);
    alert("El precio de " + nombreProducto + " es: $" + precio);

    let confirmacion = prompt("¿Querés agregar " + nombreProducto + " al carrito? (si/no)");
    if (confirmacion.toLowerCase() === "si") {
        total += precio;
        alert(nombreProducto + " agregado al carrito.");
        console.log("Agregaste: " + nombreProducto + " - $" + precio);
    } else {
        alert(nombreProducto + " no fue agregado.");
        console.log("Rechazado: " + nombreProducto);
    }
    } else {
    alert("Opción inválida.");
    console.log("Selección inválida en el producto #" + i);
    }
}

alert("Gracias por tu compra, " + nombre + ". El total es: $" + total);
console.log("Compra finalizada. Total: $" + total);
}