import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import {PokemonService} from './gallery/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { PaginationComponent } from './shared/pagination/pagination.component';
import {PaginationService} from './shared/pagination/pagination.service';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    SearchComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule
  ],
  providers: [PokemonService, PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
