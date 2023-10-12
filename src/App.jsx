import PokemonCard from "./components/PokemonCard.jsx"
import { useState } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


function App(){

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPrevious = () => {
    if (pokemonIndex > 0){
      setPokemonIndex(pokemonIndex - 1)
    }
  }

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <>

      <div>
        <PokemonCard pokemon = {pokemonList[pokemonIndex]} />
      </div>

      {pokemonIndex > 0 ? (
        <button onClick={handleClickPrevious}>Précédent</button>
      ) : null}

      {pokemonIndex < pokemonList.length -1 ? (
        <button onClick={handleClickNext}>Suivant</button>
      ) : null}

    </>
  )
}

export default App

