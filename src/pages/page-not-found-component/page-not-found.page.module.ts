import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PokemonCardListComponent } from '../../components/pokemon-card-list/pokemon-card-list.component';

import { PageNotFoundPage } from './page-not-found.page';

@NgModule({
	declarations: [
		PageNotFoundPage
	],
	imports: [
		BrowserModule,
		HttpModule
	],
	providers: [ ]
})
export class PageNotFoundPageModule { }
