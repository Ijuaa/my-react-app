import PokemonCard from "./components/PokemonCard.jsx"
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";

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
    setPokemonIndex(pokemonIndex - 1)
  }

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <>

      <div>
        <PokemonCard pokemon = {pokemonList[pokemonIndex]} />
        <Navbar
          pokemonIndex={pokemonIndex}
          handleClickPrevious={handleClickPrevious}
          handleClickNext={handleClickNext}
          pokemonList={pokemonList}
        />
      </div>

    </>
  )
}

export default App

