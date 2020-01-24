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


function cumpleanos (persona) {
    return {
        ...persona, 
        edad: persona.edad + 1 
    }
}

sachaMasViejo = cumpleanos(sasha)
console.log(sachaMasViejo)
console.log(sasha)

/*
function cumpleanos (persona) {
    persona.edad += 1
} 

Este ejemplo modificaría dentro y fuera de la función la edad de la persona (side effect)
por eso se hace una copia desestructurando al objeto(...) 
y se modifica solamente el objeto dentro de la función.
*/

