// Objetos 

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}


console.log(producto);
console.table(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Destructuring
const { nombre,precio,disponible} =  producto;
console.log(nombre);
console.log(precio);
console.log(disponible);

// Object literal enhacenect
const autenticado =true;
const usuario = "juan";

const nuevoObjeto = {
    autenticado: autenticado,
    usuario:usuario
}
console.table(nuevoObjeto)
