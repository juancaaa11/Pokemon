class Pokemon {
    constructor(nombre, HPmaximo, imagenFrontal) {
        this.nombre = nombre;
        this.HPmaximo = HPmaximo;
        this.HPactual = HPmaximo; // Empieza con el HP máximo
        this.imagenFrontal = imagenFrontal;
    }

    obtenerInfo() {
        return {
            nombre: this.nombre,
            HP: this.HPactual,
            imagen: this.imagenFrontal
        };
    }
}


class Movimiento {
    constructor(nombre, tipo, potencia) {
        this.nombre = nombre;     // Nombre del movimiento        // Tipo del movimiento (e.g., fuego, agua)
        this.potencia = potencia; // Potencia del movimiento
    }
}



// Movimientos
const placaje = new Movimiento("Placaje",  40);
const golpeCuerpo = new Movimiento("Golpe Cuerpo",  80);
const lanzallamas = new Movimiento("Lanzallamas",  90);
const hidrobomba = new Movimiento("Hidrobomba",  110);
const trueno = new Movimiento("Trueno",  90);
const hojaAfilada = new Movimiento("Hoja Afilada",  55);
const psicoCorte = new Movimiento("Psico-Corte",  70);
const giroFuego = new Movimiento("Giro Fuego", 35);
const rayo = new Movimiento("Rayo",  90);
const golpeAereo = new Movimiento("Golpe Aéreo", 60);
const hiperRayo = new Movimiento("Hiper Rayo",  150);
const alaDeAcero = new Movimiento("Ala de Acero",  70);
const terremoto = new Movimiento("Terremoto",  100);
const fuerzaBruta = new Movimiento("Fuerza Bruta",  120);
const chorroDeAgua = new Movimiento("Chorro de Agua",  40);

const arceus = new Pokemon('Arceus', 100, '_images/_pokemon/_back/ARCEUS.png');
const charizard = new Pokemon('Charizard', 100, '_images/_pokemon/_back/CHARIZARD.png');
const dragonite = new Pokemon('Dragonite', 100, '_images/_pokemon/_back/DRAGONITE.png');
const gyarados = new Pokemon('Gyarados', 100, '_images/_pokemon/_back/GYARADOS.png');
const magnemite = new Pokemon('Magnemite', 100, '_images/_pokemon/_back/MAGNEMITE.png');
const mewtwo = new Pokemon('Mewtwo', 100, '_images/_pokemon/_back/MEWTWO.png');
const raichu = new Pokemon('Raichu', 100, '_images/_pokemon/_back/RAICHU.png');

const absol = new Pokemon('Absol', 100, '_images/_pokemon/_front/ABSOL.png');
const blastoise = new Pokemon('Blastoise', 100, '_images/_pokemon/_front/BLASTOISE.png');
const jolteon = new Pokemon('Jolteon', 100, '_images/_pokemon/_front/JOLTEON.png');
const magmar = new Pokemon('Magmar', 100, '_images/_pokemon/_front/MAGMAR.png');
const pidgeot = new Pokemon('Pidgeot', 100, '_images/_pokemon/_front/PIDGEOT.png');
const torterra = new Pokemon('Torterra', 100, '_images/_pokemon/_front/TORTERRA.png');
const vaporeon = new Pokemon('Vaporeon', 100, '_images/_pokemon/_front/VAPOREON.png');


// Crear un arreglo con todos los Pokémon
const pokemonsPropios = [arceus, charizard, dragonite, gyarados, magnemite, mewtwo, raichu];
const pokemonsRivales = [absol, blastoise, jolteon, magmar, pidgeot, torterra, vaporeon];

// Función para seleccionar el Pokémon y mostrar sus atributos
function seleccionarPokemon(tipo, indice) {
    let pokemonSeleccionado;
    
    // Seleccionar el Pokémon dependiendo del tipo
    if (tipo === "propio") {
        pokemonSeleccionado = pokemonsPropios[indice];
    } else {
        pokemonSeleccionado = pokemonsRivales[indice];
    }
    
    const info = pokemonSeleccionado.obtenerInfo();
    console.log(info);  // Verificar que se obtienen los datos correctamente
    
    if (tipo === "propio") {
        document.querySelector(".player .name").textContent = info.nombre;
        document.getElementById("myHP").textContent = `HP: ${info.HP}`;
        document.querySelector(".player .pokemon").src = info.imagen;
    } else {
        document.querySelector(".opponent .name").textContent = info.nombre;
        document.getElementById("apHP").textContent = `HP: ${info.HP}`;
        document.querySelector(".opponent .pokemon").src = info.imagen;
    }
}

window.onload = function() {
    // Selecciona un Pokémon por defecto al cargar la página
    seleccionarPokemon("propio", 0); // Aquí "propio" y 0 son solo un ejemplo
    seleccionarPokemon("rival", 0); // Similar para el rival
};
