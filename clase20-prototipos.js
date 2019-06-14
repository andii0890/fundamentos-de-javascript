function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}`)
}

Persona.prototype.soyAltoOBajo = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy ${this.altura >= 1.80 ? 'alto' : 'bajo'}`)
}


var sacha = new Persona('Sacha', 'Lifszyc', 1.85)
var erika = new Persona('Erika', 'Luna', 1.70)
var arturo = new Persona('Arturo', 'Martinez', 1.79)