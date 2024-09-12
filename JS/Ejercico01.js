//comentarios de una sola linea
/*
    comentarios de varias lienas
*/

///Ejercicio 01 : Declaracion de variables

// A) Var

var miNombre = "Carlos Daniel";
var misApellidos;
var miEdad=19;

// El objetivo de console nos permite  enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una funcion o metodo
console.warn("-- Declaracion de las variables usando: Var");
console.log("Intentando leer las variables: ", miNombre, misApellidos);
misApellidos="Garcia Pluma"
console.log("Ya que fueron inicializado vuelvo a intentar leerlas : ", miNombre, misApellidos);
//Una variable puede cambiar en la ejecucion del programa.

//B) Const
console.warn("-- Declaracion de las variables usando: Const");
const miUniversidad = "UT Xicotepec";
const miMatricula = 230187; 
console.log("Hola, ", miNombre," ", misApellidos," ","se que estudias estudias actualmente en: ", miUniversidad," asignaron la matricula: ",miMatricula," y tines una edad de: ", miEdad," años." );

//Para saber el tipo de dato que tiene una variable o constante podemos utilizar la función typeOf()
console.log("analizando los datos puedo deducir que:");
console.log("miNobre es del tipo: ",typeof(miNombre));
console.log("misApellidos es de tipo: ",typeof(misApellidos));
console.log("miUniversidad es del tipo: ", typeof(miUniversidad));
console.log("miMatricula es del tipo: ",typeof(miMatricula));
console.log("miEdad es del tipo: ", typeof(miEdad));

// C) Let
let miFechaNacimiento ="2005-01-23";
let miColorFavorito;
console.warn("--Declaración de Variables Locales usando: LET");
console.log("Genial, te vot conociendo mejor, ahora se que tu naciste el: ", miFechaNacimiento, " y tu color Favorito es: mmm dejame pensar....");
miColorFavorito="Naranja";
console.log("Creo que es: ${miColorFavorito} le atine?") //la manera de mesclar textos fijos con el valor actual de la variables se le conoce como: interpolacion y deben iniciar y finalizar on un backitc - tilde inversa
console.log("analizando los datos puedo deducir que:");
console.log("miFechaNacimiento es del tipo: ",typeof(miFechaNacimiento));
console.log("miColorFavirito es del tipo: ", typeof(miColorFavorito));


