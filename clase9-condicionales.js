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

imprimirProfesiones(sacha)



function imprimirSiEsMayorDeEdad(persona){
    console.log(`${persona.nombre} tiene ${persona.edad},`)
  
    if (persona.edad >= 18) {
      console.log('es mayor de edad')
    }
    else {
      console.log('es menor de edad')
    }
  }

  imprimirSiEsMayorDeEdad(sacha)