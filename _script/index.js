class Movimiento {
    constructor(nombre, potencia) {
        this.nombre = nombre; // Nombre del movimiento
        this.potencia = potencia; // Potencia del movimiento
    }
}

class Pokemon {
    constructor(nombre, HPmaximo, imagenFrontal, sound, movimiento1, movimiento2, ataque, defensa) {
        this.nombre = nombre;
        this.HPmaximo = HPmaximo;
        this.HPactual = HPmaximo; 
        this.imagenFrontal = imagenFrontal;
        this.sound = sound;
        this.movimiento1 = movimiento1;
        this.movimiento2 = movimiento2;
        this.estadisticas = {
            ataque: ataque,
            defensa: defensa
        };
    }

    obtenerInfo() {
        return {
            nombre: this.nombre,
            HP: this.HPactual,
            imagen: this.imagenFrontal
        };
    }
}

// Movimientos
const placaje = new Movimiento("Placaje", 20);
const golpeCuerpo = new Movimiento("Golpe Cuerpo", 40);
const lanzallamas = new Movimiento("Lanzallamas", 45);
const hidrobomba = new Movimiento("Hidrobomba", 55);
const trueno = new Movimiento("Trueno", 45);
const hojaAfilada = new Movimiento("Hoja Afilada", 30);
const psicoCorte = new Movimiento("Psico-Corte", 35);
const giroFuego = new Movimiento("Giro Fuego", 20);
const rayo = new Movimiento("Rayo", 45);
const golpeAereo = new Movimiento("Golpe Aéreo", 30);
const hiperRayo = new Movimiento("Hiper Rayo", 75);
const alaDeAcero = new Movimiento("Ala de Acero", 35);
const terremoto = new Movimiento("Terremoto", 50);
const fuerzaBruta = new Movimiento("Fuerza Bruta", 60);
const chorroDeAgua = new Movimiento("Chorro Agua", 20);


// Creación de los Pokémon
// Creación de los Pokémon con estadísticas de ataque y defensa
const arceus = new Pokemon('Arceus', 100, '_images/_pokemon/_back/ARCEUS.png', '_sounds/_pokemon/ARCEUS.ogg', hiperRayo, fuerzaBruta, 120, 120);
const charizard = new Pokemon('Charizard', 100, '_images/_pokemon/_back/CHARIZARD.png', '_sounds/_pokemon/CHARIZARD.ogg', lanzallamas, alaDeAcero, 84, 78);
const dragonite = new Pokemon('Dragonite', 100, '_images/_pokemon/_back/DRAGONITE.png', '_sounds/_pokemon/DRAGONITE.ogg', golpeAereo, hiperRayo, 134, 95);
const gyarados = new Pokemon('Gyarados', 100, '_images/_pokemon/_back/GYARADOS.png', '_sounds/_pokemon/GYARADOS.ogg', hidrobomba, terremoto, 125, 79);
const magnemite = new Pokemon('Magnemite', 100, '_images/_pokemon/_back/MAGNEMITE.png', '_sounds/_pokemon/MAGNEMITE.ogg', rayo, placaje, 35, 70);
const mewtwo = new Pokemon('Mewtwo', 100, '_images/_pokemon/_back/MEWTWO.png', '_sounds/_pokemon/MEWTWO.ogg', psicoCorte, hiperRayo, 110, 90);
const raichu = new Pokemon('Raichu', 100, '_images/_pokemon/_back/RAICHU.png', '_sounds/_pokemon/RAICHU.ogg', trueno, golpeCuerpo, 90, 55);

