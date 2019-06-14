var sacha = {
    nombre: "Sacha",
    apellido: "Lyfszyc",
    edad:28,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

var juan = {
    nombre: "Juan",
    apellido: "Gomez",
    edad: 13
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero){
        console.log("ingeniero")
    } else {
        console.log("no es ingeniero")
    }

    if (persona.cocinero){
        console.log("cocinero")
    }

    if (persona.cantante){
        console.log("cantante")
    }

    if (persona.dj){
        console.log("dj")
    }

    if (persona.guitarrista){
        console.log("guitarrista")
    }

    if (persona.drone){
        console.log("piloto de drone")
    }
}

const MAYORIA_DE_EDAD = 18

imprimirProfesiones(sacha)

const esMayorDeEdad =  ({edad}) => edad >= MAYORIA_DE_EDAD

//cuando hay un sólo parámetro, se pueden obviar los paréntesis
//cuando la única funación sea retornar algo también se pueden eliminar return y las llaves 
//se elimina .persona para desestructurar el parámetro y agregar el objeto que queremos dentro de llaves y paréntesis
/*
esto de arriba es exactamente lo mismo que:

const esMayorDeEdad =function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
 }
 */

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
      console.log(`${persona.nombre} 'es mayor de edad'`)
    } else {
        console.log(`${persona.nombre} 'es menor de edad'`)
    }
}

/*
function permitirAcceso (persona) {
    if (!esMayorDeEdad(persona)) {
        console.log("ACCESO DENEGADO")
    }
}
*/

//lo de arriba es lo mismo que:
//desafío con arrow functions
var permitirAcceso = ({ edad }) => esMayorDeEdad(edad) ? "acceso permitido" : "acceso denegado"
console.log(permitirAcceso(persona))

// => función

//operadores ternarios
// ?  if
// : true or false