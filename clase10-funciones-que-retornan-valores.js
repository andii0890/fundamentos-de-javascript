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

function esMayorDeEdad(persona){
   return persona.edad >= MAYORIA_DE_EDAD
}



function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
      console.log(`${persona.nombre} 'es mayor de edad'`)
    } else {
        console.log(`${persona.nombre} 'es menor de edad'`)
    }
}