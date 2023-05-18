export const pokemonExtractId = (str) => {
  return str.split("pokemon/").pop().split("/").shift();
};
