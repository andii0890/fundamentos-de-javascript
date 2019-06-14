var sacha = {
    nombre: " Sacha ",
    apellido: "Lifszyc",
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} kg`)

// function aumentarDePeso (persona){
//   return persona.peso += 200
// }
// esto es lo mismo que:
 
const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365

//Funcion donde se aumenta el valor del peso del objeto persona
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
//Funcion donde se baja el valor del peso del objeto persona
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const comeMucho = () => Math.random() < 0.3  //30% del tiempo come mucho

const realizaDeporte = () => Math.random() < 0.4 //40% del tiempo hace deporte

/* Nuestra persona Daniel fue al nutricionista y le dijeron que tenía que
		bajar 3 kilos cuanto antes*/

	//Por lo tanto
const META = sacha.peso - 3
var dias = 0

while (sacha.peso > META) {
 if(comeMucho()){
    aumentarDePeso(sacha)
    //aumentarDePeso
 }
 if(realizaDeporte()){
     adelgazar(sacha)
     //adelgazar
 }
 dias += 1
    //agrega un dia cada vez que se repita el ciclo
}

console.log(`Pasaron ${dias} días hasta que ${sacha.nombre}adelgazó 3 kg`)

/* 
IDEAS CLAVES
-------------
=> DEBUGGER
un salva vidas
 el primer boton hace que se siga ejecutando 
 hasta que termine o encuentre otro debugger

 la siguiente lo pasa a la siguiente linea

step te permite seguir al siguiente paso que ejecutara el codigo

los breakpoints te permiten crear mini debuggers

------------------------------*/