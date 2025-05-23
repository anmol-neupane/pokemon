const pokemonList = [
  { id: 1, name: "bulbasaur" },
  { id: 2, name: "ivysaur" },
  { id: 3, name: "venusaur" },
  { id: 4, name: "charmander" },
  { id: 5, name: "charmeleon" },
  { id: 6, name: "charizard" },
  { id: 7, name: "squirtle" },
  { id: 8, name: "wartortle" },
  { id: 9, name: "blastoise" },
  { id: 10, name: "caterpie" },
  { id: 11, name: "metapod" },
  { id: 12, name: "butterfree" },
  { id: 13, name: "weedle" },
  { id: 14, name: "kakuna" },
  { id: 15, name: "beedrill" },
  { id: 16, name: "pidgey" },
  { id: 17, name: "pidgeotto" },
  { id: 18, name: "pidgeot" },
  { id: 19, name: "rattata" },
  { id: 20, name: "raticate" },
  { id: 21, name: "spearow" },
  { id: 22, name: "fearow" },
  { id: 23, name: "ekans" },
  { id: 24, name: "arbok" },
  { id: 25, name: "pikachu" },
  { id: 26, name: "raichu" },
  { id: 27, name: "sandshrew" },
  { id: 28, name: "sandslash" },
  { id: 29, name: "nidoran♀" },
  { id: 30, name: "nidorina" },
  { id: 31, name: "nidoqueen" },
  { id: 32, name: "nidoran♂" },
  { id: 33, name: "nidorino" },
  { id: 34, name: "nidoking" },
  { id: 35, name: "clefairy" },
  { id: 36, name: "clefable" },
  { id: 37, name: "vulpix" },
  { id: 38, name: "ninetales" },
  { id: 39, name: "jigglypuff" },
  { id: 40, name: "wigglytuff" },
  { id: 41, name: "zubat" },
  { id: 42, name: "golbat" },
  { id: 43, name: "oddish" },
  { id: 44, name: "gloom" },
  { id: 45, name: "vileplume" },
  { id: 46, name: "paras" },
  { id: 47, name: "parasect" },
  { id: 48, name: "venonat" },
  { id: 49, name: "venomoth" },
  { id: 50, name: "diglett" },
  { id: 51, name: "dugtrio" },
  { id: 52, name: "meowth" },
  { id: 53, name: "persian" },
  { id: 54, name: "psyduck" },
];

const grid = document.getElementById("pokemonGrid");
const searchInput = document.getElementById("searchInput");

// Function to create Pokemon cards
function displayPokemon(pokemonArray) {
  grid.innerHTML = ""; // Clear grid first

  pokemonArray.forEach((pokemon) => {
    const card = document.createElement("div");
    card.className = "pokemon-card";

    card.innerHTML = `
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" class="pokemon-image" alt="${pokemon.name}">
          <h2 class="pokemon-name">${pokemon.name}</h2>
        `;

    grid.appendChild(card);
  });
}

// Show all Pokémon initially
displayPokemon(pokemonList);

// Search functionality
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );
  displayPokemon(filteredPokemon);
});
