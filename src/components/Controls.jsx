import styles from "./Controls.module.css";

export default function Controls({
  pokemonId,
  setPokemonId,
  setPokemon,
  pokemonList
}) {
  const handleNextButton = () => {
    setPokemonId(Number(pokemonId) < 150 ? Number(pokemonId) + 1 : pokemonId);
    setPokemon(pokemonList[Number(pokemonId)].name);
  };

  const handlePrevButton = () => {
    setPokemonId(Number(pokemonId) !== 1 ? Number(pokemonId) - 1 : pokemonId);
    setPokemon(pokemonList[Number(pokemonId) - 2].name);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.controlButton}
        disabled={Number(pokemonId) === 1}
        onClick={handlePrevButton}
      >
        Prev
      </button>
      <button
        className={styles.controlButton}
        disabled={pokemonId === 150}
        onClick={handleNextButton}
      >
        Next
      </button>
    </div>
  );
}
