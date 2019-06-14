function heredaDe(prototipoHijo,prototipoPadre){
    var fn /* o noop*/ = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y mido ${this.altura}`)
}

Persona.prototype.soyAlto = function ()  {
   return this.altura > 1.8
}

function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}
heredaDe(Desarrollador,Persona)

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarollador/a`)
}


// var sacha = new Persona('Sacha', 'Lifszyc', 1.85)
// var erika = new Persona('Erika', 'Luna', 1.70)
// var arturo = new Persona('Arturo', 'Martinez', 1.79)
