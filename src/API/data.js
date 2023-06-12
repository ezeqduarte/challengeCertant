const pokemonData = [
  {
    id: 1,
    name: "Charizard",
    lvl: 50,
    evolutionId: 1,
    abilities: [
      {
        name: "Blaze",
        description: "Powers up Fire-type moves when the Pokémon's HP is low.",
      },
    ],
    type: ["Fire", "Flying"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
  },
  {
    id: 2,
    name: "Gyarados",
    lvl: 45,
    evolutionId: 2,
    abilities: [
      { name: "Intimidate", description: "Lowers the opponent's Attack stat." },
    ],
    type: ["Water", "Flying"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
  },
  {
    id: 3,
    name: "Alakazam",
    lvl: 40,
    evolutionId: 3,
    abilities: [
      {
        name: "Synchronize",
        description: "Passes on a burn, poison, or paralysis to the foe.",
      },
    ],
    type: ["Psychic"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
  },
  {
    id: 4,
    name: "Gengar",
    lvl: 45,
    evolutionId: 4,
    abilities: [
      {
        name: "Cursed Body",
        description: "May disable a move used on the Pokémon.",
      },
    ],
    type: ["Ghost", "Poison"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
  },
  {
    id: 5,
    name: "Dragonite",
    lvl: 55,
    evolutionId: 5,
    abilities: [
      {
        name: "Inner Focus",
        description: "The Pokémon is protected from flinching.",
      },
    ],
    type: ["Dragon", "Flying"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
  },
];

const usersPokemons = new Map([
  ["1", pokemonData],
  ["2", pokemonData],
]);

module.exports = usersPokemons;
