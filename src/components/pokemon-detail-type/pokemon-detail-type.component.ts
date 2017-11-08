import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

export enum PokemonTypes {
	NORMAL,
	FIGHTING,
	FLYING,
	POISON,
	GROUND,
	ROCK,
	BUG,
	GHOST,
	STEEL,
	FIRE,
	WATER,
	GRASS,
	ELECTRIC,
	PSYCHIC,
	ICE,
	DRAGON,
	DARK,
	FAIRY,
	UNKNOWN,
	SHADOW
}

@Component({
	selector: 'pokemon-detail-type',
	templateUrl: './pokemon-detail-type.component.html',
	styleUrls: ['./pokemon-detail-type.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class PokemonDetailTypeComponent implements OnInit {

	constructor() { }

	@Input() types: Array<{slot: number, name: string}>;

	ngOnInit() {

	}

}
