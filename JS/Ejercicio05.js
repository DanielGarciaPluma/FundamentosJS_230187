// Repaso de  Ciclo y Sentencias de Control

//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(0,199,36,1) 0%, rgba(129,255,26,1) 33%, rgba(191,255,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Práctica 07: Arreglos en Java Script")


console.log("%c1.- Condicionales - Si/Entonces ... (IF)", style_console);
//Le indica al programa que hacer o que no en vase a una prueba lógica de verdadero  o falso
let fechaActual= new Date();
/*let fechaActual = new Date("2025/06/05");*/
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

// y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month:'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });

console.log(`en formato local (México): ${fechaLocalMX}`);

// Si es antes de las doce saluda con un buenos días

if(fechaActual.getHours()<12)
console.log(`Buenos días, hoy es: ${fechaLocalMX}`);

// Existe un extensor de la sentencia if(Sí) que es else (en caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primera mitad del año.`);
else
    console.log(`Estas en la segunda mitad del año.`);
        

// Que pasa si la validación tiene varias operaciones

const anio = fechaActual.getFullYear();


let inicioPrimavera = new Date(anio, 2,21);
let inicioVerano = new Date(anio, 5,21);
let inicioOtonio = new Date(anio, 8,23);
let inicioInvierno = new Date(anio, 11,21);
let estacion;
let horarioVerano=false;

if(fechaActual >= inicioPrimavera && fechaActual< inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")
    console.log("Incia la floración de muchas plantas...")
    console.log("Los días son más largos y las noches más cortas...")
    console.log("Muchos animales despiertan de la hibernación... ")
    estacion="Primavera"
    horarioVerano=true;
}
else if(fechaActual >= inicioVerano && fechaActual< inicioOtonio)
{
    console.log("Estamos en VERANO...")
    console.log("En esta temporada los abundan los días Soleados y Calurosos...")
    console.log("En esta temporada el indicé de turismo vacacional sube...")
    console.log("Mucha gente busca realizar actividades al aire ... ")
    estacion="Verano"
    horarioVerano=true;
}
else if(fechaActual >= inicioOtonio && fechaActual< inicioInvierno)
    {
        console.log("Estamos en OTOÑO...")
        console.log("Los árboles suelen cambiar de follaje")
        console.log("Se registarán temperaturas más templadas")
        console.log("Los animales comienza con la recolección de alimento y preparan sus espacios para la hibernación, incluso algunas aves migran.")
        estacion="Otoño"
        horarioVerano=true;
    }
else 
{
       console.log("Estamos en INVIERNO..")
       console.log("En esta temporada los días son más cortos y las noches más largas...")
       console.log("En algunas regiones suele nevar ...")
       console.log("Dado las bajas temperaturas, se recomienda abrigarse")
       estacion="Invierno"
       horarioVerano=false;
               
}    


console.log("%c2.- Operador Ternario ( validacion?cumple:no_cumple) ", style_console);
// En Java Script exista una operación simplicada que valida si una condición se cumple o no, y que hacer en cada caso

const edadPersona = 18;
const mayoriaEdadMX = 18;
const mayoriaEdadUS = 21;

let evaluarMayoriaEdad = (edad) =>
    edad>=18 ? "Eres mayor de edad.": "No eres mayor de edad."

