// Movimientos
const placaje = new Movimiento("Placaje", "normal", 40);
const golpeCuerpo = new Movimiento("Golpe Cuerpo", "normal", 80);
const lanzallamas = new Movimiento("Lanzallamas", "fuego", 90);
const hidrobomba = new Movimiento("Hidrobomba", "agua", 110);
const trueno = new Movimiento("Trueno", "eléctrico", 90);
const hojaAfilada = new Movimiento("Hoja Afilada", "planta", 55);
const psicoCorte = new Movimiento("Psico-Corte", "psíquico", 70);
const giroFuego = new Movimiento("Giro Fuego", "fuego", 35);
const rayo = new Movimiento("Rayo", "eléctrico", 90);
const golpeAereo = new Movimiento("Golpe Aéreo", "volador", 60);
const hiperRayo = new Movimiento("Hiper Rayo", "normal", 150);
const alaDeAcero = new Movimiento("Ala de Acero", "acero", 70);
const terremoto = new Movimiento("Terremoto", "tierra", 100);
const fuerzaBruta = new Movimiento("Fuerza Bruta", "lucha", 120);
const chorroDeAgua = new Movimiento("Chorro de Agua", "agua", 40);

// Pokémon con imágenes y movimientos
const absol = new Pokemon(
    "Absol", "siniestro", 50, 65, 130, 60, 75, 
    [golpeCuerpo, hiperRayo],
    "../_images/_pokemon/_front/absol.png", null,
    "../_images/_ico/_pokemon/absol.png"
);
const arceus = new Pokemon(
    "Arceus", "normal", 100, 120, 120, 120, 120, 
    [placaje, fuerzaBruta],
    null, "../_images/_pokemon/_back/arceus.png",
    "../_images/_ico/_pokemon/arceus.png"
);
const blastoise = new Pokemon(
    "Blastoise", "agua", 75, 79, 83, 100, 78, 
    [hidrobomba, chorroDeAgua],
    "../_images/_pokemon/_front/blastoise.png", null,
    "../_images/_ico/_pokemon/blastoise.png"
);
const charizard = new Pokemon(
    "Charizard", "fuego", 78, 78, 84, 78, 100, 
    [lanzallamas, giroFuego],
    null, "../_images/_pokemon/_back/charizard.png",
    "../_images/_ico/_pokemon/charizard.png"
);
const dragonite = new Pokemon(
    "Dragonite", "dragón", 91, 134, 95, 100, 80, 
    [hiperRayo, golpeAereo],
    null, "../_images/_pokemon/_back/dragonite.png",
    "../_images/_ico/_pokemon/dragonite.png"
);
const gyarados = new Pokemon(
    "Gyarados", "agua", 95, 125, 79, 100, 81, 
    [hidrobomba, placaje],
    null, "../_images/_pokemon/_back/gyarados.png",
    ""
);
const jolteon = new Pokemon(
    "Jolteon", "eléctrico", 65, 65, 110, 60, 130, 
    [trueno, rayo],
    "../_images/_pokemon/_front/jolteon.png", null,
    "../_images/_ico/_pokemon/jolteon.png"
);
const magmar = new Pokemon(
    "Magmar", "fuego", 65, 95, 57, 85, 93, 
    [lanzallamas, golpeCuerpo],
    "../_images/_pokemon/_front/magmar.png", null,
    "../_images/_ico/_pokemon/magmar.png"
);
const magnemite = new Pokemon(
    "Magnemite", "eléctrico", 25, 35, 70, 95, 45, 
    [rayo, placaje],
    null, "../_images/_pokemon/_back/magnemite.png",
    "../_images/_ico/_pokemon/magnemite.png"
);
const mewtwo = new Pokemon(
    "Mewtwo", "psíquico", 106, 110, 90, 90, 130, 
    [psicoCorte, hiperRayo],
    null, "../_images/_pokemon/_back/mewtwo.png",
    "../_images/_ico/_pokemon/mewtwo.png"
);
const pidgeot = new Pokemon(
    "Pidgeot", "volador", 83, 80, 75, 70, 101, 
    [golpeAereo, alaDeAcero],
    "../_images/_pokemon/_front/pidgeot.png", null,
    "../_images/_ico/_pokemon/pidgeot.png"
);
const raichu = new Pokemon(
    "Raichu", "eléctrico", 60, 90, 55, 50, 110, 
    [trueno, rayo],
    null, "../_images/_pokemon/_back/raichu.png",
    "../_images/_ico/_pokemon/raichu.png"
);
const torterra = new Pokemon(
    "Torterra", "planta", 95, 109, 105, 85, 56, 
    [terremoto, hojaAfilada],
    "../_images/_pokemon/_front/torterra.png", null,
    "../_images/_ico/_pokemon/torterra.png"
);
const vaporeon = new Pokemon(
    "Vaporeon", "agua", 130, 65, 60, 95, 65, 
    [chorroDeAgua, hidrobomba],
    "../_images/_pokemon/_front/vaporeon.png", null,
    "../_images/_ico/_pokemon/vaporeon.png"
);

