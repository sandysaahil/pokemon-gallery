import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemons() {
   return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/?limit=151');

    // return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20');
  }
}
