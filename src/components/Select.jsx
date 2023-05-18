import styles from "./Select.module.css";
import { pokemonExtractId } from "../utils";

export default function Select({ pokemonId, onChange, pokemonList }) {
  return (
    <select className={styles.container} value={pokemonId} onChange={onChange}>
      {pokemonList.map((item) => {
        return (
          <option key={item.name} value={pokemonExtractId(item.url)}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
}
