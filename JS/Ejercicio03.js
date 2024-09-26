// Objetos 
const bg = `linear-gradient(11deg, rgba(2,0,36,1)0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%);`
const style_console = `background: ${bg}; color: white; borde-radius: 9px; padding:4px; font-size:1.0rem; font-weght: bold`

console.warn("Practica 05: Repaso de Objetos en Java Script");
//VARIABLES INDEPENDIENTES
 console.log("%c1.- Variables Independientes", style_console);
 //Declaramos valores indeendientes relacionados a un porducto
 let Producto_Nombre = "Celular Gammer 7\"";
 let Producto_Marca = "Oppo";
 let Producto_Modelo = "A89";
 let Producto_Precio = 12500.00;
 let Producto_Disponibilidad = true;
 let Producto_SKU = Symbol("UYF728-98HJHCT");
 let Producto_Stock = 20;
 let Producto_Imagen = null;
 let Producto_Barcode;
 let Producto_Categorias= ["Elctronicos", "Telefonia", "Gamming", "Promociones Buen Fin", "Mejor valorados"];


 // Accedemos a los valores de las carácterísticas del producto de manera indepentiente
console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, Tipo de Dato <${typeof (Producto_Nombre)}>
    Marca: ${Producto_Marca}, Tipo de Dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, Tipo de Dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_Precio}, Tipo de Dato <${typeof(Producto_Precio)}> 
    Disponibilidad: ${Producto_Disponibilidad}, Tipo de Dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock}, Tipo de Dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, Tipo de Dato <${typeof(Producto_Barcod)}>>
    Imagen: ${Producto_Imagen}, Tipo de Dato <${typeof (Producto_Imagen)}> 
    Categorias: ${Producto_Categorias}, Tipo de Dato <${typeof(Producto_Categorias)}`);


    console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de la impresion anterior" );
        console.log(Producto_SKU);
        console.log(typeof Producto_SKU);
        
// Ahora lo declaramos como un OBJETO
console.log("%c2.- Objeto", style_console);
let Producto = 
{
    ID: 100,
    Nombre : "Zapatos Casuales", 
    Marca: "Escobedo",
    Modelo: "Redondo '24", 
    Precio: 3361.25,
    Disponibilidad: false,
    Stock: 0,
    SKU: "DZ5485-612",
    Imagen: null,
    Barcode:null,
    Categorias: ["Casual", "Lujoso", "Juvenil"]
}
// Ahora leemos el objeto completo
console.table(Producto)

console.log("Accediendo a propiedades específicas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else 
console.log(`Estatus: ${Producto_Stock} unidades disponibles.`);


// Desestructuración de Objetos.

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 =
{   
    Clave: 316,
    Nombre : "Gorra", 
    Marca: "Flexi",
    Modelo: "Kato", 
    Precio: 6829.00,
    Disponibilidad: true,
    Stock: 5,
    SKU: "OO9481D-0356",
    Imagen: null,
    Barcode:  888392491626,
    Categorias: ["Deportes", "Gorras", "Hombre", "Accesorios"]
}

let Comprador =
{
    ID:3216,
    Clave: 230187,
    Nombre: "Carlos",
    Apellidos: "Garcia Pluma",
    Tipo: "Recurrente",
    Correo: "230187@utexicotepec.edu.mx",
    PaisOrigen: "México",
    SaldoActual: 41000.00
}

let Pedido= {
    ID:5816,
    Producto_Clave: 316, 
    Comprador_Clave: 230187,
    Cantidad: 2, 
    Estatus: "Carrito de Compra",
    TipoPago: "Tarjeta de Crédito"
}

// En base  a los 3 objetos necesitamos calcular el costo de la compra y si le alcanza con sus saldo a favor

let {Precio: Producto_Precio2 } = Producto2; 
let {Cantidad:Pedido_Cantidad} = Pedido;
let {SaldoActual: Cliente_SaldoActual} = Comprador;
let Costo_Compra= Producto_Precio2 * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} undidades, con un costo total de: $${Costo_Compra}`);
if(Costo_Compra< Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente.");

// Actualizar el valor de los Objetos

console.log("%c4.- Actualización de los valores de las propiedades de un objeto", style_console);
console.log("El objeto actualmente tiene los siguientes valores");
console.log(JSON.stringify(Producto2, null, 2));
// Convierte el objeto a una cadena para evitar problemas con la referencia
console.log("Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,915.50");

// Para podificiar el valor de un objeto basta con igualar el nuevo valor de la proppiedad deseada 
Producto2.Precio=6915.50;
console.log('Los nuevos valores del Prodcuto son');
console.log(Producto2);

// ¿ Puedom cambiar nno soloel valor si no el tipo de dato de un objeto en JS?
console.log("-----------------------------------------------------------------------");
console.log("El objeto actualmente tiene los siguientes valores");
var tipoDisponibilidad = typeof(Producto2.Disponibilidad);
console.log(`El tipo de dato de la disponibilidad es: ${tipoDisponibilidad}`);
console.log(JSON.stringify(Producto2, null, 2));  // Disponibilidad Booleano
Producto2.Disponibilidad="Si";
let nuevoTipoDisponibilidad= typeof(Producto2.Disponibilidad);
console.log(Producto2);
console.log(`El nuevo tipo de la disponibilidad es ${nuevoTipoDisponibilidad}`);

//"Si"
//

//Agregar nuevas propiedades a un objeto existente
console.log("%c5.- Agregacion de propiedades de un objeto (Mutacion)", style_console);
console.log("Objeto antes de ser modificado: ");
console.table(Comprador);

//Agreando Propiedades
Comprador [`Direccion`] = "Av. 05 de Mayo #25, Interior 4A, Xicotepec de Juarez, Puebla, Mexico";
Comprador [`Tipo`] = "Premiun";
Comprador [`Estatus`] = "Inactivo";
Comprador [`TotalCompras`] = 5000000.00;
console.log("Objeto despues de ser modificado");
console.table(Comprador);
 
// Eliminar propiedades de un objeto existente
console.log("%c6.- Eliminación de Propiedades de un Objeto (MUTACIÓN)", style_console);
console.log("Objeto antes de ser modificado: ")
console.table(Pedido)
//Elminamos la propiedad de TipoPago de Pedido
delete Pedido.TipoPago;
console.log("Objeto después de ser modificado: ")
console.table(Pedido)


console.log("%c7.- Métodos para contronlar la mutabilidad de los Objetos, Congelación (FREEZE))", style_console);
//Si deseamos no permitir que los objetos sean modificados ni en estructura, ni en valor, utilizaremos el método FREEZE (congelar)
console.log("La estructura actual del Objeto COMPRADOR es: ")
console.table(Comprador); 
Object.freeze (Comprador);
//Inteneramos agregar, eliminar o modificar los valores de sus propiedades 172 
Comprador.FechaUltimaCompra = "05/09/2024";
Comprador.Direccion= "Calle 16 de Septiembre #102, Col. Manantiales, Huauchinango, Puebla, México"
console.log("Verificamos si se realizaron los cambios en el objeto COMPRADOR");
console.table(Comprador);


console.log("%c8.- Métodos para contronlar la mutabilidad de los Objetos, Sellado (SEAL)", style_console);
// Sin embargo, en el caso que desemos poder podificar los valores del las propiedades del Objeto, pero no su estructura, usaremos SEAL
console.log("Objeto antės de ser modificado: ");
console.table (Pedido);
Object.seal (Pedido);
//Intentamos modificar su estructura.
Pedido [`FechaPedido`] = "25/09/2024 11:05:03";
delete Pedido[`Cantidad`];
console.log("Verificamos si se realizaron los cambios en el Objeto PEDIDO:") 
console.table (Pedido);
// Ahora intentamos modificar el valor de las propiedades
Pedido.Cantidad= 5
console.log("Verificamos si se realizaron los cambios en el Objeto PEDIDO:") 
console.table (Pedido);

// Desestructuración de 2 o más objeto
console.log("%c9.- Desestructuracion de 2 o mas objetos", style_console);



// siempre va declarado con el nombre que tiene en el objeto y luego el nuevo nombre
let{Precio: productoPrecio, SKU: productoSKU, Marca: productoMarca}=Producto
let{Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo}=Comprador


// transformar valores cuantitativos en cualitativos

if(productoPrecio>2000)

    productoPrecio="CARO"

else productoPrecio="Barato"

if (clienteSaldo>0)
    clienteSaldo="A favor"
else if(clienteSaldo<0)
clienteSaldo="En contra"
else
clienteSaldo="Sin deuda"



// transformar valores cualitativos a cuantitativos
let clienteNivel;

if(clienteTipo="Premium")

    clienteNivel=1

if(clienteTipo=="Freemium")

    clienteNivel=2

if(clienteTipo=="No identificado")

clienteNivel=3

// transformar o clasificar al cliente por su pais de origen
if(clientePais== "Mexico")
 clientePais="Nacional"
else
clientePais="Extrangero"

// ole -
let datosClientePromociones={clienteCorreo, clientePais, clienteNivel, clienteSaldo, productoMarca, productoPrecio}
// el nuevo objeto que creamos seria un objeto de la informacion que enviariamos al area de marketing para la difucion de productos

console.log("datos del cliente y sus datos a comprar")
console.table(datosClientePromociones)

// let spotyUser=
// {
//     Name:"", //conjelado
//     nickiname:"", // sellado
//     email:"", // sellodo
//     password:"",// sellado
//     rol:"",
//     since:"",
//     playList:["Las doñeras","Carnita asada","Prreo brasileiro"]
// }

// Operaciones sobre Objetos
// Unión de Objetos
console.log("%c10. Unión de Objetos usando el método de asignación (ASSING)", style_console);
console.log("Imprimimos la estructura y valores del Objeto PRODUCTO") 
console.table (Producto);
console.log("Imprimimos la estructura y valores del Objeto PEDIDO")
console. table (Pedido);
// Suponiendo que el usuarios ya realizó el pago el pedido se convertira en una VENTA que requiere información de ambos objetos
// IMPORTANTE ASSIG : no solo permite la fusion de el pedido de 2 o mas objetos , tambien muta los objetos originales periendo el valor original del ID en este caso
let producto3 ={...Producto}
const Venta = Object.assign(Producto, Pedido);
console.log("Consultamos este nuevo objeto VENTA ")
console.table (Venta);


// Unión de Objetos usando SPREAD OPERATOR para evitar la perdida de información con objetos que comparten el mismo nombre en sus propiedades
console.log("%c11. Unión de Objetos usando el SPREAD OPERATOR (...)", style_console);
console.table(Producto);
console.table(Pedido);
console.table(Comprador);

const Venta2 =
{
producto: {...Producto},
comprador:{...Comprador},
pedido:{...Pedido}
} 

console.log("Fusionamos los 3 objetos en uno nuevo, sin perdida de información") 
console.log(Venta2);
console.table (Venta2)

//Vamos a verificar el estatus de mutabilidad de los objetos
console.log(`Vamos a verificar el estatus de mutabilidad del objeto PEDIDO`) 
console.log(`Esta el objeto de Pedido Congelado ${Object.isFrozen (Pedido)}`); 
console.log(`Esta el objeto de Pedido Sellado? ${Object.isSealed(Pedido)}`);
console.log(`Vamos a verificar el estatus de mutabilidad del objeto COMPRADOR`) 
console.log(`Esta el objeto de Pedido Congelado ${Object.isFrozen (Comprador)}`); 
console.log(`Esta el objeto de Pedido Sellado?: ${Object.isSealed(Comprador)}`);
console.log("Vamos a verificar el estatus de mutabilidad del objeto COMPRADOR"); 
console.log(`Esta el objeto de Pedido Congelado?: ${Object.isFrozen (Comprador)}`); 
console.log(`Esta el objeto de Pedido Sellado?: ${Object.isSealed(Comprador)}`);

//Modificamos la estructura de producto, agregando una nueva propiedad
Producto[`isLegacy`]=false;
console.log(Producto);
console.table(Venta2);


// const producto = {
//     nombre: "tablet 9/",
//     Marca: "MAC",
//     Modelo:"Idad",
//     Costo_Compra: 11500.25,
//     Costo_Venta: 15400.,
//     disponible: true,
//     SKU: Symbol("553ggd546442"),
//     Colores : ["Blanco","Negro","Rosa", "Azul", "Amarillo"]
// }
// //Imprimir el objeto
// console.warn("--IMPRIMIR OBJETO--");
// //Los objetos ya pueden presentarse en formato de tabla
// console.log(producto);

// console.table(producto);

// //aceder a las propiedades de un onjeto
// console.warn("Leyendo las propiedades de un objeto y sus tipos de dato");

// console.log(`Nombre del producto: ${producto.nombre} que es el tipo de dato ${producto.nombre}`);
// console.log(`Marca del producto: ${producto.Marca} que es el tipo de dato ${producto.Marca}`);
// console.log(`Modelo del producto: ${producto.Modelo} que es el tipo de dato ${producto.Modelo}`);
// console.log(`Costo_Compra del producto: ${producto.Costo_Compra} que es el tipo de dato ${producto.Costo_Compra}`);
// console.log(`Costo_Venta del producto: ${producto.Costo_Venta} que es el tipo de dato ${producto.Costo_Venta}`);
// console.log(`SKU del producto: ${producto.Symbol} que es el tipo de dato ${producto.Symbol}`);
// console.log(`Colores del producto: ${producto.Colores} que es el tipo de dato ${producto.Colores}`);


// console.log("_________________");

// console.log(producto.nombre);
// console.log(producto.precio);
// console.log(producto.disponible);

// // Destructuring
// const { nombre,precio,disponible} =  producto;
// console.log(nombre);
// console.log(precio);
// console.log(disponible);

// // Object literal enhacenect
// const autenticado =true;
// const usuario = "juan";

// const nuevoObjeto = {
//     autenticado: autenticado,
//     usuario:usuario
// }
// console.table(nuevoObjeto)
