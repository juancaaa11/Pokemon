class Pokemon {
    constructor(nombre, tipo, nivel, hp, ataque, defensa, velocidad, movimientos = [], imagenFrontal, imagenTrasera, icono) {
        this.nombre = nombre;               // Nombre del Pokémon
        this.tipo = tipo;                   // Tipo del Pokémon
        this.nivel = nivel;                 // Nivel del Pokémon
        this.hp = hp;                       // Puntos de vida máximos
        this.hpActual = hp;                 // Puntos de vida actuales
        this.ataque = ataque;               // Fuerza de ataque
        this.defensa = defensa;             // Resistencia del Pokémon
        this.velocidad = velocidad;         // Velocidad del Pokémon
        this.movimientos = movimientos;     // Array de movimientos
        this.imagenFrontal = imagenFrontal; // Imagen del Pokémon desde el frente
        this.imagenTrasera = imagenTrasera; // Imagen del Pokémon desde atrás
        this.icono = icono;                 // Icono del Pokémon
    }
}