const absol = new Pokemon('Absol', 100, '_images/_pokemon/_front/ABSOL.png', '_sounds/_pokemon/ABSOL.ogg', golpeCuerpo, hojaAfilada, 130, 60);
const blastoise = new Pokemon('Blastoise', 100, '_images/_pokemon/_front/BLASTOISE.png', '_sounds/_pokemon/BLASTOISE.ogg', hidrobomba, chorroDeAgua, 83, 100);
const jolteon = new Pokemon('Jolteon', 100, '_images/_pokemon/_front/JOLTEON.png', '_sounds/_pokemon/JOLTEON.ogg', rayo, trueno, 65, 60);
const magmar = new Pokemon('Magmar', 100, '_images/_pokemon/_front/MAGMAR.png', '_sounds/_pokemon/MAGMAR.ogg', lanzallamas, giroFuego, 95, 57);
const pidgeot = new Pokemon('Pidgeot', 100, '_images/_pokemon/_front/PIDGEOT.png', '_sounds/_pokemon/PIDGEOT.ogg', golpeAereo, alaDeAcero, 80, 75);
const torterra = new Pokemon('Torterra', 100, '_images/_pokemon/_front/TORTERRA.png', '_sounds/_pokemon/TORTERRA.ogg', hojaAfilada, terremoto, 109, 105);
const vaporeon = new Pokemon('Vaporeon', 100, '_images/_pokemon/_front/VAPOREON.png', '_sounds/_pokemon/VAPOREON.ogg', chorroDeAgua, hidrobomba, 65, 60);


// Crear un arreglo con todos los Pokémon
const pokemonsPropios = [arceus, charizard, dragonite, gyarados, magnemite, mewtwo, raichu];
const pokemonsRivales = [absol, blastoise, jolteon, magmar, pidgeot, torterra, vaporeon];

// Variables globales para los Pokémon seleccionados
let pokemonPropioSeleccionado;
let pokemonRivalSeleccionado;
let batallaIniciada = false;
let puedeCurarse = true;  // Solo se puede curar una vez
let batallaTerminada = false;
let haCurado = false; // Estado para verificar si la IA ya se ha curado

// Función para calcular el daño de un ataque
function calcularDanio(atacante, defensor, movimiento) {
    const ataque = atacante.estadisticas.ataque;
    const defensa = defensor.estadisticas.defensa;
    // Disminuir aún más el divisor en el cálculo de danioBase
    const danioBase = movimiento.potencia / 3.5;  // Mayor daño base

    // Factor aleatorio con aún más variabilidad, ajustado a un rango mayor
    const factorAleatorio = Math.random() * (1.2 - 0.9) + 0.9; // Aumentar el rango de aleatoriedad

    // Ajustar la fórmula para que la defensa tenga aún menos impacto
    const danio = Math.floor((ataque / (defensa * 1.5)) * danioBase * factorAleatorio);  // Menor impacto de la defensa

    return danio;
}



// Función para seleccionar el Pokémon y mostrar sus atributos
function seleccionarPokemon(tipo, indice) {
    let pokemonSeleccionado;

    // Restaurar HP de todos los Pokémon (propios y rivales) al máximo
    pokemonsPropios.forEach(pokemon => {
        pokemon.HP = pokemon.HPmaximo; // Restaurar la vida al máximo
    });
    pokemonsRivales.forEach(pokemon => {
        pokemon.HP = pokemon.HPmaximo; // Restaurar la vida al máximo
    });

    // Seleccionar el Pokémon correspondiente (propio o rival)
    if (tipo === "propio") {
        pokemonSeleccionado = pokemonsPropios[indice];
        pokemonPropioSeleccionado = pokemonSeleccionado; // Guardar el Pokémon propio seleccionado
    } else {
        pokemonSeleccionado = pokemonsRivales[indice];
        pokemonRivalSeleccionado = pokemonSeleccionado; // Guardar el Pokémon rival seleccionado
    }


    // Mostrar la información del Pokémon seleccionado
    const info = pokemonSeleccionado.obtenerInfo();
    console.log(info);  // Verificar que se obtienen los datos correctamente

    // Mostrar información en el HTML
    if (tipo === "propio") {
        document.querySelector(".player .name").textContent = info.nombre;
        document.getElementById("myHP").textContent = `${pokemonSeleccionado.HP} / ${pokemonSeleccionado.HPmaximo}`;
        document.querySelector(".player .pokemon").src = info.imagen;

        // Actualizar los nombres de los movimientos en los botones de acción
        document.querySelector(".actions button:nth-child(1)").textContent = pokemonSeleccionado.movimiento1.nombre;
        document.querySelector(".actions button:nth-child(2)").textContent = pokemonSeleccionado.movimiento2.nombre;
    } else {
        document.querySelector(".opponent .name").textContent = info.nombre;
        document.getElementById("apHP").textContent = `${pokemonSeleccionado.HP} / ${pokemonSeleccionado.HPmaximo}`;
        document.querySelector(".opponent .pokemon").src = info.imagen;
    }

    // Reproducir el sonido del Pokémon seleccionado
    const audio = new Audio(pokemonSeleccionado.sound);
    audio.volume = 0.2;
    audio.load(); // Cargar el sonido

    audio.play().catch(error => {
        console.log("Error al reproducir el sonido:", error);
    });
}


