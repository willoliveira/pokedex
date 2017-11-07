import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HomePageModule } from '../pages/home/home.page.module';
import { PageNotFoundPageModule } from '../pages/page-not-found-component/page-not-found.page.module';
import { PokemonDetailsPageModule } from '../pages/pokemon-details/pokemon-details.page.module';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePage } from '../pages/home/home.page';
import { PageNotFoundPage } from '../pages/page-not-found-component/page-not-found.page';
import { PokemonDetailsPage } from '../pages/pokemon-details/pokemon-details.page';


import { PokemonService } from '../services/pokemon/pokemon.service';

const PokedexRoutes: Routes = [
	{ path: '',   redirectTo: '/pokemons', pathMatch: 'full' },
	{ path: 'pokemons', component: HomePage },
	{ path: 'pokemon/:id', component: PageNotFoundPage },
	{ path: '**', component: PokemonDetailsPage }
];

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(
			PokedexRoutes,
			{
				enableTracing: true
			}
		),

		HomePageModule, PageNotFoundPageModule, PokemonDetailsPageModule
	],
	providers: [
		PokemonService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
