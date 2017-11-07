import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PokemonApiUrl } from '../../config/Config';
import { PokemonService } from '../../services/pokemon/pokemon.service';

@Component({
	selector: 'home-page',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
  	encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {

	pagination: { page: number, limit: number } = {
		page: 0,
		limit: 80
	};

	pokemonNextPage: string;
	pokemons: Array<{
		num: number,
		name: string,
		url: string,
		details?: any
	}> = [];

	pokemonListCount: number = 0;

	constructor(private pokemonService: PokemonService) { }

	ngOnInit() {
		this.pokemonListCount = this.getItem("count") || 0;
		this.pokemons = this.getItem("pokemons") || [ ];

		if (this.pokemonListCount) {
			this.getPokemons(`${PokemonApiUrl}pokemon?offset=${this.pokemonListCount}`);
		} else {
			this.getPokemons(`${PokemonApiUrl}pokemon`);
		}
	}

	getPokemons(url?: string): Subscription {
		return this.pokemonService
			.getPokemons(url)
			.subscribe(response => {
				if (response && response.results && response.results.length) {
					this.pokemonListCount += response.results.length;
					for (let cont = 0, len = response.results.length; cont < len; cont++) {
						let result = response.results[cont];
						let urlSplit = result.url.split(/[\/ ]+/);
						let numPokemon = urlSplit[urlSplit.length - 1] || urlSplit[urlSplit.length - 2]

						let pokemonExist = this.pokemons.find(pokemon => pokemon.num === numPokemon);

						if (!pokemonExist) {
							this.pokemons.push({
								num: +numPokemon,
								name: result.name,
								url: result.url
							});
						}
					}

					this.setItem("pokemons", this.pokemons);
					this.setItem("count", this.pokemonListCount);

					if (response.next) {
						this.getPokemons(response.next);
					} else {
						console.log(this.pokemons);
					}
				} else {
					console.log(this.pokemons);
				}
			})
	}

	getItem(key: string) {
		let pokemonsStorage: any = localStorage.getItem("pokedex");
		if (pokemonsStorage) {
			pokemonsStorage = JSON.parse(pokemonsStorage);
			if (pokemonsStorage[key]) {
				return pokemonsStorage[key];
			}
			return undefined
		}
		return undefined;
	}

	setItem(key: string, val: any) {
		let pokemonsStorage: any = localStorage.getItem("pokedex");

		if (pokemonsStorage) {
			pokemonsStorage = JSON.parse(pokemonsStorage);

			if (pokemonsStorage[key]) {
				if (typeof pokemonsStorage[key] === 'object') {
					pokemonsStorage[key] = Object.assign(pokemonsStorage[key], val);
				} else {
					pokemonsStorage[key] = val;
				}
			} else {
				pokemonsStorage[key] = val;
			}
		} else {
			pokemonsStorage = {
				[key]: val
			}
		}

		localStorage.setItem("pokedex", JSON.stringify(pokemonsStorage));
	}
}