// Función para iniciar la batalla
function Continua() {


    if (!batallaIniciada) {
        batallaIniciada = true;
        console.log("La batalla comienza!");

        // Inicia el primer turno del jugador
        mensajeTurno("Es tu turno!");

        // Reproducir música de batalla
        const audioBatalla = new Audio('_sounds/_batalla/batallapokemon.mp3'); // Ruta de la canción
        audioBatalla.volume = 0.3; // Ajusta el volumen
        audioBatalla.play().catch(error => {
            console.log("Error al reproducir la música:", error);
        });
    }
}

function reiniciarBatalla() {
    pokemonPropioSeleccionado.HPactual = pokemonPropioSeleccionado.HPmaximo;
    pokemonRivalSeleccionado.HPactual = pokemonRivalSeleccionado.HPmaximo;

    // Reiniciar otras variables de batalla si es necesario
    batallaTerminada = false;
    batallaIniciada = false;

    // Restablecer la interfaz visual
    document.getElementById("myHP").textContent = `${pokemonPropioSeleccionado.HPactual} / ${pokemonPropioSeleccionado.HPmaximo}`;
    document.getElementById("apHP").textContent = `${pokemonRivalSeleccionado.HPactual} / ${pokemonRivalSeleccionado.HPmaximo}`;
    
    // Mostrar mensaje de que el jugador puede seleccionar otro Pokémon
    mensajeTurno("¡La batalla ha terminado! Elige un nuevo Pokémon para continuar.");

    // Reproducir música de batalla nuevamente
    const audioBatalla = new Audio('_sounds/_batalla/batallapokemon.mp3'); // Ruta de la canción
    audioBatalla.volume = 0.3; // Ajusta el volumen
    audioBatalla.play().catch(error => {
        console.log("Error al reproducir la música:", error);
    });

    // Cambiar la interfaz o el mensaje según sea necesario
    console.log("Nueva batalla iniciada");
}

// Función para ejecutar un ataque (de acuerdo con el movimiento)
function atacar(pokemonAtacante, movimiento) {
    if (pokemonAtacante.HPactual <= 0) {
        return;
    }

    console.log(pokemonRivalSeleccionado.HPactual)
    console.log(pokemonAtacante.HPactual)

    // Calcular el daño usando la nueva fórmula, asegurando que no tenga decimales
    const danio = Math.floor(calcularDanio(pokemonAtacante, pokemonRivalSeleccionado, movimiento));

    // Reducir la vida del Pokémon rival, asegurando que no baje de 0
    pokemonRivalSeleccionado.HPactual = Math.max(0, pokemonRivalSeleccionado.HPactual - danio);

    // Mostrar mensaje de ataque
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = `${pokemonAtacante.nombre} usa ${movimiento.nombre}!`;

    // Mostrar nueva vida del rival
    document.getElementById("apHP").textContent = `${pokemonRivalSeleccionado.HPactual} / 100`;

    // Revisar si el Pokémon rival ha caído
    if (pokemonRivalSeleccionado.HPactual <= 0) {  // Asegúrate de revisar HPactual, no HP
        mensajeTurno(`${pokemonRivalSeleccionado.nombre} ha caído! Has ganado la batalla.`);
        reiniciarBatalla;
    } else {
        // Si no ha caído, es el turno del rival
        turnoRival();
    }
}



