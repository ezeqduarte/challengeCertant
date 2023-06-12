const pokemonData = [
  {
    id: 0,
    name: "Squirtle",
    lvl: 5,
    evolutions: [
      {
        name: "Wartortle",
        type: "Water",
        lvl: 16,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
      },
      {
        name: "Blastoise",
        type: "Water",
        lvl: 36,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
      },
    ],
    abilities: [
      {
        name: "Torrent",
        description: "Powers up Water-type moves when the Pokémon's HP is low.",
      },
    ],
    type: ["Water"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id: 1,
    name: "Charmander",
    lvl: 5,
    evolutions: [
      {
        name: "Charmeleon",
        type: "Fire",
        lvl: 16,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      },
      {
        name: "Charizard",
        type: "Fire",
        lvl: 36,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      },
    ],
    abilities: [
      {
        name: "Blaze",
        description: "Powers up Fire-type moves when the Pokémon's HP is low.",
      },
    ],
    type: ["Fire", "Flying"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: 2,
    name: "Bulbasaur",
    lvl: 5,
    evolutions: [
      {
        name: "Ivysaur",
        type: "Grass",
        lvl: 16,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      },
      {
        name: "Venusaur",
        type: "Grass",
        lvl: 36,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      },
    ],
    abilities: [
      {
        name: "Overgrow",
        description: "Powers up Grass-type moves when the Pokémon's HP is low.",
      },
    ],
    type: ["Grass", "Poison"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: 4,
    name: "Pidgey",
    lvl: 3,
    evolutions: [
      {
        name: "Pidgeotto",
        type: ["Normal", "Flying"],
        lvl: 18,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
      },
      {
        name: "Pidgeot",
        type: ["Normal", "Flying"],
        lvl: 36,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
      },
    ],
    abilities: [
      {
        name: "Keen Eye",
        description: "Prevents the Pokémon from losing accuracy.",
      },
    ],
    type: ["Normal", "Flying"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
  },
  {
    id: 5,
    name: "Rattata",
    lvl: 3,
    evolutions: [
      {
        name: "Raticate",
        type: ["Normal"],
        lvl: 20,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
      },
    ],
    abilities: [
      {
        name: "Run Away",
        description: "Enables a sure getaway from wild Pokémon.",
      },
    ],
    type: ["Normal"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
  },
  {
    id: 6,
    name: "Spearow",
    lvl: 5,
    evolutions: [
      {
        name: "Fearow",
        type: ["Normal", "Flying"],
        lvl: 20,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
      },
    ],
    abilities: [
      {
        name: "Keen Eye",
        description: "Prevents the Pokémon from losing accuracy.",
      },
    ],
    type: ["Normal", "Flying"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
  },
  {
    id: 7,
    name: "Ekans",
    lvl: 6,
    evolutions: [
      {
        name: "Arbok",
        type: ["Poison"],
        lvl: 22,
        image:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
      },
    ],
    abilities: [
      { name: "Intimidate", description: "Lowers the opponent's Attack stat." },
    ],
    type: ["Poison"],
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
  },
];

const usersPokemons = new Map([
  ["1", pokemonData],
  ["2", pokemonData],
]);

module.exports = usersPokemons;
