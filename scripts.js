// Variables para el control de la página
const elementosPorPagina = 40;

// Función para obtener 10 elementos
async function obtenerPokemon() {
    const pokemonArray = [];

    for (let i = 1; i <= elementosPorPagina; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const response = await fetch(url);
        const data = await response.json();
        pokemonArray.push(data);
    }

    return pokemonArray;
}

// Función para mostrar la lista de Pokémon
async function mostrarPokemon() {
    const pokemon = await obtenerPokemon();
    const contenedorGrid = document.getElementById("contenedorPokemon");

    // Limpiar para actualizar
    contenedorGrid.innerHTML = '';

    pokemon.forEach((p, index) => {
        const itemGrid = document.createElement("div");
        itemGrid.className = "itemGrid";

        const imagen = document.createElement("img");
        imagen.src = p.sprites.front_default;

        const nombre = document.createElement("p");
        nombre.textContent = `${index + 1}. ${p.name}`;

        itemGrid.appendChild(imagen);
        itemGrid.appendChild(nombre);
        contenedorGrid.appendChild(itemGrid);
    });
}

mostrarPokemon();