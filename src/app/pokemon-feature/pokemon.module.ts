import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PippoComponent } from './pippo/pippo.component';

@NgModule({
  declarations: [PokemonComponent, PokemonDetailComponent, PippoComponent],
  imports: [
    CommonModule
  ],
  exports: [PokemonComponent, PokemonDetailComponent]
})
export class PokemonFeatureModule { }
