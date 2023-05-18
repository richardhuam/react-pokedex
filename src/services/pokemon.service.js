import { POKE_API_BASE_URL } from "../config/base-url";

/**
 * Fetches first 150 Pokemon and returns an array of obejcts,
 * where each object represents a Pokemon.
 *
 * @returns {Array.<{
 *   name: string,
 *   url: string
 * }>}
 */
export async function getPokemonDescription({ pokemonId }) {
  const pokemon = await fetch(
    `${POKE_API_BASE_URL}/pokemon-species/${pokemonId}`
  ).then((res) => res.json());

  return pokemon.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ");
}

/**
 * @returns {string} Short description of Pokemon
 */
export async function getPokemonList() {
  const data = await fetch(
    `${POKE_API_BASE_URL}/pokemon/?offset=0&limit=150`
  ).then((res) => res.json());
  return data.results;
}

/**
 * Returns URL of a Pokemon sprite image
 */
export function getPokemonSpriteUrl({ pokemonId }) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`;
}

export const PokemonService = {
  getPokemonDescription,
  getPokemonList,
  getPokemonSpriteUrl
};
