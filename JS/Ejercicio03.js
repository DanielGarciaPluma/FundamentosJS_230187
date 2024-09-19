// Objetos 

const producto = {
    nombre: "tablet 9/",
    Marca: "MAC",
    Modelo:"Idad",
    Costo_Compra: 11500.25,
    Costo_Venta: 15400.,
    disponible: true,
    SKU: Symbol("553ggd546442"),
    Colores : ["Blanco","Negro","Rosa", "Azul", "Amarillo"]
}
//Imprimir el objeto
console.warn("--IMPRIMIR OBJETO--");
//Los objetos ya pueden presentarse en formato de tabla
console.log(producto);

console.table(producto);

//aceder a las propiedades de un onjeto
console.warn("Leyendo las propiedades de un objeto y sus tipos de dato");

console.log(`Nombre del producto: ${producto.nombre} que es el tipo de dato ${producto.nombre}`);
console.log(`Marca del producto: ${producto.Marca} que es el tipo de dato ${producto.Marca}`);
console.log(`Modelo del producto: ${producto.Modelo} que es el tipo de dato ${producto.Modelo}`);
console.log(`Costo_Compra del producto: ${producto.Costo_Compra} que es el tipo de dato ${producto.Costo_Compra}`);
console.log(`Costo_Venta del producto: ${producto.Costo_Venta} que es el tipo de dato ${producto.Costo_Venta}`);
console.log(`SKU del producto: ${producto.Symbol} que es el tipo de dato ${producto.Symbol}`);
console.log(`Colores del producto: ${producto.Colores} que es el tipo de dato ${producto.Colores}`);









console.log("_________________");

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
