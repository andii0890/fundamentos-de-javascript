var sasha = {
    nombre: "Sasha", 
    apellido: "Lifsyc",
    edad: 28

}

var dario = {
    nombre: "Darío",
    apellido: "Susnisky",
    edad: 27

}

function imprimirNombreEnMayusculas (persona) { 
    // var nombre = persona.nombre (es lo mismo que el ejemplo de abajo)
    var {nombre} = persona
console.log(nombre.toUpperCase()) 
} 

imprimirNombreEnMayusculas (sasha)
imprimirNombreEnMayusculas (dario)

/*
function cumpleanos (persona) {
    persona.edad += 1
} 
*/

function cumpleanos (persona) {
    return {
        ...persona, 
        edad: persona.edad + 1 
    }
}


