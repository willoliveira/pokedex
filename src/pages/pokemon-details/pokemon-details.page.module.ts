import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PokemonDetailsPage } from './pokemon-details.page';

@NgModule({
	declarations: [
		PokemonDetailsPage
	],
	imports: [
		BrowserModule,
		HttpModule
	],
	providers: [ ]
})
export class PokemonDetailsPageModule { }
