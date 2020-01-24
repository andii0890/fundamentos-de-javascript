var sasha = {
    nombre: "Sasha", // clave o key : valor o value
    apellido: "Lifsyc",
    edad: 28

}

var dario = {
    nombre: "Darío",
    apellido: "Susnisky",
    edad: 27

}

var felipe = {
    nombre: "felipe",
    apellido: "nevarez",
    edad: 30
}

function imprimirNombreEnMayusculas ({ apellido = '' }) { 
console.log(apellido.toUpperCase()) 
} 

imprimirNombreEnMayusculas (sasha)
imprimirNombreEnMayusculas (dario)
imprimirNombreEnMayusculas(felipe)
imprimirNombreEnMayusculas ({ nombre: "pepito "})

/* Los objetos se definen delimitados mediante llaves {}

Un atributo se compone de una clave (key) y un valor (value), 
que se separan entre sí por dos puntos “”:"". 
Los valores pueden ser de tipo string, número, booleano, etc. 
Cada atributo está separado del siguiente por una coma. 
Un objeto puede tener todos los atributos que sean necesarios.

Escribir el nombre de un objeto separado por un punto del nombre de un atributo, 
nos permite acceder al valor de dicho atributo para ese objeto. 
Un objeto también se puede pasar como atributo en una función. */