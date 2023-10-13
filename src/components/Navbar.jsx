function Navbar({PokemonName, handleClick}) {
    return (
        <button onClick={handleClick} key = {PokemonName.name}>
          {PokemonName}
        </button>
      );
    }

export default Navbar