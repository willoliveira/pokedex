import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PokemonCardListComponentModule } from '../../components/pokemon-card-list/pokemon-card-list.component.module';

import { HomePage } from './home.page';

@NgModule({
	declarations: [
		HomePage
	],
	imports: [
		PokemonCardListComponentModule,

		BrowserModule,
		HttpModule
	],
	providers: [
		PokemonCardListComponentModule
	],
	entryComponents: [ ]
})
export class HomePageModule { }
