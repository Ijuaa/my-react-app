function Navbar({PokemonName, handleClick}) {
 
 const handlePokemonClick = () => {
    if (PokemonName === "pikachu"){
      alert('pika pikachu !!!');
    }
    handleClick()
  }
  
    return (
        <button onClick={handlePokemonClick} key = {PokemonName.name}>
          {PokemonName}
        </button>
      );
    }

export default Navbar