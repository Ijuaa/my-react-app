import PokemonCard from "./components/PokemonCard.jsx"

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];


function App(){

  const selectedPokemon = pokemonList[0]
  return (
    <div>
      <PokemonCard pokemon = {selectedPokemon} />
    </div>
  )
}

export default App

