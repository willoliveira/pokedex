import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PokemonCardListComponent } from './pokemon-card-list.component';
import { PokemonDetailTypeComponent } from '../../components/pokemon-detail-type/pokemon-detail-type.component';

@NgModule({
	declarations: [
		PokemonCardListComponent,
		PokemonDetailTypeComponent
	],
	exports: [
		PokemonCardListComponent
	],
	imports: [
		BrowserModule
	],
	providers: [ ]

})
export class PokemonCardListComponentModule { }
