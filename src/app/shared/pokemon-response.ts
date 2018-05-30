/**
 * Response from pokemon service at https://pokeapi.co/api/v2/pokemon/?limit=151
 */
import {Pokemon} from './pokemon';

export class PokemonResponse {

  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