function turnoRival() {
    // Verificar si los Pokémon están seleccionados
    if (!pokemonPropioSeleccionado || !pokemonRivalSeleccionado) {
        console.log("No se ha seleccionado un Pokémon.");
        mensajeTurno("No tienes Pokémon seleccionado. Elige uno para continuar.");
        return;
    }

    if (batallaTerminada) return;

    // Elegir un movimiento aleatorio del Pokémon rival
    const movimientosRival = [pokemonRivalSeleccionado.movimiento1, pokemonRivalSeleccionado.movimiento2];
    const movimientoRival = movimientosRival[Math.floor(Math.random() * movimientosRival.length)];

    // Realizar el ataque
    setTimeout(() => {
        mensajeTurno(`${pokemonRivalSeleccionado.nombre} usa ${movimientoRival.nombre}!`);

        // Calcular el daño usando la función calcularDanio
        const danio = calcularDanio(pokemonRivalSeleccionado, pokemonPropioSeleccionado, movimientoRival);

        // Reducir la vida del Pokémon propio
        pokemonPropioSeleccionado.HPactual = Math.max(0, pokemonPropioSeleccionado.HPactual - danio);

        // Mostrar el daño que hace el rival
        const messageDiv = document.getElementById("message");
        messageDiv.textContent += ` El daño infligido fue de ${danio} puntos.`;

        // Mostrar nueva vida del jugador
        document.getElementById("myHP").textContent = `${pokemonPropioSeleccionado.HPactual} / ${pokemonPropioSeleccionado.HPmaximo}`;

        // Verificar si el jugador ha perdido
        if (pokemonPropioSeleccionado.HPactual <= 0) {
            mensajeTurno(`${pokemonPropioSeleccionado.nombre} ha caído! Has perdido la batalla.`);
            reiniciarBatalla;

            // Continuar la batalla si ninguno de los dos ha caído
            mensajeTurno("Es tu turno!");
        }

    }, 1000);  // Pausa antes de que el rival ataque
}


// Mostrar un mensaje en la pantalla
function mensajeTurno(mensaje) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = mensaje;
}

// Función para el botón de "Acción 1" (Primer movimiento)
function accion1() {
    if (batallaTerminada) {
        mensajeTurno("La batalla ha terminado. Empieza una nueva.");
        return;
    }

    // Verificar si se ha seleccionado un Pokémon y la batalla ha comenzado
    if (pokemonPropioSeleccionado && batallaIniciada) {
        const movimiento = pokemonPropioSeleccionado.movimiento1;
        atacar(pokemonPropioSeleccionado, movimiento);
    } else {
        console.log("No se ha seleccionado un Pokémon propio o la batalla no ha comenzado.");
        mensajeTurno("Por favor, selecciona un Pokémon y comienza la batalla.");
    }
}

// Función para el botón de "Acción 2" (Segundo movimiento)
function accion2() {
    if (batallaTerminada) {
        mensajeTurno("La batalla ha terminado. Empieza una nueva.");
        return;
    }

    // Verificar si se ha seleccionado un Pokémon y la batalla ha comenzado
    if (pokemonPropioSeleccionado && batallaIniciada) {
        const movimiento = pokemonPropioSeleccionado.movimiento2;
        atacar(pokemonPropioSeleccionado, movimiento);
    } else {
        console.log("No se ha seleccionado un Pokémon propio o la batalla no ha comenzado.");
        mensajeTurno("Por favor, selecciona un Pokémon y comienza la batalla.");
    }
}