console.log("Evaluando la mayoría de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));

// Sin embargo tenemos que considerar que la mayoría de edad varia en cada país por cuestiones legales, por lo que debemos considerar un segundo parámmetro en la evalación.

evaluarMayoriaEdad = (edad,pais) =>
    (edad>=18 && pais==="MX")?`En ${pais} eres mayor de edad `:`En ${pais} NO eres mayor de edad `;

console.log("Evaluando la mayoría de edad de una persona en México...")
console.log(evaluarMayoriaEdad(edadPersona, "MX"));

console.log("Evaluando la mayoría de edad de una persona en Estados Unidos...")
console.log(evaluarMayoriaEdad(edadPersona, "US"));


console.log("%c3.- SwITCH - CASE ( Elección por valor definido) ", style_console);

// Calculando tu generación en base a tu edad

let asingaGeneracion = (anioNacimiento)=>{
    switch(true)
    {
        case(anioNacimiento<1968):   //Baby Boomers 
            return "Baby Boomers";

        case (anioNacimiento>1968 && anioNacimiento<=1980): 
            return "Generación X";

        case (anioNacimiento>1980 && anioNacimiento<=1994):
            return "Milenials";
        
        case (anioNacimiento>1994 && anioNacimiento<=2010):
            return "Centenials";
            
        case (anioNacimiento>2010):
            return "Krystal";
    }
}

console.log(`Dado que nació en el año 1997 soy de la generación: ${asingaGeneracion(2005)}`);


console.log("%c4.- Manejo de Excepciones ( TRY / CATCH )", style_console);

// En algunas oraciones existieran errores que no son culpa del progama, si no del usuario, la red, el so o incluso de un middleware., pero que si duda debebos controlar para evitar las fallas de ejecucion.

console.log("Intentemos dividir : 0/10 el resultado es: ");

try { //Intenta
    let result= 0/10;
    console.log(result);

} catch (error) {
console.log("Ocurrio un error: " +error.message);
}

console.log("Intentemos dividir : 10/0 el resultado es: ");

try { //Intenta
    let result= 10/0; //dividir un entero entre cero
    console.log(result);

} catch (error) {
console.log("Ocurrio un error: " +error.message);
}

console.log("Intentemos dividir :la veriable a / 10 el resultado es: ");

try { //Intenta
    let result= a/10; //dividir un entero entre cero
    console.log(result);

} catch (error) {
console.log("Ocurrio un error: " +error.message);
}

console.log("Intentemos dividir : el valor de la variable x / entre el valor de la variable y el resultado es: ");

try { //Intenta
    let x=8, y=2, result= x/y; //dividir un entero entre cero
    console.log(result);

} catch (error) {
console.log("Ocurrio un error: " +error.message);
}

console.log("%c5.- Control de ciclo ( BREAK / CONTINUE )", style_console);

//En algunas ocaciones sera importante detener un ciclo de manera abrupta para controlar casos especificos en un ciclo

console.log("Vamos a contar del 1 al 10... ");

for (let num =1; num <=10;num++)
console.log(num);

console.log("ahora necesitamos que si llegara al 7 pares de contar... supongamos que solo por hoy es de mala suerte...");

for (let num =1; num <=10;num++)
if (num==7)
    break;
else
console.log(num);


console.log("ahora necesitamos que si llegara al 7 te saltes ese numero y continues");

for (let num =1; num <=10;num++){
if (num==7){
    continue;
}
console.log(num);
}

console.log("%c6.- Ciclo interactivo ( FOR )", style_console);
// Recorre de manera iterativa (i), de incremental o decremental

console.log("los dias de la semana son en orde ascedente son: ");
let dias = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

for(let i=0;i<dias.length;i++)
    console.log(dias[i]);

console.log("Ahora vamos a imprimir los meses en orden decendente...");
const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
for(let i=11;i>=0;i--)
    console.log(meses[i]);
    
console.log("%c7.- Ciclo condicionales ( WHILE )", style_console);
//Estos ciclo (BUCKLE) depende de una condicion para continuar ejecutandose
let finDeSemana =false;
let mensaje="";
let j =0;

while (j < dias.length) {
    switch (j) { //Usamos "j" para que coincida con el indice
        case 0:
            finDeSemana=true;
            mensaje = "Mormingooooo.... ZzzzzZZZZzz";
            break;
        case 1:
            finDeSemana=true;
            mensaje = "San Lunes a chambiar";
            break;
        case 2:
            finDeSemana=true;
            mensaje = "Segundo dia de chamba a daler";
            break;
        case 3:
            finDeSemana=true;
            mensaje = "Ombligo de semana!!....";
            break;
        case 4:
            finDeSemana=true;
            mensaje = "Ya casi ya si juevesitos";
            break;
        case 5:
            finDeSemana=true;
            mensaje = "Es hoy ... es hoy...";
            break;
        case 6:
            finDeSemana=true;
            mensaje = "Sabadrink !!";
            break;

    }
    //Imprimir el nombre del dia y su mesaje
    if(finDeSemana)
    {
        console.log(`Dia: ${dias[j]}`);
        console.log(`mensaje del dia ${mensaje}`);
    }
j++;
}

console.log("%c8.- Ciclo condicionales , que se ejecuta al menos una vez  - (DO WHILE)", style_console);

let episodio=[
    "Episodio 1: El inicio",
    "Episodio 2: Que paso aqui",
    "Episodio 3: Corre!!!",
    "Episodio 4: No mires atras",
    "Episodio 5: Nada fue lo que parecia",
]
let indice = 0;
let continuarViendo = true;
//esta variable simula la decision del usuario de continuar viendo
do{
    console.log(`Reproduccion ${episodio[indice]}`);
    //simulamos la reproduccion del episodio
    indice++;
    //simulamos una pregunta al usuariosi desias seguir viendo 
    if (indice <episodio.length) {
        continuarViendo=confirm("Deseas continuar con el siguiente episodio?");

    }else{
        continuarViendo=false; //cuando se acaba la lista de episodios

    }
}while( continuarViendo && indice < episodio.length);
console.log("Fin de la reproduccion.");

//
console.log("%c9.- Ciclo para recorrer elementos finitos - (FOR .... OF)", style_console);
let sesiesTrending= [
    { nombre: "The Witcher", temporadas: 3, totalViewers: "3.5M",totalRepords: "10M"},
    { nombre: "Stranger Things", temporadas: 4, totalViewers: "3.5M",totalRepords: "5M"},
    { nombre: "The Boy", temporadas: 3, totalViewers: "3.5M",totalRepords: "8M"},
    { nombre: "Loki", temporadas: 2, totalViewers: "3.5M",totalRepords: "800K"},
    { nombre: "Succession", temporadas: 4, totalViewers: "3.5M",totalRepords: "6.5M"},
]

// usando for...of para recorre la lista
for (let serie of sesiesTrending){
    console.log(`Series: ${serie.nombre}, Temporadas: ${serie.temporadas}`);

}
try{
    console.log(`La serie leida fue : ${serie.nombre}`);
    //No va a funcionar por la variable ya que su alcance solo estuvo durante el ciclo
}
catch(error){
    console.log();
    
}

    
console.log("%c10.- Ciclo para recorrer las propiedades de elementos finitos - (FOR .... IN)", style_console);

//Usando for..in para recorrer cada serie

for (let i in sesiesTrending){
    console.log(`Serie ${parseInt(i)+1}:`);
    for (let propiedad in sesiesTrending[i]){
        console.log(`${propiedad}: ${sesiesTrending[i][propiedad]}`);        
    }
    console.log("----------------------------------------------");
}

console.log("%c10.- Ciclo ininterrumpidos para cada uno de los elemtos del arreglo - (FOR EACH)", style_console);
//lista de series de TV treading con temporadas, viewers y reproducciones

let sesiesTrending2=[
    { nombre: "The Witcher",temporadas: 3, viewers: 8200000, reproducciones: 25000000},
    { nombre: "Stranger Things",temporadas: 4, viewers: 12000000, reproducciones: 400000000},
    { nombre: "The Boys",temporadas: 3, viewers: 7000000, reproducciones: 22000000},
    { nombre: "Loki",temporadas: 2, viewers: 9000000, reproducciones: 3000000},
    { nombre: "Succession",temporadas: 4, viewers: 6000000, reproducciones: 18000000},
    { nombre: "The Walking Dead",temporadas: 16, viewers: 6000000, reproducciones: 18000000},
];

//Usando foreach para recorrer cada seris para calcular la calificacion

sesiesTrending2.forEach((serie, index)=>{
    let calificacion= (serie.reproducciones / serie.viewers).toFixed(2);
    //calcula la calificacion y arendodea a 7 decimales
    console.log(`Serie: ${index = 1}:`);
    console.log(`Nombre: ${serie.nombre}`);
    console.log(`Temporadas: ${serie.temporadas}`);
    console.log(`Viewers: ${serie.viewers}`);
    console.log(`Reproducciones: ${serie.reproducciones}`);
    console.log(`Calificacion: ${calificacion}`);
    console.log(`-------------------------`);    
});

//Usando Filter para filtar, map para transdormar la informacion.
// Lista de series que queremos verificar
let seriesDeseadas = ["The Walking Dead", "The Boys", "Loki"];
//Usando map e includes para filtar y obtener lso nombres de series con 3 temporadas
let seriesConTresTemporadas = sesiesTrending2.filter(serie=> serie.temporadas<=3)
//filtramos las series qe tienen tres temporadas
.map(serie=>serie.nombre)//Obtenemos solo los nombres de esas que tiene  3 temporadas 
.filter(nombre=>seriesDeseadas.includes(nombre));
//Filtramos las que estan en la lista de series deseadas  

//Mostrar los resultados
console.log("Series con 3 temporadas que estan en la lista deseadas");
console.log(seriesConTresTemporadas);











