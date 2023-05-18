import { useEffect, useState } from "react";
import Card from "./components/Card";
import Controls from "./components/Controls";
import Select from "./components/Select";
import Wrapper from "./components/Wrapper";
import { PokemonService } from "./services/pokemon.service";
import "./styles.css";

export default function App() {
  const [pokemonDescription, setPokemonDescription] = useState("");
  const [pokemonPic, setPokemonPic] = useState(1);

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState("");

  // get pokemon list
  async function getPokemonList() {
    try {
      const result = await PokemonService.getPokemonList();
      setPokemonList(result);
      setPokemon(result[0].name);
    } catch (error) {}
  }

  function handleChange(e) {
    setPokemonId(e.target.value);
    setPokemon(pokemonList[Number(e.target.value) - 1].name);
  }

  useEffect(() => {
    getPokemonList();
  }, []);

  // get pokemon description
  async function getPokemonDescription() {
    try {
      const result = await PokemonService.getPokemonDescription({ pokemonId });
      setPokemonDescription(result);
    } catch (error) {}
  }

  useEffect(() => {
    getPokemonDescription();
  }, [pokemonId]);

  // get pokemon sprite image
  async function getPokemonSpriteUrl() {
    try {
      const result = await PokemonService.getPokemonSpriteUrl({ pokemonId });
      setPokemonPic(result);
    } catch (error) {}
  }

  useEffect(() => {
    getPokemonSpriteUrl();
  }, [pokemonId]);

  return (
    <div className="App">
      <Wrapper>
        <h1>Pokemon App</h1>
        <Select
          onChange={handleChange}
          pokemonList={pokemonList}
          pokemonId={pokemonId}
        />
        <Card
          pokemon={pokemon}
          pokemonId={pokemonId}
          pokemonDescription={pokemonDescription}
          pokemonPic={pokemonPic}
        />
        <Controls
          pokemonId={pokemonId}
          setPokemonId={setPokemonId}
          setPokemon={setPokemon}
          pokemonList={pokemonList}
        />
      </Wrapper>
    </div>
  );
}
