import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  private searchText: string;

  constructor() { }

  ngOnInit() { }

  valueChange($event) {
    this.searchText = $event;
    this.change.emit(this.searchText);
  }

}
