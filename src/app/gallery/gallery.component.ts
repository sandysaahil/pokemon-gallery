import { Component, OnInit } from '@angular/core';
import {PokemonService} from './pokemon.service';
import {PaginationService} from '../shared/pagination/pagination.service';
import {PokemonCard} from './pokemon-card.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  private pokemonCard: any[] = [];
  private pokemonList: PokemonCard[] = [];

  private pager: any = {};
  private pagedItems: any[];

  constructor(private pokemonService: PokemonService, private paginationService: PaginationService) {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons()
      .subscribe(
        (response) => {
          this.pokemonCard = response.results;
          this.pokemonCard.forEach(x=>{
           this.pokemonList.push(new PokemonCard(x.url, x.name));
          });
          this.setPage(1);
          }, (error) =>  console.log(error)
        );
    }

  trackByFn(index, item) {
    return item.name;
  }

  ngOnInit() {
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.paginationService.getPager(this.pokemonList.length, page);

    console.log('this.pager ', this.pager);

    // get current page of items
    this.pagedItems = this.pokemonList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log('this.pagedItems ', this.pagedItems);
  }

}
