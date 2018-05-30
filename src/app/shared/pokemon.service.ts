import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PokemonResponse} from './pokemon-response';
import {Constants} from './constants';

@Injectable()
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemons() {
   return this.httpClient.get<PokemonResponse>(Constants.POKEMON_SERVICE_URL);
  }
}
