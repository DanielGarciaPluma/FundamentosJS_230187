//tipos de datos en JS

//1.-Unidefined
console.warn("---Tipo de dato: Unidefined");

let cliente;
console.log(`EL ciente es: ${cliente}`);
console.log(`El tipo de dato de la variable es: ${typeof(cliente)}`);

cliente="Juan Romero";
console.log(`EL ciente es: ${cliente}`);
console.log(`El tipo de dato de la variable es: ${typeof(cliente)}`);

cliente="83334";
console.log(`EL ciente es: ${cliente}`);
console.log(`El tipo de dato de la variable es: ${typeof(cliente)}`);


//2.-Boolean
console.warn("---Tipo de dato: Boolean (boleano - true/false)");
let esPremiun ="No lo se";
console.log(`¿Es el cliente Premiun?: ${esPremiun}`);
console.log(`El tipo de dato de la variable esPremiun es: ${typeof(esPremiun)}`);
console.log('Asignacion en el valor "true" a la variable')
esPremiun="true";
console.log(`El tipo de dato de la variable esPremiun es: ${typeof(esPremiun)}`);
console.log("Asignacion en el valor true a la variable")

esPremiun=true;
console.log(`El tipo de dato de la variable esPremiun es: ${typeof(esPremiun)}`);

console.log(`¿Es el cliente Premiun?: ${esPremiun}`);
if(esPremiun){
console.log("El cliente pago por usar el servicio.");

}else{
console.log("El cliente resive los servicios gratuitos.");
}



//3.-Number
var cantidad;
const costo_produccion = 10.50;
let saldo_cuenta =2500.40;
let monto_transaccion;

console.warn("--Tipo de Dato - Number (Numeros, posistivos, negativos, decimales, flotantes)");
console.log(`tu saldo al dia de hoy es de: ${saldo_cuenta}, (Tipo de dato = ${typeof(saldo_cuenta)} ) `);
console.log(`EL producto que hasselccionado cuesta: ${costo_produccion}`);
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de productos`);
console.log(`El importe total de la compra es: ${cantidad}*${costo_produccion} `);

console.log(`Tu nuevo total de la compra es de: ${saldo_cuenta}-${cantidad}*${costo_produccion}`)

const alumno = "Juan";
let producto = "Monitor 20 pulgadas";
let produccto;

console.warn("------------------ Tipo de dato - String (cadena de caracteres");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(producto)}`);
producto="Monitor 20\"";
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof(alumno)}`);
//Manipulacion de String
console.log(`Mas adelante podremos transformar el contenido de los string usando funciones especificos como convertir a mayusculas ${alumno} => ${alumno.toUpperCase} `)

//BIGINT (Enteros de dimenciones amplias ) - Generalmente utilizando en sistema

const numeroGrande = 1234567890;
const numeroGrande2 = 12345678901234567890;
const numeroGrande3= 123456789012345678901234567890;
const numeroGrande4 = 1234567890123456789012345678901234567890;

// // String o cadenas de texto
// const alumno = "Juan";
// let producto = "Monitor 20 pulgadas";

// const numero = "30";
// nost numero2 =30;
// console.log (type numero);
// console.log(typeof numero2);

//Bignit
// const numeroGrande = BigInt (769696969646875987);
// console.log(typeof numeroGrande);

// const numero = 10;
// const numero2 =20;
// console.log( numero= Number(numeroGrande));


// const numero = "30";
// const numer2 = 30;
// console.log(typeof String (numero));
// console.log(typeof Number(numer2));

// //Symbol
// const primerSymbol = Symbol(30);
// const segundoSymbol = Symbol(30);
// console.log(primerSymbol === segundoSymbol);
// console.log(primerSymbol.valueOf());
// console.log(segundoSymbol.valueOf());

// //null
// const descuento =null;
// console.log(typeof descuento);

