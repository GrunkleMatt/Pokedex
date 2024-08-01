import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokedexCardComponent } from './pokedex-card/pokedex-card.component';
import { PokedexToolsBarComponent } from './pokedex-tools-bar/pokedex-tools-bar.component';
import { PokedexOrderButtonComponent } from './pokedex-tools-bar/pokedex-order-button/pokedex-order-button.component';
import { PokedexSearchComponent } from './pokedex-tools-bar/pokedex-search/pokedex-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PokedexListComponent,
    PokedexCardComponent,
    PokedexToolsBarComponent,
    PokedexOrderButtonComponent,
    PokedexSearchComponent
  ],
  imports: [CommonModule, RouterModule, InfiniteScrollModule, FormsModule,
    ReactiveFormsModule],
  exports: [PokedexListComponent, PokedexCardComponent],
})
export class PokedexUiModule {}
