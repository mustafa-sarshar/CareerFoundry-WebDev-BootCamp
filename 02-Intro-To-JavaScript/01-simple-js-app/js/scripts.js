let pokemonWebAddress = "https://pokedex.org/"  // Example (ID=1): https://pokedex.org/#/pokemon/1

let lstPokemon = [];
lstPokemon.push(
    {
        pokemonID: 1,
        pokemonName: "Bulbasaur",
        pokemonHeight: 0.7,
        pokemonWeight: 6.9,
        pokemonTypes: ["Grass", "Poison"],
        pokemonAbilities: ["Chlorophyll", "Overgrow"]
    }
)
lstPokemon.push(
    {
        pokemonID: 10,
        pokemonName: "Caterpie",
        pokemonHeight: 0.3,
        pokemonWeight: 2.9,
        pokemonTypes: ["Bug"],
        pokemonAbilities: ["Shield-dust", "Run-away"]
    }
)
lstPokemon.push(
    {
        pokemonID: 19,
        pokemonName: "Rattata",
        pokemonHeight: 0.3,
        pokemonWeight: 3.5,
        pokemonTypes: ["Normal"],
        pokemonAbilities: ["Run-away", "Hustle", "Guts"]
    }
)
lstPokemon.push(
    {
        pokemonID: 28,
        pokemonName: "Sandslash",
        pokemonHeight: 1,
        pokemonWeight: 29.5,
        pokemonTypes: ["Ground"],
        pokemonAbilities: ["Sand-veil", "Sand-rush"]
    }
)
lstPokemon.push(
    {
        pokemonID: 37,
        pokemonName: "Vulpix",
        pokemonHeight: 0.6,
        pokemonWeight: 9.9,
        pokemonTypes: ["Fire"],
        pokemonAbilities: ["Flash-fire", "Drought"]
    }
)
lstPokemon.push(
    {
        pokemonID: 46,
        pokemonName: "Paras",
        pokemonHeight: 0.3,
        pokemonWeight: 5.4,
        pokemonTypes: ["Grass", "Bug"],
        pokemonAbilities: ["Damp", "Effect-spore", "Dry-skin"]
    }
)
lstPokemon.push(
    {
        pokemonID: 55,
        pokemonName: "Golduck",
        pokemonHeight: 1.7,
        pokemonWeight: 76.6,
        pokemonTypes: ["Water"],
        pokemonAbilities: ["Damp", "Cloud-nine", "Swift-swim"]
    }
)
lstPokemon.push(
    {
        pokemonID: 64,
        pokemonName: "Kadabra",
        pokemonHeight: 1.3,
        pokemonWeight: 56.5,
        pokemonTypes: ["Psychic"],
        pokemonAbilities: ["Damp", "Cloud-nine", "Swift-swim"]
    }
)

function printPokemon(inputListPokemon) {
    inputListPokemon.forEach(pokemon => {
        document.write(
            `<i>Name:</i> <b>${pokemon.pokemonName}</b>, <i>Height:</i> <b>${pokemon.pokemonHeight}</b> m, <i>Weight:</i> <b>${pokemon.pokemonWeight}</b> kg, <i>Types:</i> <b>${pokemon.pokemonTypes}</b>, <i>Abilities:</i> <b>${pokemon.pokemonAbilities}</b> <sub><a href="https://pokedex.org/#/pokemon/${pokemon.pokemonID}" target="_blank" rel="noopener noreferrer">more info</a></sub><br>`
        );
    });
}

document.onload(
    printPokemon(lstPokemon)
)
    