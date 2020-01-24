var x = 4, y = "4"

function compararVariables(a, b){
    return a == b
}

// true

/* 
a === b
false
*/

console.log(compararVariables(x, y))

var sacha = {
    nombre: " Sacha "
}

var otraPersona = {
    nombre: "Sacha"
}

function compararObjetos () {
    return sacha == otraPersona
}

console.log(compararObjetos())

// var otraPersona = sacha
// otraPersona == sacha
//true

//var otraPersona= {
//    ...sacha
//}
// otraPersona == sacha
//false

/* Existen varias maneras de comparar variables u objetos dentro de javascript.
En el primer ejemplo le asignamos a X un valor numérico y a Y un string. 
Para poder compararlos debemos agregar dos signos de igual (==). 
Esto los convierte al mismo tipo de valor y permite que se puedan comparar.
Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===).
Esto permite que JavasScript no iguale las variables que son de distinto tipo. 
Te recomendamos que uses el triple igual siempre que estés comparando variables.
Existen cinco tipos de datos que son primitivos:

Boolean
Null
Undefined
Number
String

*/