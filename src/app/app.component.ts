import {Component, Input, OnInit} from '@angular/core';
import {Spinkit} from 'ng-http-loader';
import {PokemonService} from './gallery/pokemon.service';
import {Pokemon} from './shared/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public spinkit = Spinkit; // used by loading icon.
  private pokemonList: Pokemon[] = [];
  private filteredPokemonList: Pokemon[] = this.pokemonList;
  private searchString = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons()
      .subscribe(
        (response) => {
          response.results.forEach(x => {
            this.pokemonList.push(new Pokemon(x.url, x.name));
          });
        },
        (error) =>  console.log(error) // pokemon list is empty so nothing would be loaded on screen.
      );
  }

  /**
   * Filters the pokemon list based on the search string.
   */
  search() {
    this.filteredPokemonList = this.pokemonList.filter( it => {
      return it.name.toLowerCase().includes(this.searchString.toLowerCase());
    });
  }
}
