export const PokemonApiUrl = "https://pokeapi.co/api/v2/";

export const NumPokemons = 801;

// export const PokemonImage = (PokemonId: number): string => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PokemonId}.png`;
export const PokemonImage = (PokemonId: number): string => {
	var num = (PokemonId + "").length;
	var numPokemon = PokemonId + "";
	if (num === 1) {
		numPokemon = "00" + PokemonId;
	} else if (num === 2){
		numPokemon = "0" + PokemonId;
	}
	return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numPokemon}.png`;
};
