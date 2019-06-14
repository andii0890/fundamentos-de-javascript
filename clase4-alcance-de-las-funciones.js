var nombre = "Sacha" //Una variable global

function imprimirNombreEnMayusculas (nombre) { // n tiene alcance local // Para declarar la variable local, simplemente la coloco en parametro.

nombre = nombre.toUpperCase () //Observarás que puede usar la variable global perfectamente.

console.log(nombre) 
} 
/*
Esta funcion va a tener el efecto colateral de 
modificar la variable nombre tanto dentro como fuera 
de la función.

Esto es algo que queremos evitar en nuestro codigo.
*/


imprimirNombreEnMayusculas (nombre) //De esta manera evito el efecto colateral y tengo un alcance local.