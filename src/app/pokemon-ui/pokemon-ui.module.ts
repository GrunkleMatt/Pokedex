import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [PokemonDetailComponent],
  imports: [
    CommonModule,
  ],
  exports: [PokemonDetailComponent]
})
export class PokemonUiModule { }