// Función para el botón de "Curarse"
function Curarse() {
    if (batallaTerminada) {
        mensajeTurno("La batalla ha terminado. Empieza una nueva.");
        return;
    }

    if (puedeCurarse) {
        const curacion = Math.floor(pokemonPropioSeleccionado.HPactual * 0.3); // Recupera 50% de su HP máximo
        pokemonPropioSeleccionado.HPactual = Math.min(pokemonPropioSeleccionado.HPmaximo, pokemonPropioSeleccionado.HPactual + curacion); // Asegura que no supere el HP máximo
        document.getElementById("myHP").textContent = `${pokemonPropioSeleccionado.HPactual} / ${pokemonPropioSeleccionado.HPmaximo}`;
        mensajeTurno(`${pokemonPropioSeleccionado.nombre} se ha curado y recuperó ${curacion} HP.`);
        puedeCurarse = false;  // Solo se puede curar una vez por batalla
    } else {
        mensajeTurno("Ya has usado la curación en esta batalla.");
    }
}


// Función para el botón de "Huir"
function Salir() {
    if (batallaTerminada) {
        mensajeTurno("La batalla ya ha terminado. Empieza una nueva.");
        return;
    }

    // Marcar que el jugador ha huido
    if (!batallaTerminada) {
        batallaTerminada = true; // Marcar la batalla como terminada
        mensajeTurno("Has huido de la batalla.");

        // Efecto visual o sonoro de huida (opcional)
        const audioEscape = new Audio('_sounds/scape.ogg'); // Ruta del sonido de huida
        audioEscape.volume = 0.3;
        audioEscape.play().catch(error => {
            console.log("Error al reproducir el sonido:", error);
        });

    }
    
    // Llamar a la función que reinicia el estado
    resetearEstado();

    // Opcional: permitir la selección de un nuevo Pokémon
    // seleccionarPokemon('propio', 0); // Re-seleccionar el primer Pokémon si lo deseas
}

function resetearEstado() {
    // Restaurar los HPs de todos los Pokémon al máximo
    pokemonsPropios.forEach(pokemon => {
        pokemon.HP = pokemon.HPmaximo; // Restaurar el HP de cada Pokémon propio
    });
    
    pokemonsRivales.forEach(pokemon => {
        pokemon.HP = pokemon.HPmaximo; // Restaurar el HP de cada Pokémon rival
    });

    // Restablecer las variables de batalla
    batallaIniciada = false;
    batallaTerminada = false;
    

    // Restaurar la interfaz de usuario (mostrar HP restaurado de ambos Pokémon)
    if (pokemonPropioSeleccionado) {
        document.getElementById("myHP").textContent = `${pokemonPropioSeleccionado.HP} / ${pokemonPropioSeleccionado.HPmaximo}`;
    } else {
        document.getElementById("myHP").textContent = "0 / 0"; // Si no hay Pokémon propio seleccionado
    }

    if (pokemonRivalSeleccionado) {
        document.getElementById("apHP").textContent = `${pokemonRivalSeleccionado.HP} / ${pokemonRivalSeleccionado.HPmaximo}`;
    } else {
        document.getElementById("apHP").textContent = "0 / 0"; // Si no hay Pokémon rival seleccionado
    }

    // Mostrar mensaje de estado
    mensajeTurno("La batalla ha sido reiniciada. Elige un nuevo Pokémon para continuar.");
    puedeCurarse=true;
    // Permitir al jugador elegir un nuevo Pokémon
    // Puedes invocar una función para que el jugador seleccione un Pokémon, o mostrar las opciones de selección
}




window.onload = function() {
    if (!pokemonPropioSeleccionado || !pokemonRivalSeleccionado) {
        seleccionarPokemon("propio", 0);  // Selecciona un Pokémon por defecto
        seleccionarPokemon("rival", 0);   // Selecciona un Pokémon rival por defecto
    }
};

