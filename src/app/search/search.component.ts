import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchString = '';
  private toFind = '';

  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  valueChange() {
    console.log('Inside SearchCOmponent event is ', this.toFind);
    this.searchString = this.toFind;
    this.change.emit(this.searchString);
  }
}
