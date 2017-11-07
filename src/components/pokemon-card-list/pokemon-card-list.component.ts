import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { PokemonImage } from '../../config/Config';

@Component({
	selector: 'pokemon-card-list',
	templateUrl: './pokemon-card-list.component.html',
	styleUrls: ['./pokemon-card-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class PokemonCardListComponent implements OnInit {

	constructor() { }

	@Input() num: number;
	@Input() name: string;

	ngOnInit() {

	}

	getImagePokemon(): string {
		console.log(PokemonImage(this.num));
		return PokemonImage(this.num);
	}
}
