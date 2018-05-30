import {environment} from '../../environments/environment';

export class Constants {
  public static POKEMON_SERVICE_URL: string = environment.pokemonServiceUrl + environment.limit;
}
