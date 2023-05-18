import styles from "./Card.module.css";

export default function Card({
  pokemonId,
  pokemonPic,
  pokemonDescription,
  pokemon
}) {
  return (
    <div className={styles.card}>
      <h2>{pokemon}</h2>
      <img src={pokemonPic} alt={`${pokemonId}`} />
      <p>{pokemonDescription}</p>
    </div>
  );
}
