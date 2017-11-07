import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PokemonCardListComponent } from '../../components/pokemon-card-list/pokemon-card-list.component';

import { HomePage } from './home.page';

@NgModule({
	declarations: [
		HomePage,
		PokemonCardListComponent
	],
	imports: [
		BrowserModule,
		HttpModule
	],
	providers: [ ]
})
export class HomePageModule { }
