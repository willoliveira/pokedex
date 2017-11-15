import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PokemonCardListComponentModule } from '../../components/pokemon-card-list/pokemon-card-list.component.module';

import { HomePage } from './home.page';

import { FilterPipe } from '../../pipes/filter/filter.pipe';

@NgModule({
	declarations: [
		HomePage,

		FilterPipe
	],
	imports: [
		PokemonCardListComponentModule,

		FormsModule, BrowserModule, HttpModule
	],
	providers: [
		PokemonCardListComponentModule
	],
	entryComponents: [ ]
})
export class HomePageModule { }
