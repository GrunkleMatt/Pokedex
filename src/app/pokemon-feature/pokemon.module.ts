import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonUiModule } from '../pokemon-ui/pokemon-ui.module';

@NgModule({
  declarations: [PokemonComponent],
  imports: [
    CommonModule,
    PokemonUiModule
  ],
  exports: [PokemonComponent]
})
export class PokemonFeatureModule { }
