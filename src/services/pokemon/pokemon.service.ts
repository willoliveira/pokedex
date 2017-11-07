import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PokemonApiUrl } from '../../config/Config';

@Injectable()
export class PokemonService {

	pokemons: Array<any> = [];

	constructor(private http: Http) { }

	getPokemons(url?: string): Observable<any> {
		return this.http
			.get(url || `${PokemonApiUrl}pokemon`)
			.map((response: Response) => response.json())
			.catch((error: any) => Observable.throw(error.json().error || 'Internal server error'));
	}


	// getAllPokemons(params: any): Observable<any> {
	// 	this
	// 		.getPokemons(params)
	// 		.map((response: Response) => response.json())
	// 		.subscribe((response: Response) => {

	// 		});
	// 	return this.http.get(`${PokemonApiUrl}pokemon`);
	// }
}
