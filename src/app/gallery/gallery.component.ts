import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PaginationService} from '../shared/pagination.service';
import {Pokemon} from '../shared/pokemon';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public _data = new BehaviorSubject<Pokemon[]>([]);
  public pokemons: Pokemon[];

  @Input() private searchText: string;

  @Input()
  set pokemonList(value) {
    this._data.next(value);
  }

  get pokemonList() {
    return this._data.getValue();
  }
  public pager: any = {};
  public pagedItems: Pokemon[];


  constructor(private paginationService: PaginationService) {
  }

  trackByFn(index, item) {
    return item.name;
  }

  ngOnInit() {
    this._data
      .subscribe(x => {
        this.pokemons = x;
        this.setPage(1);
      });
  }

  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
          return;
        }

        if (this.pokemons) {
          this.pager = this.paginationService.getPager(this.pokemons.length, page);
          this.pagedItems = this.pokemons.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
  }
}
