 var signo = prompt ('¿cuál es tu signo?')

    switch (signo) {
        case 'aries':
            console.log('Entienda que antes de establecer cualquiera de los objetivos que tiene para su futuro, debe determinar las pautas concretas sabiendo con claridad las desventajas.')
            break

        case 'tauro':
            console.log('Seguramente la comunicación con los demás será casi imposible en este día. Dedique más atención al modo de expresar sus ideas y todo mejorará.')
        break
        case 'geminis':
        case 'géminis':
            console.log('Intente observar a la gente que lo rodea y, de esta forma, comprobará que usted tiene las mismas oportunidades que los demás. Deje de desvalorizarse sin causa.')
            break

        case 'cancer':
        case 'cáncer':
            console.log('Aproveche que sus poderes perceptivos estarán muy afinados. Utilícelos para ayudar a alguien que atraviesa un mal momento y necesita de ayuda.')
            break

        case 'leo':
            console.log('Sepa que necesitará tranquilizarse y estar preparado para lo que se acerque. En esta jornada, sentirá que algo nuevo y bueno está por suceder.')
            break

        case 'virgo':
            console.log('Hoy se despertará con más valentía que la habitual. Exprese las ideas con franqueza, pero deberá cuidarse de no herir los sentimientos ajenos.')
            break

        case 'libra':
            console.log('En esta jornada intente estar preparado, ya saldrán a la luz aquellos cuestionamientos que permanecieron ocultos en su interior por mucho tiempo.')
            break

        case 'escorpio':
            console.log('Momento para reconsiderar muchos aspectos de su vida que lo atormentan. No postergue por más tiempo una decisión que determinará su futuro cercano.')
            break

        case 'sagitario':
            console.log('Deberá aprovechar este período profesional para cosechar todo lo que sembró hace tiempo para su vida. Relájese y disfrute de las ganancias de los proyectos.')
            break

        case 'capricornio':
            console.log('Gracias a la presencia lunar, podrá terminar todo lo que se propuso. Sepa que toda su energía vital se desplegará en las actividades que tenga.')
            break

        case 'acuario':
            console.log('Evite debilitarse, ya que todo va a salir como tenía planeado. Aunque la lentitud a usted lo exaspere, sepa que tendrá que ser paciente para alcanzar el éxito.')
            break

        case 'piscis':
            console.log('Hoy será una jornada donde podrá exponer su vitalidad e inteligencia. Ponga en marcha todos los proyectos postergados y en poco tiempo tendrá ganancias.')
            break

        default: 
            console.log('no es un signo zodiacal válido')
            break   

}