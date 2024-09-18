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
let numeroGrande3= 123456789012345678901234567890;
let numeroGrande4 = 1234567890123456789012345678901234567890;






//para definir el tipo de dato Bigint deberas iniciar la funcion Bingint o usar "n" al final del numero de la ssiguiente forma
console.log("Declaracion de variables numericos de gran tamaño")
numeroGrande3 = BigInt(123456789012345678901234567890)
numeroGrande4 = BigInt(1234567890123456789012345678901234567890)

console.log(`El segunod experimento de un numero grande es: ${numeroGrande3} y es del tipo ${typeof(numeroGrande3)}`);
console.log(`El segunod experimento de un numero grande es: ${numeroGrande4} y es del tipo ${typeof(numeroGrande4)}`);
// hay que considerar que los tipos de datos declarados como Bigint no sonnoperables como los tipos number

let numero=238;
//si intentamos realizar una operacion matemtica entre los tipos de datos obteniendo un error de operacion 

console.log(`El redultado de de una operacio de numeroGrande y numero = ${numeroGrande4/BigInt(numero) } `);


//Symbol
//definir difirente valores  
console.warn("---Tipo de dato: Symbol (Simbolo)");

const  numero1  =2;
const numero2 =2.0;
const numero3 ="2";
const numero4 = "2.0";
const numero5 = Symbol(2)
const numero6 = Symbol(2.0)
const numero7 = Symbol("2")
const numero8 = Symbol("2.0")
const numero9 = Symbol(2)


//Prueba de comparacion
console.log("Prueba de compatacion 1:");
 if (numero1==numero2){
    console.log("se ha compararon los valores de numero1 y numero2, confirmando que tienen el mismo valor.");
 }
 else
 {
    console.log("Se compararon los valores de numero1 y numero2, detectando que no tienen el mismos valor.");
 }
//Prueba de comparacion 2 2 ==2.0
console.log("Prueba de compatacion 2:");
 if (numero1==numero3){
    console.log("se ha compararon los valores de numero1 y numero3, confirmando que tienen el mismo valor.");
 }
 else
 {
    console.log("Se compararon los valores de numero1 y numero3, detectando que no tienen el mismos valor.");
 }
//Prueba de comparacion 3 2 ==="2"
console.log("Prueba de compatacion 3:");
 if (numero1===numero3){
    console.log("se ha compararon los valores de numero1 y numero3, confirmando que tienen el mismo valor.");
 }
 else
 {
    console.log("Se compararon los valores de numero1 y numero3, detectando que no tienen el mismos valor.");
 }
//Prueba de comparacion 4 2 ==="2"
console.log("Prueba de compatacion 4:");
if (numero1==numero4){
    console.log("se ha compararon los valores de numero1 y numero4, confirmando que tienen el mismo valor.");
 }
 else
 {
    console.log("Se compararon los valores de numero1 y numero4, detectando que no tienen el mismos valor.");
 }
//Prueba de comparacion 5 2 ==="2"
console.log("Prueba de compatacion 5:");
if (numero1===numero4){
    console.log("se ha compararon los valores de numero1 y numero4, confirmando que tienen el mismo valor.");
 }
 else
 {
    console.log("Se compararon los valores de numero1 y numero4, detectando que no tienen el mismos valor.");
 }
 //Prueba de comparacion 6 2 ==="2"
 console.log("Prueba de compatacion 6:");
if (numero1===numero5){
    console.log("se ha compararon los valores de numero1 y numero4, confirmando que tienen el mismo valor.");
 }
 else
 {
    console.log("Se compararon los valores de numero1 y numero4, detectando que no tienen el mismos valor.");
 }
 //Prueba de comparacion 7 2 ==="2"
 console.log("Prueba de compatacion 7:");
if (numero5===numero7){
    console.log("se ha compararon los valores de numero1 y numero4, confirmando que tienen el mismo valor.");
 }
 else
 {
    console.log("Se compararon los valores de numero1 y numero4, detectando que no tienen el mismos valor.");
 } 
 //Prueba de comparacion 8 2 ==="2"
 console.log("Prueba de compatacion 8:");
 if (numero5===numero9){
     console.log("se ha compararon los valores de numero1 y numero4, confirmando que tienen el mismo valor.");
  }
  else
  {
     console.log("Se compararon los valores de numero1 y numero4, detectando que no tienen el mismos valor.");
  }




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



//NULL 
console.warn("---Tipo de dato: NULL (nulo o vacio)");
// El tipo de dato nulo se asigna cuando el sistema el usuario sabe de la variable pero prefiere dejarla vacia
let  nombrUsuario = null;
let passUsuario = null;
let generoUsuario =null;
let estatusRelacionSentimental =null;
let fecha_ultimahost=null;

//supongamos que estamos progamando una red social, tipo facebook en la que parte de la informacion se aplicara al perfil del usuario
//si el usurio no ha iniciado una session
//en la UH (Historia de Usuario), que el usuario desea ingresar su  jumero telefonicoy correo electronico

nombrUsuario= "Daniel2432@gmial.com"
passUsuario="Danielg23"
//

console.log(`El usuario ${nombrUsuario} esta intentado logearse con la contrasña ${passUsuario}`);
//
//
generoUsuario ="M";
estatusRelacionSentimental=null;

console.log(`El usuario ${nombrUsuario}, se ha logeado corectamente , al tenre acceso asu informacion de si perfil podemos deducir que su genero es ${generoUsuario} y que su estado de relacionn en ${estatusRelacionSentimental} y su ultimma publicaion la realizo el ${fecha_ultimahost} `);


