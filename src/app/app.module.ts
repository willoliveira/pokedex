import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from '../components/home/home.component';
import { PageNotFoundComponentComponent } from '../components/page-not-found-component/page-not-found-component.component';
import { PokemonDetailsComponent } from '../components/pokemon-details/pokemon-details.component';

import { PokemonService } from '../services/pokemon.service';

const PokedexRoutes: Routes = [
	{ path: '',   redirectTo: '/pokemons', pathMatch: 'full' },
	{ path: 'pokemons', component: HomeComponent },
	{ path: 'pokemon/:id', component: PokemonDetailsComponent },
	{ path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
	declarations: [
		AppComponent,

		HomeComponent, PokemonDetailsComponent,
		PageNotFoundComponentComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			PokedexRoutes,
			{
				enableTracing: true
			}
		)
	],
	providers: [
		PokemonService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
