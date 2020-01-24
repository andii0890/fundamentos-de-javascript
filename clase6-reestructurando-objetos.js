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
    var { nombre } = persona
console.log(nombre.toUpperCase()) 
} 

imprimirNombreEnMayusculas (sasha)
imprimirNombreEnMayusculas (dario)

//Desafío

function imprimirNombreYEdad(persona) {
    console.log(`Hola me llamo ${persona.nombre} y tengo ${persona.edad} años`)
}

imprimirNombreYEdad(sasha)
imprimirNombreYEdad(dario)

//Hola me llamo Sacha y tengo 28 años
//Hola me llamo Darío y tengo 27 años
